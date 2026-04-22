"use client";

import { motion } from "motion/react";
import { Code2, Rocket, Zap } from "lucide-react";
import { Badge } from "../Badge";
import { SectionHeader } from "../SectionHeader";

const skills = [
  { name: "React.js", level: 95 },
  { name: "Next.js", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "JavaScript (ES6+)", level: 94 },
  { name: "Tailwind CSS", level: 95 },
];

const techBadges = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "Tailwind CSS",
  "Bootstrap 5",
  "REST APIs",
  "Axios",
  "Formik/Yup",
  "Git",
  "Responsive Design",
];

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="About Me"
          subtitle="Passionate about crafting exceptional digital experiences"
        />

        <div className="grid items-start gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0ea5e9]/10 to-[#a855f7]/10 p-8 backdrop-blur-sm">
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                Front-End Developer with hands-on experience in building modern,
                responsive web applications using React and Next.js. Strong
                understanding of component-based architecture, state management,
                and API integration.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                Passionate about clean code, performance optimization, and
                delivering user-focused interfaces. Currently seeking an
                opportunity to grow within a professional team and contribute to
                scalable, real-world products.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                  <Code2 className="mx-auto mb-2 h-6 w-6 text-[#0ea5e9] sm:h-8 sm:w-8" />
                  <div className="text-xl font-bold text-white sm:text-2xl">
                    3+
                  </div>
                  <div className="text-xs text-gray-400 sm:text-sm">
                    Years Exp
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                  <Rocket className="mx-auto mb-2 h-6 w-6 text-[#a855f7] sm:h-8 sm:w-8" />
                  <div className="text-xl font-bold text-white sm:text-2xl">
                    50+
                  </div>
                  <div className="text-xs text-gray-400 sm:text-sm">
                    Projects
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                  <Zap className="mx-auto mb-2 h-6 w-6 text-[#0ea5e9] sm:h-8 sm:w-8" />
                  <div className="text-xl font-bold text-white sm:text-2xl">
                    100%
                  </div>
                  <div className="text-xs text-gray-400 sm:text-sm">
                    Committed
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="mb-6 text-2xl font-bold text-white">Core Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-[#0ea5e9]">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + 0.3,
                        duration: 1,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#a855f7]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <h4 className="mb-4 text-xl font-bold text-white">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Badge
                      variant={
                        index % 3 === 0
                          ? "accent"
                          : index % 3 === 1
                            ? "purple"
                            : "default"
                      }
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0ea5e9]/10 to-[#a855f7]/10 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-2xl font-bold text-white">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Bachelor's Degree in Law
                </h4>
                <p className="text-sm text-gray-400">
                  Ain Shams University, Cairo • 06/2023
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Front-End Development Course
                </h4>
                <p className="text-sm text-gray-400">
                  Route Academy • 2024-2025
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  React & TypeScript Specialization
                </h4>
                <p className="text-sm text-gray-400">
                  Muhammad Naga (Codeawy) & Jonas Schmedtmann
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  UI Design & Figma
                </h4>
                <p className="text-sm text-gray-400">Ehab Fayez</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0ea5e9]/10 to-[#a855f7]/10 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-2xl font-bold text-white">Languages</h3>
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-white font-semibold">Arabic</span>
                  <span className="text-[#0ea5e9]">Native</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-full bg-gradient-to-r from-[#0ea5e9] to-[#a855f7]" />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-white font-semibold">English</span>
                  <span className="text-[#0ea5e9]">Advanced</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[80%] bg-gradient-to-r from-[#0ea5e9] to-[#a855f7]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
