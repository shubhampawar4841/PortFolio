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
import mongoHubImg from "@/public/MongooseHub.png"
import newsimg from "@/public/8D058X3FVt.png"


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
    name:"Experience",
    hash:"#experience",
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
    tags: ["ReactJS", "JWT", "Typescript", "PostgreSQL", "Serverless", "Hono"],
    imageUrl: corpcommentImg,
    linkToProject: "https://medium-blogg-app.netlify.app",
  },
  {
    title: "Dynamic Chat",
    description:
      "A real-time messaging app with authentication and online user status using Socket.io. It allows instant text chat and image sharing.",
    tags: ["React", "Tailwind CSS", "MERN", "Socket.io", "Zustand"],
    imageUrl: Chat,
    linkToProject: "https://chat-application-production.onrender.com/",
  },
  {
    title: "WearHouse",
    description:
      "An eCommerce platform for fashion products. Built with React-JS and Material-UI, it provides a seamless shopping experience and smooth UI.",
    tags: ["ReactJS", "CSS", "Material UI", "MongoDB"],
    imageUrl: wearhouse,
    linkToProject: "https://ecommerce-web-five-psi.vercel.app/",
  },
  {
    title: "MongoHub",
    description:
      "MongoHub is a website to learn about MongoDB databases and all related concepts, based on my personal learnings.",
    tags: ["React", "TailwindCSS", "JavaScript", "MongoDB"],
    imageUrl: mongoHubImg,
    linkToProject: "https://mongoose-hub.vercel.app",
  },
    {
    title: "DailyPulse",
    description:
      "A web application that fetches and displays the latest news using the NewsAPI. It provides real-time updates with user-friendly UI and error handling.",
    tags: ["ReactJS", "TailwindCSS", "NewsAPI", "Responsive Design"],
    imageUrl: newsimg, // Replace with the actual image link for your project
    linkToProject: "https://github.com/shubhampawar4841/DailyPulse", // Replace with the deployment link of your project
  },
  {
    title: "WeatherAPI",
    description:
      "A weather forecasting app that displays real-time weather conditions and weekly forecasts using open APIs.",
    tags: ["ReactJS", "TailwindCSS", "Weather API", "Responsive UI"],
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

export const experienceData = [
  {
    title: "Software Developer Intern",
    company: "Finora AI",
    date: "March 2025 – Present",
    description: `
      • Contributing to the development of a SaaS platform integrating AI-driven solutions for investment advisors.
      • Building and optimizing Next.js applications with TypeScript for seamless user experience.
      • Implementing Prisma ORM for database interactions using Supabase as the backend.
      • Enhancing UI components using TailwindCSS, Radix UI, and shadcn/ui for modern design.
      • Managing authentication and security using Clerk.js.
      • Collaborating with a fast-paced startup team to deliver scalable and innovative financial solutions.
    `,
    icon: "💼",
  },
];
