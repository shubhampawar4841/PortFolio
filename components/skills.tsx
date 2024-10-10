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

const colorClasses = [
  "bg-red-100 hover:bg-red-200",
  "bg-blue-100 hover:bg-blue-200",
  "bg-green-100 hover:bg-green-200",
  "bg-yellow-100 hover:bg-yellow-200",
  "bg-purple-100 hover:bg-purple-200",
  "bg-pink-100 hover:bg-pink-200",
  "bg-indigo-100 hover:bg-indigo-200",
  "bg-teal-100 hover:bg-teal-200",
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