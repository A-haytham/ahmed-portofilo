import { HeroSection } from "@/components/sections/HeroSection";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() =>
  import("@/components/sections/AboutSection").then((mod) => mod.AboutSection),
);
const ProjectsSection = dynamic(() =>
  import("@/components/sections/ProjectsSection").then(
    (mod) => mod.ProjectsSection,
  ),
);
const ExperienceSection = dynamic(() =>
  import("@/components/sections/ExperienceSection").then(
    (mod) => mod.ExperienceSection,
  ),
);
const SkillsSection = dynamic(() =>
  import("@/components/sections/SkillsSection").then(
    (mod) => mod.SkillsSection,
  ),
);
const ContactSection = dynamic(() =>
  import("@/components/sections/ContactSection").then((mod) => mod.ContactSection),
);
const Footer = dynamic(() =>
  import("@/components/Footer").then((mod) => mod.Footer),
);

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a14] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="pulse-orb absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#0ea5e9]/8 blur-[84px] md:h-80 md:w-80" />
        <div className="pulse-orb absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#a855f7]/8 blur-[84px] [animation-delay:1s] md:h-80 md:w-80" />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
