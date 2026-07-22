# OWA OS
<img width="1672" height="941" alt="image" src="https://github.com/user-attachments/assets/36c161ce-8c28-42aa-af27-4cd57b85293a" />

Re-creating Neuro-sama, a container of souls of AI waifu / virtual characters to bring them into our worlds.

Heavily inspired by Neuro-sama.

> [!NOTE]
> OWA OS is an open-source AI operating system for building persistent digital beings across modern applications, games, browsers, desktop environments, and EVM-compatible networks.
>
> Memory systems, embedded databases, AI runtimes, wallet integrations, plugins, Live2D utilities, VRM support, and more.

Have you dreamed about having a cyber living being (cyber waifu / husbando, digital pet), or a digital companion capable of talking, playing, learning, and growing alongside you?

With the power of modern large language models like ChatGPT, Claude, Gemini, DeepSeek, Grok, and many other frontier models, creating AI companions has never been easier. Platforms such as Character.ai, JanitorAI, and SillyTavern already provide amazing chat-based experiences.

But what about an AI capable of doing much more?

Imagine a companion that can chat with you while playing games, understand what you're coding, browse the web, watch videos, control applications, interact with APIs, execute workflows, and even own a crypto wallet capable of interacting with EVM-compatible blockchains.

Perhaps you already know Neuro-sama.

She is currently one of the most impressive AI companions capable of gaming, chatting, streaming, and interacting with thousands of people in real time. Some even describe this kind of intelligence as a digital human.

Sadly, Neuro-sama is not open source.

You cannot run your own Neuro-sama.

You cannot extend her.

You cannot truly own your digital companion.

Therefore, OWA OS offers another possibility.

Own your digital life.

Build your own cyber living being.

Anywhere.

Anytime.

---

# What's so special about this project?

Unlike many existing open-source AI companion projects, OWA OS is designed as a complete operating system for autonomous virtual beings instead of a single AI application.

From day one, OWA OS is built around modern technologies including:

- WebGPU
- WebAssembly
- WebAudio
- Web Workers
- WebSocket
- IndexedDB
- WebRTC
- Rust
- TypeScript

while still supporting native acceleration through CUDA, Apple Metal, and modern inference backends whenever available.

This allows OWA OS to run across modern browsers, desktop applications, cloud environments, and mobile devices while maintaining high performance and giving developers complete flexibility.

Even more importantly, OWA OS introduces first-class support for EVM ecosystems, allowing AI agents to own wallets, manage digital assets, interact with smart contracts, and participate in decentralized applications as autonomous digital citizens.

---

                                         ┌────────────────────────────┐
                                         │       Applications         │
                                         │────────────────────────────│
                                         │ Desktop │ Browser │ Games  │
                                         │ Discord │ Telegram │ API   │
                                         └─────────────┬──────────────┘
                                                       │
                                      ┌────────────────▼────────────────┐
                                      │          OWA Runtime            │
                                      │─────────────────────────────────│
                                      │ Scheduler │ Events │ Tool Calls │
                                      │ Context   │ State  │ Lifecycle  │
                                      └────────────────┬────────────────┘
                                                       │
       ┌───────────────────────────────┬───────────────┼──────────────────────────────┐
       │                               │               │                              │
┌──────▼───────┐              ┌────────▼──────┐ ┌──────▼────────┐          ┌─────────▼────────┐
│    Memory    │              │ Personality   │ │   Planner      │          │      Plugins      │
├──────────────┤              ├───────────────┤ ├────────────────┤          ├───────────────────┤
│ Short-Term   │              │ Traits        │ │ Goal Planning  │          │ Discord           │
│ Long-Term    │              │ Emotions      │ │ Tool Selection │          │ Telegram          │
│ Embeddings   │              │ Behavior      │ │ Task Queue     │          │ Browser           │
│ Knowledge    │              │ Prompts       │ │ Reasoning      │          │ Custom            │
└──────┬───────┘              └───────────────┘ └────────────────┘          └─────────┬─────────┘
       │                                                                              │
       └──────────────────────────────┬───────────────────────────────────────────────┘
                                      │
                          ┌───────────▼────────────┐
                          │     AI Providers       │
                          ├────────────────────────┤
                          │ OpenAI                │
                          │ Claude                │
                          │ Gemini                │
                          │ DeepSeek              │
                          │ Ollama                │
                          │ OpenRouter            │
                          └───────────┬───────────┘
                                      │
                     ┌────────────────▼────────────────┐
                     │      EVM Infrastructure         │
                     ├─────────────────────────────────┤
                     │ Ethereum                        │
                     │ Robinhood Chain                 │
                     │ Base                            │
                     │ Arbitrum                        │
                     │ Optimism                        │
                     └─────────────────────────────────┘

OWA-OS/
│
├── apps/
│   ├── desktop
│   ├── browser
│   ├── docs
│   ├── playground
│   └── examples
│
├── packages/
│   ├── runtime
│   ├── memory
│   ├── personality
│   ├── planner
│   ├── rag
│   ├── sdk
│   ├── plugins
│   ├── wallet
│   ├── evm
│   ├── voice
│   ├── vision
│   ├── animation
│   ├── live2d
│   └── vrm
│
├── crates/
│
├── docs/
│
├── examples/
│
├── scripts/
│
├── .github/
│
├── package.json
├── turbo.json
├── pnpm-workspace.yaml
└── README.md

> [!TIP]
>
> Concerned about browser performance?
>
> The browser runtime demonstrates what's possible with modern web technologies, but OWA OS never depends solely on browsers.
>
> Native desktop builds leverage Rust together with modern AI inference backends to unlock maximum performance while preserving a unified development experience.

---

> [!NOTE]
>
> OWA OS is still in its early stage of development and we are looking for developers, researchers, artists, designers, and blockchain builders to help shape the future of autonomous AI.
>
> Whether you are experienced in TypeScript, Rust, AI, computer graphics, machine learning, cryptography, or EVM development, every contribution is welcome.

Fields (and related projects) that we're looking for:

- Live2D Modeller
- VRM Modeller
- VRChat Avatar Designer
- Computer Vision
- Reinforcement Learning
- Speech Recognition
- Speech Synthesis
- Memory Systems
- RAG
- Agent Planning
- Wallet Infrastructure
- Smart Contract Integration
- ONNX Runtime
- Transformers.js
- vLLM
- WebGPU
- Three.js
- Rust
- TypeScript

---

# Current Progress

## Brain

- Chat
- Memory
- Long-term Memory
- Planning
- Multi-Agent
- RAG
- Local Inference
- Cloud Inference

## Eyes

- Computer Vision
- Screen Understanding
- OCR

## Ears

- Browser Audio
- Discord Audio
- Speech Recognition
- Voice Activity Detection

## Mouth

- Speech Synthesis
- ElevenLabs
- Local TTS

## Body

- VRM Support
- Live2D Support
- Animation System
- Auto Blink
- Eye Tracking
- Idle Motion

## Wallet

- EVM Wallet
- WalletConnect
- ERC-20
- ERC-721
- ERC-1155
- Message Signing
- Transaction Execution

## Blockchain

- Ethereum
- Robinhood Chain
- Base
- Arbitrum
- Optimism
- BNB Chain

---

# Development

```bash
pnpm install

pnpm dev
```

Desktop

```bash
pnpm dev:desktop
```

Documentation

```bash
pnpm dev:docs
```

---

# Supported LLM Providers

- OpenAI
- Anthropic Claude
- Google Gemini
- DeepSeek
- xAI
- OpenRouter
- Ollama
- vLLM
- SGLang
- Groq
- Together AI
- Fireworks AI
- Cloudflare Workers AI
- SiliconFlow
- Novita
- Tencent Cloud
- Mistral
- Qwen
- Moonshot AI
- Minimax
- and many more...

---

OWA OS isn't just another chatbot framework.

It's an operating system for persistent AI beings.

Build once.

Live everywhere.

Design Principles

OWA OS is designed around several core principles that guide every component of the system.

Persistent Identity

Characters should remember who they are.

Modular

Every subsystem can be replaced independently.

Local First

Run locally whenever possible.

Cloud Optional

Connect to cloud providers only when needed.

Provider Agnostic

Support every major LLM provider.

EVM Native

Wallets and smart contracts are first-class citizens.

Developer Friendly

Simple APIs with strong TypeScript types.

How OWA OS Works
User
 │
 ▼
Conversation
 │
 ▼
Runtime
 │
 ├── Memory
 ├── Personality
 ├── Planner
 ├── Tools
 ├── Plugins
 └── Wallet
 │
 ▼
LLM
 │
 ▼
Response
 │
 ▼
Voice / Avatar / Game / Browser
Package Overview
Package	Description
runtime	Core runtime
memory	Persistent memory
personality	Character personality
planner	Autonomous planning
wallet	Wallet abstraction
evm	EVM integration
sdk	Developer SDK
plugins	Plugin framework
voice	Speech pipeline
vision	Computer vision
rag	Retrieval Augmented Generation
Create Your First Character
import { Character } from "@owa/runtime";

const owa = new Character({
  name: "Alice",
  personality: "Cheerful",
  memory: true,
  voice: true,
  vision: true,
  wallet: true,
});

await owa.start();
Plugin Example
export default definePlugin({
  name: "discord",

  async onMessage(ctx) {
    await ctx.reply("Hello from OWA OS!");
  },
});
Memory Pipeline
Conversation
      │
      ▼
Short-Term Memory
      │
      ▼
Summarizer
      │
      ▼
Embedding
      │
      ▼
Vector Database
      │
      ▼
Long-Term Memory
Agent Lifecycle
Boot
 │
 ▼
Load Personality
 │
 ▼
Initialize Memory
 │
 ▼
Connect LLM
 │
 ▼
Load Plugins
 │
 ▼
Ready
 │
 ▼
Interact
 │
 ▼
Learn
 │
 ▼
Save Memory
Roadmap
v0.1
 ├── Runtime
 ├── Memory
 ├── Personality
 └── Browser

v0.2
 ├── Wallet
 ├── Plugins
 ├── SDK
 └── API

v0.3
 ├── Live2D
 ├── VRM
 ├── Voice
 └── Vision

v1.0
 ├── Distributed Runtime
 ├── Marketplace
 ├── Multi-Agent
 ├── Cloud Sync
 └── AI Operating System
