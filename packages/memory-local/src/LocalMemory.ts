import {
  type Memory,
  type Message,
} from "@owa/core";

export class LocalMemory implements Memory {
  private history: Message[] = [];

  async load(): Promise<Message[]> {
    return [...this.history];
  }

  async save(messages: readonly Message[]): Promise<void> {
    this.history = [...messages];
  }

  async clear(): Promise<void> {
    this.history = [];
  }
}