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
   */
  name: string;

  /**
   * Description shown to the LLM.
   */
  description: string;

  /**
   * Tool parameters in JSON Schema format.
   */
  parameters?: JsonSchema;

  /**
   * Execute the tool.
   */
  execute(args: TArgs): Promise<TResult>;
}