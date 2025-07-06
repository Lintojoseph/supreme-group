// components/HeroSection.tsx
'use client'; 
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/automotive.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <p className="text-sm md:text-base text-gray-300 mb-2">Driven by performance</p>
        <h1 className="text-3xl md:text-5xl font-semibold">
          Soft trims and <span className="text-cyan-400">NVH solutions</span>
        </h1>
        <p className="mt-2 text-lg md:text-xl">for seamless rides</p>
      </div>
    </section>
  );
};

export default HeroSection;
