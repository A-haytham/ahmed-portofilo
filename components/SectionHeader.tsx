"use client";

import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={centered ? "mb-16 text-center" : "mb-12"}
    >
      <h2 className="mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-5xl font-bold text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] ${centered ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
}
