"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "../Badge";
import { GlassCard } from "../GlassCard";
import { SectionHeader } from "../SectionHeader";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const projects = [
  {
    id: 0,
    title: "4S ERP Platform",
    description:
      "Enterprise ERP solution with real-time dashboards, inventory management, and integrated modules for finance, HR, and sales operations",
    tags: ["Next.js", "TypeScript", "ERP", "Dashboard"],
    category: ["Featured"],
    image: "erp enterprise management system",
    liveUrl: "https://4-s-sigma.vercel.app/",
    githubUrl: "https://github.com/A-haytham/4s-erp-platform",
  },
  {
    id: 1,
    title: "Medicurb",
    description:
      "Medical transportation platform similar to Uber for healthcare services, connecting patients with hospitals for safe and timely transfers. Featuring authentication, secure data handling, and Google Maps API for location-based services.",
    tags: ["React.js", "Axios", "Formik", "Google Maps API"],
    category: ["React", "APIs"],
    image: "medical transportation healthcare",
    githubUrl: "https://github.com/A-haytham/medical-project",
  },
  {
    id: 2,
    title: "Fresh Cart",
    description:
      "Full-featured e-commerce web application with seamless shopping experience. Includes product listing, cart system, and order management with optimized data fetching.",
    tags: ["React.js", "React Query", "Context API", "Bootstrap"],
    category: ["React", "Full-Stack"],
    image: "ecommerce shopping platform",
    githubUrl: "https://github.com/A-haytham/Fresh-shop",
  },
];

const filters = [
  "All",
  "Featured",
  "React",
  "Frontend",
  "Dashboard",
  "APIs",
  "Full-Stack",
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Featured Projects"
          subtitle="A showcase of my recent work and side projects"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-wrap justify-center gap-3"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`
                rounded-full px-6 py-2 transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] text-white shadow-lg shadow-[#0ea5e9]/30"
                    : "border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10"
                }
              `}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="flex h-full flex-col">
                <div className="relative mb-4 h-48 overflow-hidden rounded-lg bg-gradient-to-br from-[#0ea5e9]/20 to-[#a855f7]/20">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/800x600/?${project.image}`}
                    alt={project.title}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 flex-grow text-gray-400">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge
                      key={tag}
                      variant={idx % 2 === 0 ? "accent" : "purple"}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#0ea5e9] px-4 py-2 text-white transition-colors hover:bg-[#0284c7]"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white transition-colors hover:bg-white/20 ${project.liveUrl ? "" : "flex-1"}`}
                  >
                    <Github size={16} />
                    GitHub
                  </motion.a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
