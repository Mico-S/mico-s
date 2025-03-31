---
title: "Bookmarklet to remove LinkedIn's 'Suggested' posts"
date: 2025-03-30
layout: post.njk
tags: posts
---

I recently learned what a bookmarklet is and decided to make one to remove LinkedIn's "Suggested" posts that are often very clickbait-y. A [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet#:~:text=A%20bookmarklet%20is%20a%20bookmark,when%20user%20clicks%20on%20them.) is a bookmark that executes a JavaScript code snippet on the current page when clicked. When I first learned what this is, it seemed quite niche and not particularly useful. But after becoming very distracted by a couple of LinkedIn's "Suggested" posts recently, I thought using a bookmarklet would be a perfect use case for both learning how they work and making one myself.

This was the process I followed to make one:

1. Asked ChatGPT: `How can I make a tool that removes "Suggested" posts from LinkedIn's feed? Would this be a good candidate for a bookmarklet?`
2. Used the Inspect tool to find the class names of the div elements to target in the bookmarklet and gave another prompt:
   `After some inspect element digging, it looks like the main content containers are divs with the class name "fie-impression-container". In those containers, there is another div down the tree of child containers called "update-components-header__text-wrapper". I'm thinking let's grab all divs with the class name "fie-impression-container" and find the child div "update-components-header**text-wrapper" for each one. If the contents inside that div is "Suggested", then set the display for the parent "fie-impression-container" to none`

Then after some more conversation to fix bugs, I got this beauty:
`javascript:(function(){const interval=setInterval(()=>{document.querySelectorAll('div.fie-impression-container').forEach(c=>{const h=c.querySelector('div.update-components-header__text-wrapper');if(h&&h.textContent.trim().startsWith('Suggested')){c.style.display='none';}});},1000);setTimeout(()=>clearInterval(interval),10000);})();`

It works pretty well, but not perfect. Given that LinkedIn loads posts dynamically as you scroll, it requires you to run it as new content gets fed to the page. But it does the job with content that is already on the page.

<!-- markdownlint-disable MD033 -->
<div class="image-grid">
  <figure>
    <img src="{{ '/assets/images/suggested-remove-before.png' | url }}" alt="Before execution" class="grid-image">
    <figcaption>Before execution</figcaption>
  </figure>
  
  <figure>
    <img src="{{ '/assets/images/suggested-remove-after.png' | url }}" alt="After execution" class="grid-image">
    <figcaption>After execution</figcaption>
  </figure>
</div>
<!-- markdownlint-enable MD033 -->
