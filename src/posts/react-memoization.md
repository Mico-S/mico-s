---
title: "Understanding React memoization"
date: 2025-04-07
layout: post.njk
tags: posts
---

Article: [React.memo Demystified: When It Helps and When It Hurts](https://niila.fi/en/ai-cheats/) by Christian Ekrem

This is the best explanation of memoization that I've read. In my time developing React applications, I've rarely seen the `useMemo` and `useCallback` hooks, so it's difficult to get an understanding of them, let alone when to use them. Christian breaks down:

- Why these tools exist in the first place
- How they work with small examples
- An approach on when you should use them

To relate back to my experience, I've seen `useMemo` and `useCallback` work great with expensive components like search & filtering systems. Avoiding unnecessary re-renders significantly improves application performance, if done correctly.
