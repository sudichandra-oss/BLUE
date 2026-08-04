"use client";

import { useState, useEffect } from "react";
import { Search, Globe, CheckCircle2, Copy, FileText, X, Info, Settings, Sparkles } from "lucide-react";

interface SeoData {
  siteTitle: string;
  siteDescription: string;
  seoKeywords: string[];
  canonicalUrl: string;
  googleSiteVerification: string;
  bingSiteVerification: string;
  businessName: string;
}

export function SeoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [seo, setSeo] = useState<SeoData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/api/seo")
      .then((res) => res.json())
      .then((data) => setSeo(data))
      .catch((err) => console.error("Error fetching SEO config:", err));
  }, []);

  const handleCopyPath = () => {
    navigator.clipboard.writeText("seo-config.txt");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* SEO Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card text-card-foreground border border-border rounded-2xl p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/15 rounded-xl text-accent">
                <Globe size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-foreground">SEO & Google Search Engine Manager</h3>
                  <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded-md border border-emerald-500/20">
                    Active
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Dynamic Search Engine Optimization read directly from <code className="bg-muted px-1.5 py-0.5 rounded text-accent font-mono">seo-config.txt</code>
                </p>
              </div>
            </div>

            {/* Instructions Box */}
            <div className="bg-secondary/80 border border-accent/30 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <FileText size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <div className="text-xs space-y-1.5">
                  <p className="font-semibold text-foreground">
                    How to edit SEO keys & Google Search tags anytime:
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Open the <code className="bg-background px-1.5 py-0.5 rounded font-mono font-medium text-foreground border border-border">seo-config.txt</code> file in the project root folder. Add or update keywords, title, description, or search console verification keys, then save the file.
                  </p>
                  <button
                    onClick={handleCopyPath}
                    className="inline-flex items-center gap-1.5 text-accent hover:underline font-medium text-[11px] mt-1"
                  >
                    <Copy size={12} />
                    <span>{copied ? "File path copied!" : "Copy file path: seo-config.txt"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Google Search Live Preview */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3 flex items-center gap-1.5">
                <Sparkles size={14} className="text-accent" />
                Google Search Result Preview
              </h4>
              <div className="bg-background border border-border rounded-xl p-4 sm:p-5 shadow-inner">
                <div className="flex items-center gap-2 mb-1 text-xs text-muted-foreground">
                  <span className="truncate">{seo?.canonicalUrl || "https://blueinteriors.in"}</span>
                  <span>›</span>
                  <span className="text-foreground/80 font-medium">bangalore</span>
                </div>
                <h5 className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer leading-snug">
                  {seo?.siteTitle || "BLUE Interiors | Luxury Interior Designers in Bangalore"}
                </h5>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
                  {seo?.siteDescription || "Trusted interior designers in Bangalore since 2011. Modern modular kitchens, luxury bedrooms, living rooms..."}
                </p>
              </div>
            </div>

            {/* Active Keywords */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                Active Google & Search Engine Keywords ({seo?.seoKeywords.length || 0})
              </h4>
              <div className="flex flex-wrap gap-2">
                {seo?.seoKeywords.map((kw, i) => (
                  <span
                    key={i}
                    className="bg-secondary text-foreground text-xs font-medium px-3 py-1 rounded-full border border-border flex items-center gap-1.5"
                  >
                    <CheckCircle2 size={12} className="text-accent" />
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Verification Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-border">
              <div className="p-3 bg-secondary/50 rounded-lg border border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-medium">Google Search Console:</span>
                <span className="font-semibold text-foreground">
                  {seo?.googleSiteVerification ? "Key Configured" : "Add in txt file"}
                </span>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg border border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-medium">JSON-LD Schema Markup:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Enabled</span>
              </div>
            </div>

            {/* Footer Close */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-foreground text-background rounded-full hover:bg-accent hover:text-foreground transition-all"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
