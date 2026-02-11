'use client';

import { useEffect, useRef } from 'react';
import { WaitlistConfirmationResponse } from '@/types/api';
import { WaveBackground } from '../ui/WaveBackground';

interface Props {
  data?: WaitlistConfirmationResponse | null;
}

export default function ConfirmationSuccess({ data }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden contain-[paint]"
    >
      <WaveBackground
        backgroundColor="bg-[#0E6F1A]"
        blobColor="bg-black"
        opacity={1}
        saturation={2.5}
        brightness={1.4}
        blur={10}
        blobCount={6}
        minSize={0.4}
        maxSize={0.5}
        intensity={0.1}
      />

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a]/90 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/20 md:max-w-2xl lg:max-w-3xl">
        <div className="flex flex-col items-center gap-6 p-8 md:flex-row md:gap-10 md:p-12">
          {/* Left Side: Image/Icon Container */}
          <div className="group relative">
            {/* Soft glow effect behind the image */}
            {/* <div className="absolute -inset-1 bg-linear-to-r from-green-500 to-emerald-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div> */}

            <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden md:h-40 md:w-40 lg:h-48 lg:w-48">
              <img
                src="https://assets.playversus.in/media/logos/versus-logo-assets-primary/android-chrome-512x512.png" // Replace with your actual image
                alt="Confirmation Success"
                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-block rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-green-400 uppercase">
              Confirmed
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              You&apos;re in.
            </h1>

            <div className="space-y-2">
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Your spot on the waitlist is secured. We sent a confirmation to
                your email.
              </p>
            </div>
            {data?.position && (
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Your position is at {data.position}
              </p>
            )}

            {/* Action Area */}
            <div className="pt-4">
              <a
                href="/"
                className="w-full rounded-xl bg-white px-8 py-3 font-bold text-black transition-colors duration-200 hover:bg-gray-200 md:w-auto"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
