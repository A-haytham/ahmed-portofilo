"use client";

import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2024 - Present",
    description:
      "Leading frontend development for enterprise-scale applications. Built reusable component library and improved performance by 40%.",
    skills: ["React", "Next.js", "TypeScript", "Team Leadership"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2022 - 2024",
    description:
      "Developed responsive web applications and interactive dashboards for clients across various industries.",
    skills: ["React", "JavaScript", "Tailwind CSS", "API Integration"],
  },
  {
    id: 3,
    title: "Junior Frontend Developer",
    company: "Startup Lab",
    period: "2021 - 2022",
    description:
      "Collaborated on building MVPs and prototypes. Learned modern web development practices and agile methodologies.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey in frontend development"
        />

        <div className="relative">
          <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-gradient-to-b from-[#0ea5e9] via-[#a855f7] to-[#0ea5e9] md:left-1/2 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:pr-[50%] md:text-right"
                  : "md:ml-auto md:pl-[50%]"
              }`}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
                className="absolute left-0 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#0a0a14] bg-gradient-to-br from-[#0ea5e9] to-[#a855f7] md:left-1/2"
              />

              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl border border-white/10 bg-[rgba(17,17,31,0.6)] p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#0ea5e9]/50"
                >
                  <div className="mb-3 flex items-center gap-2 text-[#0ea5e9]">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>

                  <div className="mb-3 flex items-start gap-3">
                    <div className="rounded-lg bg-[#0ea5e9]/20 p-2">
                      <Briefcase size={20} className="text-[#0ea5e9]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                  </div>

                  <p className="mb-4 text-gray-300">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
