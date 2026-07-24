import type { Message } from "../message/index.js";

export interface EventMap {
  message: Message;

  response: Message;

  /**
   * Fired whenever the provider streams a new text chunk.
   */
  chunk: string;

  error: Error;
}