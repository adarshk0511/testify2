import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Price from "./components/Price";
import Footer from "./components/Footer";
import AimSection from "./components/AimSection";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <div id="hero">
          <HeroSection />
        </div>

        <div id="services">
          <FeatureSection />
        </div>
        
        <div id="workflow">
          <Workflow />
        </div>
        
        <div id="vision">
          <AimSection/>
        </div>

        <div id="pricing">
          <Price />
        </div>

        <Footer />
      </div>
    </>
  );
}
