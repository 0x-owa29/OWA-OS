import type { Tool } from "@owa/core";

export class ToolRegistry {
  private readonly tools = new Map<string, Tool>();

  constructor(tools: Tool[] = []) {
    for (const tool of tools) {
      this.register(tool);
    }
  }

  register(tool: Tool): void {
    if (this.tools.has(tool.name)) {
      throw new Error(`Tool "${tool.name}" is already registered.`);
    }

    this.tools.set(tool.name, tool);
  }

  unregister(name: string): boolean {
    return this.tools.delete(name);
  }

  has(name: string): boolean {
    return this.tools.has(name);
  }

  get(name: string): Tool | undefined {
    return this.tools.get(name);
  }

  list(): Tool[] {
    return [...this.tools.values()];
  }

  clear(): void {
    this.tools.clear();
  }
}