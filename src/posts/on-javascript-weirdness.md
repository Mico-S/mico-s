---
title: "JavaScript"
date: 2025-04-15
layout: post.njk
tags: posts
---

Article: [On JavaScript's Weirdness](https://stack-auth.com/blog/on-javascripts-weirdness) by Konstantin Wohlwend

Man, this article blew my mind - JS can be really crazy at times. I don't see this often in my work, but cool to dive into nonetheless.

#### Sparse arrays

Never heard of these before, but they actually make sense when you consider that arrays in JS are just a special type of object. Konstantin's example of using `Object.entries` on a sparse array really made the concept click in my head.

#### The secret 9th falsy object

The secret 9th falsy object is... `document.all`? Of course it was used to make Internet Explorer-specific code, then made falsy to migrate away from it. Gotta love IE!

<!-- markdownlint-disable MD033 -->
<img src="{{ '/assets/images/internet-explorer-meme.jpeg' | url }}" alt="Internet Explorer image" class="about-image">
<!-- markdownlint-enable MD033 -->

The other points (especially #2 and #6) looked like something I would have seen in a computer science lecture during my time at university. Cool stuff!
