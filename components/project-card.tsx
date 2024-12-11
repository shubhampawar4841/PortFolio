import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from 'lucide-react';
import type { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: readonly string[];  // Updated to accept readonly arrays
  imageUrl: StaticImageData;
  linkToProject: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  linkToProject,
}: ProjectCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-8"
    >
      <section className="bg-white max-w-[42rem] border border-gray-200 rounded-lg overflow-hidden relative sm:h-[20rem] hover:shadow-lg transition duration-300 dark:bg-gray-900 dark:border-gray-800">
        <div className="pt-6 pb-8 px-6 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed dark:text-gray-300 text-base">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full dark:bg-gray-800 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={linkToProject}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400 font-medium"
          >
            View Project
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>

        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-lg shadow-xl
            transition duration-300
            group-hover:scale-[1.02]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-1

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-1

            group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}

