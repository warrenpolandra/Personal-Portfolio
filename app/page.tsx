import AboutSection from "@/components/about/AboutSection";
import EducationSection from "@/components/education/EducationSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hero/HeroSection";
import HobbySection from "@/components/HobbySection";
import Navbar from "@/components/nav/Navbar";
import ProjectSection from "@/components/projects/ProjectSection";
import ResearchSection from "@/components/research/ResearchSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="px-4 md:px-12">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <EducationSection />
        <ResearchSection />
        <ProjectSection />
        <HobbySection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
