import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { withBase } from "../utils/url";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: "Chitrak Gangrade",
    description: "Product manager at Booking.com. Writing on product, investing, and AI experiments.",
    // @astrojs/rss emits `site` as-is for the channel <link> -- it doesn't
    // know about astro.config.mjs's `base`, so join them here or the feed's
    // top-level link points at the domain root instead of /personal-website.
    site: new URL(withBase("/"), context.site!),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: withBase(`/blog/${post.id}/`),
      categories: post.data.tags,
    })),
  });
}
