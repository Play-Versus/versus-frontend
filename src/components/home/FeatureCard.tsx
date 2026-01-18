"use client";

import { useScrollAnimation } from "@/hooks";
import type { FeatureCardProps } from "@/types";

export const FeatureCard = ({
  image,
  video,
  title,
  description,
  icon,
  delay = 0,
}: FeatureCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Image */}
      <div className="aspect-[4/5] overflow-hidden bg-gray-800" style={{backgroundImage: image}}>
        {/* <div
          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: image }}
          role="img"
          aria-label={title}
        /> */}
        {video ? (
          <video
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={video.src}
            poster={video.poster}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: image }}
            role="img"
            aria-label={title}
          />
        )}
      </div>
      

      {/* Overlay Content */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        {icon && (
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-white/80">{description}</p>
      </div>
    </div>
  );
};
