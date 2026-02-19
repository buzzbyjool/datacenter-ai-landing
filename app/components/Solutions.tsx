"use client";

import { useEffect, useRef } from "react";
import {
  MessageSquare,
  Network,
  FileText,
  UserCheck,
  AlertTriangle,
  BarChart3,
  Globe,
  ShieldCheck,
  CheckCircle2,
  Shield,
  Activity,
} from "lucide-react";

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = el.querySelectorAll<HTMLElement>(".reveal");
            reveals.forEach((r, i) => {
              setTimeout(() => r.classList.add("visible"), i * 80);
            });
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

// ─── SOLUTION 1 ─────────────────────────────────────────────────────────────

function Solution1() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      id="solutions"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "#f4f6f8" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="reveal flex items-center gap-3 mb-5">
            <span className="badge">Solution 01</span>
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "#888" }}>
              Natural Language Provisioning
            </span>
          </div>
          <h2
            className="reveal d1 font-black mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#0f1318",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Natural Language{" "}
            <span style={{ color: "#16BC00" }}>Provisioning</span>
          </h2>
          <p
            className="reveal d2 text-xl font-semibold mb-3"
            style={{ color: "#333" }}
          >
            Décrivez votre projet. Nous l&apos;architecturons.
          </p>
          <p
            className="reveal d3 text-base leading-relaxed max-w-2xl"
            style={{ color: "#666" }}
          >
            Votre client décrit son besoin en quelques phrases — sans jargon technique.
            Notre IA qualifie, architecture et génère un devis structuré en temps réel,
            directement depuis votre portail client.
          </p>
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left — features */}
          <div>
            <div className="reveal d2 space-y-2 mb-10">
              {[
                {
                  icon: <MessageSquare className="w-4 h-4" />,
                  title: "Qualification conversationnelle 24/7",
                  desc: "Notre IA engage votre prospect en langage naturel, pose les bonnes questions sur l'usage, la charge et le budget — sans expertise technique côté client.",
                },
                {
                  icon: <Network className="w-4 h-4" />,
                  title: "Architecture automatique",
                  desc: "Génération instantanée d'une architecture adaptée à vos offres : cloud, specs, connectivité, SLA recommandé depuis notre catalogue.",
                },
                {
                  icon: <FileText className="w-4 h-4" />,
                  title: "Devis temps réel",
                  desc: "Un devis structuré avec prix précis et lignes détaillées, prêt à valider — généré en quelques secondes depuis notre catalogue tarifaire.",
                },
                {
                  icon: <UserCheck className="w-4 h-4" />,
                  title: "Handover commercial qualifié",
                  desc: "Votre équipe reçoit un dossier complet. 80% de la qualification est faite avant qu'un commercial intervienne.",
                },
              ].map((f) => (
                <div key={f.title} className="feature-item">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(22,188,0,0.1)", color: "#16BC00" }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ color: "#1a1a1a" }}>
                      {f.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Steps */}
            <div className="reveal d3">
              <p
                className="text-xs font-bold uppercase tracking-wider mb-4"
                style={{ color: "#999" }}
              >
                Comment ça marche
              </p>
              <div className="space-y-4">
                {[
                  "Le client décrit son projet en langage naturel sur votre portail",
                  "Notre IA analyse et pose des questions de qualification ciblées",
                  "Une architecture complète et un devis précis sont générés",
                  "Votre commercial reçoit le dossier et finalise la vente",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                      style={{ background: "#16BC00", color: "#fff" }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-sm leading-relaxed pt-0.5" style={{ color: "#555" }}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack pills */}
            <div className="reveal d4 mt-8">
              <p
                className="text-xs font-bold uppercase tracking-wider mb-3"
                style={{ color: "#999" }}
              >
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {["Claude AI", "RAG", "Next.js", "TypeScript", "API CRM"].map((s) => (
                  <span key={s} className="stack-pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Chat mockup */}
          <div className="reveal d3">
            <div className="chat-mockup" style={{ border: "1px solid #e5e7eb" }}>
              {/* Header */}
              <div className="chat-header">
                <div className="chat-dot" style={{ background: "#ff5f56" }} />
                <div className="chat-dot" style={{ background: "#ffbd2e" }} />
                <div className="chat-dot" style={{ background: "#27c93f" }} />
                <div className="flex items-center gap-2 ml-4">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(22,188,0,0.15)" }}
                  >
                    <MessageSquare className="w-3 h-3" style={{ color: "#16BC00" }} />
                  </div>
                  <span className="text-xs font-semibold" style={{ color: "#666" }}>
                    Assistant IA — datacenter.lu
                  </span>
                  <span
                    className="ml-auto flex items-center gap-1 text-xs font-medium"
                    style={{ color: "#16BC00" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#16BC00", display: "inline-block" }}
                    />
                    En ligne
                  </span>
                </div>
              </div>

              {/* Messages */}
              <div className="chat-messages">
                <div className="chat-bubble chat-bubble-user">
                  Bonjour, nous avons besoin d&apos;héberger une application bancaire avec haute
                  disponibilité et conformité DORA. Environ 500 utilisateurs simultanés.
                </div>

                <div className="flex items-start gap-2">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ background: "rgba(22,188,0,0.15)" }}
                  >
                    <span className="text-xs font-black" style={{ color: "#16BC00" }}>
                      IA
                    </span>
                  </div>
                  <div className="chat-bubble chat-bubble-ai flex-1">
                    Parfait ! Pour une appli bancaire DORA-compliant, je recommande notre
                    cluster haute disponibilité actif-actif Luxembourg ×2 avec failover
                    automatique. Quelques questions : quel volume de données, et avez-vous
                    des exigences de localisation spécifiques ?
                  </div>
                </div>

                <div className="chat-bubble chat-bubble-user">
                  Data en Luxembourg uniquement, environ 2 To. Budget max 8 000€/mois.
                </div>

                <div className="flex items-start gap-2">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ background: "rgba(22,188,0,0.15)" }}
                  >
                    <span className="text-xs font-black" style={{ color: "#16BC00" }}>
                      IA
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="chat-bubble chat-bubble-ai">
                      <p className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                        Architecture recommandée :
                      </p>
                      <ul className="space-y-1 text-xs" style={{ color: "#555" }}>
                        <li>✓ 2× Serveurs dédiés HA (32 vCPU / 128 GB RAM)</li>
                        <li>✓ Stockage NVMe 2 To répliqué</li>
                        <li>✓ Réseau 10 Gbps redondant</li>
                        <li>✓ SLA 99.99% garanti contractuellement</li>
                        <li>✓ Conformité DORA + ISO 27001 incluse</li>
                      </ul>
                      <div
                        className="mt-3 pt-3 flex items-center justify-between"
                        style={{ borderTop: "1px solid #e5e7eb" }}
                      >
                        <span className="text-xs font-medium" style={{ color: "#888" }}>
                          Estimation mensuelle
                        </span>
                        <span className="font-black text-base" style={{ color: "#16BC00" }}>
                          6 850€/mois
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button
                        className="text-xs px-3 py-1.5 rounded-lg font-semibold"
                        style={{ background: "#16BC00", color: "#fff", border: "none", cursor: "pointer" }}
                      >
                        Valider le devis
                      </button>
                      <button
                        className="text-xs px-3 py-1.5 rounded-lg font-semibold"
                        style={{ background: "#f4f6f8", color: "#555", border: "1px solid #e5e7eb", cursor: "pointer" }}
                      >
                        Modifier
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-2 p-4" style={{ borderTop: "1px solid #e5e7eb" }}>
                <div
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm"
                  style={{ background: "#f8f9fa", color: "#999", border: "1px solid #e5e7eb" }}
                >
                  Décrivez votre besoin...
                </div>
                <button
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "#16BC00", border: "none", cursor: "pointer" }}
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ─── SOLUTION 2 ─────────────────────────────────────────────────────────────

function Solution2() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      id="fonctionnement"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "#161b22" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="reveal flex items-center gap-3 mb-5">
            <span className="badge">Solution 02</span>
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
              AI Security Monitor
            </span>
          </div>
          <h2
            className="reveal d1 font-black mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            AI Security{" "}
            <span style={{ color: "#16BC00" }}>Monitor</span>
          </h2>
          <p
            className="reveal d2 text-xl font-semibold mb-3"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Un SOC IA. Pour votre réseau.
          </p>
          <p
            className="reveal d3 text-base leading-relaxed max-w-2xl"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Nous analysons en continu le trafic réseau de votre infrastructure. Notre IA apprend
            le comportement normal de chaque client et détecte les menaces avant qu&apos;elles deviennent
            des incidents — conformité NIS2 incluse.
          </p>
        </div>

        {/* 2-col inversé */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left — Dashboard mockup */}
          <div className="reveal d2 order-2 lg:order-1">
            <div className="dashboard-mockup">
              {/* Header */}
              <div className="dashboard-header">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4" style={{ color: "#16BC00" }} />
                  <span className="text-sm font-bold text-white">AI Security Monitor</span>
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{ background: "rgba(22,188,0,0.15)", color: "#16BC00" }}
                  >
                    LIVE
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Mise à jour il y a 2s
                  </span>
                </div>
              </div>

              {/* Security score */}
              <div className="p-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Score de sécurité
                  </span>
                  <span className="text-2xl font-black" style={{ color: "#16BC00" }}>96/100</span>
                </div>
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ width: "96%", background: "linear-gradient(90deg, #16BC00, #4dff33)" }}
                  />
                </div>
              </div>

              {/* SVG Chart */}
              <div className="p-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Trafic réseau (24h)
                  </span>
                  <span className="text-xs font-bold" style={{ color: "#16BC00" }}>
                    ↑ Normal
                  </span>
                </div>
                <svg viewBox="0 0 280 80" className="w-full" style={{ overflow: "visible" }}>
                  <defs>
                    <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#16BC00" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#16BC00" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,60 C20,55 40,45 60,42 C80,39 100,50 120,46 C140,42 160,35 180,32 C200,29 220,38 240,34 C260,30 270,25 280,22"
                    fill="none"
                    stroke="#16BC00"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,60 C20,55 40,45 60,42 C80,39 100,50 120,46 C140,42 160,35 180,32 C200,29 220,38 240,34 C260,30 270,25 280,22 L280,80 L0,80 Z"
                    fill="url(#chartGrad)"
                  />
                  {/* Anomaly spike */}
                  <circle cx="200" cy="29" r="4" fill="#ff6b35" />
                  <text x="208" y="25" className="text-xs" fill="rgba(255,107,53,0.8)" style={{ fontSize: "8px" }}>
                    Anomalie détectée
                  </text>
                </svg>
              </div>

              {/* Alerts */}
              <div className="p-5 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Alertes récentes
                </span>
                {[
                  {
                    color: "#ff4444",
                    bg: "rgba(255,68,68,0.1)",
                    label: "CRITIQUE",
                    text: "Tentative d&apos;exfiltration détectée — IP 185.xxx bloquée",
                    time: "il y a 2 min",
                    icon: <AlertTriangle className="w-3 h-3" />,
                  },
                  {
                    color: "#ffaa00",
                    bg: "rgba(255,170,0,0.1)",
                    label: "MOYEN",
                    text: "Scan de ports inhabituel depuis AS1234",
                    time: "il y a 8 min",
                    icon: <Shield className="w-3 h-3" />,
                  },
                  {
                    color: "#16BC00",
                    bg: "rgba(22,188,0,0.1)",
                    label: "INFO",
                    text: "Rapport NIS2 hebdomadaire généré",
                    time: "il y a 1h",
                    icon: <CheckCircle2 className="w-3 h-3" />,
                  },
                ].map((alert, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl"
                    style={{ background: alert.bg }}
                  >
                    <span style={{ color: alert.color, marginTop: "2px" }}>{alert.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className="text-xs font-black"
                          style={{ color: alert.color }}
                        >
                          {alert.label}
                        </span>
                        <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                          {alert.time}
                        </span>
                      </div>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                        dangerouslySetInnerHTML={{ __html: alert.text }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — features */}
          <div className="order-1 lg:order-2">
            <div className="reveal d2 space-y-2 mb-10">
              {[
                {
                  icon: <AlertTriangle className="w-4 h-4" />,
                  title: "Détection d'anomalies ML",
                  desc: "Baseline comportemental par client. Détecte exfiltrations, malwares, scans et IPs blacklistées en temps réel depuis le réseau.",
                },
                {
                  icon: <FileText className="w-4 h-4" />,
                  title: "Rapports incidents en langage clair",
                  desc: "Notre IA génère des rapports d'incident compréhensibles par un dirigeant non-technique — plus de jargon ésotérique.",
                },
                {
                  icon: <Globe className="w-4 h-4" />,
                  title: "Threat Intelligence locale",
                  desc: "Vue privilégiée sur les menaces qui traversent notre réseau luxembourgeois — enrichissement contextuel unique.",
                },
                {
                  icon: <BarChart3 className="w-4 h-4" />,
                  title: "Dashboard NIS2-ready",
                  desc: "Score de sécurité temps réel, historique incidents et preuves de conformité NIS2 générées automatiquement.",
                },
              ].map((f) => (
                <div key={f.title} className="feature-item">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(22,188,0,0.12)", color: "#16BC00" }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ color: "#fff" }}>
                      {f.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Steps */}
            <div className="reveal d3 mb-8">
              <p
                className="text-xs font-bold uppercase tracking-wider mb-4"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Comment ça marche
              </p>
              <div className="space-y-4">
                {[
                  "Nous collectons les flux NetFlow/sFlow depuis votre infrastructure",
                  "Notre ML établit un baseline comportemental de votre réseau",
                  "Toute déviation anormale déclenche une alerte en temps réel",
                  "Vous recevez un rapport clair avec actions recommandées",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                      style={{ background: "rgba(22,188,0,0.15)", color: "#16BC00", border: "1px solid rgba(22,188,0,0.3)" }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-sm leading-relaxed pt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing highlight */}
            <div
              className="reveal d4 p-6 rounded-2xl"
              style={{
                background: "rgba(22,188,0,0.06)",
                border: "1px solid rgba(22,188,0,0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4" style={{ color: "#16BC00" }} />
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#16BC00" }}>
                  Tarification transparente
                </span>
              </div>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-3xl font-black" style={{ color: "#fff" }}>
                  À partir de 200€
                </span>
                <span className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                  /mois
                </span>
              </div>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                Add-on mensuel sur vos contrats existants. 30 jours d&apos;essai gratuit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Solutions() {
  return (
    <>
      <Solution1 />
      <Solution2 />
    </>
  );
}
