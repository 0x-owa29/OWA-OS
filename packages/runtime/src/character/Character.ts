export type CharacterLanguage =
  | "English"
  | "Indonesian"
  | "Japanese"
  | "Chinese"
  | "Korean"
  | "French"
  | "German"
  | "Spanish"
  | "Italian"
  | "Portuguese"
  | "Russian"
  | "Arabic"
  | "Hindi"
  | "Thai"
  | "Vietnamese";

export interface CharacterExample {
  input: string;
  output: string;
}

export interface CharacterStyle {
  chat?: string[];
  post?: string[];
  reply?: string[];
}

export interface CharacterOptions {
  name: string;

  description?: string;

  personality?: string;

  systemPrompt?: string;

  language?: CharacterLanguage;

  greeting?: string;

  lore?: string[];

  topics?: string[];

  adjectives?: string[];

  style?: CharacterStyle;

  examples?: CharacterExample[];
}

export class Character {
  readonly name: string;

  readonly description: string;

  readonly personality: string;

  readonly systemPrompt: string;

  readonly language: CharacterLanguage;

  readonly greeting: string;

  readonly lore: readonly string[];

  readonly topics: readonly string[];

  readonly adjectives: readonly string[];

  readonly style: CharacterStyle;

  readonly examples: readonly CharacterExample[];

  constructor(options: CharacterOptions) {
    this.name = options.name;

    this.description = options.description ?? "";

    this.personality = options.personality ?? "";

    this.systemPrompt = options.systemPrompt ?? "";

    this.language = options.language ?? "English";

    this.greeting = options.greeting ?? "";

    this.lore = options.lore ?? [];

    this.topics = options.topics ?? [];

    this.adjectives = options.adjectives ?? [];

    this.style = {
      chat: options.style?.chat ?? [],
      post: options.style?.post ?? [],
      reply: options.style?.reply ?? [],
    };

    this.examples = options.examples ?? [];
  }

  async start(): Promise<void> {
    console.log(`${this.name} started.`);
  }

  async stop(): Promise<void> {
    console.log(`${this.name} stopped.`);
  }

  async say(text: string): Promise<void> {
    console.log(text);
  }
}