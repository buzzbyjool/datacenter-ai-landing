"use client";

import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import { HowItWorks1, HowItWorks2 } from "./components/HowItWorks";
import {
  MessageSquare, Network, FileText, UserCheck,
  AlertTriangle, BarChart3, Globe, ShieldCheck,
  Brain, Code2, Plug, Clock, CheckCircle2, TrendingDown,
  Wifi, Lock, Eye, Zap, ArrowRight
} from "lucide-react";

// ─────────────────────────────────────────────────────────
// SECTION COMPONENT
// ─────────────────────────────────────────────────────────
function useScrollAnimation(ref: React.RefObject<HTMLElement | HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.querySelectorAll(".fade-up, .fade-left, .fade-right").forEach((child, i) =>
              setTimeout(() => child.classList.add("visible"), i * 90)
            );
            obs.disconnect();
          }
        });
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
}

// ─────────────────────────────────────────────────────────
// PRODUCT 1 — NL Provisioning
// ─────────────────────────────────────────────────────────
function Product1() {
  const ref = useRef<HTMLElement>(null);
  useScrollAnimation(ref);

  return (
    <section id="solution-1" ref={ref} className="py-20 lg:py-28" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="fade-up flex items-center gap-3 mb-5">
            <span className="badge">Solution 1</span>
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "#808080" }}>
              Natural Language Provisioning
            </span>
          </div>
          <h2 className="fade-up delay-1 font-black mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "#1a1a1a", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            Natural Language<br />
            <span style={{ color: "#16BC00" }}>Infrastructure Provisioning</span>
          </h2>
          <p className="fade-up delay-2 text-xl font-medium mb-4" style={{ color: "#414141" }}>
            Décrivez votre projet. On s&apos;occupe du reste.
          </p>
          <p className="fade-up delay-3 text-base leading-relaxed" style={{ color: "#808080", maxWidth: "640px" }}>
            Un assistant IA conversationnel intégré au portail client de Datacenter Luxembourg.
            Le client décrit son besoin en langage naturel — sans jargon technique. L&apos;IA qualifie,
            architecture et génère un devis structuré en temps réel.
          </p>
        </div>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — Problem + Features */}
          <div>
            {/* Problem box */}
            <div className="fade-up delay-2 mb-8 p-6 rounded-xl"
              style={{ background: "#f8f9fa", border: "1px solid rgba(0,0,0,0.07)" }}>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: "#808080" }}>
                Le problème actuel
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#414141" }}>
                Commander de l&apos;infrastructure nécessite expertise technique, appels commerciaux répétés
                et des délais incompressibles. Les prospects peu techniques abandonnent. Les commerciaux
                passent 70% de leur temps à qualifier des leads qui ne convertiront pas.
              </p>
            </div>

            {/* Features */}
            <div className="fade-up delay-3 space-y-1">
              {[
                { icon: <MessageSquare className="w-4 h-4" />, title: "Qualification IA", desc: "L'IA pose les bonnes questions — usage, charge, conformité réglementaire, budget — sans expertise technique côté client." },
                { icon: <Network className="w-4 h-4" />, title: "Architecture automatique", desc: "Génération instantanée d'une architecture complète : cloud, specs, connectivité, SLA recommandé." },
                { icon: <FileText className="w-4 h-4" />, title: "Devis temps réel", desc: "Devis structuré depuis le catalogue Datacenter.eu — prix précis, lignes détaillées, prêt à valider." },
                { icon: <UserCheck className="w-4 h-4" />, title: "Handover qualifié", desc: "Le commercial reçoit un dossier complet. 80% de la qualification est faite avant qu'il intervienne." },
              ].map((f) => (
                <div key={f.title} className="feature-item">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(22,188,0,0.1)", color: "#16BC00" }}>
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: "#1a1a1a" }}>{f.title}</p>
                    <p className="text-sm" style={{ color: "#808080" }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Stack + Benefits + Timeline */}
          <div>
            {/* Stack */}
            <div className="fade-up delay-3 mb-8">
              <h3 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: "#808080" }}>
                Stack technique
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Claude AI (Anthropic)", "RAG sur catalogue", "Next.js", "TypeScript", "Connecteur CRM", "API REST"].map((s) => (
                  <span key={s} className="stack-pill">{s}</span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="fade-up delay-4 mb-8 p-6 rounded-xl"
              style={{ background: "linear-gradient(135deg, rgba(22,188,0,0.05) 0%, rgba(22,188,0,0.02) 100%)", border: "1px solid rgba(22,188,0,0.15)" }}>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: "#16BC00" }}>
                Bénéfices mesurables
              </h3>
              <div className="space-y-3">
                {[
                  { icon: <Clock className="w-3.5 h-3.5" />, text: "Disponible 24h/24, 7j/7, en français, anglais et allemand" },
                  { icon: <TrendingDown className="w-3.5 h-3.5" />, text: "Cycle de vente divisé par 3 grâce à la qualification automatique" },
                  { icon: <CheckCircle2 className="w-3.5 h-3.5" />, text: "80% des leads qualifiés avant d'atteindre un commercial" },
                  { icon: <Zap className="w-3.5 h-3.5" />, text: "Expérience client premium dès la première interaction" },
                ].map((b) => (
                  <div key={b.text} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: "#16BC00" }}>{b.icon}</span>
                    <span className="text-sm" style={{ color: "#414141" }}>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MVP */}
            <div className="fade-up delay-5 flex items-center gap-3 p-4 rounded-xl"
              style={{ background: "#f8f9fa", border: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #16BC00, #2B8F1E)" }}>
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm" style={{ color: "#1a1a1a" }}>Premier MVP en 6–8 semaines</p>
                <p className="text-xs" style={{ color: "#808080" }}>PoC sur périmètre limité possible en 3 semaines</p>
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <HowItWorks1 />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// PRODUCT 2 — AI Security Monitor
// ─────────────────────────────────────────────────────────
function Product2() {
  const ref = useRef<HTMLElement>(null);
  useScrollAnimation(ref);

  return (
    <section id="solution-2" ref={ref} className="py-20 lg:py-28"
      style={{ background: "linear-gradient(150deg, #1e2329 0%, #2f353e 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="fade-up flex items-center gap-3 mb-5">
            <span className="badge">Solution 2</span>
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
              AI Security Monitor
            </span>
          </div>
          <h2 className="fade-up delay-1 font-black mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            AI Network<br />
            <span style={{ color: "#16BC00" }}>Security Monitor</span>
          </h2>
          <p className="fade-up delay-2 text-xl font-medium mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
            Un analyste sécurité IA. Sans le coût d&apos;un SOC.
          </p>
          <p className="fade-up delay-3 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", maxWidth: "640px" }}>
            Une couche d&apos;analyse IA au-dessus de l&apos;infrastructure réseau de Datacenter Luxembourg.
            Elle apprend le comportement normal de chaque client et détecte les menaces avant qu&apos;elles deviennent des incidents.
          </p>
        </div>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            {/* Problem */}
            <div className="fade-up delay-2 mb-8 p-6 rounded-xl glass-card">
              <h3 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
                L&apos;angle mort des PME
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                Un SOC traditionnel coûte 80 000 à 150 000 €/an — hors de portée pour les PME. Résultat :
                angle mort total entre la protection DDoS et l&apos;infra réseau. Les menaces passent inaperçues
                pendant des semaines. NIS2 exige maintenant une surveillance continue pour les secteurs essentiels.
              </p>
            </div>

            {/* Features */}
            <div className="fade-up delay-3 space-y-1">
              {[
                { icon: <AlertTriangle className="w-4 h-4" />, title: "Détection d'anomalies ML", desc: "Baseline comportemental par client. Détecte exfiltrations, malwares, scans, IPs blacklistées en temps réel." },
                { icon: <FileText className="w-4 h-4" />, title: "Incident reports IA", desc: "Claude génère des rapports d'incident en langage clair, compréhensibles par un dirigeant non-technique." },
                { icon: <Globe className="w-4 h-4" />, title: "Threat Intelligence", desc: "Enrichissement par la position réseau unique de Datacenter Luxembourg. Vue privilégiée sur les menaces locales." },
                { icon: <BarChart3 className="w-4 h-4" />, title: "Dashboard NIS2-ready", desc: "Score de sécurité temps réel, historique incidents, preuves de conformité NIS2 générées automatiquement." },
              ].map((f) => (
                <div key={f.title} className="feature-item">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(22,188,0,0.15)", color: "#16BC00" }}>
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: "#fff" }}>{f.title}</p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {/* Stack */}
            <div className="fade-up delay-3 mb-8">
              <h3 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
                Stack technique
              </h3>
              <div className="flex flex-wrap gap-2">
                {["NetFlow / sFlow", "Anomaly Detection ML", "Claude AI", "Threat Intel feeds", "Next.js Dashboard", "NIS2 Framework"].map((s) => (
                  <span key={s} className="stack-pill">{s}</span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="fade-up delay-4 mb-8 p-6 rounded-xl"
              style={{ background: "rgba(22,188,0,0.06)", border: "1px solid rgba(22,188,0,0.2)" }}>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: "#16BC00" }}>
                Bénéfices mesurables
              </h3>
              <div className="space-y-3">
                {[
                  { icon: <TrendingDown className="w-3.5 h-3.5" />, text: "200–500 €/mois vs 80 000 €+/an pour un SOC traditionnel" },
                  { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: "NIS2-ready : conformité intégrée dès le démarrage" },
                  { icon: <Eye className="w-3.5 h-3.5" />, text: "Zéro angle mort — couverture complète du trafic réseau" },
                  { icon: <Lock className="w-3.5 h-3.5" />, text: "Différenciant concurrentiel fort pour Datacenter Luxembourg" },
                ].map((b) => (
                  <div key={b.text} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: "#16BC00" }}>{b.icon}</span>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing highlight */}
            <div className="fade-up delay-4 p-5 rounded-xl"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                Modèle tarifaire cible
              </p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-black" style={{ color: "#16BC00" }}>200–500€</span>
                <span className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>/mois par client</span>
              </div>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                Selon volume de trafic supervisé — add-on récurrent sur contrats existants
              </p>
            </div>

            {/* MVP */}
            <div className="fade-up delay-5 flex items-center gap-3 p-4 rounded-xl mt-4"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #16BC00, #2B8F1E)" }}>
                <Wifi className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm text-white">Premier MVP en 8–10 semaines</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Phase de calibration réseau incluse (2–4 semaines)</p>
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <HowItWorks2 />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// WHY EASYLAB
// ─────────────────────────────────────────────────────────
function WhyEasylab() {
  const ref = useRef<HTMLElement>(null);
  useScrollAnimation(ref);

  return (
    <section id="pourquoi" ref={ref} className="py-20 lg:py-28" style={{ background: "#f8f9fa" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="fade-up flex justify-center mb-4">
            <span className="badge">Pourquoi nous choisir</span>
          </div>
          <h2 className="fade-up delay-1 font-black mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: "#1a1a1a", letterSpacing: "-0.02em" }}>
            Pourquoi <span style={{ color: "#16BC00" }}>Easylab AI</span>
          </h2>
          <p className="fade-up delay-2 text-base max-w-2xl mx-auto" style={{ color: "#808080", lineHeight: 1.65 }}>
            Nous ne faisons pas du chatbot. Nous construisons de l&apos;IA qui crée
            de la valeur métier mesurable, intégrée à votre infrastructure réelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Brain className="w-6 h-6" />,
              title: "Expertise IA de pointe",
              desc: "Maîtrise des LLMs (Claude, GPT-4), RAG, Machine Learning et agents autonomes. Références en production dans la fintech, l'e-commerce et le SaaS B2B.",
            },
            {
              icon: <Code2 className="w-6 h-6" />,
              title: "Développement 100% sur mesure",
              desc: "Chaque solution part de vos contraintes réelles : votre catalogue, votre CRM, votre infrastructure réseau. Pas de produit générique à adapter — du fit parfait.",
            },
            {
              icon: <Plug className="w-6 h-6" />,
              title: "Intégration native",
              desc: "Connexion directe à vos systèmes existants. Pas de middleware superflu — des intégrations propres, documentées et maintenables sur le long terme.",
            },
          ].map((item, i) => (
            <div key={item.title} className={`fade-up delay-${i + 2} white-card p-8`}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "linear-gradient(135deg, rgba(22,188,0,0.12), rgba(43,143,30,0.06))", border: "1px solid rgba(22,188,0,0.15)", color: "#16BC00" }}>
                {item.icon}
              </div>
              <h3 className="font-bold text-base mb-3" style={{ color: "#1a1a1a" }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#808080" }}>{item.desc}</p>
              <div className="mt-6 h-0.5 rounded-full"
                style={{ background: "linear-gradient(90deg, #16BC00, transparent)", opacity: 0.3 }} />
            </div>
          ))}
        </div>

        {/* Partnership strip */}
        <div className="fade-up delay-5 mt-12 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #1e2329, #2f353e)" }}>
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>
              Proposition exclusive
            </p>
            <p className="text-white font-bold text-lg">Datacenter Luxembourg × Easylab AI</p>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4" style={{ color: "#16BC00" }} />
            <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
              Première démo gratuite — POC en 30 jours — sans engagement
            </span>
          </div>
          <button
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-sm flex-shrink-0">
            Planifier une démo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Product1 />
      <Product2 />
      <WhyEasylab />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
