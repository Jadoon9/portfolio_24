import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import starsai from "@/public/starsai.png";
import thetutor from "@/public/thetutor.png";
import firmsanad from "@/public/firmsanad.png";
import simplestudy from "@/public/simplestudy.png";
import eqlize from "@/public/eqlize.png";
import wonderraw from "@/public/wonderraw.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior ReactJS Developer",
    location: "StarsAI, UAE (Freelance)",
    description: [
      "Delivered ReactJS, Node.js, and GraphQL projects with end-to-end management, ensuring timely launches.",
      "Enhanced scalability with Redux, React Query, and TypeScript.",
      "Boosted performance using lazy loading, GraphQL optimizations, and caching.",
      "Added AI features and visuals with D3.js, Chart.js, and TypeScript.",
      "Streamlined RESTful API and GraphQL integrations with MongoDB.",
    ],
    icon: React.createElement(FaReact),
    date: "Oct 2024 - Present",
  },
  {
    title: "ReactJS Developer",
    location: "Samaritan Technologies, Lahore, Pakistan",
    description: [
      "Built and modernized React applications with a focus on performance and user experience.",
      "Improved scalability with Redux and React Query.",
      "Optimized load times with lazy loading and efficient component design.",
      "Collaborated with teams to ensure seamless API and data integration.",
      "Managed source code with Git for smooth collaboration.",
    ],
    icon: React.createElement(FaReact),
    date: "Dec 2022 - October 2024",
  },
  {
    title: "ReactJS Developer",
    location: "JMM Innovations, Riyadh, Saudi Arabia (Outsourced)",
    description: [
      "Developed responsive web applications for business solutions in Saudi Arabia.",
      "Integrated RESTful APIs to enhance functionality and performance.",
      "Improved speed and efficiency with lazy loading and scalable designs.",
      "Collaborated across teams to meet user and project requirements.",
      "Managed version control efficiently with Git.",
    ],
    icon: React.createElement(FaReact),
    date: "April 2024 - Sep 2024",
  },
  {
    title: "ReactJS Developer",
    location: "The Tutor, Dubai, UAE (Outsourced)",
    description: [
      "Developed user-facing features using React and built reusable components.",
      "Enhanced performance using server-side rendering (SSR) with Next.js.",
      "Integrated APIs seamlessly with user interfaces for reliability.",
      "Optimized SPAs for speed and SEO performance.",
      "Improved user experience with responsive design and scalable features.",
    ],
    icon: React.createElement(FaReact),
    date: "March 2023 - Jan 2024",
  },
  {
    title: "Front-End Developer",
    location: "NFinity Solutions, Lahore, Pakistan",
    description: [
      "Built responsive and accessible applications with modern tools and frameworks.",
      "Upgraded legacy applications to meet current standards and improve functionality.",
      "Ensured timely deliveries by accurately estimating project requirements.",
      "Integrated user interfaces with AWS platforms for smooth deployment.",
      "Streamlined code management with Git workflows.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2018 - Dec 2022",
  },
  {
    title: "BS Computer Science",
    location: "Manshera, Pakistan",
    description: [
      "Completed a Bachelor of Science in Computer Science from Hazara University, gaining expertise in software development and modern computing technologies.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2013-2017",
  },
];

export const projectsData = [
  {
    title: "StarsAi",
    description:
      "I am working as a full-stack developer on this startup project. StarsAI provides AI-powered solutions to simplify school operations and streamline educational management.",
    tags: ["React", "Node.js", "MongoDB", "Material ui", "Bootstrap"],
    imageUrl: starsai,
    link: "https://stars-ai.com/",
  },
  {
    title: "The Tutor",
    description:
      "TheTutor.me offers expert tutoring for personalized, flexible learning across various subjects.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "ASP.net",
      "Tailwind",
      "Bootstrap",
      "Redux",
    ],
    imageUrl: thetutor,
    link: "https://thetutor.me/",
  },
  {
    title: "Wonder Raw",
    description:
      "Wonder Raw offers customizable, on-demand apparel production using sustainable materials and eco-friendly practices for clothing brands​",
    tags: [
      "React",
      "Node.js",
      "MongoDb",
      "Firebase",
      "Tailwind",
      "Redux",
      "Formik",
      "ThreeJS",
    ],
    imageUrl: wonderraw,
    link: "https://store.wonder-raw.com/ ",
  },
  {
    title: "FirmSanad",
    description:
      "Firmsanad streamlines business setup and compliance in Saudi Arabia with tools for registration, licensing, and regulatory management.",
    tags: [
      "React",
      "Node.js",
      "ASP.net",
      "SQL",
      "Tailwind",
      "React query",
      "Redux",
    ],
    imageUrl: firmsanad,
    link: "https://firmsanad.com/",
  },
  {
    title: "Simple Studying",
    description:
      "SimpleStudying is an edtech platform offering simplified study materials, social networking, and collaborative tools to help students connect and enhance their learning.",
    tags: ["React", "Django", "SQL", "Tailwind", "Redux", "React PDF"],
    imageUrl: simplestudy,
    link: "https://simplestudying.com/",
  },
  {
    title: "Eqlize Now",
    description:
      "Eqlize Now offers a platform for businesses to manage employee equity, stock options, and compensation with a focus on transparency and compliance.",
    tags: [
      "React",
      "Node.js",
      "MongoDb",
      "Tailwind",
      "Redux",
      "React Query",
      "Formik",
    ],
    imageUrl: eqlize,
    link: "https://www.eqlizenow.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Firebase",
  "MongoDB",
  "Redux",
  "Redux Toolkit",
  "ReactQuery",
  "Formik",
  "ThreeJS",
  "GraphQL",
  "Apollo",
  "Express",

  "Framer Motion",
] as const;
