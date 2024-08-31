import React from "react";
// import Hero from "../Hero/index.tsx";
import Services from "../Services/index.tsx";
import HeroSection from "../Hero/hero.tsx";
import Story from "../Story/index.tsx";
import PricingComponent from "../Pricing/index.tsx";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <HeroSection />
      <Services />
      <Story />
      <PricingComponent />
    </>
  );
  // <Hero/>
}
