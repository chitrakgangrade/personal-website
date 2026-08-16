// Add/edit projects here -- the /projects page just maps over this array,
// so you never need to touch layout code to add a new entry.

export type ProjectStatus = "active" | "archived" | "idea";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  // One line, shown right under the name -- the hook, not the summary.
  tagline: string;
  description: string;
  // Optional "how it works" bullets, tucked behind a <details> disclosure
  // so the page stays quiet by default but rewards someone who clicks in.
  mechanism?: string[];
  status: ProjectStatus;
  tags: string[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    name: "Investment Intelligence",
    tagline: "A portfolio cockpit that turns scattered stock tips into logged decisions.",
    description:
      "Tracks NSE/BSE and international equity positions and runs every one of them through the same sell/hold rules every time, so a decision doesn't quietly depend on how the market felt that morning.",
    mechanism: [
      "A rules engine checks each position against fixed thresholds -- stop-loss at -60%, a warning at -55%, a partial sell on a +20% pop within 30 days, milestones at +50%/+100% gain, proximity to its all-time high, and a 1-year holding-period expiry -- then ranks whichever rules fire by priority so the sharpest signal wins.",
      "A parser reads free-text trading tips shared over chat and turns them into structured, dated signal records with a conviction score, instead of letting them get lost in scrollback.",
      "No backend: positions live in the browser's local storage, so there's no server anywhere holding real financial data.",
    ],
    status: "active",
    tags: ["react", "finance", "automation"],
    links: [{ label: "Source", url: "https://github.com/chitrakgangrade/investment-intelligence" }],
  },
  {
    name: "Fitness Dashboard",
    tagline: "A daily dashboard that reads itself out of Notion so I don't have to.",
    description:
      "Pulls a trailing week of meals, weight, workouts, and Garmin data out of four Notion databases every morning and renders it as one page -- no app to open, no chart to build by hand.",
    mechanism: [
      "A Python script hits the Notion API for four data sources, computes daily calorie deficit, protein against a fixed target, and a rolling 7-day weight average, then writes a single self-contained HTML file -- inline CSS/JS, data embedded as JSON, no build step, no framework.",
      "A small Claude Haiku call turns the week's numbers into a one-line TL;DR, cached for a downstream WhatsApp message so the summary is waiting before the day starts.",
      "A cron job regenerates it daily and only commits + pushes when the output actually changed, so the git history isn't full of empty \"nothing happened\" commits.",
    ],
    status: "active",
    tags: ["python", "notion-api", "automation"],
    links: [
      { label: "Live", url: "https://chitrakgangrade.github.io/fitness-dashboard/" },
      { label: "Source", url: "https://github.com/chitrakgangrade/fitness-dashboard" },
    ],
  },
  {
    name: "This website",
    tagline: "You're looking at it.",
    description:
      "Scaffolded and then actually written across a series of Claude Code sessions -- this project's own git history is closer to a changelog than a portfolio piece.",
    mechanism: [
      "Content lives in Markdown and a typed array, not a CMS -- blog posts are files under src/content/blog, projects are the array this page maps over.",
      "Every push to main triggers a GitHub Actions build that deploys straight to GitHub Pages -- no server, no manual deploy step, no dashboard to click through.",
    ],
    status: "active",
    tags: ["astro", "tailwind", "meta"],
    links: [{ label: "Source", url: "https://github.com/chitrakgangrade/personal-website" }],
  },
];
