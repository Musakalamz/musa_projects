import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import Comfy from "./assets/comfy.JPG";
import WildOasis from "./assets/dwild-oasis.JPG";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "typescript",
    icon: <SiTypescript className="h-14 w-14 text-emerald-500" />,
    text: "Expertise in TypeScript, leveraging on robust typing system to build scalable, maintainable and efficient web applications with enhanced code quality and reliability.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "NextJs",
    icon: <SiNextdotjs className="h-14 w-14 text-emerald-500" />,
    text: "Proficient in Next.js, building high-performance, server-rendered generated web applications with optimized user experiences, fast page loads and seamless navigation. ",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: WildOasis,
    url: "https://the-wild-oasis-website-jade-beta.vercel.app/",
    github: "https://github.com/Musakalamz/the-wild_oasis_website",
    title: "The Wild Oasis",
    text: "Escape to the Wild Oasis, a serene hotel nestled in nature. Book one of our cozy cabins and immerse yourself in the beauty of the great outdoors.",
  },
  {
    id: nanoid(),
    img: Comfy,
    url: "https://dcomfy.netlify.app/",
    github: "https://github.com/Musakalamz/Comfy",
    title: "Comfy",
    text: "Comfy is your one stop shop for stylish and comfortable furniture. Browse your curated collection of sofas, beds, chairs and more to transform your your living space into a cozy retreat. ",
  },
];
