"use client";

import { motion } from "motion/react";
import { Code, Palette, Wrench } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript (ES6+)", level: 94 },
      { name: "HTML5", level: 94 },
      { name: "DOM", level: 90 },
    ],
  },
  {
    title: "Styling & UI",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "Bootstrap 5", level: 90 },
      { name: "Sass", level: 88 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    title: "Tools & APIs",
    icon: Wrench,
    skills: [
      { name: "REST APIs", level: 92 },
      { name: "Axios", level: 90 },
      { name: "Figma (UI Design)", level: 85 },
      { name: "Git", level: 90 },
      { name: "Formik/Yup", level: 88 },
    ],
  },
];

function CircularProgress({
  percentage,
  delay,
}: {
  percentage: number;
  delay: number;
}) {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative h-32 w-32">
      <svg className="h-full w-full -rotate-90 transform">
        <circle
          cx="64"
          cy="64"
          r="45"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="8"
          fill="none"
        />
        <motion.circle
          cx="64"
          cy="64"
          r="45"
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          initial={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference,
          }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">{percentage}%</span>
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Skills Overview"
          subtitle="My technical expertise and proficiencies"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="rounded-xl border border-white/10 bg-[rgba(17,17,31,0.6)] p-6 backdrop-blur-md transition-all duration-300 hover:border-[#0ea5e9]/50"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-gradient-to-br from-[#0ea5e9]/20 to-[#a855f7]/20 p-3">
                    <Icon className="h-6 w-6 text-[#0ea5e9]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      className="group flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-white transition-colors group-hover:text-[#0ea5e9]">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay:
                                categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                              ease: "easeOut",
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#a855f7]"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0ea5e9]/10 to-[#a855f7]/10 p-8 backdrop-blur-sm"
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-white">
            Core Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { name: "React", level: 95 },
              { name: "Next.js", level: 90 },
              { name: "TypeScript", level: 88 },
              { name: "Tailwind", level: 94 },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <motion.div whileHover={{ scale: 1.1 }} className="mb-3">
                  <CircularProgress
                    percentage={skill.level}
                    delay={index * 0.1 + 0.5}
                  />
                </motion.div>
                <p className="text-white transition-colors group-hover:text-[#0ea5e9]">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
