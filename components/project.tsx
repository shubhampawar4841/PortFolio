"use client";

import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  linkToProject,
}: ProjectProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={sectionRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-6 sm:mb-8 last:mb-0"
    >
      <CardContainer className="inter-var bg-gray-100 rounded-lg max-w-[42rem] border overflow-hidden relative sm:h-[24rem] transition hover:bg-gray-200 shadow-md">
        <CardBody className="relative group/card w-auto h-auto rounded-xl mt-4 p-6 flex flex-col items-start">
          <div className="flex flex-col flex-grow">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          </div>
          <a href={linkToProject} target="_blank" className="relative z-10">
            <Image
              src={imageUrl}
              alt={`Project: ${title}`}
              quality={95}
              className="w-full h-[18rem] rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </a>
          <ul className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <CardItem key={index}>
                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">
                  {tag}
                </li>
              </CardItem>
            ))}
          </ul>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
