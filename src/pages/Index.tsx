import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactsSection from "../components/ContactsSection";
import Footer from "../components/Footer";
import PageLoader from "../components/Pageloader";
import SectionDivider from "../components/Sectiondivider";

export default function Index() {
  return (
    <>
      <PageLoader />

      <div className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] noise overflow-x-hidden">
        <NavBar />

        <main>
          <HeroSection />

          <SectionDivider glyph="01" />
          <AboutSection />

          <SectionDivider glyph="02" />
          <SkillsSection />

          <SectionDivider glyph="03" />
          <ProjectsSection />

          <SectionDivider glyph="04" />
          <ContactsSection />
        </main>

        <Footer />
      </div>
    </>
  );
}