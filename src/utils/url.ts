// Prefixes an absolute path (e.g. "/blog") with Astro's configured `base`
// (see astro.config.mjs) so internal links keep working when the site is
// deployed under a subpath, like a GitHub Pages project site.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}` || "/";
}
