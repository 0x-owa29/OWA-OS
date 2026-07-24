import type { ToolCall } from "../tool/index.js";

export interface ProviderResponse {
  /**
   * Assistant response text.
   */
  content: string;

  /**
   * Tool calls requested by the model.
   */
  toolCalls?: ToolCall[];

  /**
   * Finish reason.
   */
  finishReason?: "stop" | "tool_calls" | "length";
}