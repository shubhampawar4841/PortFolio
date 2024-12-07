"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaCode, FaGamepad, FaFilm } from "react-icons/fa"

export default function AboutMe() {
  const skills = [
    "C++", "JavaScript", "React", "Next.js", "Node.js", "MongoDB",
    "MySQL", "PostgreSQL", "TypeScript", "Prisma", "CloudFlare", "AWS", "FireBase"
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4"
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <motion.p 
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
  
              Final year student pursuing a Bachelor of Technology degree in{" "}
              <span className="font-semibold text-blue-600">Electronics and Computer Science</span> at
              Vidyalankar Institute of Technology. I am skilled in{" "}
              <span className="font-semibold text-blue-600">full-stack web development and problem solving</span>.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              My favorite part of programming is the problem-solving aspect. I{" "}
              <span className="font-semibold text-blue-600">love</span> the feeling of finally figuring out a solution to a problem.
            </motion.p>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">My Core Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.p 
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              I am always eager to learn new technologies and currently seeking a{" "}
              <span className="font-semibold text-blue-600">full-time position</span> as a software developer/engineer.
            </motion.p>
            <motion.div
              className="border-t border-gray-200 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">When I'm not coding</h3>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <FaGamepad className="text-gray-500 mr-2" />
                  <span className="text-gray-600">Playing video games</span>
                </div>
                <div className="flex items-center">
                  <FaFilm className="text-gray-500 mr-2" />
                  <span className="text-gray-600">Watching movies</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
