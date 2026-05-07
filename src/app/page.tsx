import React from "react";
"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import ParticleCanvas from "@/components/ParticleCanvas";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage(): React.JSX.Element {
  useScrollReveal();

  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise" />

      {/* Animated particle canvas (HTML5) */}
      <ParticleCanvas />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Nav */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
