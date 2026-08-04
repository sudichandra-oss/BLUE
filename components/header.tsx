"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 z-50 w-full max-w-none transition-all duration-300 lg:top-4 lg:left-1/2 lg:w-[90%] lg:max-w-5xl lg:-translate-x-1/2 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg lg:rounded-full" : "bg-background/60 backdrop-blur-md lg:rounded-full"}`}
      style={{
        boxShadow: isScrolled ? "rgba(14, 63, 126, 0.08) 0px 0px 0px 1px, rgba(42, 51, 69, 0.08) 0px 2px 4px -1px, rgba(42, 51, 70, 0.08) 0px 8px 16px -4px" : "none"
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-3 pl-5 py-2">
        {/* Logo */}
        <Link href="#hero" className="text-base sm:text-lg font-bold tracking-tight transition-colors duration-300 text-foreground whitespace-nowrap flex-shrink-0">
          BLUE<span className="text-accent">.</span>INTERIORS
        </Link>

        {/* Desktop Navigation (large screens 1024px+) */}
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          <Link
            href="#about"
            className="whitespace-nowrap text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
          >
            About Us
          </Link>
          <Link
            href="#services"
            className="whitespace-nowrap text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="whitespace-nowrap text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
          >
            Portfolio
          </Link>
          <Link
            href="#expertise"
            className="whitespace-nowrap text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
          >
            Why Us
          </Link>
          <Link
            href="#testimonials"
            className="whitespace-nowrap text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
          >
            Testimonials
          </Link>
        </nav>

        {/* Actions - Tablet & Desktop CTA */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("openConsultationModal"))}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-medium transition-all rounded-full bg-foreground text-background hover:bg-accent hover:text-foreground whitespace-nowrap flex-shrink-0 shadow-sm cursor-pointer"
          >
            Free Consultation
          </button>

          {/* Mobile & Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 transition-colors lg:hidden text-foreground hover:text-accent rounded-full"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      {isMenuOpen && (
        <div id="mobile-navigation" className="w-full border-t border-border bg-background px-6 py-8 lg:hidden shadow-xl">
          <nav className="flex flex-col gap-5">
            <Link
              href="#about"
              className="text-base font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-base font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-base font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#expertise"
              className="text-base font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </Link>
            <Link
              href="#testimonials"
              className="text-base font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <button
              type="button"
              className="mt-2 bg-foreground px-5 py-3 text-center text-sm font-medium text-background hover:bg-accent hover:text-foreground rounded-full transition-all shadow-sm cursor-pointer"
              onClick={() => {
                setIsMenuOpen(false);
                window.dispatchEvent(new CustomEvent("openConsultationModal"));
              }}
            >
              Free Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
