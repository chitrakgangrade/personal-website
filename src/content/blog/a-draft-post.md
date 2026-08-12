---
title: "A draft post (should not appear anywhere)"
date: 2026-03-01
description: "This post has draft: true set, and exists to prove the drafts filter actually works."
tags: ["meta"]
draft: true
---

If you can see this on the live site, the draft filter in `src/pages/blog/index.astro` (or `src/pages/blog/[slug].astro`) is broken. It shouldn't show up in the blog index, the RSS feed, the sitemap, or be reachable at its own URL.
