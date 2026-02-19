"use client";

import { Server } from "lucide-react";

const links = {
  Solutions: [
    { label: "NL Provisioning", href: "#solutions" },
    { label: "AI Security Monitor", href: "#fonctionnement" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "FAQ", href: "#faq" },
  ],
  Entreprise: [
    { label: "À propos", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Partenaires", href: "#" },
    { label: "Carrières", href: "#" },
  ],
  Légal: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "CGU", href: "#" },
    { label: "RGPD", href: "#" },
  ],
  Contact: [
    { label: "contact@datacenter.lu", href: "mailto:contact@datacenter.lu" },
    { label: "+352 27 99 00 00", href: "tel:+35227990000" },
    { label: "Leudelange, Luxembourg", href: "#" },
    { label: "Demander une démo", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#0a0e14", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(22,188,0,0.12)", border: "1px solid rgba(22,188,0,0.25)" }}
              >
                <Server className="w-4 h-4" style={{ color: "#16BC00" }} />
              </div>
              <span
                className="font-black text-white"
                style={{ fontSize: "1rem", letterSpacing: "-0.02em" }}
              >
                datacenter.lu
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              L&apos;infrastructure luxembourgeoise propulsée par l&apos;IA native.
            </p>
            {/* Green accent */}
            <div
              className="mt-5 h-0.5 w-16 rounded-full"
              style={{ background: "#16BC00" }}
            />
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                className="font-bold text-sm mb-4"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm no-underline transition-colors duration-150"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(22,188,0,0.9)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)";
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2025 Datacenter Luxembourg S.A. — Tous droits réservés.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              Propulsé par
            </span>
            <span
              className="text-xs font-bold"
              style={{ color: "rgba(22,188,0,0.7)" }}
            >
              Claude AI · Anthropic
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
