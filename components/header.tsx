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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md rounded-full" : "bg-transparent"}`}
      style={{
        boxShadow: isScrolled ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" : "none"
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-2 pl-5 py-2">
        {/* Logo */}
        <Link href="#hero" className="text-lg font-bold tracking-tight transition-colors duration-300 text-foreground">
          BLUE<span className="text-accent">.</span>INTERIORS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#about"
            className="whitespace-nowrap text-sm transition-colors text-muted-foreground hover:text-foreground"
          >
            About Us
          </Link>
          <Link
            href="#services"
            className="whitespace-nowrap text-sm transition-colors text-muted-foreground hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="whitespace-nowrap text-sm transition-colors text-muted-foreground hover:text-foreground"
          >
            Portfolio
          </Link>
          <Link
            href="#expertise"
            className="whitespace-nowrap text-sm transition-colors text-muted-foreground hover:text-foreground"
          >
            Why Us
          </Link>
          <Link
            href="#testimonials"
            className="whitespace-nowrap text-sm transition-colors text-muted-foreground hover:text-foreground"
          >
            Testimonials
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#contact"
            className="px-4 py-2 text-sm font-medium transition-all rounded-full bg-foreground text-background hover:opacity-80"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="transition-colors md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-8 md:hidden rounded-b-2xl">
          <nav className="flex flex-col gap-6">
            <Link
              href="#about"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#expertise"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </Link>
            <Link
              href="#testimonials"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="mt-4 bg-foreground px-5 py-3 text-center text-sm font-medium text-background rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
