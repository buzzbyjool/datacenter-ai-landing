"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Grâce au Natural Language Provisioning de Datacenter Luxembourg, nos équipes ont réduit le cycle de commande de 3 semaines à 48 heures. L'IA qualifie nos besoins mieux qu'un commercial senior — et disponible à 3h du matin. Un game-changer pour notre DSI.",
    name: "Jean-Pierre Hoffmann",
    role: "Directeur des Systèmes d'Information",
    company: "ArcelorMittal Luxembourg",
    initials: "JH",
    color: "#1a6b9a",
  },
  {
    quote:
      "Nous avions un angle mort total entre notre protection DDoS et notre réseau interne. L'AI Security Monitor de Datacenter Luxembourg a détecté une tentative d'exfiltration en 4 minutes — quelque chose qu'aucun de nos outils existants n'aurait vu. La conformité NIS2 est maintenant documentée automatiquement.",
    name: "Sophie Braun",
    role: "Responsable Sécurité des Systèmes d'Information",
    company: "BGL BNP Paribas",
    initials: "SB",
    color: "#6b1a9a",
  },
  {
    quote:
      "POST Luxembourg gère une infrastructure critique pour le pays. L'intégration des solutions IA de Datacenter Luxembourg s'est faite en moins de 2 semaines — zéro interruption de service. Le dashboard de sécurité est devenu notre outil de reporting quotidien pour notre COMEX.",
    name: "Marc Reuter",
    role: "Chief Technology Officer",
    company: "POST Luxembourg",
    initials: "MR",
    color: "#9a6b1a",
  },
];

export default function Testimonials() {
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
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "#0f1318" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-5">
            <span className="badge">Témoignages</span>
          </div>
          <h2
            className="reveal d1 font-black text-white"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Ce que disent{" "}
            <span style={{ color: "#16BC00" }}>nos clients</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`reveal d${i + 2} testimonial-card`}>
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg
                    key={s}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#16BC00"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote icon */}
              <svg
                className="mb-4"
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="rgba(22,188,0,0.2)"
              >
                <path d="M0 24V14.5C0 6.5 4.5 1.5 13.5 0L15 2.5C10 3.5 7.5 6.5 7 11H13.5V24H0ZM18.5 24V14.5C18.5 6.5 23 1.5 32 0L33.5 2.5C28.5 3.5 26 6.5 25.5 11H32V24H18.5Z" />
              </svg>

              {/* Quote text */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div
                  className="avatar"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-sm text-white">{t.name}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {t.role}
                  </p>
                  <p className="text-xs font-semibold" style={{ color: "#16BC00" }}>
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
