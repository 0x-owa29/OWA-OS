import type { Message } from "../message/index.js";

export class Conversation {
  private readonly history: Message[] = [];

  add(message: Message): void {
    this.history.push(message);
  }

  messages(): readonly Message[] {
    return this.history;
  }

  clear(): void {
    this.history.length = 0;
  }

  last(): Message | undefined {
    return this.history.at(-1);
  }

  size(): number {
    return this.history.length;
  }
}