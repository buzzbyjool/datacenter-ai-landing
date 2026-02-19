"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Easylab<span className="text-primary"> AI</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("solution-1")}
              className="navbar-link"
            >
              NL Provisioning
            </button>
            <button
              onClick={() => scrollTo("solution-2")}
              className="navbar-link"
            >
              Security Monitor
            </button>
            <button
              onClick={() => scrollTo("pourquoi")}
              className="navbar-link"
            >
              Pourquoi Easylab
            </button>
            <button
              onClick={() => scrollTo("cta")}
              className="btn-primary text-sm px-5 py-2.5"
            >
              Planifier une démo
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menu"
          >
            {isMobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-dark/98 backdrop-blur-md border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollTo("solution-1")}
              className="block w-full text-left navbar-link py-2 text-base"
            >
              NL Provisioning
            </button>
            <button
              onClick={() => scrollTo("solution-2")}
              className="block w-full text-left navbar-link py-2 text-base"
            >
              Security Monitor
            </button>
            <button
              onClick={() => scrollTo("pourquoi")}
              className="block w-full text-left navbar-link py-2 text-base"
            >
              Pourquoi Easylab
            </button>
            <button
              onClick={() => scrollTo("cta")}
              className="btn-primary w-full justify-center mt-2"
            >
              Planifier une démo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
