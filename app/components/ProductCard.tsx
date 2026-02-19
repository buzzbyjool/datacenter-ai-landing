"use client";

import { useEffect, useRef, type ReactNode } from "react";
import FeatureList, { type Feature } from "./FeatureList";
import { Clock, CheckCircle2 } from "lucide-react";

interface Benefit {
  text: string;
}

interface StackItem {
  label: string;
}

interface ProductCardProps {
  id: string;
  badgeNumber: string;
  badgeLabel: string;
  title: string;
  tagline: string;
  problemTitle: string;
  problem: string;
  solutionTitle: string;
  solution: string;
  features: Feature[];
  stack: StackItem[];
  benefits: Benefit[];
  mvpDelay: string;
  dark?: boolean;
  imageSlot?: ReactNode;
  reverse?: boolean;
}

export default function ProductCard({
  id,
  badgeNumber,
  badgeLabel,
  title,
  tagline,
  problemTitle,
  problem,
  solutionTitle,
  solution,
  features,
  stack,
  benefits,
  mvpDelay,
  dark = false,
  reverse = false,
}: ProductCardProps) {
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
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const textPrimary = dark ? "#ffffff" : "#1a1a1a";
  const textSecondary = dark ? "rgba(255,255,255,0.65)" : "#414141";
  const textMuted = dark ? "rgba(255,255,255,0.45)" : "#808080";
  const bgSection = dark ? "#2f353e" : "#ffffff";

  return (
    <section
      id={id}
      ref={sectionRef}
      className="py-20 lg:py-28"
      style={{ background: bgSection }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
            reverse ? "lg:flex lg:flex-row-reverse" : ""
          }`}
        >
          {/* LEFT — Content */}
          <div className={`flex flex-col gap-6 ${reverse ? "lg:pl-8" : ""}`}>
            {/* Badge */}
            <div className="animate-on-scroll flex items-center gap-3">
              <span
                className="section-badge"
                style={{
                  background: "rgba(22,188,0,0.12)",
                  border: "1px solid rgba(22,188,0,0.35)",
                  color: "#16bc00",
                  letterSpacing: "0.1em",
                }}
              >
                {badgeNumber}
              </span>
              <span
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: textMuted }}
              >
                {badgeLabel}
              </span>
            </div>

            {/* Title */}
            <div className="animate-on-scroll delay-100">
              <h2
                className="section-title font-black mb-3"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  color: textPrimary,
                  lineHeight: 1.2,
                }}
              >
                {title}
              </h2>
              <p
                className="text-lg font-medium"
                style={{ color: "#16bc00" }}
              >
                {tagline}
              </p>
            </div>

            {/* Divider */}
            <div className="animate-on-scroll delay-200 section-divider" />

            {/* Problem */}
            <div className="animate-on-scroll delay-200">
              <h3
                className="text-sm font-bold uppercase tracking-widest mb-2"
                style={{ color: textMuted }}
              >
                {problemTitle}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: textSecondary }}>
                {problem}
              </p>
            </div>

            {/* Solution */}
            <div className="animate-on-scroll delay-300">
              <h3
                className="text-sm font-bold uppercase tracking-widest mb-2"
                style={{ color: "#16bc00" }}
              >
                {solutionTitle}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: textSecondary }}>
                {solution}
              </p>
            </div>

            {/* Stack */}
            <div className="animate-on-scroll delay-300">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: textMuted }}
              >
                Stack technique
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span key={item.label} className="stack-badge">
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="animate-on-scroll delay-400">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: textMuted }}
              >
                Bénéfices clés
              </p>
              <div className="flex flex-col gap-2.5">
                {benefits.map((b) => (
                  <div key={b.text} className="benefit-item">
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "#16bc00" }}
                    />
                    <span className="text-sm" style={{ color: textSecondary }}>
                      {b.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* MVP Delay */}
            <div className="animate-on-scroll delay-500">
              <div className="mvp-badge inline-flex">
                <Clock className="w-4 h-4" />
                <span>MVP en {mvpDelay}</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Features Grid */}
          <div className={`flex flex-col gap-6 ${reverse ? "lg:pr-8" : ""}`}>
            <div className="animate-on-scroll">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: textMuted }}
              >
                Fonctionnalités
              </p>
              <FeatureList features={features} dark={dark} />
            </div>

            {/* Visual decorative card */}
            <div
              className="animate-on-scroll delay-300 rounded-2xl p-6 mt-2"
              style={{
                background: dark
                  ? "rgba(22,188,0,0.07)"
                  : "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
                border: dark
                  ? "1px solid rgba(22,188,0,0.2)"
                  : "1px solid rgba(22,188,0,0.2)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#16bc00", boxShadow: "0 0 8px rgba(22,188,0,0.6)" }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "#16bc00" }}
                >
                  Délai de mise en production
                </span>
              </div>
              <div
                className="text-3xl font-black"
                style={{ color: dark ? "#ffffff" : "#1a1a1a" }}
              >
                {mvpDelay}
              </div>
              <div
                className="text-sm mt-1"
                style={{ color: dark ? "rgba(255,255,255,0.5)" : "#808080" }}
              >
                De la réunion de cadrage au MVP en production
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
