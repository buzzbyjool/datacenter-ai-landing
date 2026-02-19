"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown, Zap } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);

  // Canvas particle network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const PARTICLE_COUNT = 80;
    const MAX_DIST = 150;
    const particles: Particle[] = [];

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Update positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(22,188,0,${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(22,188,0,0.6)";
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      ro.disconnect();
    };
  }, []);

  // Counter animation
  useEffect(() => {
    const el = metricsRef.current;
    if (!el) return;

    const counters = el.querySelectorAll<HTMLElement>("[data-target]");

    const animateCounter = (
      el: HTMLElement,
      target: number,
      decimals: number,
      prefix: string,
      suffix: string
    ) => {
      let start = 0;
      const duration = 1800;
      const startTime = performance.now();
      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * target;
        el.textContent = prefix + current.toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach((counter) => {
              const target = parseFloat(counter.dataset.target ?? "0");
              const decimals = parseInt(counter.dataset.decimals ?? "0", 10);
              const prefix = counter.dataset.prefix ?? "";
              const suffix = counter.dataset.suffix ?? "";
              animateCounter(counter, target, decimals, prefix, suffix);
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
      style={{ background: "#0a0e14", paddingTop: "80px" }}
    >
      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />

      {/* Glow blobs */}
      <div
        className="glow-blob"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(22,188,0,0.08) 0%, transparent 70%)",
          top: "-100px",
          left: "-150px",
        }}
      />
      <div
        className="glow-blob"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(22,188,0,0.06) 0%, transparent 70%)",
          bottom: "-50px",
          right: "-100px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Animated badge */}
          <div className="badge-hero mb-8 inline-flex">
            <Zap className="w-3.5 h-3.5" />
            <span>⚡ Nouveau — IA intégrée nativement</span>
          </div>

          {/* H1 */}
          <h1
            className="font-black mb-6 text-white"
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
            }}
          >
            Votre infrastructure.
            <br />
            Pilotée par{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #16BC00 0%, #4dff33 50%, #16BC00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              l&apos;IA.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mb-10 max-w-2xl"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.6,
            }}
          >
            Nous opérons le premier datacenter luxembourgeois à intégrer l&apos;IA nativement.
            Provisioning en langage naturel, sécurité réseau autonome — votre infrastructure
            pense et protège.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() =>
                document.querySelector("#solutions")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary"
              style={{ padding: "14px 28px", fontSize: "1rem" }}
            >
              Découvrir nos solutions
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-ghost"
              style={{ padding: "14px 28px", fontSize: "1rem" }}
            >
              Voir une démo live
            </button>
          </div>

          {/* Metrics */}
          <div
            ref={metricsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16 rounded-2xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {[
              {
                target: "99.99",
                decimals: 2,
                prefix: "",
                suffix: "%",
                label: "Disponibilité",
                static: false,
              },
              {
                target: "2",
                decimals: 0,
                prefix: "< ",
                suffix: "ms",
                label: "Latence réseau",
                static: false,
              },
              {
                target: null,
                decimals: 0,
                prefix: "",
                suffix: "",
                label: "Certification",
                static: true,
                staticVal: "ISO 27001",
              },
              {
                target: null,
                decimals: 0,
                prefix: "",
                suffix: "",
                label: "Conformité",
                static: true,
                staticVal: "NIS2",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-8 px-4"
                style={{ background: "rgba(15,19,24,0.6)" }}
              >
                <div
                  className="text-3xl font-black mb-1 counter-value"
                  style={{ color: "#16BC00" }}
                  data-target={m.static ? undefined : m.target ?? undefined}
                  data-decimals={m.static ? undefined : m.decimals}
                  data-prefix={m.static ? undefined : m.prefix}
                  data-suffix={m.static ? undefined : m.suffix}
                >
                  {m.static ? m.staticVal : m.prefix + "0" + m.suffix}
                </div>
                <div
                  className="text-xs font-medium text-center"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Powered by badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <ArrowRight className="w-4 h-4" style={{ color: "#16BC00" }} />
            <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
              Propulsé par <strong style={{ color: "#fff" }}>Claude AI</strong> · Anthropic
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator flex flex-col items-center gap-2"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
