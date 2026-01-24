"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { WaveBackground } from "@/components/ui/WaveBackground";
import { Header } from "@/components/layout/Header";
import Image from "next/image";
import { useMounted } from "@/hooks";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={containerRef}
      className="relative h-180 sm:min-h-480px md:min-h-screen w-full overflow-hidden  contain-[paint]"
    >
      <WaveBackground
        backgroundColor="bg-green-600" // Use a lighter green
        blobColor="bg-black"
        opacity={1}            // Higher opacity
        saturation={2.5}         // Over-saturate for that "glow"
        brightness={1.4}         // Boost brightness
        blur={20}                // Medium blur keeps the color "thick"
        blobCount={8}            // Fewer blobs prevents them from turning into one giant mush
        minSize={0.5}
        maxSize={0.6}
        intensity={0.1}
      />
      <Header />
      <div className="container relative z-10 mx-auto flex min-h-130 md:min-h-180 flex-col items-center justify-center px-6 md:pt-20 md:flex-col md:gap-16 md:justify-between md:px-12 lg:flex-row">
        {/* Left: Text Content */}
        <div ref={textRef} className="max-w-2xl space-y-8">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Something big is <br />
            coming for <span className="text-green-400">sports lovers.</span>
          </h1>
          <p className="text-lg text-gray-400 md:text-xl">
            A new era for players, teams, and the game-day spirit.
          </p>
          <div>
            <a
              href="#email-capture"
              className="inline-block rounded-full bg-green-500 px-8 py-3 font-semibold text-black transition hover:bg-green-400 hover:scale-105"
            >
              Join waitlist now
            </a>
          </div>
        </div>

        {/* Right: The Giant V Logo */}
        <div
          ref={logoRef}
          className="relative hidden md:block md:ms-16 w-64 h-64 mt-12 sm:w-80 sm:h-80 md:mt-0 md:w-96 md:h-96 lg:w-md lg:h-112 xl:w-xl xl:h-192"
        >
          <Image
            src="/images/symbols/VersusSymbol_ElectricGreen.png"
            alt="Versus Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};