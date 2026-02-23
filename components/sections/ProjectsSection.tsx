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
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts and inventory management",
    tags: ["React", "TypeScript", "Dashboard"],
    category: ["React", "Dashboards"],
    image: "ecommerce dashboard analytics",
  },
  {
    id: 2,
    title: "Social Media Platform",
    description:
      "Modern social platform with real-time messaging and content sharing",
    tags: ["Next.js", "TypeScript", "Real-time"],
    category: ["Next", "UI"],
    image: "social media app interface",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Kanban-style task manager with drag-and-drop functionality",
    tags: ["React", "Redux", "UI"],
    category: ["React", "UI"],
    image: "task management kanban board",
  },
  {
    id: 4,
    title: "Financial Analytics",
    description: "Advanced financial dashboard with data visualization and reports",
    tags: ["Next.js", "Charts", "Dashboard"],
    category: ["Next", "Dashboards"],
    image: "financial analytics dashboard",
  },
  {
    id: 5,
    title: "Healthcare Portal",
    description: "Patient management system with appointment scheduling",
    tags: ["React", "TypeScript", "Dashboard"],
    category: ["React", "Dashboards"],
    image: "healthcare medical portal",
  },
  {
    id: 6,
    title: "Portfolio CMS",
    description: "Headless CMS for managing portfolio content with live preview",
    tags: ["Next.js", "API", "UI"],
    category: ["Next", "UI"],
    image: "content management system cms",
  },
];

const filters = ["All", "React", "Next", "Dashboards", "UI"];

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
                    <Badge key={tag} variant={idx % 2 === 0 ? "accent" : "purple"}>
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#0ea5e9] px-4 py-2 text-white transition-colors hover:bg-[#0284c7]"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white transition-colors hover:bg-white/20"
                  >
                    <Github size={16} />
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
