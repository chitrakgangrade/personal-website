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
    name: "Project Placeholder One",
    description: "A one-line description of what this project is and why it exists.",
    status: "active",
    tags: ["ai", "experiment"],
    url: "https://github.com/",
  },
  {
    name: "Project Placeholder Two",
    description: "Another short, honest description -- what it does, not a sales pitch.",
    status: "idea",
    tags: ["strategy", "writing"],
  },
  {
    name: "Project Placeholder Three",
    description: "Something older that isn't actively maintained anymore, kept for the record.",
    status: "archived",
    tags: ["side-project"],
    url: "https://github.com/",
  },
];
