"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button"; // Assuming you have a shadcn/ui or custom button
import { Header } from "@/components/layout/Header";
import Image from "next/image";


export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Fade in gradient background
      gsap.to(".hero-gradient", {
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
      });

      // 2. Stagger text reveal
      gsap.from(textRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
        ease: "power3.out",
      });

      // 3. Logo animation (Scale and Rotate into place)
      gsap.from(logoRef.current, {
        scale: 0.5,
        opacity: 0,
        rotation: -15,
        duration: 1.5,
        delay: 0.8,
        ease: "elastic.out(1, 0.5)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="hero-gradient absolute inset-0 opacity-0 bg-gradient-to-br from-green-500/20 via-black to-black" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")` }}
      />

      <Header />

      <div className="container relative z-10 mx-auto flex min-h-180 flex-col  items-center justify-center px-6 pt-20 md:flex-col md:gap-16 md:justify-between md:px-12 lg:flex-row ">
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
            {/* Using standard button if UI component not available */}
            <a href="#email-capture" className="rounded-full bg-green-500 px-8 py-3 font-semibold text-black transition hover:bg-green-400 hover:scale-105">
              Join waitlist now
            </a>
          </div>
        </div>

        {/* Right: The Giant V Logo */}
        <div ref={logoRef} className="relative  md:ms-16 w-64 h-64 mt-12 sm:w-80 sm:h-80  md:mt-0 md:w-96 md:h-96 lg:w-md lg:h-112 xl:w-xl xl:h-192">
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