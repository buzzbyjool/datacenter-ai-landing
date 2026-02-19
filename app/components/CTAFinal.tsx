"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function CTAFinal() {
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
      id="contact"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#0a0e14" }}
    >
      {/* Green blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(22,188,0,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="reveal flex justify-center mb-8">
          <span className="badge">Passez à l&apos;action</span>
        </div>

        {/* H2 */}
        <h2
          className="reveal d1 font-black text-white mb-6"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Prêt à passer à l&apos;infrastructure
          <br />
          <span style={{ color: "#16BC00" }}>du futur ?</span>
        </h2>

        <p
          className="reveal d2 text-base mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Rejoignez les entreprises luxembourgeoises qui ont déjà adopté l&apos;IA native
          pour leur infrastructure. Démo gratuite, sans engagement.
        </p>

        {/* Buttons */}
        <div className="reveal d3 flex flex-wrap gap-4 justify-center mb-16">
          <button
            onClick={() => {
              /* demo form */
            }}
            className="btn-primary"
            style={{ padding: "16px 32px", fontSize: "1rem" }}
          >
            Demander une démo
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="mailto:contact@datacenter.lu"
            className="btn-ghost"
            style={{ padding: "16px 32px", fontSize: "1rem" }}
          >
            Nous contacter
          </a>
        </div>

        {/* Info cards */}
        <div className="reveal d4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: <Mail className="w-5 h-5" />,
              label: "Email",
              value: "contact@datacenter.lu",
              href: "mailto:contact@datacenter.lu",
            },
            {
              icon: <Phone className="w-5 h-5" />,
              label: "Téléphone",
              value: "+352 27 99 00 00",
              href: "tel:+35227990000",
            },
            {
              icon: <MapPin className="w-5 h-5" />,
              label: "Adresse",
              value: "6 rue Léon Laval, L-3372 Leudelange",
              href: "https://maps.google.com",
            },
          ].map((info) => (
            <a
              key={info.label}
              href={info.href}
              target={info.label === "Adresse" ? "_blank" : undefined}
              rel={info.label === "Adresse" ? "noopener noreferrer" : undefined}
              className="block p-6 rounded-2xl no-underline transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(22,188,0,0.3)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(22,188,0,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 mx-auto"
                style={{ background: "rgba(22,188,0,0.12)", color: "#16BC00" }}
              >
                {info.icon}
              </div>
              <p
                className="text-xs font-bold uppercase tracking-wider mb-1"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {info.label}
              </p>
              <p className="text-sm font-semibold text-white">{info.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
