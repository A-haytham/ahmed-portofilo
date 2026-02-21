"use client";

import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost" | "neon";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-8 py-3 rounded-lg transition-all duration-300 relative overflow-hidden group";

  const variants = {
    primary:
      "bg-[#0ea5e9] hover:bg-[#0284c7] text-white shadow-lg shadow-[#0ea5e9]/30 hover:shadow-[#0ea5e9]/50",
    secondary:
      "bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm",
    ghost: "bg-transparent hover:bg-white/10 text-white border border-white/10",
    neon:
      "bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] hover:shadow-2xl hover:shadow-[#0ea5e9]/50 text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === "neon" && (
        <span className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#0ea5e9] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
    </motion.button>
  );
}
