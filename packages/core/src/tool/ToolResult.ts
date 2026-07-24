export interface ToolResult<TResult = unknown> {
  /**
   * The ToolCall ID this result belongs to.
   */
  toolCallId: string;

  /**
   * Tool name.
   */
  name: string;

  /**
   * Tool execution result.
   */
  result: TResult;
}