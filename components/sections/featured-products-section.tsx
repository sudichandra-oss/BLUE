"use client";

import { FadeImage } from "@/components/fade-image";
import { useState, useEffect } from "react";

type Category = "All" | "Living Room" | "Kitchen" | "Bedroom" | "Foyer";

const projects: { image: string; title: string; category: Category; span: string }[] = [
  // Row 1
  { image: "/images/proj-1.jpg",         title: "Foyer — Arched Walnut Console",     category: "Foyer",       span: "col-span-2 row-span-2" },
  { image: "/images/proj-kitchen-1.jpg",  title: "Modular Kitchen — Cream & Black",   category: "Kitchen",     span: "col-span-1 row-span-1" },
  { image: "/images/proj-2.jpg",          title: "Bedroom — Study Desk & Wardrobe",   category: "Bedroom",     span: "col-span-1 row-span-1" },
  // Row 2
  { image: "/images/proj-kitchen-2.jpg",  title: "Kitchen — Navy Blue Glossy",        category: "Kitchen",     span: "col-span-1 row-span-1" },
  { image: "/images/proj-3.jpg",          title: "Bedroom — Sage Green with Pendants",category: "Bedroom",     span: "col-span-1 row-span-1" },
  // Row 3
  { image: "/images/proj-living-1.jpg",   title: "Living Room — Indian Heritage Art", category: "Living Room", span: "col-span-1 row-span-2" },
  { image: "/images/proj-4.jpg",          title: "Living Room — Crimson Velvet",      category: "Living Room", span: "col-span-2 row-span-1" },
  // Row 4
  { image: "/images/proj-kitchen-3.jpg",  title: "Kitchen — Steel Blue U-Shape",      category: "Kitchen",     span: "col-span-1 row-span-1" },
  { image: "/images/proj-5.jpg",          title: "Kitchen — Sage Green L-Shape",      category: "Kitchen",     span: "col-span-1 row-span-1" },
  // Row 5
  { image: "/images/proj-6.jpg",          title: "Project Showcase",                  category: "Living Room", span: "col-span-2 row-span-1" },
  { image: "/images/proj-7.jpg",          title: "Project Showcase",                  category: "Bedroom",     span: "col-span-1 row-span-1" },
  // Row 6
  { image: "/images/proj-wardrobe-1.jpg", title: "Wardrobe — Wall Panel Design",      category: "Bedroom",     span: "col-span-1 row-span-1" },
  { image: "/images/proj-wall-1.jpg",     title: "Wall Molding + Wallpaper",          category: "Living Room", span: "col-span-1 row-span-1" },
  { image: "/images/proj-8.jpg",          title: "Project Showcase",                  category: "Kitchen",     span: "col-span-1 row-span-1" },
  // Row 7
  { image: "/images/proj-9.jpg",          title: "Project Showcase",                  category: "Foyer",       span: "col-span-1 row-span-1" },
  { image: "/images/proj-setup-1.jpg",    title: "Home Setup",                        category: "Living Room", span: "col-span-1 row-span-1" },
  { image: "/images/proj-forever-1.jpg",  title: "Premium Finish",                    category: "Bedroom",     span: "col-span-1 row-span-1" },
];

const CATEGORIES: Category[] = ["All", "Living Room", "Kitchen", "Bedroom", "Foyer"];

export function FeaturedProductsSection() {
  const [active, setActive] = useState<Category>("All");

  useEffect(() => {
    const handleCategoryEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      setActive(customEvent.detail as Category);
    };
    window.addEventListener('setPortfolioCategory', handleCategoryEvent);
    return () => window.removeEventListener('setPortfolioCategory', handleCategoryEvent);
  }, []);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative bg-background py-20 md:py-32">
      <div className="px-4 md:px-12 lg:px-20">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-accent mb-4">Our Portfolio</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Interior Showcase
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-10">
          From modular kitchens to full turnkey interiors — every space is handcrafted with precision.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-widest border transition-all duration-300 ${
                active === cat
                  ? "bg-foreground text-white border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-7xl mx-auto auto-rows-[180px] md:auto-rows-[220px]">
          {filtered.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg ${project.span}`}
              style={{
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${index * 0.05}s forwards`,
              }}
            >
              <FadeImage
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/50 flex items-end p-4">
                <p className="text-white text-sm font-medium opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {project.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
