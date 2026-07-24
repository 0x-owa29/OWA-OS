import type {
  ToolCall,
  ToolResult,
} from "@owa/core";

import { ToolRegistry } from "./ToolRegistry.js";

export class ToolExecutor {
  constructor(
    private readonly registry: ToolRegistry,
  ) {}

  async execute<TArgs = unknown, TResult = unknown>(
    call: ToolCall<TArgs>,
  ): Promise<ToolResult<TResult>> {
    const tool = this.registry.get(call.name);

    if (!tool) {
      throw new Error(
        `Tool "${call.name}" is not registered.`,
      );
    }

    const result = await tool.execute(call.arguments);

    return {
      toolCallId: call.id,
      name: call.name,
      result: result as TResult,
    };
  }
}