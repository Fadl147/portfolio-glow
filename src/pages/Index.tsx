import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactsSection from "../components/ContactsSection"
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="bg-background text-foreground">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}
