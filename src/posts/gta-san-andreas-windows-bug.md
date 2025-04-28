---
title: "GTA San Andreas + Windows 11 24H2 = Bug?"
date: 2025-04-27
layout: post.njk
tags: posts
---

Article: [How a 20 year old bug in GTA San Andreas surfaced in Windows 11 24H2](https://cookieplmonster.github.io/2025/04/23/gta-san-andreas-win11-24h2-bug/) by Adrian (Silent)

I had to pull out some long buried knowledge of C++ and stack tracing to understand Adrian's debugging techniques, but this was fun! I love his illustrations of the stack later on in the article, explaining how Windows 11 24H2's `LeaveCriticalSection` function call caused an override to the stack space used by `frontWheelScale` and `rearWheelScale`. Uninitialized variables that rely on input data that hasn't been thoroughly validated is a scary line to walk. Be careful, and use default/fallback values!
