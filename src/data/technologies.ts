import type { Technology } from "@/types";

import htmlImg from "@/assets/logos/html.svg";
import cssImg from "@/assets/logos/css.svg";
import jsImg from "@/assets/logos/js.svg";
import reactImg from "@/assets/logos/react.svg";
import nodejsImg from "@/assets/logos/nodejs.svg";
import javaImg from "@/assets/logos/java.svg";
import springImg from "@/assets/logos/spring.svg";
import mvnImg from "@/assets/logos/mvn.svg";
import pythonImg from "@/assets/logos/python.svg";
import gitImg from "@/assets/logos/git.svg";
import ghImg from "@/assets/logos/gh.svg";
import psqlImg from "@/assets/logos/psql.svg";
import tailwindcssImg from "@/assets/logos/tailwindcss.svg";
import jetbrainsideImg from "@/assets/logos/jetbrainside.svg";
import vscodeImg from "@/assets/logos/vscode.svg";
import umlImg from "@/assets/logos/uml.svg";
import tsImg from "@/assets/logos/ts.svg";
import astroImg from "@/assets/logos/astro.svg";
import viteImg from "@/assets/logos/vite.svg";

export const technologies: Technology[] = [
  {
    id: "html",
    name: "HTML",
    color: "#E34F26",
    logo: htmlImg,
    category: "Frontend",
  },
  {
    id: "css",
    name: "CSS",
    color: "#1572B6",
    logo: cssImg,
    category: "Frontend",
  },
  {
    id: "js",
    name: "JavaScript",
    color: "#F7DF1E",
    logo: jsImg,
    category: "Frontend",
  },
  {
    id: "react",
    name: "React",
    color: "#61DAFB",
    logo: reactImg,
    category: "Frontend",
  },
  {
    id: "nodejs",
    name: "NodeJS",
    color: "#339933",
    logo: nodejsImg,
    category: "Tool",
  },
  {
    id: "java",
    name: "Java",
    color: "#ED8B00",
    logo: javaImg,
    category: "Backend",
  },
  {
    id: "spring",
    name: "Spring",
    color: "#6DB33F",
    logo: springImg,
    category: "Backend",
  },
  {
    id: "mvn",
    name: "Maven",
    color: "#C71A36",
    logo: mvnImg,
    category: "Backend",
  },
  {
    id: "python",
    name: "Python",
    color: "#3776AB",
    logo: pythonImg,
    category: "Backend",
  },
  {
    id: "git",
    name: "Git",
    color: "#F05032",
    logo: gitImg,
    category: "Tool",
  },
  {
    id: "gh",
    name: "GitHub",
    color: "#181717",
    logo: ghImg,
    category: "Tool",
  },
  {
    id: "psql",
    name: "PostgreSQL",
    color: "#336791",
    logo: psqlImg,
    category: "Backend",
  },
  {
    id: "tailwindcss",
    name: "TailwindCSS",
    color: "#06B6D4",
    logo: tailwindcssImg,
    category: "Frontend",
  },
  {
    id: "jetbrainside",
    name: "JetBrainsIDE",
    color: "#000000",
    logo: jetbrainsideImg,
    category: "Tool",
  },
  {
    id: "vscode",
    name: "VSCode",
    color: "#007ACC",
    logo: vscodeImg,
    category: "Tool",
  },
  {
    id: "uml",
    name: "UML",
    color: "#FABD14",
    logo: umlImg,
    category: "Tool",
  },
  {
    id: "ts",
    name: "TypeScript",
    color: "#3178C6",
    logo: tsImg,
    category: "Frontend",
  },
  {
    id: "astro",
    name: "Astro",
    color: "#FF5D01",
    logo: astroImg,
    category: "Frontend",
  },
  {
    id: "vite",
    name: "Vite",
    color: "#646CFF",
    logo: viteImg,
    category: "Frontend",
  },
];
