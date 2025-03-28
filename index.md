---
layout: Home
title: Hey, I'm Micah!
---

Welcome to the blog site! Check out the latest below.

{% for post in site.posts limit:5 %}

<div class="post-preview">
  <h2>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </h2>
  <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
  <p>
    {% if post.excerpt %}
      {{ post.excerpt | strip_html | truncatewords: 50 }}
    {% endif %}
  </p>
  <a href="{{ post.url | relative_url }}">Read more...</a>
</div>
{% endfor %}
