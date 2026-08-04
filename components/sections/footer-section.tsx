"use client";

import Link from "next/link";

const footerLinks = {
  explore: [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
  ],
  about: [
    { label: "Manish Jain", href: "https://blueinteriors.in/about/" },
    { label: "Our Story", href: "https://blueinteriors.in/about/" },
    { label: "Locations", href: "https://blueinteriors.in/locations/" },
    { label: "Blog", href: "https://blueinteriors.in/blog/" },
  ],
  service: [
    { label: "Price Calculator", href: "https://blueinteriors.in/price-calculator/" },
    { label: "Contact Us", href: "https://blueinteriors.in/contact" },
    { label: "Privacy Policy", href: "https://blueinteriors.in/privacy-policy/" },
    { label: "Terms & Conditions", href: "https://blueinteriors.in/terms-and-conditions" },
  ],
};

export function FooterSection() {
  return (
    <footer id="contact" className="bg-foreground">
      {/* CTA Banner */}
      <div className="border-b border-white/10 px-6 py-12 text-center md:px-12 lg:px-20">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Crafted with Care</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
          Build Premium Quality &amp; Luxury Interiors
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("openConsultationModal"))}
            className="inline-flex items-center gap-2 bg-accent px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-all hover:bg-accent/90 shadow-lg cursor-pointer"
          >
            Book Free Consultation
          </button>
          <a
            href="https://wa.me/918123387210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-all hover:border-white"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="#" className="text-lg font-medium text-white">
              BLUE INTERIORS
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Luxury interior designers in Bangalore with 15+ years of experience. Modular kitchens, custom wardrobes & complete turnkey interiors.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/60">
              <p>📍 2nd floor, Sai Krishna Arcade, 24th Main Rd,</p>
              <p>BDA Layout, HSR Layout, Bengaluru 560102</p>
              <p className="mt-3">📞 +91-8123387210</p>
              <p>📞 +91-8618380923</p>
              <p>✉️ career.blueinteriors@gmail.com</p>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-white">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-white/40">
            ©2026 Blue Interiors. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://www.facebook.com/Interiorsblue"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/blue_interiors/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Instagram
            </Link>
            <Link
              href="https://www.youtube.com/@blueinteriors7459"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
