"use client";

import Image from "next/image";
import React from "react";
import ProfilePic from "../public/profile.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FlipWords } from "./ui/flip-words";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView("Home", 0.5);

  const words = ["Full Stack Developer", "Software Engineer", "NextJS Developer"];

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-96 "
      id="home"
    >
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={ProfilePic}
              alt="Profile Picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 object-cover shadow-xl rounded-full border-[0.35rem] border-white"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl "
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
  className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
>
  <span className="font-bold">Hello, I&apos;m Shubham.</span> I&apos;m a{" "}
  <span className="font-bold"><FlipWords className="!text-black" duration={2000} words={words} /></span> {""}
   I enjoy
  building <span className="italic">websites</span>. My focus is{" "}
  <span className="underline">Next.js</span>. FullStack developer skilled in Next.js, React, Tailwind CSS, TypeScript, ShadCN, MongoDB, PostgreSQL, Prisma and Firebase. Strong portfolio in these technologies.
</motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-[1.3rem] px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me Here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 hover:bg-gray-200 active:scale-105 transition cursor-pointer border border-black/10"
          href="/Pawar-resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-x-[0.5] transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/shubham-pawar-4231311a4/"
          target="_blank"
          className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-gray-200 active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/shubhampawar4841"
          target="_blank"
          className="group bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-gray-200 active:scale-105 transition cursor-pointer border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
