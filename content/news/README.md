# News Articles

This directory contains all news articles for the Bahá'í community of San Carlos website.

## How to Add a News Article

1. Create a new `.mdx` file in this directory
2. Use a descriptive filename with lowercase letters and hyphens (e.g., `community-service-event.mdx`)
3. Add frontmatter at the top of the file with the following fields:
   - `title`: The article title
   - `date`: The publication date in YYYY-MM-DD format
   - `excerpt`: A brief summary (optional but recommended)
   - `image`: Image URL for the article thumbnail (optional)
4. Write your article content below the frontmatter using Markdown syntax

## Example

```mdx
---
title: "Community Service Event"
date: "2024-04-15"
excerpt: "Join us for a community clean-up event this Saturday at the park."
image: "https://images.unsplash.com/photo-example"
---

Your article content goes here.

You can use **bold text**, *italic text*, and [links](https://example.com).

## Sections

You can create sections with headers, lists, and more.

- Item one
- Item two
- Item three
```

## Important Notes

- The filename (without .mdx extension) becomes the URL slug
- Articles are automatically sorted by date (newest first)
- Only the most recent 3 articles appear on the homepage
- All articles are listed on the `/news` page
