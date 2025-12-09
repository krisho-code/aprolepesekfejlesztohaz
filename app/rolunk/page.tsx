import React from "react";

import AboutSection from "@/components/AboutSection";
import ServicesOverview from "@/components/about/ServicesOverview";
import TeamSection from "@/components/about/TeamSection";
import ContactSection from "@/components/home/ContactSection";

const About = () => {
  return (
    <main>
      <AboutSection />
      <ServicesOverview />
      <TeamSection />
      <ContactSection showFacebook={false} />
    </main>
  );
};

export default About;
