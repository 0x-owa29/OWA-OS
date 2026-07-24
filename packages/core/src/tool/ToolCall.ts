export interface ToolCall<TArgs = unknown> {
  /**
   * Unique tool call ID.
   *
   * Example:
   * call_abc123
   */
  id: string;

  /**
   * Tool name.
   *
   * Example:
   * weather
   * calculator
   */
  name: string;

  /**
   * Parsed tool arguments.
   */
  arguments: TArgs;
}