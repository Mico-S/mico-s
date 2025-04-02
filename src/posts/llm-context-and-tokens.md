---
title: "LLM Basics: Context Windows & Tokens"
date: 2025-04-01
layout: post.njk
tags: posts
---

With all the hype around the release of Google's Gemini 2.5 Pro model, I wanted to refresh my knowledge of two core concepts that come up frequently: context windows and tokens.

### Context Window

- A context window is how much information an LLM can "see" in a single conversation or task.
- The size of this window is measured in tokens.

### Tokens

- A token is a chunk of text.
- Usually a few characters in length. Examples include "cat" -> 1 token, "unbelievable" -> 2 or 3 tokens, "Let's go" -> 3 tokens.

So when AI documentation mentions these concepts, such as Gemini 2.5 Pro having a "1 million token context window", this starts to make sense.
