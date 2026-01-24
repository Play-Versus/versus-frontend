'use client';

import { useScrollAnimation } from '@/hooks';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    image:
      'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    video: {
      src: '/videos/2932301-uhd_4096_2160_24fps.mp4',
      // poster: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    title: 'Match instantly with people ready to play.',
    description: 'Find players at your skill level, anytime',
    icon: (
      <svg
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    delay: 0,
  },
  {
    image:
      'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    video: {
      src: '/videos/4440928-hd_1920_1080_25fps.mp4',
      // poster: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    title: 'Built for local sports communities',
    description: 'Find your people. Build rivalries',
    icon: (
      <svg
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    delay: 150,
  },
  {
    image:
      'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    video: {
      src: '/videos/13960806_3840_2160_60fps.mp4',
      // poster: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    title: 'Play with others at your level.',
    description: 'Skill-based matching for competitive games',
    icon: (
      <svg
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    delay: 300,
  },
];

export const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-transparent pt-16 pb-4 md:pt-24">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            For those who play after work.
            <br />
            For those who play before sunrise.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            For every player chasing that one match, one more win, one more
            story
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
