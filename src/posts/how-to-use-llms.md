---
title: "How I use LLMs"
date: 2025-03-30
layout: post.njk
tags: posts
---

Simon Willison's recent post ["Here's how I use LLMs to help me write code"](https://simonwillison.net/2025/Mar/11/using-llms-for-code/) has been very helpful, and I wanted to briefly talk about the biggest takeaways that have helped me.

### Context, context, context

You can think of LLMs and context this way: the LLM is a very "over-confident pair programming assistant" and context is the whiteboard they reference. The more information you can write up on that whiteboard, the better results the LLM can produce. This is one of the biggest ways tools like GitHub Copilot and Cursor provide value: you can very easily and quickly provide context to LLMs.

### Faster development, faster learning

Of course, increasing the speed of development is very valuable, particularly in a business-context where getting features out the door is important. But I agree with Simon on his point about development speed. Getting work done faster is nice, but LLMs allow me to work on projects that I would normally perceive as very time consuming and not worthwhile. Working on more projects means more experience, more learning, and then you can work on more specific or larger projects, and so on.

### Q&A

I typically ask LLMs two types of questions:

1. Give me a better understanding of a specific topic
2. Do you understand what I want you to do?

The first type of question is something I ask a lot more so that I can learn about a codebase, architecture, or something else. The second type of question usually arises when I'm working in more complex codebases and I have a specific task that I want it to accomplish. Making sure that both the context and prompt are understood by the LLM before making modifications can be helpful.

This article is fantastic, and I frequently refer back to it to refresh my memory on good practices with LLMs. However, just like with anything, experience is the best teacher. The more you use LLMs, the more you'll realize how powerful and sometimes annoying they can be.
