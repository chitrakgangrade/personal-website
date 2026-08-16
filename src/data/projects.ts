// Add/edit projects here -- the /projects page just maps over this array,
// so you never need to touch layout code to add a new entry.

export type ProjectStatus = "active" | "archived" | "idea";

export interface Project {
  name: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  // External URL (GitHub repo, live site, write-up) or an internal path
  // like "/blog/some-post". Omit entirely for a project with no link yet.
  url?: string;
}

export const projects: Project[] = [
  {
    name: "WhatsApp Signal Extraction",
    description:
      "An AI framework that turns unstructured group-chat investment chatter into structured, trackable signals -- classification, conviction scoring, and pattern recognition over noisy real-world text.",
    status: "active",
    tags: ["ai", "investing"],
  },
  {
    name: "Portfolio Rules Engine",
    description:
      "A systematic sell/hold rules engine for equity positions -- staged exits, milestone profit-taking, and index-dip logic, built as a personal HTML/JS tool.",
    status: "active",
    tags: ["investing", "tooling"],
  },
  {
    name: "Fitness Dashboard",
    description: "A daily-synced personal fitness dashboard pulling from Garmin, generated and deployed automatically.",
    status: "active",
    tags: ["personal", "automation"],
    url: "https://chitrakgangrade.github.io/fitness-dashboard/",
  },
];
