export type JsonSchema =
  | {
      type: "object";
      properties?: Record<string, JsonSchema>;
      required?: string[];
      additionalProperties?: boolean;
    }
  | {
      type: "string";
      enum?: string[];
    }
  | {
      type: "number";
    }
  | {
      type: "integer";
    }
  | {
      type: "boolean";
    }
  | {
      type: "array";
      items: JsonSchema;
    };

export interface Tool<
  TArgs = unknown,
  TResult = unknown,
> {
  /**
   * Unique tool name.
   *
   * Example:
   * calculator
   * weather
   * github_search
   */
  name: string;

  /**
   * Description shown to the LLM.
   */
  description: string;

  /**
   * Parameters using JSON Schema.
   */
  parameters?: JsonSchema;

  /**
   * Execute the tool.
   */
  execute(
    args: TArgs,
  ): Promise<TResult>;
}