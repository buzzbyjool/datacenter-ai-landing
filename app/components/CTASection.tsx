"use client";

import { useEffect, useRef } from "react";
import { Mail, Calendar, ArrowRight, Zap } from "lucide-react";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = section.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "#1e2329" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(22,188,0,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(22,188,0,0.4), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(22,188,0,0.2), transparent)" }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Icon badge */}
        <div className="animate-on-scroll flex justify-center mb-8">
          <div
            className="flex items-center justify-center w-16 h-16 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #16bc00 0%, #2b8f1e 100%)",
              boxShadow: "0 0 40px rgba(22,188,0,0.4)",
            }}
          >
            <Zap className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Headline */}
        <h2
          className="animate-on-scroll delay-100 font-black text-white mb-6"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.15 }}
        >
          Prêt à transformer votre{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #16bc00 0%, #4de63a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            infrastructure
          </span>{" "}
          avec l&apos;IA&nbsp;?
        </h2>

        {/* Sub */}
        <p
          className="animate-on-scroll delay-200 text-lg mb-10 max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}
        >
          Discutons de votre projet lors d&apos;une session de 30 minutes.
          Nous vous présentons une démo live et une estimation chiffrée adaptée
          à votre environnement Datacenter Luxembourg.
        </p>

        {/* Main CTA Button */}
        <div className="animate-on-scroll delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href="mailto:contact@easylab.ai?subject=Démo Easylab AI × Datacenter Luxembourg&body=Bonjour,%0A%0AJe souhaite planifier une démo pour discuter des solutions IA pour Datacenter Luxembourg.%0A%0ACordialement,"
            className="btn-primary text-base px-10 py-4 no-underline"
            style={{ fontSize: "1.05rem" }}
          >
            <Calendar className="w-5 h-5" />
            Planifier une démo gratuite
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Email direct */}
        <div className="animate-on-scroll delay-400 flex flex-col items-center gap-3">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            Ou écrivez-nous directement
          </p>
          <a
            href="mailto:contact@easylab.ai"
            className="flex items-center gap-2 font-medium transition-colors duration-200 group"
            style={{ color: "#16bc00" }}
          >
            <Mail className="w-4 h-4" />
            contact@easylab.ai
            <ArrowRight
              className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Trust signals */}
        <div
          className="animate-on-scroll delay-500 mt-16 pt-10 flex flex-col sm:flex-row items-center justify-center gap-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { value: "30 min", label: "Session de démo" },
            { value: "0 €", label: "Sans engagement" },
            { value: "6-10 sem.", label: "De la démo au MVP" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div
                className="text-xl font-black mb-1"
                style={{ color: "#16bc00" }}
              >
                {item.value}
              </div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
