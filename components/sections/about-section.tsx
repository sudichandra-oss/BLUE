"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Ruler, Sparkles, Lightbulb, ShieldCheck, ClipboardCheck, Home } from "lucide-react";

const stats = [
  { value: "5000+", label: "Completed Homes" },
  { value: "15+", label: "Years of Excellence" },
  { value: "45", label: "Day Delivery" },
  { value: "10", label: "Year Warranty" },
];

const milestones = [
  { year: "2011", title: "Founded", description: "Started as a small design studio with a passion for aesthetics." },
  { year: "2014", title: "100+ Projects", description: "Successfully completed 100+ residential & commercial projects." },
  { year: "2017", title: "Own Factory", description: "Set up production unit for in-house manufacturing quality control." },
  { year: "2019", title: "Häfele Partner", description: "Tie-up with Häfele — Germany's leading hardware brand." },
  { year: "2024", title: "5000+ Homes", description: "Now proudly serving 5000+ clients across India." },
];

const features = [
  {
    icon: Ruler,
    category: "CRAFTED TO LAST",
    title: "Premium Materials",
    description: "Built using BWP 710-grade plywood and branded hardware — designed for longevity.",
  },
  {
    icon: Sparkles,
    category: "GERMAN PRECISION",
    title: "HÄFELE Studio Partner",
    description: "Proudly associated with Häfele, a renowned German brand known for innovative and durable hardware solutions.",
  },
  {
    icon: Lightbulb,
    category: "MADE PERSONAL",
    title: "Design That Fits You",
    description: "Personalized interiors crafted to match your lifestyle, taste, and space.",
  },
  {
    icon: ShieldCheck,
    category: "PEACE OF MIND",
    title: "10-Year Warranty",
    description: "Peace of mind that lasts long after your interiors are complete.",
  },
  {
    icon: ClipboardCheck,
    category: "CLEAR AT EVERY STEP",
    title: "Transparent Process",
    description: "Clear communication, detailed planning, and regular updates at every project stage.",
  },
  {
    icon: Home,
    category: "FROM IDEA TO HOME",
    title: "Turnkey Execution",
    description: "100% in-house teams handling everything from concept to completion.",
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-background">
      {/* Hero Banner */}
      <div className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/proj-kitchen-3.jpg"
            alt="About Blue Interiors"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">About Blue Interiors</p>
          <h2 className="text-4xl font-medium leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Led by Manish Jain —
            <br />
            <span className="text-accent">15+ years of excellence</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            Manish Jain, an architect with a passion for functionality and aesthetics, founded Blue Interiors in Bengaluru in 2011. Today, it&apos;s one of Bangalore&apos;s most trusted turnkey home interior companies — transforming more than 5,000+ homes across the city.
          </p>
        </div>

        {/* Decorative background element */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent" />
          <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent" />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-y border-border bg-secondary">
        <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center px-6 py-10 text-center">
              <span className="text-4xl font-bold text-foreground md:text-5xl">{stat.value}</span>
              <span className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Founder Story */}
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square md:aspect-auto md:min-h-[600px]">
          <Image
            src="/images/proj-3.jpg"
            alt="Manish Jain — Founder & Creative Director of Blue Interiors"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-sm uppercase tracking-widest text-accent">Founder & Creative Director</p>
            <h3 className="mt-2 text-3xl font-medium text-white">Manish Jain</h3>
          </div>
        </div>

        {/* Story Content */}
        <div className="flex flex-col justify-center bg-secondary px-8 py-16 md:px-12 lg:px-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Our Story</p>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
            We Design Homes That Reflect You
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Blue Interiors began its journey in 2011 in Bengaluru with a simple belief: every home deserves thoughtful design, genuine materials, and a hassle-free execution experience.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            With over a decade of experience and 5,000+ happy homes delivered, Blue Interiors blends design excellence, German precision, and trust into every home we build.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From compact 2 BHK apartments to premium villas, our designs are tailored to match your lifestyle, taste, and budget. Homeowners across Bangalore trust us because we deliver on time, every time.
          </p>
          <div className="mt-10">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("openConsultationModal"))}
              className="inline-flex items-center gap-2 border border-foreground px-8 py-3 text-sm font-medium uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-white cursor-pointer shadow-sm"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Our Strengths / Why Choose Us */}
      <div id="expertise" ref={sectionRef} className="px-6 py-20 md:px-12 md:py-28 lg:px-20 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Why Choose Us</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Built on Trust &amp; Quality
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-[#EBE3D7] bg-[#FAF8F5] dark:bg-card p-8 sm:p-10 transition-all duration-300 hover:border-[#D4A574] hover:shadow-xl flex flex-col justify-between"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
                  }}
                >
                  <div>
                    {/* Header Row: Circle Icon + Uppercase Category Badge */}
                    <div className="flex items-center justify-between gap-4 mb-8">
                      <div className="w-14 h-14 rounded-full bg-white dark:bg-secondary flex items-center justify-center border border-[#E8DFC8] dark:border-border shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <IconComp className="w-6 h-6 text-[#D4A574]" strokeWidth={1.6} />
                      </div>
                      <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C49564] dark:text-accent">
                        {feature.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold tracking-tight text-[#0F1B3C] dark:text-foreground mb-3">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base leading-relaxed text-muted-foreground font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="border-t border-border bg-foreground px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Our Journey</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-4xl">
              15 Years of Craftsmanship
            </h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 h-full w-px bg-accent/30 md:left-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-accent md:left-1/2" />

                  {/* Content */}
                  <div className={`ml-12 flex-1 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="text-xs uppercase tracking-widest text-accent">{milestone.year}</span>
                    <h3 className="mt-1 text-xl font-medium text-white">{milestone.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{milestone.description}</p>
                  </div>

                  {/* Empty side */}
                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

