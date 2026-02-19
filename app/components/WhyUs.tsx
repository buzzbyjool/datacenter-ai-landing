"use client";

import { useEffect, useRef } from "react";
import { Lock, Brain, Plug } from "lucide-react";

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll<HTMLElement>(".reveal").forEach((r, i) => {
              setTimeout(() => r.classList.add("visible"), i * 90);
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

  const cards = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Souveraineté des données",
      desc: "Vos données restent au Luxembourg. Nos serveurs sont opérés exclusivement sur notre infrastructure souveraine, conforme RGPD et aux exigences sectorielles les plus strictes.",
      gradient: "rgba(22,188,0,0.08)",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "IA de dernière génération",
      desc: "Nous intégrons Claude AI d'Anthropic — l'un des modèles les plus avancés au monde. RAG sur votre catalogue, agents autonomes et fine-tuning continu sur vos données.",
      gradient: "rgba(22,188,0,0.08)",
    },
    {
      icon: <Plug className="w-6 h-6" />,
      title: "Intégration transparente",
      desc: "Connexion directe à votre portail client, CRM et infrastructure réseau existants. Pas de migration, pas de rupture — nos solutions s'intègrent à ce que vous avez.",
      gradient: "rgba(22,188,0,0.08)",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "#f4f6f8" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-5">
            <span className="badge">Pourquoi nous</span>
          </div>
          <h2
            className="reveal d1 font-black mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#0f1318",
              letterSpacing: "-0.03em",
            }}
          >
            L&apos;IA native au cœur de{" "}
            <span style={{ color: "#16BC00" }}>votre datacenter</span>
          </h2>
          <p
            className="reveal d2 text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#666" }}
          >
            Nous ne rajoutons pas une couche IA sur une infrastructure existante.
            Nous opérons un datacenter conçu dès l&apos;origine pour l&apos;IA.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`reveal d${i + 2} white-card p-8`}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: "linear-gradient(135deg, rgba(22,188,0,0.12), rgba(22,188,0,0.04))",
                  border: "1px solid rgba(22,188,0,0.18)",
                  color: "#16BC00",
                }}
              >
                {card.icon}
              </div>
              <h3
                className="font-black text-lg mb-3"
                style={{ color: "#1a1a1a", letterSpacing: "-0.01em" }}
              >
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                {card.desc}
              </p>
              <div
                className="mt-6 h-0.5 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #16BC00, transparent)",
                  opacity: 0.25,
                }}
              />
            </div>
          ))}
        </div>

        {/* Dark strip */}
        <div
          className="reveal d5 rounded-2xl p-10 text-center"
          style={{
            background: "linear-gradient(135deg, #0f1318 0%, #161b22 100%)",
            border: "1px solid rgba(22,188,0,0.15)",
          }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(22,188,0,0.1)",
              border: "1px solid rgba(22,188,0,0.2)",
            }}
          >
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#16BC00" }}>
              Première au Luxembourg
            </span>
          </div>
          <p
            className="font-black text-white"
            style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", letterSpacing: "-0.02em" }}
          >
            Premier datacenter luxembourgeois
            <br />à intégrer l&apos;IA nativement
          </p>
          <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Pas un chatbot, pas un wrapper. Une infrastructure repensée de fond en comble
            pour que l&apos;IA soit au cœur de chaque interaction client.
          </p>
        </div>
      </div>
    </section>
  );
}
