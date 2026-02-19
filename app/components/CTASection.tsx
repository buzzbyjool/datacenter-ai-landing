"use client";

import { useEffect, useRef } from "react";
import { Mail, Calendar, ArrowRight, MapPin, Building2 } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          ref.current?.querySelectorAll(".fade-up").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 100)
          );
          obs.disconnect();
        }
      });
    }, { threshold: 0.15 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="cta"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(150deg, #0d1117 0%, #1e2329 50%, #2f353e 100%)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute pointer-events-none"
        style={{ top: "20%", left: "50%", transform: "translateX(-50%)",
          width: 700, height: 400,
          background: "radial-gradient(ellipse, rgba(22,188,0,0.08) 0%, transparent 70%)",
          filter: "blur(48px)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="fade-up flex justify-center mb-5">
            <span className="badge">Passons à l&apos;action</span>
          </div>
          <h2 className="fade-up delay-1 text-white font-black mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            Prêt à transformer<br />
            <span style={{
              background: "linear-gradient(135deg, #16BC00 0%, #4de63a 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>
              l&apos;infrastructure du futur ?
            </span>
          </h2>
          <p className="fade-up delay-2 text-lg max-w-2xl mx-auto mb-10"
            style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>
            Première démo gratuite, sans engagement. On analyse votre contexte et on vous présente
            un proof-of-concept en 48h.
          </p>

          {/* CTAs */}
          <div className="fade-up delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:contact@easylab.ai" className="btn-cta">
              <Mail className="w-5 h-5" />
              Demander une démo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="mailto:contact@easylab.ai?subject=Appel découverte Datacenter Luxembourg" className="btn-ghost">
              <Calendar className="w-4 h-4" />
              Planifier un appel
            </a>
          </div>
        </div>

        {/* Info cards */}
        <div className="fade-up delay-4 grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {[
            {
              icon: <Mail className="w-5 h-5" />,
              label: "Email",
              value: "contact@easylab.ai",
              sub: "Réponse sous 24h"
            },
            {
              icon: <Building2 className="w-5 h-5" />,
              label: "Société",
              value: "Easylab AI S.A.R.L.",
              sub: "Luxembourg"
            },
            {
              icon: <MapPin className="w-5 h-5" />,
              label: "Disponibilité",
              value: "PoC en 30 jours",
              sub: "Première démo gratuite"
            },
          ].map((item) => (
            <div key={item.label} className="glass-card p-6 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(22,188,0,0.12)", border: "1px solid rgba(22,188,0,0.2)", color: "#16BC00" }}>
                  {item.icon}
                </div>
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-1"
                style={{ color: "rgba(255,255,255,0.3)" }}>{item.label}</p>
              <p className="text-white font-bold text-sm">{item.value}</p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
