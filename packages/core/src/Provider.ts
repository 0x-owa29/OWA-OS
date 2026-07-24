import type { Message } from "./message/index.js";
import type { Tool } from "./tool/index.js";
import type { ProviderResponse } from "./provider/index.js";

export interface Provider {
  /**
   * Generate a complete response.
   */
  generate(
    messages: Message[],
    tools?: Tool[],
  ): Promise<ProviderResponse>;

  /**
   * Stream a response.
   */
  stream(
    messages: Message[],
    tools?: Tool[],
  ): AsyncIterable<string>;
}