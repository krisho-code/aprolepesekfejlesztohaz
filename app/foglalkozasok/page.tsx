import React from "react";
import ServicesOverview from "@/components/ServicesOverview";
import AllServices from "@/components/services/AllServices";
import GallerySection from "@/components/GallerySection";
import Rules from "@/components/services/Rules";
import Documents from "@/components/services/Documents";
import GYIK from "@/components/services/GYIK";

const Services = () => {
  return (
    <main>
      <ServicesOverview />
      <AllServices />
      <GallerySection />
      <Rules />
      <Documents />
      <GYIK />
    </main>
  );
};

export default Services;
