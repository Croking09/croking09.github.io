import type { Project } from "@/types";

import mdEditorImg from "@/assets/projects/markdown-editor.webp";

export const projects: Project[] = [
  {
    id: "md-editor",
    title: "Markdown Editor",
    description: "Editor de Markdown PWA multiplataforma.",
    techStack: ["react", "vite", "ts", "tailwindcss"],
    url: "https://croking09.github.io/markdown-editor/",
    image: mdEditorImg,
  },
];
