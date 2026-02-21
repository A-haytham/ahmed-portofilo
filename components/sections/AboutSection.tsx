"use client";

import { motion } from "motion/react";
import { Code2, Rocket, Zap } from "lucide-react";
import { Badge } from "../Badge";
import { SectionHeader } from "../SectionHeader";

const skills = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "JavaScript", level: 92 },
  { name: "Tailwind CSS", level: 94 },
];

const techBadges = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Redux",
  "GraphQL",
  "REST API",
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
                I&apos;m a frontend engineer specializing in building scalable,
                high-performance web applications. With expertise in React,
                Next.js, and TypeScript, I create seamless user experiences
                that combine beautiful design with robust functionality.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                My focus is on modern UI systems, API integration, interactive
                dashboards, and delivering pixel-perfect implementations that
                perform at scale.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                  <Code2 className="mx-auto mb-2 h-8 w-8 text-[#0ea5e9]" />
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-sm text-gray-400">Years Exp</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                  <Rocket className="mx-auto mb-2 h-8 w-8 text-[#a855f7]" />
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                  <Zap className="mx-auto mb-2 h-8 w-8 text-[#0ea5e9]" />
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Committed</div>
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
              <h4 className="mb-4 text-xl font-bold text-white">Technologies</h4>
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
      </div>
    </section>
  );
}
