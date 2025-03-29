---
title: "Building this blog site"
date: 2025-03-29
layout: post.njk
tags: posts
---

For my first "real" blog post, what would be better than writing about the little journey of developing this very blog site?

### The process

As far as front-end development goes, I've spent nearly all of my time with the React framework. So when I got the idea to create a blog site, I honestly didn't know where to start. That's where LLM tools like ChatGPT and Claude came to the rescue. I opened a chat window in ChatGPT and gave this exact prompt: "I want to start a basic link blog. It should be a very lightweight website hosted by GitHub Pages to allow me to quickly publish and make modifications. What do you recommend as far as a starting point and architecture?"

The recommended stack ChatGPT gave me was a GitHub Pages + [Jekyll](https://jekyllrb.com/) setup. I followed up with a few more basic questions about what Jekyll is, if it supports functionality like organizing posts by year, month, tags, etc. and what I can include in the markdown files for pages. After those questions were answered, I asked ChatGPT to give me instructions on how to set up a basic Jekyll project. I particularly enjoy LLMs in this respect: I can ask a lot of questions about concepts that are new to me and it can give me quick, high-level explanations without having to dig into a bunch of articles on Google.

Within a few minutes, I had a Jekyll project up and running with their default Minima theme. This is what that theme looks like:

<!-- markdownlint-disable MD033 -->
<figure>
  <img src="{{ '/assets/images/jekyll-minima-theme-screenshot.png' | url }}" alt="Minima theme screenshot" class="about-image">
  <figcaption>Screenshot of Jekyll's <a href="https://jekyll.github.io/minima/">Minima Demo Site</a></figcaption>
</figure>
<!-- markdownlint-enable MD033 -->

At first, I messed around with the markdown posts and getting a feel for how the folder structure and the GitHub Pages deployment process worked. But my inner React developer wanted to have a bit more customizability, so I prompted ChatGPT to give me alternatives to Jekyll and came across [Eleventy](https://www.11ty.dev/). Instead of starting a new repository or deleting everything, I decided to take my work to the [Cursor](https://www.cursor.com/) IDE so that I could modify my repo to use Eleventy. I turned on Agent mode, asked it to change from Jekyll to Eleventy, and let it go to work. Once I had Eleventy working, I spent the rest of my time swapping back and forth between Agent and Ask mode in Cursor. This helped me make modifications, fix bugs, understand the architecture, and get the site to a point where I could start writing blog posts.

### Wrapping it up

And that's all folks! Making this seemingly simple blog site has been an incredibly humbling but fun experience. I didn't exactly [vibe code](https://x.com/karpathy/status/1886192184808149383) this into existence, as I wanted to at least understand what was being given to me by the LLMs before accepting changes, but having LLMs build a lot of the site helped tremendously. Now I have my own little corner ("Cook's Corner" haha get it :) ) of the internet to write about things!

### Inspiration

I credit these guys for my inspiration to start a blog. Check out their content!

- [Simon Willison's Weblog](https://simonwillison.net/)
- [Redowan's Reflections](https://rednafi.com/)
- [Michael Lynch](https://mtlynch.io/)
- [Daring Fireball](https://daringfireball.net/)
