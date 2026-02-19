"use client";

import { useEffect, useState } from "react";
import { Server, Zap } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Fonctionnement", href: "#fonctionnement" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(15,19,24,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(22,188,0,0.2)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 no-underline"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(22,188,0,0.15)", border: "1px solid rgba(22,188,0,0.3)" }}
            >
              <Server className="w-4 h-4" style={{ color: "#16BC00" }} />
            </div>
            <span
              className="font-black text-white"
              style={{ fontSize: "1.05rem", letterSpacing: "-0.02em" }}
            >
              datacenter.lu
            </span>
            <span
              className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold"
              style={{
                background: "rgba(22,188,0,0.1)",
                color: "#16BC00",
                border: "1px solid rgba(22,188,0,0.25)",
              }}
            >
              <Zap className="w-2.5 h-2.5" />
              AI-Powered
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ color: "rgba(255,255,255,0.65)", background: "transparent", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.65)";
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary hidden sm:inline-flex"
              style={{ padding: "9px 20px", fontSize: "0.85rem" }}
            >
              Demander une démo
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              style={{ background: "transparent", border: "none", cursor: "pointer" }}
            >
              <span
                className="block w-5 h-0.5 transition-all duration-300"
                style={{
                  background: "#fff",
                  transformOrigin: "center",
                  transform: mobileOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
                }}
              />
              <span
                className="block w-5 h-0.5 transition-all duration-300"
                style={{
                  background: "#fff",
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-5 h-0.5 transition-all duration-300"
                style={{
                  background: "#fff",
                  transformOrigin: "center",
                  transform: mobileOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: mobileOpen ? "300px" : "0" }}
        >
          <nav className="pb-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary mt-2 justify-center"
            >
              Demander une démo
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
