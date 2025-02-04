"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaTwitter, FaLinkedin, FaCode } from "react-icons/fa"
import { SiLeetcode, SiGeeksforgeeks, SiCodingninjas } from "react-icons/si"

const profiles = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/shubhampawar4841" },
  { name: "LeetCode", icon: SiLeetcode, url: "https://leetcode.com/shubhampawar4036" },
  { name: "GeeksforGeeks", icon: SiGeeksforgeeks, url: "https://auth.geeksforgeeks.org/user/shubhampa9xnw" },
  { name: "Coding Ninjas", icon: SiCodingninjas, url: "https://www.naukri.com/code360/profile/Shubhamppawar" },
  { name: "Twitter", icon: FaTwitter, url: "https://twitter.com/shubhampawar484" },
]

export default function ProfileLinks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Profiles</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <profile.icon className="text-4xl mb-2 text-gray-700" />
                 <span className="text-sm font-medium text-gray-600">{profile.name}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
