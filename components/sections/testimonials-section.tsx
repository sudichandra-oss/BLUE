"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background">
      {/* Quote Image with Text Overlay */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/blue-hero-interior.png"
          alt="Luxury Blue Interiors — modern living space in Bangalore"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - dark at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-end justify-center px-6 pb-16 md:px-12 md:pb-24 lg:px-20 lg:pb-32">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">Our Philosophy</p>
            <p className="text-2xl leading-relaxed text-white md:text-3xl lg:text-[2.5rem] lg:leading-snug">
              A home that combines contemporary design with personal reflection —
              built for those who believe beautiful interiors are not a luxury, but a lifestyle.
            </p>
            <div className="mt-8 flex justify-center gap-8">
              <div className="text-center">
                <span className="block text-3xl font-bold text-accent">5000+</span>
                <span className="text-xs uppercase tracking-widest text-white/70">Happy Homes</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-accent">15+</span>
                <span className="text-xs uppercase tracking-widest text-white/70">Years</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-accent">10</span>
                <span className="text-xs uppercase tracking-widest text-white/70">Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="bg-secondary px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Client Reviews</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Loved by Our Customers
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Satish Gali", review: "Their color suggestion = game changer! Absolutely love the transformation.", rating: 5 },
              { name: "Shreyas Sable", review: "Great value for the quality. Very smooth installation process.", rating: 5 },
              { name: "Prasanna Tiwadi", review: "Very smooth installation process. Professional team throughout.", rating: 5 },
              { name: "Amar Shewale", review: "Stylish design with great durability. Impressed with the material quality.", rating: 5 },
              { name: "Music Factory", review: "The storage solutions they suggested are a game changer. Cooking feels so easy now.", rating: 5 },
              { name: "Anirudha Magar", review: "Best Häfele studio in Whitefield. Amazing craftsmanship and attention to detail.", rating: 5 },
            ].map((review, index) => (
              <div key={index} className="rounded-sm border border-border bg-background p-6">
                <div className="mb-3 flex text-accent">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-sm">{star}</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{review.review}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-medium">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">Verified Google Review</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
