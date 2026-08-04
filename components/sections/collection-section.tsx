"use client";

import { FadeImage } from "@/components/fade-image";

const accessories = [
  {
    id: 1,
    name: "Modular Kitchen",
    description: "Custom kitchens with Häfele hardware and premium BWP 710-grade plywood",
    tag: "Most Popular",
    image: "/images/proj-kitchen-2.jpg",
    categoryFilter: "Kitchen"
  },
  {
    id: 2,
    name: "Master Bedroom",
    description: "Personalized bedroom interiors crafted to match your lifestyle and space",
    tag: "Premium Design",
    image: "/images/proj-2.jpg",
    categoryFilter: "Bedroom"
  },
  {
    id: 3,
    name: "Living Room",
    description: "Contemporary living spaces that blend aesthetics, comfort, and functionality",
    tag: "Turnkey Solution",
    image: "/images/proj-living-1.jpg",
    categoryFilter: "Living Room"
  },
];

export function CollectionSection() {
  const handleViewProjects = (category: string) => {
    window.dispatchEvent(new CustomEvent('setPortfolioCategory', { detail: category }));
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'portfolio';
    }
  };

  return (
    <section id="services" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-16">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Our Services</p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Spaces We Transform
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          From modular kitchens to complete turnkey interiors — every space is crafted to reflect your personality.
        </p>
      </div>

      {/* Cards */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-accent px-3 py-1 text-xs uppercase tracking-widest text-white">
                  {accessory.tag}
                </span>
              </div>

              {/* Content */}
              <div className="py-6">
                <h3 className="text-lg font-medium leading-snug text-foreground">
                  {accessory.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {accessory.description}
                </p>
                <p 
                  className="mt-4 text-xs uppercase tracking-widest text-accent group-hover:underline cursor-pointer"
                  onClick={() => handleViewProjects(accessory.categoryFilter)}
                >
                  View Projects →
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group cursor-pointer">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-accent px-3 py-1 text-xs uppercase tracking-widest text-white">
                  {accessory.tag}
                </span>
              </div>

              {/* Content */}
              <div className="py-6">
                <h3 className="text-lg font-medium leading-snug text-foreground">
                  {accessory.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {accessory.description}
                </p>
                <p 
                  className="mt-4 text-xs uppercase tracking-widest text-accent group-hover:underline cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewProjects(accessory.categoryFilter);
                  }}
                >
                  View Projects →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
