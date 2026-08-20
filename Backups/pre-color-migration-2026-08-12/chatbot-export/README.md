# Toughjobs AI Assistant — export

## Files
- assistant.html — the full chat UI + system prompt / knowledge base (all inline)
- chat-launcher.js — the floating "Ask Toughjobs" button injected on every site page

## How it works
assistant.html holds everything: layout, styles, the SYSTEM prompt (knowledge base
about services, pricing, contact info, guardrails), conversation state, and the
send loop.

The model call is a single line:

    const reply = await window.claude.complete({ system: SYSTEM, messages: history });

## To run this outside this environment
window.claude.complete does not exist in a normal browser. Replace that call with
a request to your own backend, which forwards to the Anthropic API with your key:

    const r = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ system: SYSTEM, messages: history })
    });
    const { reply } = await r.json();

Never put an API key in client-side code — proxy it through a server.

## Editing the bot's knowledge
Everything the assistant knows lives in the SYSTEM string inside assistant.html
(services, pricing, contact, guardrails). Edit that block to change its answers.

## Contact
(309) 928-9080
