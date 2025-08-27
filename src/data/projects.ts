import type { Project } from "@/types";

import mdEditorImg from "@/assets/projects/markdown-editor.webp";
import crokingPasteImg from "@/assets/projects/croking-paste.webp";

export const projects: Project[] = [
  {
    id: "md-editor",
    title: "Markdown Editor",
    description: "Editor de Markdown PWA multiplataforma.",
    techStack: ["react", "vite", "ts", "tailwindcss"],
    url: "https://croking09.github.io/markdown-editor/",
    image: mdEditorImg,
  },
  {
    id: "croking-paste",
    title: "Croking Paste",
    description: "Clon de PokePaste con FireBase.",
    techStack: ["react", "vite", "tailwindcss", "firebase"],
    url: "https://croking09.github.io/croking-paste/",
    image: crokingPasteImg,
  },
];
