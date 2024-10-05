"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const{ref} = useSectionInView("About");

  return (
    <motion.section
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
  >
    <SectionHeading>About Me</SectionHeading>
    <p className="mb-3 ">
      Final year student pursuing a Bachelor of Technology degree in{" "}
      <span className="font-medium">Electronics and Computer Science</span> at
      Vidyalankar Institute of Technology. I am skilled in{" "}
      <span className="font-medium">full-stack web development and problem solving</span>.
      <span className="italic">My favorite part of programming</span> is the problem-solving aspect. 
      I <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. 
      My core stack includes{" "}
      <span className="font-medium">
        C++, JavaScript, React, Next.js, Node.js, and MongoDB
      </span>. I am also familiar with Recoil, PostgreSQL, TypeScript, and Prisma. 
      I am always eager to learn new technologies and currently seeking a{" "}
      <span className="font-medium">full-time position</span> as a software developer/engineer.
    </p>
  
    <p>
      <span className="italic">When I&apos;m not coding</span>, I enjoy playing video games, 
      watching movies. I also have a keen interest in{" "}
    </p>
  </motion.section>
  
  );
}
