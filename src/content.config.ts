// Content Collections config (Astro 5's Content Layer API).
// Defines the shape of everything in src/content/blog/*.md and how it's
// loaded. Add more collections here later (e.g. "notes", "til") the same way.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    // e.g. ["ai", "notes"] -- freeform, rendered as pills on the post card
    tags: z.array(z.string()).default([]),
    // draft posts are excluded from the blog index, RSS feed, and sitemap,
    // and don't get a page built for them at all (see blog/[slug].astro)
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
