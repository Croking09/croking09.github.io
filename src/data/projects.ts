import type { Project } from "@/types";

import mdEditorImg from "@/assets/projects/markdown-editor.webp";
import crokingPasteImg from "@/assets/projects/croking-paste.webp";
import padelInRioImg from "@/assets/projects/padel-in-rio.webp";

export const projects: Project[] = [
  {
    id: "padel-in-rio",
    title: "Padel in Rio Web",
    description: "Página oficial del club de padel Padel in Rio.",
    techStack: ["nextjs", "supabase", "ts", "tailwindcss"],
    url: "https://github.com/Croking09/padel-in-rio-web/",
    image: padelInRioImg,
  },
  {
    id: "md-editor",
    title: "Markdown Editor",
    description: "Editor de Markdown PWA multiplataforma.",
    techStack: ["react", "vite", "ts", "tailwindcss"],
    url: "https://github.com/Croking09/markdown-editor",
    image: mdEditorImg,
  },
  {
    id: "croking-paste",
    title: "Croking Paste",
    description: "Clon de PokePaste con Firebase.",
    techStack: ["react", "vite", "tailwindcss", "firebase"],
    url: "https://github.com/Croking09/croking-paste",
    image: crokingPasteImg,
  },
];
