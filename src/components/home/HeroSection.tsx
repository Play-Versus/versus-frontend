"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button"; // Assuming you have a shadcn/ui or custom button
import { Header } from "@/components/layout/Header";
import Image from "next/image";
import * as THREE from "three";
import { useMounted } from "@/hooks";



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

    return () => {
      ctx.revert()
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-720px sm:min-h-screen w-full overflow-hidden bg-black contain-[paint]">
      <svg
        viewBox="0 0 1280 700"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full text-green-400 opacity-50 transition-all duration-500 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#" fillRule="nonzero"></path>
        <path d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#181818" fillRule="nonzero" className="relative z-0 fill-[rgb(214, 242, 255)]" transform="translate(-1800, 60) scale(2.8, 2.8) skewX(30)"></path>
        <path d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#091814" fillRule="nonzero" className="relative z-1 fill-[rgb(199, 225, 243)]" transform="translate(-1650, 55) scale(2.65, 2.65) skewX(27.5)"></path>
        <path d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#061F1E" fillRule="nonzero" className="relative z-2 fill-[rgb(184, 207, 230)]" transform="translate(-1500, 50) scale(2.5, 2.5) skewX(25)"></path>
        <path d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#072F25" fillRule="nonzero" className="relative z-3 fill-[rgb(169, 190, 218)]" transform="translate(-1350, 45) scale(2.3499999999999996, 2.3499999999999996) skewX(22.5)"></path>
        <path d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#083E2B" fillRule="nonzero" className="relative z-4 fill-[rgb(154, 173, 206)]" transform="translate(-1200, 40) scale(2.2, 2.2) skewX(20)"></path>
        <path d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#0A4B2C" fillRule="nonzero" className="relative z-5 fill-[rgb(139, 155, 193)]" transform="translate(-1050, 35) scale(2.05, 2.05) skewX(17.5)"></path>
        <path d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#0C682D" fillRule="nonzero" className="relative z-6 fill-[rgb(125, 138, 181)]" transform="translate(-900, 30) scale(1.9, 1.9) skewX(15)"></path>
        <path d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#0E862D" fillRule="nonzero" className="relative z-7 fill-[rgb(110, 121, 169)]" transform="translate(-750, 25) scale(1.75, 1.75) skewX(12.5)"></path>
        <path d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#11A42E" fillRule="nonzero" className="relative z-8 fill-[rgb(95, 103, 156)]" transform="translate(-600, 20) scale(1.6, 1.6) skewX(10)"></path>
        <path d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#14C21F" fillRule="nonzero" className="relative z-9 fill-[rgb(80, 86, 144)]" transform="translate(-450, 15) scale(1.45, 1.45) skewX(7.5)"></path>
        <path d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#17E110" fillRule="nonzero" className="relative z-10 fill-[rgb(65, 69, 132)]" transform="translate(-300, 10) scale(1.3, 1.3) skewX(5)"></path>
        <path d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#1AFF00" fillRule="nonzero" className="relative z-11 fill-[rgb(50, 51, 119)]" transform="translate(-150, 5) scale(1.15, 1.15) skewX(2.5)"/>
      </svg>

      <Header />

      <div className="container relative z-10 mx-auto flex min-h-130 md:min-h-180 flex-col  items-center justify-center px-6 md:pt-20 md:flex-col md:gap-16 md:justify-between md:px-12 lg:flex-row ">
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
        <div ref={logoRef} className="relative hidden md:block md:ms-16 w-64 h-64 mt-12 sm:w-80 sm:h-80   md:mt-0 md:w-96 md:h-96 lg:w-md lg:h-112 xl:w-xl xl:h-192">
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