import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  omnifood,
  meta,
  clone,
  dalle,
  tesla,
  shopify,
  threejs,
  omnifoodLogo,
  openai,
  three,
} from "../assets";

import task from '../assets/task.png'
import zarrin from '../assets/zarrin.JPG'
import blog from '../assets/blog.png'
import simple from '../assets/simple.jpg'
import stake from '../assets/stake.png'


export const navLinks = [
  {
    id: "",
    title: "_hello",
  },
  {
    id: "about",
    title: "_about-me",
  },
  {
    id: "projects",
    title: "_projects",
  },
  {
    id: "contact",
    title: "_contact-me",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];




const projects = [
  {
    name: "Real Estate Dashboard",
    description:
      "Web-based prototype that helps you organize and track tasks with ease. Whether you're managing personal to-dos or team projects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: task,
    source_code_link: "https://github.com/bavic9/tasks",
    live_link: "https://tasks-theta-nine.vercel.app/",
  },
  {
    name: "Zarrin",
    description:
      "A blog website for sharing insights and stories for easy reading and seamless navigation across various topics.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: zarrin,
    source_code_link: "https://github.com/bavic9/zarrin-app",
    live_link: "https://zarrin-app.vercel.app",
  },
  {
    name: "Blogger",
    description:
      "A blog app that lets users create, edit, and share posts with ease. It features a clean interface, supports rich text formatting.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/bavic9/blogger",
    live_link: "https://blogger-omega-lovat.vercel.app/",
  },
  {
    name: "Simply Recipe",
    description: "A simple recipe website where you can explore and enjoy delicious meals with easy instructions. Perfect for food lovers.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: simple,
    source_code_link: "https://github.com/bavic9/Simply-Recipes",
    live_link: "https://simply-recipes-mu.vercel.app/",
  },
  {
    name: "Stake Net",
    description: "A clone of the Starbucks website built using HTML5 & CSS3.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "coinbase api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: stake,
    source_code_link: "https://github.com/bavic9/stakenet",
    live_link: "https://cryptoapp-olive.vercel.app/",
  },
  {
    name: "Starbucks Clone",
    description: "A clone of the Starbucks website built using HTML5 & CSS3.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: clone,
    source_code_link: "",
    live_link: "https://starbucks-clone-ashy.vercel.app/",
  },
];

export { services, technologies, projects };
