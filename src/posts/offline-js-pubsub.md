---
title: "Offline JavaScript PubSub"
date: 2025-04-09
layout: post.njk
tags: posts
---

Article: [Offline JavaScript PubSub between browser tabs](https://simon-frey.com/tabsub/) by Simon Frey

Simon made his own PubSub system using the browser's local storage, allowing offline communication between browser tabs (no server needed!). I love how he shows examples of this system in action, it's really cool to see how song progress is saved across multiple tabs.

<!-- markdownlint-disable MD033 -->
<div class="image-grid">
  <figure>
    <img src="{{ '/assets/images/tabsub-local-storage.png' | url }}" alt="TabSub in action" class="grid-image" style="width:85%">
    <figcaption>Inspection of Local Storage using TabSub in his article</figcaption>
  </figure>
</div>
<!-- markdownlint-enable MD033 -->

Like Simon said, the [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) does the same thing but is available in all browsers. Another tool to add to the toolbox!
