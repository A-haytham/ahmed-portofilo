"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "purple";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-white/10 text-white border-white/20",
    accent: "bg-[#0ea5e9]/20 text-[#0ea5e9] border-[#0ea5e9]/30",
    purple: "bg-[#a855f7]/20 text-[#a855f7] border-[#a855f7]/30",
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`
        inline-flex items-center
        px-3 py-1
        rounded-full
        border
        backdrop-blur-sm
        text-sm
        transition-all
        duration-200
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </motion.span>
  );
}
