import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      screens: {
        xs: "320px", // Extra small screens (below sm: 640px)
      },
    },
  },
} satisfies Config;
