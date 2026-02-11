'use client';

import { useRef } from 'react';
import { WaveBackground } from '../ui/WaveBackground';

export default function ConfirmationInvalid() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden p-4 contain-[paint] md:p-8"
    >
      <WaveBackground
        backgroundColor="bg-[#5c3e0e]" // Deep amber/brown base
        blobColor="bg-black"
        opacity={1}
        saturation={2}
        brightness={1.2}
        blur={10}
        blobCount={6}
        minSize={0.4}
        maxSize={0.5}
        intensity={0.1}
      />

      <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-3xl border border-amber-500/20 bg-[#0a0a0a]/90 shadow-2xl backdrop-blur-xl md:max-w-2xl lg:max-w-3xl">
        <div className="flex flex-col items-center gap-6 p-8 md:flex-row md:gap-10 md:p-12">
          <div className="group relative">
            <div className="relative flex h-32 w-32 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 md:h-40 md:w-40">
              {/* Invalid/Expired Icon (Clock/Link) */}
              <svg
                className="h-16 w-16 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-block rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-amber-400 uppercase">
              Link Invalid
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Link expired.
            </h1>
            <p className="text-sm leading-relaxed text-gray-400 md:text-base">
              This confirmation link is no longer valid or has already been
              used. Please check your email for the latest link or request a new
              one.
            </p>
            {/* <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
                Request New Link
              </button>
              <button className="px-8 py-3 bg-transparent text-white border border-white/20 font-bold rounded-xl hover:bg-white/5 transition-colors">
                Contact Support
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
