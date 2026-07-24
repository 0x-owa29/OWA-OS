"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var runtime_1 = require("@owa/runtime");
var provider_mock_1 = require("@owa/provider-mock");
var runtime = new runtime_1.Runtime();
var character = new runtime_1.Character({
    name: "OWA",
});
var agent = new runtime_1.Agent({
    character: character,
    provider: new provider_mock_1.MockProvider(),
});
runtime.register(agent);
await runtime.start();
var reply = await agent.chat("Hello OWA");
await character.say(reply);
