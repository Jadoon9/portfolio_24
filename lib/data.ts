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
      "Enhanced application scalability with modular front-end architecture and best practices.",
      "Improved website security with implementation of best practices for front-end code.",
      "Collaborated with back-end developers to improve website functionality and integrate new features.",
      "Improved user satisfaction by incorporating feedback into UI updates.",
    ],
    icon: React.createElement(FaReact),
    date: "Oct 2024 - Present",
  },
  {
    title: "ReactJS Developer",
    location: "Samaritan Technologies, Lahore, Pakistan",
    description: [
      "Maintained high-level expertise in React state management strategies.",
      "Modernized legacy applications through the implementation of React best practices and updated libraries",
      "Reduced application load times by optimizing React components and utilizing code-splitting techniques.",
      "Conducted code reviews to maintain high-quality standards and optimized web applications for speed and scalability",
    ],
    icon: React.createElement(FaReact),
    date: "Dec 2022 - October 2024",
  },
  {
    title: "ReactJS Developer",
    location: "JMM Innovations, Riyadh, Saudi Arabia (Outsourced)",
    description: [
      "Spearheading front-end development to simplify and enhance the process of establishing business firms in Saudi Arabia.",
      "Designed REST calls using React to streamline user interface performance.",
      "Implementing scalable and robust while adhering to industry best practices and coding standards.",
      "Collaborated with cross-functional teams to develop seamless integration of APIs, improving data flow within applications.",
    ],
    icon: React.createElement(FaReact),
    date: "April 2024 - Sep 2024",
  },
  {
    title: "ReactJS Developer",
    location: "The Tutor, Dubai, UAE (Outsourced)",
    description: [
      "Developed the latest user-facing features using React and built reusable components & front-end services for future use",
      "Identified web-based user interactions and developed highly-responsive user interface components via React concepts",
      "Conducted a human subject study to determine which video game dungeon generation technique is enjoyable",
      "Integrated APIs with the user interface",
      "Enhanced SEO performance for React-based single-page applications (SPAs) by implementing server-side rendering (SSR) with Next.js",
    ],
    icon: React.createElement(FaReact),
    date: "March 2023 - Jan 2024",
  },
  {
    title: "Front-End Developer",
    location: "NFinity Solutions, Lahore, Pakistan",
    description: [
      "Collaborate to create strategic initiatives to code, and test solutions.",
      "Updated old code bases to modern development standards, improving functionality.",
      "Assisted in scoping project requirements, providing accurate time estimates for feature development to ensure timely deliveries.",
      "Developed user interfaces for deployment on Amazon Web Services (AWS) platforms.",
      "Facilitated smooth version control processes by utilizing Git workflows for efficient team collaboration on projects.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2018 - Dec 2022",
  },
  {
    title: "BS Computer Science",
    location: "Manshera, Pakistan",
    description: [
      "I completed my Bachelor of Science in Computer Science from Hazara University, Pakistan, where I developed a strong foundation in software development, problem-solving, and modern computing technologies.",
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
