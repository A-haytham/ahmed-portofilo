"use client";

import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <p className="text-center text-gray-400 md:text-left">
            &copy; 2026 Ahmed Haytham Ahmed. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-gray-400">
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="fill-[#0ea5e9] text-[#0ea5e9]" />
            </motion.div>
            <span>using React &amp; Next.js</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
