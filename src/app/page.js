import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import VehicleShowcase from "@/components/sections/VehicleShowcase";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div >

      <HeroSection />
      <VehicleShowcase />
      <Contact />
    </div>
  );
}
