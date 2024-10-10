"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { achievementsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Achievements() {
  const { ref } = useSectionInView("Achievements");

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      ref={ref}
      id="achievements"
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My Achievements</SectionHeading>
      <VerticalTimeline lineColor="#e5e7eb">
        {achievementsData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.05)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.5rem 2rem",
                borderRadius: "0.5rem",
                backdropFilter: "blur(10px)",
              }}
              contentArrowStyle={{
                borderRight: "0.5rem solid rgba(156, 163, 175, 0.5)",
              }}
              date={item.date}
              dateClassName="text-gray-500 font-medium"
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
                boxShadow: "0 0 0 4px #e5e7eb",
              }}
            >
              <h3 className="font-bold text-xl mb-1 text-gray-900">{item.title}</h3>
              <p className="font-medium text-gray-500 mb-2">{item.location}</p>
              <p className="text-gray-700 text-base leading-relaxed">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}