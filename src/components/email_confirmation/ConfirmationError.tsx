'use client';

import { useRef } from 'react';
import { WaveBackground } from '../ui/WaveBackground';

export default function ConfirmationError() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden p-4 contain-[paint] md:p-8"
    >
      <WaveBackground
        backgroundColor="bg-[#4a0a0a]" // Dark blood red base
        blobColor="bg-black"
        opacity={1}
        saturation={1.5}
        brightness={1.1}
        blur={12}
        blobCount={5}
        minSize={0.4}
        maxSize={0.6}
        intensity={0.15}
      />

      <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-3xl border border-red-500/20 bg-[#0a0a0a]/90 shadow-2xl backdrop-blur-xl md:max-w-2xl lg:max-w-3xl">
        <div className="flex flex-col items-center gap-6 p-8 md:flex-row md:gap-10 md:p-12">
          <div className="group relative">
            <div className="absolute -inset-1 rounded-full bg-red-500 opacity-10 blur transition duration-500 group-hover:opacity-20"></div>
            <div className="relative flex h-32 w-32 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 md:h-40 md:w-40">
              {/* Error Icon (X Mark) */}
              <svg
                className="h-16 w-16 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-block rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-red-400 uppercase">
              System Error
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Something went wrong.
            </h1>
            <p className="text-sm leading-relaxed text-gray-400 md:text-base">
              We encountered a technical glitch while confirming your spot.
              Please try again or contact support if the issue persists.
            </p>

            <div className="pt-4">
              <button
                onClick={() => window.location.reload()}
                className="w-full rounded-xl bg-red-600 px-8 py-3 font-bold text-white transition-colors duration-200 hover:bg-red-500 md:w-auto"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
