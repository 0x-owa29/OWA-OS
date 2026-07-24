import { Agent } from "./Agent.js";

export class Runtime {
  private agents: Agent[] = [];

  register(agent: Agent) {
    this.agents.push(agent);
  }

  async start() {
    console.log(`Starting ${this.agents.length} agent(s)...`);

    for (const agent of this.agents) {
      // Load conversation dari memory (jika ada)
      await agent.init();

      // Start character
      await agent.options.character.start();
    }
  }

  async stop() {
    console.log("Stopping runtime...");

    for (const agent of this.agents) {
      await agent.options.character.stop();
    }
  }
}