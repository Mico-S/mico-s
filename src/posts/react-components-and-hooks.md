---
title: "React components = hooks (sort of)"
date: 2025-03-31
layout: post.njk
tags: posts
---

Article link: [https://www.bbss.dev/posts/sparkling-hooks](https://www.bbss.dev/posts/sparkling-hooks) by Slava Knyazev. The main idea is that React components that return JSX can be deconstructed into "headless component" hooks, where the head is JSX. These types of hooks return the building blocks of a component like state management, event handling, and styling which can then be used by any component with whatever JSX the developer desires. Benefits include reusability of functionality and easier unit testing.

I frequently see this pattern used in large libraries like Material UI. For example, you can either use MUI's existing [Autocomplete](https://mui.com/material-ui/react-autocomplete) component out of the box, or make your own with their headless component [useAutocomplete](https://mui.com/material-ui/react-autocomplete/#useautocomplete) hook. The description for useAutocomplete literally says "headless useAutocomplete() hook." It's a great example of the concept described by Slava.
