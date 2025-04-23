---
title: "5 Common Caching Strategies"
date: 2025-04-22
layout: post.njk
tags: posts
---

Article: [Every Caching Strategy Explained in 5 Minutes](https://www.swequiz.com/blog/every-caching-strategy-explained-in-5-minutes) by SWE Quiz

If you want to know common caching strategies that are used in almost all forms of software, this is a great article for that. They briefly explain each strategy in words, have a great SVG diagram describing data flow between application, cache, and database, and finally the pros/cons of each strategy. Just a solid engineering take on caching at a high level, nothing fancy with specific coding languages.

From my experience, I've worked with Cache-Aside (Lazy Loading) strategy in the form of React libraries like `tanstack` and manual implementations of the Write-Behind (Write-Back) strategy with the `swr` library. With using `swr`, when using the `mutate` function from their `useSWRConfig` hook, you can implement something called "optimistic updating." This is the strategy used in Write-Behind, as you can see immediate success on the front-end while your actual write operation is queued in an async write to the database.
