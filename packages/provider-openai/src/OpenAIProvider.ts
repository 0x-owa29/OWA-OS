import OpenAI from "openai";

import type {
  Message,
  Provider,
  ProviderResponse,
  Tool,
} from "@owa/core";

import type {
  ChatCompletionChunk,
  ChatCompletionMessageParam,
} from "openai/resources/chat/completions";

export interface OpenAIProviderOptions {
  apiKey: string;
  model: string;
}

export class OpenAIProvider implements Provider {
  private readonly client: OpenAI;

  constructor(
    private readonly options: OpenAIProviderOptions,
  ) {
    this.client = new OpenAI({
      apiKey: options.apiKey,
    });
  }

  private mapMessage(
    message: Message,
  ): ChatCompletionMessageParam | null {
    switch (message.role) {
      case "system":
        return {
          role: "system",
          content: message.content,
        };

      case "user":
        return {
          role: "user",
          content: message.content,
        };

      case "assistant":
        return {
          role: "assistant",
          content: message.content,
        };

      case "tool":
        // Tool messages akan didukung pada sprint berikutnya.
        return null;

      default:
        return null;
    }
  }

  async generate(
    messages: Message[],
    _tools?: Tool[],
  ): Promise<ProviderResponse> {
    const completion =
      await this.client.chat.completions.create({
        model: this.options.model,
        messages: messages
          .map((message) => this.mapMessage(message))
          .filter(
            (
              message,
            ): message is ChatCompletionMessageParam =>
              message !== null,
          ),
      });

    return {
      content:
        completion.choices[0]?.message.content ?? "",
      finishReason:
        completion.choices[0]?.finish_reason === "length"
          ? "length"
          : "stop",
    };
  }

  async *stream(
    messages: Message[],
    _tools?: Tool[],
  ): AsyncIterable<string> {
    const stream =
      await this.client.chat.completions.create({
        model: this.options.model,
        stream: true,
        messages: messages
          .map((message) => this.mapMessage(message))
          .filter(
            (
              message,
            ): message is ChatCompletionMessageParam =>
              message !== null,
          ),
      });

    for await (const chunk of stream as AsyncIterable<ChatCompletionChunk>) {
      const content =
        chunk.choices[0]?.delta?.content;

      if (content) {
        yield content;
      }
    }
  }
}