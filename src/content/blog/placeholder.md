---
author: Piyush Tiwari
pubDatetime: 2026-01-05T12:00:00Z
modDatetime: 2026-01-05T12:00:00Z
title: Your Blog Post Title Here
slug: your-blog-post-slug
featured: false
draft: false
tags:
  - guide
  - template
description: "A brief, catchy description of what this post is about. This text appears in preview cards and SEO results."
---

Write your introduction here. Hook the reader immediately. Explain what problem you are solving, what story you are telling, or what technology you are exploring.

> **Tip:** Keep the intro under 100 words for better readability.

## Table of contents

## Section One: The Core Concept

This is where you start diving into your main content. You can use **bold text** for emphasis or *italics* for nuance.

If you need to quote something or someone:

> "This is how a blockquote looks. Use it for highlighting important takeaways or quotes."

### Subsection Title

Break down complex topics into smaller subsections.

---

## Technical Reference (How to use this Template)

*Delete this section after reading, or keep it for reference.*

### 1. Frontmatter Cheat Sheet

This acts as the configuration for your post.

| Property           | Description                                                                         |
| ------------------ | ----------------------------------------------------------------------------------- |
| **_author_** | Your name (Piyush Tiwari).                                                          |
| **_description_** | Used for SEO and social media previews.                                             |
| **_draft_** | Set to `true` while writing. Set to `false` when ready to publish.                  |
| **_featured_** | Set to `true` to pin this to the home page.                                         |
| **_pubDatetime_** | ISO 8601 format. Run `new Date().toISOString()` in console to get current time.     |
| **_tags_** | Keywords for filtering. If empty, defaults to `["others"]`.                         |
| **_title_** | The main H1 header.                                                                 |

### 2. Handling Images

There are two ways to add images in this architecture:

**Method A: The Optimized Way (Recommended)**
Store images in `src/assets/`. Astro will optimize these.

```markdown
![Description of image](@assets/images/filename.jpg)