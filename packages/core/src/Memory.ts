import type { Message } from "./message/index.js";

export interface Memory {
  load(): Promise<Message[]>;

  save(messages: readonly Message[]): Promise<void>;

  clear(): Promise<void>;
}