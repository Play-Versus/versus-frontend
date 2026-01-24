'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { WaveBackground } from '@/components/ui/WaveBackground';
import { Header } from '@/components/layout/Header';
import Image from 'next/image';
import { useMounted } from '@/hooks';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={containerRef}
      className="relative min-h-fit w-full overflow-hidden contain-[paint]"
    >
      <WaveBackground
        backgroundColor="bg-[#0E6F1A]" // Use a lighter green
        blobColor="bg-black"
        opacity={1} // Higher opacity
        saturation={2.5} // Over-saturate for that "glow"
        brightness={1.4} // Boost brightness
        blur={10} // Medium blur keeps the color "thick"
        blobCount={6} // Fewer blobs prevents them from turning into one giant mush
        minSize={0.4}
        maxSize={0.5}
        intensity={0.1}
      />
      <Header />
      <div className="relative z-10 container mx-auto flex min-h-fit flex-col items-center justify-center px-6 pb-20 md:flex-col md:justify-between md:gap-16 md:px-12 lg:flex-row">
        {/* Left: Text Content */}
        <div ref={textRef} className="max-w-2xl space-y-8">
          <h1 className="text-5xl leading-tight font-bold tracking-tight text-white md:text-7xl xl:text-8xl">
            Something big is <br />
            coming for <span className="text-green-400">sports lovers.</span>
          </h1>
          <p className="text-lg text-gray-200 md:text-xl">
            A new era for players, teams, and the game-day spirit.
          </p>
          <div>
            <a
              href="#email-capture"
              className="inline-block rounded-full bg-green-500 px-8 py-3 font-semibold text-black transition hover:scale-105 hover:bg-green-400"
            >
              Join waitlist now
            </a>
          </div>
        </div>

        {/* Right: The Giant V Logo */}
        <div
          ref={logoRef}
          className="relative mt-12 hidden h-64 w-64 sm:h-80 sm:w-80 md:ms-16 md:mt-0 md:block md:h-96 md:w-96 lg:h-112 lg:w-md xl:h-192 xl:w-xl"
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
