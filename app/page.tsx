"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import {
  MessageSquare,
  Network,
  FileText,
  UserCheck,
  AlertTriangle,
  BarChart3,
  Globe,
  ShieldCheck,
  Brain,
  Code2,
  Plug,
  Rocket,
} from "lucide-react";
import type { Feature } from "./components/FeatureList";

// ─── PRODUCT 1 DATA ───────────────────────────────────────────────────────────
const nlProvisioningFeatures: Feature[] = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Qualification IA",
    description:
      "L'assistant pose les bonnes questions : usage métier, charge attendue, exigences de conformité réglementaire (RGPD, NIS2), budget indicatif. Pas besoin d'expertise technique côté client.",
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "Architecture automatique",
    description:
      "Génération instantanée d'une architecture complète adaptée au profil client : type de cloud, spécifications serveur, connectivité, redondance et SLA recommandés.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Devis temps réel",
    description:
      "Devis structuré généré en temps réel depuis le catalogue Datacenter Luxembourg via RAG. Prix précis, lignes de service détaillées, prêt à valider ou à personnaliser.",
  },
  {
    icon: <UserCheck className="w-5 h-5" />,
    title: "Handover qualifié",
    description:
      "Transfert fluide vers un commercial humain si le dossier le nécessite, avec contexte complet (besoin, budget, timeline). Le commercial reçoit un lead 80% qualifié.",
  },
];

const nlProvisioningStack = [
  { label: "Claude AI" },
  { label: "RAG" },
  { label: "Catalogue Datacenter.eu" },
  { label: "Connecteur CRM" },
  { label: "Next.js" },
  { label: "TypeScript" },
];

const nlProvisioningBenefits = [
  { text: "Disponible 24h/24, 7j/7, multilingue (FR, EN, DE)" },
  { text: "Cycle de vente divisé par 3 grâce à la qualification automatique" },
  { text: "80% des leads qualifiés à l'arrivée chez le commercial" },
  { text: "Réduction des allers-retours et des appels de découverte" },
  { text: "Expérience client premium dès la première interaction" },
];

// ─── PRODUCT 2 DATA ───────────────────────────────────────────────────────────
const securityMonitorFeatures: Feature[] = [
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Détection d'anomalies",
    description:
      "Le moteur ML apprend le profil de trafic normal de chaque client (baseline) et détecte en temps réel les déviations : exfiltration de données, malware, scan de ports, connexions vers IPs blacklistées.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Incident reports IA",
    description:
      "Claude génère des rapports d'incident en langage clair, compréhensibles sans expertise réseau. Chaque alerte est contextualisée, priorisée et accompagnée de recommandations d'action.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Threat Intelligence",
    description:
      "Enrichissement par la position réseau unique de Datacenter Luxembourg : corrélation avec les flux de threat intelligence, détection précoce grâce à la visibilité sur l'ensemble du parc client.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Dashboard client",
    description:
      "Interface Next.js dédiée avec score de sécurité en temps réel, historique des incidents, cartographie des menaces et recommandations de conformité NIS2 personnalisées.",
  },
];

const securityMonitorStack = [
  { label: "NetFlow / sFlow" },
  { label: "ML Anomaly Detection" },
  { label: "Claude AI" },
  { label: "Next.js Dashboard" },
  { label: "Threat Intelligence" },
  { label: "NIS2 Framework" },
];

const securityMonitorBenefits = [
  { text: "200–500 €/mois vs. 80 000 €+/an pour un SOC traditionnel" },
  { text: "NIS2-ready : conformité intégrée dès le démarrage" },
  { text: "Zéro angle mort entre le DDoS et l'infra — couverture complète" },
  { text: "Différenciant concurrentiel fort pour Datacenter Luxembourg" },
  { text: "Rapports intelligibles par les dirigeants, pas seulement les DSI" },
];

// ─── POURQUOI EASYLAB DATA ────────────────────────────────────────────────────
const whyEasylab = [
  {
    icon: <Brain className="w-7 h-7" />,
    title: "Expertise IA de pointe",
    description:
      "Maîtrise des LLMs (Claude, GPT-4), du RAG, du Machine Learning et des agents autonomes. Nous ne faisons pas du chatbot — nous construisons de l'IA qui crée de la valeur métier mesurable.",
  },
  {
    icon: <Code2 className="w-7 h-7" />,
    title: "Développement sur mesure",
    description:
      "Chaque solution est conçue pour votre environnement spécifique. Pas de produit générique à adapter : nous partons de vos contraintes, votre catalogue, votre infra pour livrer du 100% fit.",
  },
  {
    icon: <Plug className="w-7 h-7" />,
    title: "Intégration native",
    description:
      "Connexion directe à vos systèmes existants : CRM, portail client, infrastructure réseau Datacenter Luxembourg. Pas de couche middleware superflue — des intégrations propres et maintenables.",
  },
];

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────
export default function Home() {
  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe all animate-on-scroll elements not already handled by component-level observers
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />

      {/* PRODUCT 1 — NL Provisioning (light) */}
      <ProductCard
        id="solution-1"
        badgeNumber="SOLUTION 1"
        badgeLabel="Natural Language Provisioning"
        title="Natural Language Infrastructure Provisioning"
        tagline="Décrivez votre projet. On s'occupe du reste."
        problemTitle="Le problème actuel"
        problem="Commander de l'infrastructure nécessite aujourd'hui expertise technique, appels commerciaux à répétition et délais incompressibles. Les prospects peu techniques abandonnent en cours de route. Les commerciaux passent 70% de leur temps à qualifier des leads qui ne convertiront pas."
        solutionTitle="Notre solution"
        solution="Un assistant IA conversationnel intégré directement au portail client de Datacenter Luxembourg. Le client décrit son projet en langage naturel — sans jargon technique. L'IA qualifie, architecture et devis en temps réel. Le commercial n'intervient qu'au moment où ça compte vraiment."
        features={nlProvisioningFeatures}
        stack={nlProvisioningStack}
        benefits={nlProvisioningBenefits}
        mvpDelay="6-8 semaines"
        dark={false}
      />

      {/* PRODUCT 2 — Security Monitor (dark) */}
      <ProductCard
        id="solution-2"
        badgeNumber="SOLUTION 2"
        badgeLabel="AI Security Monitor"
        title="AI Network Security Monitor"
        tagline="Un analyste sécurité IA. Sans le coût d'un SOC."
        problemTitle="L'angle mort des PME"
        problem="Un SOC (Security Operations Center) coûte entre 80 000 € et 150 000 €/an — hors de portée pour les PME. Résultat : angle mort total entre la protection DDoS bas niveau et l'infra réseau. Les menaces passent inaperçues pendant des semaines, voire des mois."
        solutionTitle="Notre solution"
        solution="Une couche IA déployée au-dessus de l'infrastructure réseau existante de Datacenter Luxembourg. Elle apprend le comportement normal de chaque client, détecte les anomalies en temps réel et génère des rapports intelligibles — sans nécessiter d'expertise SOC de votre côté."
        features={securityMonitorFeatures}
        stack={securityMonitorStack}
        benefits={securityMonitorBenefits}
        mvpDelay="8-10 semaines"
        dark={true}
        reverse={true}
      />

      {/* POURQUOI EASYLAB (light) */}
      <WhyEasylab items={whyEasylab} />

      {/* CTA FINAL (dark) */}
      <CTASection />

      <Footer />
    </main>
  );
}

// ─── WHY EASYLAB SECTION ──────────────────────────────────────────────────────
interface WhyItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function WhyEasylab({ items }: { items: WhyItem[] }) {
  const sectionRef = useRef<HTMLElement | null>(null);

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
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pourquoi"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28"
      style={{ background: "#f8f9fa" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="animate-on-scroll flex justify-center mb-4">
            <span
              className="section-badge"
              style={{
                background: "rgba(22,188,0,0.1)",
                border: "1px solid rgba(22,188,0,0.3)",
                color: "#16bc00",
              }}
            >
              Pourquoi nous choisir
            </span>
          </div>
          <h2
            className="animate-on-scroll delay-100 section-title font-black text-gray-900 mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Pourquoi{" "}
            <span style={{ color: "#16bc00" }}>Easylab AI</span>
          </h2>
          <p
            className="animate-on-scroll delay-200 text-lg max-w-2xl mx-auto"
            style={{ color: "#808080", lineHeight: 1.7 }}
          >
            Nous ne sommes pas une agence digitale qui vend de l&apos;IA.
            Nous sommes des ingénieurs IA qui construisent des produits qui tournent en production.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`animate-on-scroll delay-${(index + 2) * 100} light-card p-8 flex flex-col gap-5`}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-14 h-14 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(22,188,0,0.12) 0%, rgba(43,143,30,0.08) 100%)",
                  border: "1px solid rgba(22,188,0,0.2)",
                }}
              >
                <span style={{ color: "#16bc00" }}>{item.icon}</span>
              </div>

              {/* Content */}
              <div>
                <h3
                  className="font-bold text-lg mb-3"
                  style={{ color: "#1a1a1a" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#808080" }}
                >
                  {item.description}
                </p>
              </div>

              {/* Decorative bottom accent */}
              <div
                className="mt-auto h-0.5 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #16bc00, transparent)",
                  opacity: 0.4,
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom social proof strip */}
        <div
          className="animate-on-scroll delay-500 mt-14 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, #2f353e 0%, #1e2329 100%)",
          }}
        >
          <div className="text-center md:text-left">
            <p
              className="text-sm font-semibold mb-1"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Partenariat exclusif
            </p>
            <p className="text-white font-bold text-lg">
              Datacenter Luxembourg × Easylab AI
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5" style={{ color: "#16bc00" }} />
            <span className="text-white font-medium text-sm">
              Première démo gratuite — sans engagement
            </span>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById("cta");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary px-6 py-3 text-sm"
          >
            Planifier une démo
          </button>
        </div>
      </div>
    </section>
  );
}

// Fix missing React import for useRef in the same file
import { useRef } from "react";
import type React from "react";
