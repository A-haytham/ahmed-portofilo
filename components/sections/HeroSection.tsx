"use client";

import { motion } from "motion/react";
import { Download, Mail } from "lucide-react";
import svgPaths from "@/imports/svg-5n99jadf7x";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const imgAdobeExpressFile66 =
  "/images/a16ba1c9c2fdae9090206d1d706d9e8e5fe1f49f.png";
const imgCharacterWithRose =
  "/images/ChatGPT%20Image%20Feb%2021%2C%202026%2C%2006_31_34%20AM.png";
const imgUnsplashHaNi1RsZ6Nc =
  "https://source.unsplash.com/300x300/?portrait,professional,woman";

function SkillIconsNodejsDark() {
  return (
    <div className="size-[48px] md:size-[58px]">
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
    <div className="size-[48px] md:size-[58px]">
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
    <div className="size-[52px] md:size-[62px]">
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
    <div className="h-[52px] w-[34px] md:h-[62px] md:w-[40px]">
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
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_52%,rgba(168,85,247,0.32)_0%,rgba(14,165,233,0.28)_34%,rgba(0,0,0,0.95)_62%)]" />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="pointer-events-none absolute -left-24 top-[62%] h-[320px] w-[220px] md:-left-20 md:h-[420px] md:w-[280px]"
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
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 0.55, x: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="pointer-events-none absolute -right-16 -top-12 hidden h-[300px] w-[200px] rotate-[185deg] md:block md:h-[370px] md:w-[230px] lg:-right-20 lg:-top-14"
      >
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full opacity-75"
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
        className="pointer-events-none absolute bottom-0 right-0 z-20 h-[320px] w-[220px] opacity-70 md:right-4 md:h-[520px] md:w-[360px] md:opacity-90 lg:hidden"
      >
        <ImageWithFallback
          src={imgCharacterWithRose}
          alt=""
          className="h-full w-full object-contain"
        />
      </motion.div>

      <div className="absolute left-[66%] top-[50%] h-[980px] w-[980px] -translate-x-1/2 -translate-y-1/2 md:h-[1280px] md:w-[1280px]">
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

      <div className="pointer-events-none absolute right-[-9%] top-[44%] hidden h-[560px] w-[560px] lg:block xl:right-[2%] xl:h-[620px] xl:w-[620px]">
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
      <div className="pointer-events-none absolute right-[-1%] top-[53%] hidden h-[420px] w-[420px] lg:block xl:right-[7%] xl:h-[460px] xl:w-[460px]">
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
      <div className="pointer-events-none absolute right-[7%] top-[60%] hidden h-[300px] w-[300px] lg:block xl:right-[11%] xl:h-[330px] xl:w-[330px]">
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

      <div className="relative z-10 mx-auto flex h-full max-w-[1380px] flex-col px-4 py-4 md:px-7 md:py-6 lg:px-10">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center justify-between md:mb-10 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8"
        >
          <div className="text-2xl font-semibold text-white md:text-3xl">ahmed.</div>

          <div className="hidden justify-center lg:flex">
            <div className="flex w-full max-w-[360px] items-center justify-center gap-7 rounded-full border border-white/30 px-8 py-2.5 backdrop-blur-sm">
              <button
                onClick={() => scrollToSection("home")}
                className="text-base font-normal text-[#0ea5e9]"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-base font-normal text-white/70 transition-colors hover:text-white"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-base font-normal text-white/70 transition-colors hover:text-white"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-base font-normal text-white/70 transition-colors hover:text-white"
              >
                Connect
              </button>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden items-center gap-2 rounded-full border-2 border-[#0ea5e9] px-4 py-2 text-sm text-white transition-all hover:bg-[#0ea5e9]/10 lg:flex"
          >
            <Download size={18} />
            <span className="text-base font-normal">Download Resume</span>
          </motion.button>

          <button className="text-base text-white lg:hidden">Menu</button>
        </motion.nav>

        <div className="grid flex-1 items-center gap-8 pb-8 pt-2 lg:grid-cols-[1.05fr_0.95fr] lg:gap-2 ">
          <div className="space-y-4 md:space-y-5 lg:max-w-[620px] lg:pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-lg font-medium text-white/70 md:text-xl">
                Hey, I am{" "}
                <span className="font-semibold text-[#0ea5e9]">Ahmed</span>
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] bg-clip-text text-4xl font-semibold text-transparent md:text-6xl xl:text-7xl"
            >
              Front-End
              <br />
              Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="max-w-md text-sm font-light text-white md:text-base"
            >
              Building scalable UI systems and performance-driven applications
              with modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-3 pt-2 md:gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(14, 165, 233, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("contact")}
                className="rounded-full bg-[#0ea5e9] px-6 py-3 text-lg font-light text-white shadow-lg shadow-[#0ea5e9]/30 transition-all md:px-8 md:text-xl"
              >
                Hire me
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="flex size-[52px] items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-md transition-all hover:border-[#0ea5e9] hover:bg-[#0ea5e9]/20 md:size-[58px]"
              >
                <Mail size={22} className="text-white" />
              </motion.button>
            </motion.div>

            <div className="pt-2">
              <div className="h-px w-full max-w-[520px] bg-white/30" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-6 hidden max-w-[360px] rounded-3xl border border-white/40 bg-white/10 p-4 backdrop-blur-md md:block lg:mt-8"
            >
              <p className="-mt-1 text-6xl font-light leading-none text-white">
                &quot;
              </p>

              <p className="-mt-4 text-sm font-normal leading-relaxed text-white">
                Ahmed&apos;s expertise in React and Next.js helped us build a
                scalable platform that exceeded our expectations. Highly
                recommend!
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="h-[42px] w-[42px] overflow-hidden rounded-full bg-[#0ea5e9]">
                  <ImageWithFallback
                    src={imgUnsplashHaNi1RsZ6Nc}
                    alt="Client"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-medium text-white">
                    Sarah Mitchell
                  </p>
                  <p className="text-xs font-medium text-white/60">
                    Product Manager
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative hidden h-[520px] lg:block xl:h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-6 right-[-18px] h-[560px] w-[420px] xl:-bottom-8 xl:right-[-28px] xl:h-[600px] xl:w-[550px]"
            >
              <ImageWithFallback
                src={imgCharacterWithRose}
                alt="3D Character"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 8 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute left-[4%] top-[52%] z-10 xl:left-[13%]"
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
              className="absolute left-[34%] top-[16%] z-10 xl:left-[25%] xl:top-[36%]"
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
              className="absolute left-[9%] top-[74%] z-10"
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
              className="absolute right-[8%] top-[33%] z-10 xl:right-[5%]"
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
