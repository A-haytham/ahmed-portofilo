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
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="pulse-orb absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#0ea5e9]/10 blur-[128px]" />
        <div className="pulse-orb absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#a855f7]/10 blur-[128px] [animation-delay:1s]" />
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
