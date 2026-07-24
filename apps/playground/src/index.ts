import "dotenv/config";

import {
  Runtime,
  Agent,
  Character,
} from "@owa/runtime";

import { LocalMemory } from "@owa/memory-local";

import {
  OpenAIProvider,
} from "@owa/provider-openai";

console.log("================================");
console.log("OPENAI_API_KEY exists:", !!process.env.OPENAI_API_KEY);
console.log(
  "OPENAI_API_KEY prefix:",
  process.env.OPENAI_API_KEY?.slice(0, 10),
);
console.log("================================");

const runtime = new Runtime();

const character = new Character({
  name: "OWA",
});

const memory = new LocalMemory();

const provider = new OpenAIProvider({
  apiKey: process.env.OPENAI_API_KEY!,
  model: "gpt-4.1-mini",
});

const agent = new Agent({
  character,
  provider,
  memory,
});

agent.on("message", (msg) => {
  console.log("USER >", msg.content);
});

agent.on("response", (msg) => {
  console.log("AI >", msg.content);
});

agent.on("error", (err) => {
  console.error(err);
});

runtime.register(agent);

await runtime.start();

const reply = await agent.chat(
  "Perkenalkan dirimu."
);

console.log(reply);

await runtime.stop();