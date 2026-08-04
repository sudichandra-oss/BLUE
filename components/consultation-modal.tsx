"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Phone, Mail, User, Home, CheckCircle2, Send, Sparkles } from "lucide-react";

export function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "3 BHK Apartment",
    budget: "₹10L - ₹15L",
    message: "",
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    
    // Listen for custom trigger or link clicks to #contact
    const handleHashChange = () => {
      if (window.location.hash === "#contact") {
        setIsOpen(true);
      }
    };

    window.addEventListener("openConsultationModal", handleOpen);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("openConsultationModal", handleOpen);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        propertyType: "3 BHK Apartment",
        budget: "₹10L - ₹15L",
        message: "",
      });
    }, 2800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-card text-card-foreground border border-border rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center animate-scale-in">
            <div className="mx-auto w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Consultation Request Received!</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
              Thank you <span className="text-foreground font-semibold">{formData.name}</span>! Our lead designer at BLUE Interiors Bangalore will call you shortly at <span className="text-accent font-semibold">{formData.phone}</span>.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-medium bg-accent/10 px-4 py-2 rounded-full">
              <Sparkles size={14} /> 100% Free Design Estimate Attached
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-bold">Bangalore&apos;s Top Designers</p>
              <h3 className="text-2xl font-bold text-foreground mt-1">Book Free Interior Consultation</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Get personalized 3D designs, material quotes, and factory estimate in 48 hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg pl-9 pr-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg pl-9 pr-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Property Type
                  </label>
                  <div className="relative">
                    <Home size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg pl-9 pr-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent appearance-none cursor-pointer"
                    >
                      <option>2 BHK Apartment</option>
                      <option>3 BHK Apartment</option>
                      <option>4 BHK / Penthouse</option>
                      <option>Independent Villa</option>
                      <option>Commercial Space</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Target Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent cursor-pointer"
                >
                  <option>₹5 Lakhs - ₹10 Lakhs</option>
                  <option>₹10 Lakhs - ₹15 Lakhs</option>
                  <option>₹15 Lakhs - ₹25 Lakhs</option>
                  <option>₹25 Lakhs+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Project Details / Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Looking for modular kitchen + master bedroom wardrobe in HSR Layout..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg p-3 text-sm text-foreground focus:outline-none focus:border-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-foreground text-background hover:bg-accent hover:text-foreground font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-sm uppercase tracking-wider"
              >
                <Send size={16} />
                <span>Submit &amp; Get Free Quote</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
