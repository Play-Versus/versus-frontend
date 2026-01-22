"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import Image from "next/image";
import { useMounted } from "@/hooks";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const wavesRef = useRef<(SVGPathElement | null)[]>([]);



  useEffect(() => {
    const ctx = gsap.context(() => {

      // // 1️⃣ Ultra-subtle vertical liquid drift
      // gsap.to(".wave", {
      //   y: (i) => -6 + i * 0.6, // 👈 very small movement
      //   duration: 14,          // 👈 slow = calm
      //   ease: "sine.inOut",
      //   repeat: -1,
      //   yoyo: true,
      //   stagger: {
      //     each: 0.25,
      //     from: "center",
      //   },
      // });

      // // 2️⃣ Ultra-subtle horizontal flow
      // // gsap.to(".wave", {
      // //   xPercent: (i) => Math.sin(i * 0.7) * 3.5, // 👈 expressive but safe
      // //   duration: 20,            // 👈 very slow
      // //   ease: "sine.inOut",
      // //   repeat: -1,
      // //   yoyo: true,
      // //   stagger: {
      // //     each: 0.3,
      // //     from: "edges",
      // //   },
      // // });

      // gsap.to(".wave", {
      //   skewX: (i) => 0.6 + Math.sin(i) * 0.3,
      //   duration: 7,
      //   ease: "sine.inOut",
      //   repeat: -1,
      //   yoyo: true,
      // });


      // // 3️⃣ Breathing opacity (depth)
      // gsap.fromTo(
      //   ".wave",
      //   { opacity: 0.42 },
      //   {
      //     opacity: 0.58,
      //     duration: 8,
      //     ease: "sine.inOut",
      //     repeat: -1,
      //     yoyo: true,
      //     stagger: {
      //       each: 0.2,
      //       from: "random",
      //     },
      //   }
      // );

      // Horizontal expressive flow (safe, a bit faster)
      // Horizontal expressive flow (alive, still safe)
      // Horizontal expressive flow (more rhythm, still safe)
      // Horizontal expressive flow (faster rhythm, no overlap)
gsap.to(".wave", {
  xPercent: (i) => Math.sin(i * 0.9) * 4.6,
  duration: 9.5,          // ⬇️ from 11.5 → 9.5
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
});

// Vertical liquid drift (quicker tide)
gsap.to(".wave", {
  y: (i) => -9 + i * 0.9,
  duration: 7.2,          // ⬇️ from 8.5 → 7.2
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
});

// Breathing (keeps up, still soft)
gsap.fromTo(
  ".wave",
  { opacity: 0.5 },
  {
    opacity: 0.56,
    duration: 8.5,        // ⬇️ from 10.5 → 8.5
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  }
);





    });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(".wave", { clearProps: "all" });
      return;
    }
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-180 sm:min-h-480px md:min-h-screen w-full overflow-hidden bg-black contain-[paint]"
    >
      {/* Animated Wave SVG */}
      <svg
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full overflow-hidden block"
        xmlns="http://www.w3.org/2000/svg"
      >0A4B2C
        {/* Base layer (invisible) */}
        <path
          d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
          fill="#"
          fillRule="nonzero"
        />

        {/* Animated waves */}
        <path
          ref={el => wavesRef.current[0] = el}
          d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
          fillRule="nonzero"
          className="wave relative z-0 fill-[#181818]"
          transform="translate(-1800, 60) scale(2.8, 2.8) skewX(30)"
        />
        <path
          ref={el => wavesRef.current[1] = el}

          d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
          fill="rgb(199, 225, 243)"
          fillRule="nonzero"
          className="wave relative z-1 fill-[#091814]"
          transform="translate(-1650, 55) scale(2.65, 2.65) skewX(27.5)"
        />
        <path
          ref={el => wavesRef.current[2] = el}

          d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
          fill="rgb(184, 207, 230)"
          fillRule="nonzero"
          className="wave relative z-2 fill-[#061F1E]"
          transform="translate(-1500, 50) scale(2.5, 2.5) skewX(25)"
        />
        <path
          ref={el => wavesRef.current[3] = el}

          d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
          fill="#072F25"
          fillRule="nonzero"
          className="wave relative z-3 fill-[#072F25]"
          transform="translate(-1350, 45) scale(2.35, 2.35) skewX(22.5)"
        />
        <path
          ref={el => wavesRef.current[4] = el}

          d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"

          fill="#083E2B"

          fillRule="nonzero"
          className="wave relative z-4 fill-[#083E2B]"
          transform="translate(-1200, 40) scale(2.2, 2.2) skewX(20)"
        />
        <path
          ref={el => wavesRef.current[5] = el}

          d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"
          fill="#0C682D"
          fillRule="nonzero"
          className="wave relative z-5 fill-[#0A4B2C]"
          transform="translate(-1050, 35) scale(2.05, 2.05) skewX(17.5)"
        />
        <path
          ref={el => wavesRef.current[6] = el}

          d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"

          fill="#0E862D"
          fillRule="nonzero"
          className="wave relative z-6 fill-[#0C682D]"
          transform="translate(-900, 30) scale(1.9, 1.9) skewX(15)"
        />
        <path
          ref={el => wavesRef.current[7] = el}

          d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"

          fill="#11A42E"
          fillRule="nonzero"
          className="wave relative z-7 fill-[#0E862D]"
          transform="translate(-750, 25) scale(1.75, 1.75) skewX(12.5)"
        />
        <path
          ref={el => wavesRef.current[8] = el}

          d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"

          fill="#14C21F"
          fillRule="nonzero"
          className="wave relative z-8 fill-[#11A42E]"
          transform="translate(-600, 20) scale(1.6, 1.6) skewX(10)"
        />
        <path
          ref={el => wavesRef.current[9] = el}

          d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"

          fill="#17E110"
          fillRule="nonzero"
          className="wave relative z-9 fill-[#14C21F]"
          transform="translate(-450, 15) scale(1.45, 1.45) skewX(7.5)"
        />
        <path
          ref={el => wavesRef.current[10] = el}

          d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"

          fill="#1AFF00"
          fillRule="nonzero"
          className="wave relative z-10 fill-[#17E110]"
          transform="translate(-300, 10) scale(1.3, 1.3) skewX(5)"
        />
        <path
          ref={el => wavesRef.current[11] = el}

          d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z"

          fill="transparent"
          fillRule="nonzero"
          className="wave relative z-11 fill-[#1AFF00]"
          transform="translate(-150, 5) scale(1.15, 1.15) skewX(2.5)"
        />
      </svg>

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