---
title: "Custom context providers"
date: 2025-04-17
layout: post.njk
tags: posts
---

Article: [Why you need a custom context provider](https://gabrielpichot.fr/blog/why-you-need-a-custom-context-provider/) by Gabriel Pichot

Great examples and explanation by Gabriel on how to properly use custom context providers to avoid unnecessary re-renders. By forcing components to go through the `children` prop in a custom context provider, we can isolate re-renders to just the consumers of a provider. Bonus: it also isolates context logic into its own component, making your code more organized! Win win!
