"use client";

import { useMounted } from "@/hooks";
import Image from "next/image";

export const Header = () => {
  const mounted = useMounted();

  return (
    // 1. Background adapts: White in light mode, Black in dark mode
    <header className="p-6 bg-white dark:bg-black md:p-8 transition-colors duration-300">
      <div
        className={`text-2xl p-[2rem] font-bold text-gray-900 dark:text-white transition-all duration-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        }`}
      >
        <div className="relative flex items-center gap-2">
          {/* OPTION A: Swapping Logos (Recommended)
             If you have two different logo files (e.g. black text vs white text)
          */}
          
          {/* Show this logo only in LIGHT mode */}
          {/* <Image
            src="/images/VersusLogo_Black.png" // Replace with your light-mode logo
            alt="Logo"
            width={120}
            height={24}
            className="block dark:block" 
          /> */}

          {/* Show this logo only in DARK mode */}
          <Image
            src="/images/logo/Logo_White.png" // Replace with your dark-mode logo
            alt="Logo"
            width={120}
            height={24}
            // className="hidden dark:hidden"
          />
        </div>
      </div>
    </header>
  );
};