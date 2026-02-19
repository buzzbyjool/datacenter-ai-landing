"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Server, Shield, Zap, ChevronRight } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up, .fade-left");
    if (!els) return;
    const t = setTimeout(() => {
      els.forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 110));
    }, 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(150deg, #0d1117 0%, #1e2329 40%, #2f353e 100%)" }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute pointer-events-none"
        style={{ top: "15%", right: "10%", width: 600, height: 600,
          background: "radial-gradient(circle, rgba(22,188,0,0.07) 0%, transparent 65%)",
          filter: "blur(48px)" }} />
      <div className="absolute pointer-events-none"
        style={{ bottom: "20%", left: "5%", width: 400, height: 400,
          background: "radial-gradient(circle, rgba(22,188,0,0.05) 0%, transparent 65%)",
          filter: "blur(64px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-5xl mx-auto">

          {/* Partnership pill */}
          <div className="fade-up flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-semibold"
              style={{ background: "rgba(22,188,0,0.1)", border: "1px solid rgba(22,188,0,0.25)", color: "#16BC00" }}>
              <Server className="w-3.5 h-3.5" />
              <span style={{ color: "rgba(255,255,255,0.5)" }}>Datacenter Luxembourg</span>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>×</span>
              <Zap className="w-3.5 h-3.5" />
              <span>Easylab AI</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="fade-up delay-1 text-center text-white font-black mb-6"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            L&apos;intelligence artificielle<br />
            <span style={{
              background: "linear-gradient(135deg, #16BC00 0%, #4de63a 60%, #16BC00 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>
              au cœur de votre infrastructure
            </span>
          </h1>

          {/* Subtitle */}
          <p className="fade-up delay-2 text-center text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>
            Deux solutions IA sur mesure conçues pour{" "}
            <span className="text-white font-semibold">Datacenter Luxembourg</span> —
            transformer votre parcours client et sécuriser votre réseau comme jamais.
          </p>

          {/* CTA buttons */}
          <div className="fade-up delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button onClick={() => scrollTo("solution-1")} className="btn-primary text-base">
              Découvrir les solutions
              <ArrowDown className="w-4 h-4" />
            </button>
            <button onClick={() => scrollTo("cta")} className="btn-ghost text-base">
              Planifier une démo
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Stats */}
          <div className="fade-up delay-4 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { value: "2", unit: "solutions", sub: "IA sur mesure" },
              { value: "6-10", unit: "semaines", sub: "premier MVP" },
              { value: "NIS2", unit: "ready", sub: "compliance intégrée" },
            ].map((s) => (
              <div key={s.sub} className="text-center py-4 px-3 rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="font-black text-2xl md:text-3xl mb-0.5" style={{ color: "#16BC00" }}>
                  {s.value}
                </div>
                <div className="text-xs font-semibold text-white">{s.unit}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Trusted by */}
          <div className="fade-up delay-5 mt-12 flex flex-col items-center gap-3">
            <p className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.25)" }}>
              Proposé exclusivement à
            </p>
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <Shield className="w-5 h-5" style={{ color: "#16BC00" }} />
              <span className="text-white font-bold tracking-wide">Datacenter Luxembourg S.A.</span>
              <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(22,188,0,0.15)", color: "#16BC00" }}>
                Partenariat stratégique
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={() => scrollTo("solution-1")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity"
        style={{ background: "none", border: "none", cursor: "pointer" }}>
        <div className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
          <div className="w-1 h-2.5 rounded-full" style={{ background: "#16BC00" }} />
        </div>
      </button>
    </section>
  );
}
