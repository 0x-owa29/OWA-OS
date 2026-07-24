import type {
  Message,
  Provider,
  ProviderResponse,
  Tool,
} from "@owa/core";

export class MockProvider implements Provider {
  async generate(
    messages: Message[],
    _tools?: Tool[],
  ): Promise<ProviderResponse> {
    const last = messages.at(-1);

    return {
      content: `Echo: ${last?.content ?? ""}`,
      finishReason: "stop",
    };
  }

  async *stream(
    messages: Message[],
    tools?: Tool[],
  ): AsyncIterable<string> {
    const response = await this.generate(
      messages,
      tools,
    );

    yield response.content;
  }
}