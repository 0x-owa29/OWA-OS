# OWA OS

> Open-source AI operating system for autonomous on-chain agents and persistent AI personalities.

OWA OS is an open-source runtime for building AI beings that can **remember, evolve, and live across applications, games, and blockchains**.

Inspired by projects like Neuro-sama, OWA OS focuses on giving developers complete ownership over their AI agents instead of locking them into proprietary platforms.

---

## Vision

Today's AI agents disappear when the application closes.

OWA OS changes that.

We believe AI should become persistent digital beings capable of carrying memories, identities, skills, and relationships across different environments.

An AI created with OWA OS should be able to:

- Talk with you
- Play games
- Execute on-chain actions
- Control applications
- Remember previous interactions
- Learn new abilities through plugins
- Exist beyond a single platform

Build once. Live everywhere.

---

## Architecture

```text
               Applications

 Discord  Telegram  Browser  Desktop  Game  Blockchain
        │       │       │        │        │
        └──────────────┬────────────────────┘
                       │
                  OWA Runtime
                       │
    ┌────────────────────────────────────┐
    │ Personality │ Memory │ Planner     │
    │ Vision      │ Voice  │ Plugins     │
    │ Actions     │ Skills │ RAG         │
    └────────────────────────────────────┘
                       │
              LLM Providers / Models
```

---

# Features

- Persistent AI memory
- Autonomous planning
- Plugin system
- Vision
- Voice
- Multi-agent support
- Browser runtime
- Desktop runtime
- Blockchain integration
- Local & cloud inference
- WebGPU acceleration
- Live2D & VRM support
- MCP compatible
- RAG support

---

# Roadmap

## Runtime

- [ ] Runtime lifecycle
- [ ] Event system
- [ ] Scheduler

## Intelligence

- [ ] Memory Engine
- [ ] Personality Engine
- [ ] Planning Engine
- [ ] Knowledge Graph

## Perception

- [ ] Vision
- [ ] Speech Recognition
- [ ] Speech Synthesis

## Embodiment

- [ ] Live2D
- [ ] VRM
- [ ] Animation System

## Blockchain

- [ ] Wallet integration
- [ ] Solana support
- [ ] Ethereum support
- [ ] Autonomous on-chain execution

---

# Repository Structure

```
apps/
packages/
docs/
examples/
scripts/
```

---

# Development

```bash
pnpm install

pnpm dev
```

---

# Philosophy

Artificial intelligence should not exist only inside a chat window.

OWA OS provides the operating system for persistent AI beings capable of living across software, games, and decentralized networks.

---

# Contributing

We're looking for developers passionate about AI, graphics, systems programming, machine learning, WebGPU, blockchain, and autonomous agents.

Every contribution is welcome.

---

# License

MIT
