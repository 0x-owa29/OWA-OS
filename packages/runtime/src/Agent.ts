import {
  Conversation,
  type Provider,
  type Memory,
  type Plugin,
  type Tool,
  type Message,
} from "@owa/core";

import type { Character } from "./character/index.js";
import { EventEmitter } from "./events/EventEmitter.js";
import { ToolRegistry } from "./tools/ToolRegistry.js";

export interface AgentOptions {
  character: Character;
  provider: Provider;
  memory?: Memory;
  plugins?: Plugin[];
  tools?: Tool[];
}

export class Agent {
  private readonly conversation = new Conversation();

  private readonly events = new EventEmitter();

  private readonly toolRegistry = new ToolRegistry();

  constructor(public readonly options: AgentOptions) {
    if (options.tools) {
      for (const tool of options.tools) {
        this.toolRegistry.register(tool);
      }
    }
  }

  on = this.events.on.bind(this.events);

  async init(): Promise<void> {
    if (!this.options.memory) {
      return;
    }

    const history = await this.options.memory.load();

    for (const message of history) {
      this.conversation.add(message);
    }
  }

  private buildMessages(userMessage: string): Message[] {
    this.conversation.add({
      role: "user",
      content: userMessage,
    });

    this.events.emit("message", {
      role: "user",
      content: userMessage,
    });

    const messages: Message[] = [];

    const systemPrompt = this.buildSystemPrompt();

    if (systemPrompt.trim()) {
      messages.push({
        role: "system",
        content: systemPrompt,
      });
    }

    messages.push(...this.conversation.messages());

    return messages;
  }

  private async finalizeAssistantMessage(
    content: string,
  ): Promise<void> {
    const assistantMessage = {
      role: "assistant" as const,
      content,
    };

    this.conversation.add(assistantMessage);

    this.events.emit("response", assistantMessage);

    if (this.options.memory) {
      await this.options.memory.save(
        this.conversation.messages(),
      );
    }
  }

  private buildSystemPrompt(): string {
    const c = this.options.character;

    const sections: string[] = [];

    sections.push(`You are ${c.name}.`);

    sections.push(`
Default Language:
${c.language}

Always respond in ${c.language} unless the user explicitly requests another language.

Do not automatically switch languages just because the user's message is written in another language.
`.trim());

    if (c.description) {
      sections.push(`Description:\n${c.description}`);
    }

    if (c.personality) {
      sections.push(`Personality:\n${c.personality}`);
    }

    if (c.greeting) {
      sections.push(`Greeting:\n${c.greeting}`);
    }

    if (c.lore.length) {
      sections.push(
        `Lore:\n${c.lore.map((x) => `- ${x}`).join("\n")}`,
      );
    }

    if (c.topics.length) {
      sections.push(
        `Topics:\n${c.topics.map((x) => `- ${x}`).join("\n")}`,
      );
    }

    if (c.adjectives.length) {
      sections.push(
        `Adjectives:\n${c.adjectives
          .map((x) => `- ${x}`)
          .join("\n")}`,
      );
    }

    if (
      c.style.chat?.length ||
      c.style.post?.length ||
      c.style.reply?.length
    ) {
      const style: string[] = [];

      if (c.style.chat?.length) {
        style.push(
          `Chat:\n${c.style.chat
            .map((x) => `- ${x}`)
            .join("\n")}`,
        );
      }

      if (c.style.post?.length) {
        style.push(
          `Post:\n${c.style.post
            .map((x) => `- ${x}`)
            .join("\n")}`,
        );
      }

      if (c.style.reply?.length) {
        style.push(
          `Reply:\n${c.style.reply
            .map((x) => `- ${x}`)
            .join("\n")}`,
        );
      }

      sections.push(`Style:\n${style.join("\n\n")}`);
    }

    if (c.examples.length) {
      const examples = c.examples
        .map(
          (example) =>
            `User: ${example.input}\nAssistant: ${example.output}`,
        )
        .join("\n\n");

      sections.push(`Examples:\n${examples}`);
    }

    if (c.systemPrompt) {
      sections.push(c.systemPrompt);
    }

    return sections.join("\n\n");
  }

  async chat(message: string): Promise<string> {
  try {
    const messages = this.buildMessages(message);

    const response =
      await this.options.provider.generate(
        messages,
        this.toolRegistry.all(),
      );

    await this.finalizeAssistantMessage(
      response.content,
    );

    return response.content;
  } catch (error) {
    this.events.emit("error", error as Error);
    throw error;
  }
}

  async *stream(
  message: string,
): AsyncIterable<string> {
  try {
    const messages = this.buildMessages(message);

    let reply = "";

    for await (const chunk of this.options.provider.stream(
      messages,
      this.toolRegistry.all(),
    )) {
      reply += chunk;

      this.events.emit("chunk", chunk);

      yield chunk;
    }

    await this.finalizeAssistantMessage(reply);
  } catch (error) {
    this.events.emit("error", error as Error);
    throw error;
  }
}

  getConversation(): Conversation {
    return this.conversation;
  }

  getTools(): Tool[] {
    return this.toolRegistry.all();
  }
}