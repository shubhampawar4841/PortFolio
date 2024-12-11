import React from "react";
import { CgTrophy } from "react-icons/cg";

import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuSchool } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import Chat from "@/public/DynamicChat.jpg";
import exploraStaysSS from "@/public/explora-stays-ss.png";
import weatherApiImg from "@/public/weatherApiImg.png"
import wearhouse from "@/public/WearHouse.png"

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
    name: "Achievements",
    hash: "#Achievements",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const achievementsData = [
  {
    title: "4-Star Coder at GeeksforGeeks",
    location: "Rating: 1874",
    description:
      "Demonstrates strong problem-solving skills in algorithms and data structures on a leading coding platform.",
    icon: React.createElement(CgTrophy),
    date: "2024",
  },
  {
    title: "2-Star Coder at CodeChef",
    location: "Competitive Programming",
    description:
      "Highlights experience in competitive coding challenges and ability to solve complex problems under pressure.",
    icon: React.createElement(CgTrophy),
    date: "2024",
  },
  {
    title: "Solved 450+ LeetCode Problems",
    location: "LeetCode",
    description:
      "Showcases deep understanding of technical concepts, algorithms, and coding proficiency across various problems.",
    icon: React.createElement(CgTrophy),
    date: "2024",
  },
  {
    title: "Ranked 14th on GFG College Portal",
    location: "GFG College Portal",
    description:
      "Achieved a top ranking among peers, reflecting consistent performance in core computer science topics.",
    icon: React.createElement(CgTrophy),
    date: "2024",
  },
  {
    title: "Rank 81 in Coding Ninjas Weekly Contest 127",
    location: "Coding Ninjas",
    description:
      "Secured a high rank in a competitive programming contest, demonstrating efficiency in problem-solving.",
    icon: React.createElement(CgTrophy),
    date: "2024",
  },
  {
    title: "Rank 33 in GFG Weekly Contest 156",
    location: "GeeksforGeeks",
    description:
      "Showcased problem-solving skills in a global contest, securing a competitive rank among top coders.",
    icon: React.createElement(CgTrophy),
    date: "2024",
  },
] as const;


export const projectsData = [
  {
    title: "Medium Web App",
    description:
      "The Medium.com Clone, with React and Cloudflare Workers, enables secure sign-in, content creation, and discovery of articles.",
    tags: ["ReactJS", "JWT", "Typescript", "PostgreSQL", "Serverless"],
    imageUrl: corpcommentImg,
    linkToProject: "https://medium-clone-five-dusky.vercel.app/",
  },
  {
    title: "Dynamic Chat",
    description:
      "A real-time messaging app with authentication and online user status using Socket.io. It allows instant text chat and image sharing.",
    tags: [
      "React",
      "Tailwind CSS",
      "MERN",
      "Socket.io",
      "Zustand",
    ],
    imageUrl: Chat,
    linkToProject: "https://chat-application-production.onrender.com/",
  },
  {
    title: "WearHouse",
    description:
      "An eCommerce platform for fashion products. Built with React-JS and Material-UI, it provides a seamless shopping experience and smooth UI.",
    tags: [
      "ReactJS",
      "CSS",
      "Material UI",
      "MongoDB",
    ],
    imageUrl: wearhouse,
    linkToProject: "https://ecommerce-web-five-psi.vercel.app/",
  },
  {
    title: "WeatherAPI",
    description:
      "A weather forecasting app that displays real-time weather conditions and weekly forecasts using open APIs.",
    tags: [
      "ReactJS",
      "TailwindCSS",
      "Weather API",
      "Responsive UI",
    ],
    imageUrl: weatherApiImg,
    linkToProject: "https://weather-app-react-7pyo.vercel.app/",
  },
] as const;

export const skillsData = [
  "C/C++",
  "Next.js",
  "TypeScript",
  "React.js",
  "JavaScript",
  "RESTful APIs",
  "Data Structures",
  "Algorithms",
  "Cloudflare Workers",
  "MongoDB",
  "Zod",
  "JWT",
  "SQL",
  "HTML",
  "CSS",
  "Prisma",
  "PostgreSQL",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "noSQL",
  "Serverless Backends",
  "ExpressJS",
  "REST APIs",
] as const;
