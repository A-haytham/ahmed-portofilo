"use client";

import { motion } from "motion/react";
import { Download, Mail } from "lucide-react";
import svgPaths from "@/imports/svg-5n99jadf7x";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const imgAdobeExpressFile66 =
  "https://source.unsplash.com/900x1400/?abstract,lightning,3d";
const imgCharacterWithRose =
  "https://source.unsplash.com/1000x1400/?3d,character,avatar";
const imgUnsplashHaNi1RsZ6Nc =
  "https://source.unsplash.com/300x300/?portrait,professional,woman";

function SkillIconsNodejsDark() {
  return (
    <div className="size-[69.244px]">
      <svg className="size-full" fill="none" viewBox="0 0 69.244 69.244">
        <path d={svgPaths.p73fba80} fill="#242938" />
        <path d={svgPaths.p455900} fill="#81CD39" />
        <path d={svgPaths.p38f15300} fill="#81CD39" />
      </svg>
    </div>
  );
}

function SkillIconsCss() {
  return (
    <div className="size-[69.244px]">
      <svg className="size-full" fill="none" viewBox="0 0 69.244 69.244">
        <path d={svgPaths.p29baaf00} fill="#0277BD" />
        <path d={svgPaths.pba9bef0} fill="#EBEBEB" />
        <path d={svgPaths.pd5813c0} fill="white" />
      </svg>
    </div>
  );
}

function VscodeIconsFileTypeHtml() {
  return (
    <div className="size-[75.262px]">
      <svg className="size-full" fill="none" viewBox="0 0 75.262 75.262">
        <path d={svgPaths.p20318c00} fill="#E44F26" />
        <path d={svgPaths.p19bd7400} fill="#F1662A" />
        <path d={svgPaths.p2cd27780} fill="#EBEBEB" />
        <path d={svgPaths.p1c266800} fill="white" />
      </svg>
    </div>
  );
}

function LogosFigma() {
  return (
    <div className="h-[69.734px] w-[46.489px]">
      <svg className="size-full" fill="none" viewBox="0 0 46.489 69.734">
        <path d={svgPaths.p1b111e00} fill="#0ACF83" />
        <path d={svgPaths.p140d9600} fill="#A259FF" />
        <path d={svgPaths.p341aac80} fill="#F24E1E" />
        <path d={svgPaths.p491e900} fill="#FF7262" />
        <path d={svgPaths.pb5cc800} fill="#1ABCFE" />
      </svg>
    </div>
  );
}

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="pointer-events-none absolute -left-32 top-[60%] h-[562px] w-[378px]"
      >
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full opacity-70"
          style={{ filter: "hue-rotate(200deg) saturate(1.5)" }}
        >
          <ImageWithFallback
            src={imgAdobeExpressFile66}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="pointer-events-none absolute bottom-0 right-[30px] z-20 h-[700px] w-[500px]"
      >
        <ImageWithFallback
          src={imgCharacterWithRose}
          alt=""
          className="h-full w-full object-contain"
        />
      </motion.div>

      <div className="absolute left-1/2 top-[40%] h-[1764px] w-[1764px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 opacity-60">
          <svg className="size-full" fill="none" viewBox="0 0 2964 2964">
            <g filter="url(#filter0_f_hero)" opacity="0.7">
              <path d={svgPaths.p2eb95e00} fill="#0ea5e9" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="2964"
                id="filter0_f_hero"
                width="2964"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur"
                  stdDeviation="300"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className="pointer-events-none absolute right-[10%] top-[50%] h-[786px] w-[786px]">
        <svg className="size-full" fill="none" viewBox="0 0 786 786">
          <circle
            cx="393"
            cy="393"
            r="392"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="pointer-events-none absolute right-[5%] top-[55%] h-[594px] w-[594px]">
        <svg className="size-full" fill="none" viewBox="0 0 594 594">
          <circle
            cx="297"
            cy="297"
            r="296"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="pointer-events-none absolute right-[2%] top-[60%] h-[440px] w-[440px]">
        <svg className="size-full" fill="none" viewBox="0 0 440 440">
          <circle
            cx="220"
            cy="220"
            r="219"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex items-center justify-between"
        >
          <div className="text-4xl font-semibold text-white">ahmed.</div>

          <div className="hidden items-center gap-8 lg:flex">
            <div className="flex items-center gap-12 rounded-full border border-white/30 px-10 py-4 backdrop-blur-sm">
              <button
                onClick={() => scrollToSection("home")}
                className="text-xl font-normal text-[#0ea5e9]"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-xl font-normal text-white/70 transition-colors hover:text-white"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-xl font-normal text-white/70 transition-colors hover:text-white"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-xl font-normal text-white/70 transition-colors hover:text-white"
              >
                Connect
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full border-2 border-[#0ea5e9] px-6 py-3 text-white transition-all hover:bg-[#0ea5e9]/10"
            >
              <Download size={24} />
              <span className="text-base font-normal">Download Resume</span>
            </motion.button>
          </div>

          <button className="text-xl text-white lg:hidden">Menu</button>
        </motion.nav>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-3xl font-medium text-white/70">
                Hey, I am{" "}
                <span className="font-semibold text-[#0ea5e9]">Ahmed</span>
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-7xl font-light leading-tight text-white lg:text-8xl xl:text-9xl"
            >
              Front-End
              <br />
              Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="max-w-lg text-xl font-light text-white"
            >
              Building scalable UI systems and performance-driven applications
              with modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-5 pt-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(14, 165, 233, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("contact")}
                className="rounded-full bg-[#0ea5e9] px-10 py-5 text-3xl font-light text-white shadow-lg shadow-[#0ea5e9]/30 transition-all"
              >
                Hire me
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="flex size-[72px] items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-md transition-all hover:border-[#0ea5e9] hover:bg-[#0ea5e9]/20"
              >
                <Mail size={28} className="text-white" />
              </motion.button>
            </motion.div>

            <div className="pt-8">
              <div className="h-px w-full max-w-lg bg-white/30" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-8 max-w-md rounded-[50px] border border-white/50 bg-white/10 p-8 backdrop-blur-md"
            >
              <p className="-mt-4 text-[128px] font-light leading-none text-white">
                &quot;
              </p>

              <p className="-mt-12 text-lg font-normal leading-relaxed text-white">
                Ahmed&apos;s expertise in React and Next.js helped us build a
                scalable platform that exceeded our expectations. Highly
                recommend!
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="h-[62px] w-[62px] overflow-hidden rounded-full bg-[#0ea5e9]">
                  <ImageWithFallback
                    src={imgUnsplashHaNi1RsZ6Nc}
                    alt="Client"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xl font-medium text-white">
                    Sarah Mitchell
                  </p>
                  <p className="text-base font-medium text-white/60">
                    Product Manager
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative hidden h-[800px] lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute bottom-0 right-0 h-[790px] w-[600px]"
            >
              <ImageWithFallback
                src={imgCharacterWithRose}
                alt="3D Character"
                className="h-full w-full object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 8 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute left-[10%] top-[25%] z-10"
            >
              <motion.div
                animate={{ rotate: [8, 12, 8], y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <SkillIconsCss />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
              animate={{ opacity: 1, scale: 1, rotate: 14 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute left-[40%] top-[10%] z-10"
            >
              <motion.div
                animate={{ rotate: [14, 18, 14], y: [0, -15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <VscodeIconsFileTypeHtml />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute left-[5%] top-[45%] z-10"
            >
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <SkillIconsNodejsDark />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -7 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute right-[5%] top-[15%] z-10"
            >
              <motion.div
                animate={{ rotate: [-7, -11, -7], y: [0, -8, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <LogosFigma />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
