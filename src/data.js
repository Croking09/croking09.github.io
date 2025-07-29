const navRoutes = ["/", "/skills", "/projects", "/contact"];

const navbarItems = [
  {text: "Overview", route: navRoutes[0]},
  {text: "Skills", route: navRoutes[1]},
  {text: "Projects", route: navRoutes[2]},
  {text: "Contact", route: navRoutes[3]}
];

const skills = [
  {name: "HTML5", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/es/docs/Web/HTML"},
  {name: "CSS3", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/es/docs/Web/CSS"},
  {name: "JavaScript", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/es/docs/Web/JavaScript"},
  {name: "React", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", url: "https://es.react.dev/"},
  {name: "NodeJS", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org/en"},
  {name: "Java", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", url: "https://www.java.com/es/"},
  {name: "Spring", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", url: "https://spring.io/"},
  {name: "Maven", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg", url: "https://maven.apache.org/"},
  {name: "Python", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", url: "https://www.python.org/"},
  {name: "Git", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", url: "https://git-scm.com/"},
  {name: "GitHub", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", url: "https://github.com/"},
  {name: "PostgreSQL", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", url: "https://www.postgresql.org/"},
  {name: "TailwindCSS", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com/"},
  {name: "JetBrainsIDE", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetbrains/jetbrains-original.svg", url: "https://www.jetbrains.com/"},
  {name: "VSCode", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com/"},
  {name: "UML", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg", url: "https://www.uml.org/"},
  {name: "TypeScript", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg", url: "https://www.typescriptlang.org/"},
];

const socials = [
  {name: "GitHub", username: "Croking09", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", url: "https://github.com/Croking09"},
  {name: "Google", username: "javierhm2004@gmail.com", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg", url: "mailto:javierhm2004@gmail.com"},
];

const ownProjects = [
  {userName: "Croking09", repoName: "markdown-editor"},
];

const collaborations = [
  {userName: "bencheeorg", repoName: "benchee"},
];

export { navRoutes, navbarItems, skills, socials, ownProjects, collaborations };
