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
    title: "MERN Stack Developer",
    location: "Samaritan Technologies, Lahore, Pakistan",
    description: [
      "Collaborated with a team of 27 developers to design and implement full-stack web applications using Flask, React, PostgreSQL, and Docker to analyze GitHub data",
      "Built reusable front-end components and integrated APIs into responsive user interfaces",
      "Enhanced performance of web applications using React and Node.js",
      "Integrated third-party APIs (RESTful & GraphQL) into the application, ensuring smooth data exchange between frontend and backend",
      "Proficient in building and consuming RESTful APIs and GraphQL endpoints using Express and Node.js, ensuring secure data handling with JWT and OAuth",
      "Skilled in utilizing MongoDB Atlas for schema design, aggregation pipelines, and optimizing queries for performance at scale",
      "Built real-time web applications using Socket.IO and integrated them with MongoDB for data persistence",
    ],
    icon: React.createElement(FaReact),
    date: "Dec 2022 - Present",
  },
  {
    title: "MERN Stack Developer",
    location: "JMM Innovations, Riyad, Saudi Arabia",
    description: [
      "Developed full-stack solutions for a Saudi-based application, FirmSanad, to optimize firm setup processes",
      "Designed user-friendly interfaces and implemented backend APIs with Express and MongoDB",
      "Optimized user interfaces with ReactJS for enhanced usability and performance",
      "Streamlined authentication processes with Clerk and JWT for secure user management",
      "Developed custom middleware in Express.js for authentication, error handling, and request validation",
      "Optimized back-end algorithms for time and space complexity using advanced JavaScript concepts and Big-O analysis",
    ],
    icon: React.createElement(FaReact),
    date: "May 2024 - Sep 2024",
  },
  {
    title: "MERN Stack Developer",
    location: "The Tutor, Dubai, UAE",
    description: [
      "Developed the latest user-facing features using React and built reusable components & front-end services for future use",
      "Identified web-based user interactions and developed highly-responsive user interface components via React concepts",
      "Conducted a human subject study to determine which video game dungeon generation technique is enjoyable",
      "Integrated APIs with the user interface",
      "Enhanced SEO performance for React-based single-page applications (SPAs) by implementing server-side rendering (SSR) with Next.js",
      "Collaborated to create strategic initiatives to code, and test solutions",
    ],
    icon: React.createElement(FaReact),
    date: "March 2023 - Jan 2024",
  },
  {
    title: "Front-End Developer",
    location: "NFinity Solutions, Lahore, Pakistan",
    description: [
      "Specialized in form validations using Yup and creating dynamic forms with Formik",
      "Developed a Watches E-Commerce store using NextJS, GraphQL, and Apollo client, with Next-Auth for authentication and server-side data fetching",
      "Created responsive web designs using JavaScript, CSS, jQuery, and Material UI, with reusable components",
      "Implemented user authentication, role-based rendering, JWT authorization, and domain and rule configuration",
      "Optimized performance using Big-O notation and advanced concepts in objects and arrays for dynamic data manipulation",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2019 - Dec 2022",
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
