"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const sideImages = [
  { src: "/images/proj-1.jpg", alt: "Luxury foyer with arched doorway", position: "left" },
  { src: "/images/proj-living-1.jpg", alt: "Indian living room design", position: "left" },
  { src: "/images/proj-kitchen-1.jpg", alt: "Smart modular kitchen", position: "right" },
  { src: "/images/proj-2.jpg", alt: "Modern bedroom design", position: "right" },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const gapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }
          
          const rect = sectionRef.current.getBoundingClientRect();
          const scrolled = -rect.top;
          const scrollableHeight = (window.innerHeight || 800) * 2;
          const rawProgress = scrollableHeight > 0 ? scrolled / scrollableHeight : 0;
          const progress = Math.max(0, Math.min(1, Number.isNaN(rawProgress) ? 0 : rawProgress));
          
          // Text fades out during first 30% of scroll
          const rawTextOpacity = Math.max(0, Math.min(1, 1 - progress / 0.3));
          const textOpacity = Number.isNaN(rawTextOpacity) ? 1 : rawTextOpacity;

          // Bento animation starts at 30%, completes at 100%
          const rawImageProgress = Math.max(0, Math.min(1, (progress - 0.3) / 0.7));
          const imageProgress = Number.isNaN(rawImageProgress) ? 0 : rawImageProgress;

          const centerWidth = 100 - imageProgress * 78;
          const sideWidth = imageProgress * 39;
          const rawSideOpacity = Math.min(1, Math.max(0, imageProgress * 1.5));
          const sideOpacity = Number.isNaN(rawSideOpacity) ? 0 : rawSideOpacity;
          const gap = imageProgress * 6;

          if (centerRef.current) centerRef.current.style.width = `${centerWidth}%`;
          if (textRef.current) textRef.current.style.opacity = textOpacity.toString();
          if (gapRef.current) gapRef.current.style.gap = `${gap}px`;

          if (leftRef.current) {
            leftRef.current.style.width = `${sideWidth}%`;
            leftRef.current.style.transform = `translateX(${-100 + imageProgress * 100}%)`;
            leftRef.current.style.opacity = sideOpacity.toString();
          }

          if (rightRef.current) {
            rightRef.current.style.width = `${sideWidth}%`;
            rightRef.current.style.transform = `translateX(${100 - imageProgress * 100}%)`;
            rightRef.current.style.opacity = sideOpacity.toString();
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-foreground" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Bento Grid Container */}
        <div
          ref={gapRef}
          className="flex h-full w-full items-stretch"
          style={{ gap: '0px' }}
        >
          {/* Left Column */}
          <div
            ref={leftRef}
            className="flex h-full will-change-transform"
            style={{ width: '0%', opacity: 0, transform: 'translateX(-100%)', flexShrink: 0 }}
          >
            {sideImages.filter((img) => img.position === "left").map((img, idx) => (
              <div key={idx} className="relative flex-1 h-full overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* Center Column */}
          <div
            ref={centerRef}
            className="relative h-full overflow-hidden flex-shrink-0"
            style={{ width: '100%' }}
          >
            <div className="absolute inset-0 z-10 bg-foreground/50" />
            <Image
              src="/images/proj-wall-1.jpg"
              alt="Blue Interiors — luxury home interior Bangalore"
              fill
              className="object-cover"
              priority
            />

            <div
              ref={textRef}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center"
              style={{ opacity: 1 }}
            >
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-accent">
                Bangalore&apos;s Most Trusted
              </p>
              <h1 className="text-[18vw] font-bold leading-[0.85] tracking-tighter text-white">
                BLUE
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-white/80 md:text-2xl">
                Interior designers in Bangalore since 2011
              </p>
              <a
                href="#portfolio"
                className="mt-10 inline-flex items-center gap-2 border border-accent px-8 py-3 text-sm uppercase tracking-widest text-accent transition-all hover:bg-accent hover:text-white"
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div
            ref={rightRef}
            className="flex h-full will-change-transform"
            style={{ width: '0%', opacity: 0, transform: 'translateX(100%)', flexShrink: 0 }}
          >
            {sideImages.filter((img) => img.position === "right").map((img, idx) => (
              <div key={idx} className="relative flex-1 h-full overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
