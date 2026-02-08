'use client';

import { useMounted } from '@/hooks';
import Image from 'next/image';

export const Header = () => {
  const mounted = useMounted();

  return (
    <header className="px-6 transition-colors duration-300 md:px-8 dark:bg-black">
      <div
        className={`p-2 text-2xl font-bold text-gray-900 transition-all duration-700 md:p-8 dark:text-white ${
          mounted ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
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
            // src="/images/logo/Logo_White.png" // Replace with your dark-mode logo
            src="https://assets.playversus.in/media/logos/versus-logo-assets-white/android-chrome-512x512.png"
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
