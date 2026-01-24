"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import gsap from "gsap";

interface WaveBackgroundProps {
  blobColor?: string;
  backgroundColor?: string;
  intensity?: number;
  blobCount?: number;
  minSize?: number;
  maxSize?: number;
  opacity?: number;
  saturation?: number;
  brightness?: number;
  blur?: number;
}

export const WaveBackground = ({
  blobColor = "#14C21F",
  backgroundColor = "bg-[#05160a]",
  intensity = 0.5,
  blobCount = 6,
  minSize = 0.1,
  maxSize = 0.4,
  opacity = 0.6,
  saturation = 1.5,
  brightness = 1.2,
  blur = 60,
}: WaveBackgroundProps) => {
  const containerRef = useRef<SVGSVGElement>(null);
  const particles = useRef<any[]>([]);
  const [layers, setLayers] = useState<any[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  const config = useMemo(() => ({
    repulsionRadius: 300 + intensity * 150,
    force: 0.02 + intensity * 0.04,
    friction: 0.94,
  }), [intensity]);

  useEffect(() => {
    const VIEWBOX_HEIGHT = 800;
    const VIEWBOX_WIDTH = 1440;
    // Buffer defines how far off-screen the blobs can travel
    const BUFFER = 200; 

    const generatedLayers = Array.from({ length: blobCount }).map((_, i) => {
      const r = (VIEWBOX_HEIGHT * minSize) + Math.random() * (VIEWBOX_HEIGHT * (maxSize - minSize));
      // Start them distributed but allowed to be outside the center
      const x = Math.random() * VIEWBOX_WIDTH;
      const y = Math.random() * VIEWBOX_HEIGHT;
      
      return {
        id: i,
        x,
        y,
        r,
      };
    });

    setLayers(generatedLayers);
    setIsMounted(true);

    if (!containerRef.current) return;

    particles.current = generatedLayers.map((layer) => ({
      ...layer,
      originX: layer.x,
      originY: layer.y,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      element: null,
    }));

    const ctx = gsap.context(() => {
      gsap.delayedCall(0.01, () => {
        const blobElements = gsap.utils.toArray<SVGCircleElement>(".wave-blob");
        
        particles.current.forEach((p, i) => {
          if (!blobElements[i]) return;
          p.element = blobElements[i];
          
          gsap.to(p.element, {
            scaleX: 1.2,
            scaleY: 0.8,
            rotation: "random(-180, 180)",
            duration: 4 + Math.random() * 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

        let forceMultiplier = 0;
        gsap.to({}, {
          duration: 2.5,
          onUpdate: function() { forceMultiplier = this.progress(); }
        });

        const updatePhysics = () => {
          const pArr = particles.current;
          for (let i = 0; i < pArr.length; i++) {
            const p1 = pArr[i];
            
            for (let j = i + 1; j < pArr.length; j++) {
              const p2 = pArr[j];
              const dx = p2.x - p1.x;
              const dy = p2.y - p1.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              const minAllowed = (p1.r + p2.r) * 0.8;

              if (dist < minAllowed) {
                const angle = Math.atan2(dy, dx);
                const push = (minAllowed - dist) * config.force * forceMultiplier;
                p1.vx -= Math.cos(angle) * push;
                p1.vy -= Math.sin(angle) * push;
                p2.vx += Math.cos(angle) * push;
                p2.vy += Math.sin(angle) * push;
              }
            }

            // SEAMLESS BOUNDARIES: 
            // We push them back only once they hit the BUFFER zone outside the view
            if (p1.x < -BUFFER) p1.vx += 0.5;
            if (p1.x > VIEWBOX_WIDTH + BUFFER) p1.vx -= 0.5;
            if (p1.y < -BUFFER) p1.vy += 0.5;
            if (p1.y > VIEWBOX_HEIGHT + BUFFER) p1.vy -= 0.5;

            p1.vx *= config.friction;
            p1.vy *= config.friction;
            p1.x += p1.vx;
            p1.y += p1.vy;

            if (p1.element) {
              gsap.set(p1.element, { x: p1.x - p1.originX, y: p1.y - p1.originY });
            }
          }
        };

        gsap.ticker.add(updatePhysics);
      });
    }, containerRef);

    return () => ctx.revert();
  }, [blobCount, config, minSize, maxSize]);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${backgroundColor}`}>
      <svg className="absolute w-0 h-0">
        <defs>
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%" fx="35%" fy="35%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="30%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <svg
        ref={containerRef}
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice" // This ensures the SVG fills the area without gaps
        className="h-full w-full scale-110" // Slight scale up prevents blur-bleeding at the very edges
        style={{ 
          filter: `blur(${blur}px)`,
          opacity: isMounted ? 1 : 0,
          transition: "opacity 2s ease"
        }}
      >
        <g>
          {layers.map((layer, index) => (
            <circle
              key={`wave-blob-${index}`}
              className={`wave-blob ${blobColor.startsWith('bg-') ? blobColor.replace('bg-', 'text-') : ''}`}
              cx={layer.x}
              cy={layer.y}
              r={layer.r}
              fill="url(#glowGradient)"
              fillOpacity={opacity}
              style={{ 
                transformOrigin: `${layer.x}px ${layer.y}px`,
                filter: `saturate(${saturation}) brightness(${brightness})`,
                color: !blobColor.startsWith('bg-') ? blobColor : undefined
              }}
            />
          ))}
        </g>
      </svg>

      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};