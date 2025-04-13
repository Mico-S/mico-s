---
title: "NBA Today Dashboard"
date: 2025-04-13
layout: post.njk
tags: posts
---

For this weekend's project, I made an app that displays a minimal dashboard of the top teams and key matchups in the NBA. The purpose of the project was to mess around with creating applications purely through LLM prompts and learning new libraries and frameworks that I don't use in my day-to-day work.

### The app

Nothing too special or complex, but it does the job well. The idea came from me visiting webpages showing NBA standings and thinking: Now that the playoffs are coming up, I only really care about the top 8 standings and any matchups between good teams.

<!-- markdownlint-disable MD033 -->
<figure>
  <img src="{{ '/assets/images/nba-today-dashboard.png' | url }}" alt="NBA Today Dashboard" class="about-image">
  <figcaption>The dashboard</figcaption>
</figure>
<!-- markdownlint-enable MD033 -->

I don't think it would be valuable to describe my building process in detail within this post, but the hardest part about building this app was finding a public API that allowed me to retrieve the latest info on the league. Doing that research and choosing which tech stack to use was the more time-consuming part (as it should be!). If you're curious about the technical details and implementation, the app's GitHub repo is [here](https://github.com/Mico-S/nba-today-dashboard).

### What I learned

- With LLMs, I can quickly scaffold small applications and get a pretty good looking product
- ShadCN and Tailwind was a great choice for styling. LLMs understand these libraries a lot better due to their open source code approach. It's easy to make very specific UI changes without the LLM guessing which props to use (a problem I've seen using Material UI)
- I'm seeing the need for Cursor MDC files, as the quality of code the LLM produces by itself is questionable (nested blocks, no separation of concerns, etc.)
- For the longest time, I had no idea what the `if __name__ == "__main__":` statement did at the bottom of Python files. You can import parts of the script in other files while also retaining the ability for it to execute by itself (the code under the if block). Cool!
