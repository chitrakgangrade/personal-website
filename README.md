# personal-website

Scaffolding for a personal site: Astro + Content Collections for the blog,
Tailwind CSS v4 for styling. Text-forward, minimal, dark-mode-capable. No
real copy/content yet -- that's intentionally left for you to fill in.

## Running it locally

```bash
npm install
npm run dev       # http://localhost:4321 (auto-bumps port if taken)
```

Other scripts:

```bash
npm run build      # astro check + astro build -> dist/
npm run preview    # serve the built dist/ locally
```

**Node version note:** this project deliberately pins `astro@^5.18.2`
instead of the latest Astro (7.x), because latest Astro (and the
`create-astro` scaffolding CLI) require Node >=22.12.0, and this machine
only has Node 20.20.2 available system-wide via apt (shared with other cron
jobs -- not something to casually upgrade). Astro 5.18.2 supports Node
`18.20.8 || ^20.3.0 || >=22.0.0`, so it works here.

Tradeoff to be aware of: `npm audit` currently reports 3 vulnerabilities (1
low, 2 high) that only trace back to Astro 5.18.2 itself (a handful of XSS
advisories in features this scaffold doesn't use -- `define:vars`,
`slot`/prop spreading, view transitions, server islands -- plus a
Windows-only dev-server bug and some `sharp`/libvips CVEs). The only fix is
`npm audit fix --force`, which jumps to Astro 7.x and requires Node 22+.
**If/when you upgrade this machine's Node to 22+**, it's worth revisiting:
bump `astro` to latest, drop the pin, and re-run `npm audit`.

## Adding a new blog post

Add a Markdown file to `src/content/blog/`, e.g. `src/content/blog/my-post.md`:

```markdown
---
title: "My Post Title"
date: 2026-08-12
description: "One sentence for the blog index and RSS feed."
tags: ["some", "tags"]
draft: false
---

Post content in Markdown goes here.
```

The frontmatter schema is defined in `src/content.config.ts`. Notes:

- `draft: true` posts are fully excluded -- not just hidden from the index,
  but no page is built for them at all, so there's no live-but-unlinked URL.
  Flip it to `false` (or omit it, defaults to `false`) when it's ready.
- Posts are sorted newest-first by `date` automatically on the blog index,
  homepage "recent writing" section, and RSS feed.
- The file name (minus `.md`) becomes the URL slug: `my-post.md` ->
  `/blog/my-post`.
- Three placeholder posts are already in there (`hello-world.md`,
  `notes-on-writing-in-public.md`, and a `draft: true` one) -- delete or
  replace them once you have real content.

## Adding a new project

Edit `src/data/projects.ts` and add an entry to the `projects` array:

```ts
{
  name: "Project Name",
  description: "One honest line about what it is.",
  status: "active", // "active" | "archived" | "idea"
  tags: ["ai", "experiment"],
  url: "https://github.com/you/project", // optional; omit for no link
}
```

The `/projects` page just maps over this array, so no layout code needs to
change. External URLs (anything not starting with `/`) automatically open
in a new tab.

## Things you'll obviously want to customize

These are marked with `TODO(you)` comments in the code, but for a full list:

- **Name/bio/"currently" line/interests**: `src/pages/index.astro` -- the
  homepage also folds in a short "About" section rather than being a
  separate page (a judgment call made during scaffolding; easy to split out
  into `src/pages/about.astro` later if you'd rather it be standalone).
- **Site name**: `SITE_NAME` in `src/components/Nav.astro` and
  `src/layouts/BaseLayout.astro`.
- **Site URL**: `SITE_URL` in `astro.config.mjs` -- required for the
  sitemap, RSS item links, and canonical/OG URLs to be correct. Currently a
  placeholder (`https://example.com`).
- **Colors/fonts**: `src/styles/global.css` -- `--color-accent`,
  `--color-accent-dark`, and the `--font-serif`/`--font-sans` variables
  (currently Fraunces + Inter, loaded from Google Fonts in
  `BaseLayout.astro`).
- **Favicon**: `public/favicon.svg` -- currently a plain colored circle.
- **OG image**: `public/og-image.png` -- currently a solid-color 1200x630
  placeholder (hand-generated, no design tool was available while
  scaffolding). Swap for a real image before sharing links anywhere social.
- **Footer links**: `src/components/Footer.astro`.
- **RSS feed title/description**: `src/pages/rss.xml.ts`.
