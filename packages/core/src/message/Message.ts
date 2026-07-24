import type { ToolCall } from "../tool/index.js";

export type MessageRole =
  | "system"
  | "user"
  | "assistant"
  | "tool";

export interface Message {
  /**
   * Message role.
   */
  role: MessageRole;

  /**
   * Natural language content.
   */
  content: string;

  /**
   * Tool calls requested by the assistant.
   *
   * Only valid when role === "assistant".
   */
  toolCalls?: ToolCall[];
}