import Navbar from "@/components/layout/Navbar";
import PageLoader from "@/components/layout/PageLoader";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/effects/CustomCursor";
import SparkleTrail from "@/components/effects/SparkleTrail";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ServiceWorkerRegistration from "@/components/effects/ServiceWorkerRegistration";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <ScrollToTop />
      <Footer />
      <SparkleTrail />
      <ScrollReveal />
      <ServiceWorkerRegistration />
    </>
  );
}
