"use client"

import { experienceData } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function Experience() {
  return (
    <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container px-6 md:px-12">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">Work Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-[700px]">
            My professional journey and the skills I&apos;ve developed along the way.
          </p>
        </div>

        <div className="grid gap-8 mx-auto max-w-3xl">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-l-8 border-primary shadow-lg dark:shadow-gray-800 bg-white dark:bg-gray-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl text-primary">{experience.icon}</span>
                    <div>
                      <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">{experience.title}</CardTitle>
                      <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-300">
                        <span className="font-bold text-foreground">{experience.company}</span>
                        <span className="hidden sm:inline">•</span>
                        <Badge variant="outline" className="w-fit text-sm font-medium border-gray-400 dark:border-gray-600">
                          {experience.date}
                        </Badge>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-base text-gray-700 dark:text-gray-300 whitespace-pre-line space-y-2">
                    {experience.description.split("\n").map((point, i) => (
                      <div key={i} className="font-medium">{point}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
