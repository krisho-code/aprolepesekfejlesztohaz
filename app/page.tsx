import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </main>
    </>
  );
}
