import type { Socials } from "@/types";

import GhImg from "@/assets/logos/gh.svg";
import MailIcon from "@/assets/icons/mail.svg";

export const socials: Socials[] = [
  {
    id: "mail",
    name: "Email",
    username: "javierhm2004@gmail.com",
    url: "mailto:javierhm2004@gmail.com",
    logo: MailIcon,
  },
  {
    id: "gh",
    name: "GitHub",
    username: "Croking09",
    url: "https://github.com/Croking09",
    logo: GhImg,
  },
];
