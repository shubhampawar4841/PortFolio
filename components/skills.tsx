"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.05 * index,
    },
  }),
};

// Array of colors for each skill
const colorClasses = [
  "bg-red-100 hover:bg-red-300 text-red-800",
  "bg-blue-100 hover:bg-blue-300 text-blue-800",
  "bg-green-100 hover:bg-green-300 text-green-800",
  "bg-yellow-100 hover:bg-yellow-300 text-yellow-800",
  "bg-purple-100 hover:bg-purple-300 text-purple-800",
  "bg-pink-100 hover:bg-pink-300 text-pink-800",
  "bg-indigo-100 hover:bg-indigo-300 text-indigo-800",
  "bg-teal-100 hover:bg-teal-300 text-teal-800",
];

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className={`border border-black/[0.1] rounded-xl px-5 py-3 cursor-default
                        ${colorClasses[index % colorClasses.length]}
                        transition-all duration-300 ease-in-out
                        hover:scale-110 hover:shadow-lg`}
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
