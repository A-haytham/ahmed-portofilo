import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

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
