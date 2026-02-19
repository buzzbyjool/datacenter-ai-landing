"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2, Zap } from "lucide-react";

const essentialFeatures = [
  "Qualification IA conversationnelle 24/7",
  "Devis automatiques en temps réel",
  "Multilingue : FR / EN / DE",
  "Handover commercial qualifié",
  "Dashboard client intégré",
];

const securityFeatures = [
  "Tout le plan Essentiel inclus",
  "Analyse NetFlow / sFlow en continu",
  "Détection d'anomalies ML",
  "Rapports NIS2 automatiques",
  "Alertes temps réel par email & SMS",
  "Dashboard sécurité dédié",
  "30 jours d'essai gratuit",
];

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll<HTMLElement>(".reveal").forEach((r, i) => {
              setTimeout(() => r.classList.add("visible"), i * 100);
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="tarifs"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "#fff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-5">
            <span className="badge">Tarifs</span>
          </div>
          <h2
            className="reveal d1 font-black mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#0f1318",
              letterSpacing: "-0.03em",
            }}
          >
            Tarifs{" "}
            <span style={{ color: "#16BC00" }}>transparents</span>
          </h2>
          <p
            className="reveal d2 text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "#666" }}
          >
            Intégrez l&apos;IA à votre contrat existant. Sans surprise, sans engagement minimum.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan Essentiel */}
          <div
            className="reveal d2 pricing-card"
            style={{
              background: "#f4f6f8",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <div className="mb-8">
              <span className="badge mb-4">NL Provisioning</span>
              <h3
                className="font-black text-2xl mb-2"
                style={{ color: "#0f1318", letterSpacing: "-0.02em" }}
              >
                Plan Essentiel
              </h3>
              <div className="flex items-end gap-2 mb-3">
                <span
                  className="font-black"
                  style={{ fontSize: "2rem", color: "#16BC00" }}
                >
                  Inclus
                </span>
                <span className="text-sm mb-1" style={{ color: "#888" }}>
                  dans votre contrat
                </span>
              </div>
              <p className="text-sm" style={{ color: "#666" }}>
                Disponible dès votre premier contrat Datacenter Luxembourg.
                Aucun coût supplémentaire.
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {essentialFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "#16BC00" }}
                  />
                  <span className="text-sm" style={{ color: "#444" }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-outline w-full justify-center"
            >
              Inclus dans mon contrat
            </button>
          </div>

          {/* Plan Sécurité */}
          <div
            className="reveal d3 pricing-card pricing-card-recommended relative"
            style={{
              background: "#0f1318",
            }}
          >
            {/* Recommended badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black"
                style={{
                  background: "#16BC00",
                  color: "#fff",
                }}
              >
                <Zap className="w-3 h-3" />
                Recommandé
              </span>
            </div>

            {/* Glow */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(22,188,0,0.08) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />

            <div className="relative mb-8">
              <span className="badge mb-4">AI Security Monitor</span>
              <h3
                className="font-black text-2xl mb-2 text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                Plan Sécurité
              </h3>
              <div className="flex items-end gap-2 mb-1">
                <span
                  className="font-black"
                  style={{ fontSize: "2rem", color: "#16BC00" }}
                >
                  200€
                </span>
                <span className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                  /mois (à partir de)
                </span>
              </div>
              <p
                className="text-xs mb-3"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Selon volume de trafic supervisé
              </p>
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(22,188,0,0.1)",
                  border: "1px solid rgba(22,188,0,0.2)",
                }}
              >
                <CheckCircle2 className="w-3 h-3" style={{ color: "#16BC00" }} />
                <span className="text-xs font-bold" style={{ color: "#16BC00" }}>
                  30 jours d&apos;essai gratuit
                </span>
              </div>
            </div>

            <ul className="relative space-y-3 mb-8">
              {securityFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "#16BC00" }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary relative w-full justify-center"
            >
              Démarrer l&apos;essai gratuit
            </button>
          </div>
        </div>

        {/* Footer note */}
        <p
          className="reveal d4 text-center text-sm mt-8"
          style={{ color: "#999" }}
        >
          Sans engagement minimum · Résiliation à tout moment · Données hébergées au Luxembourg
        </p>
      </div>
    </section>
  );
}
