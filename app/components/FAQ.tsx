"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "Ces solutions sont-elles compatibles avec l'infrastructure existante de Datacenter Luxembourg ?",
    a: "Absolument. Les deux solutions sont conçues pour s'intégrer nativement à votre infrastructure sans remplacement. Le NL Provisioning se connecte via API à votre portail client et CRM existants. L'AI Security Monitor exploite les flux NetFlow/sFlow déjà générés par vos équipements réseau. Zéro migration, zéro interruption de service."
  },
  {
    q: "Quelle est la fiabilité de la détection d'anomalies réseau ?",
    a: "Le moteur ML construit un modèle comportemental précis sur 2 à 4 semaines d'apprentissage. Le taux de faux positifs descend sous les 5% après cette phase de calibration. Chaque alerte est enrichie par Claude AI qui évalue le contexte et filtre les bruit avant d'envoyer une notification — vos équipes ne sont dérangées que pour les incidents réels."
  },
  {
    q: "Comment le provisioning IA gère-t-il les configurations complexes ou hors catalogue ?",
    a: "Pour les configurations standard, l'assistant génère un devis complet en autonomie. Pour les configurations complexes, il prépare un dossier de qualification structuré (besoins, budget, contraintes techniques) et transfère au commercial avec tout le contexte. Le commercial n'intervient qu'au moment où sa valeur ajoutée est réelle — pas pour de la collecte d'informations basique."
  },
  {
    q: "En quoi ces solutions aident-elles à la conformité NIS2 ?",
    a: "L'AI Security Monitor intègre nativement le référentiel NIS2. Il génère automatiquement les preuves de surveillance réseau requises, maintient un journal d'incidents conforme et produit des rapports de conformité périodiques. Pour les clients Datacenter Luxembourg soumis à NIS2 (secteurs essentiels ou importants), c'est une réponse directe à l'obligation de surveillance continue."
  },
  {
    q: "Quelles langues supporte le NL Provisioning ?",
    a: "Le système supporte nativement le français, l'anglais et l'allemand — les trois langues opérationnelles au Luxembourg. Le client peut switcher en cours de conversation. La génération des devis et architectures reste en français par défaut, configurable selon vos standards."
  },
  {
    q: "Quel modèle d'hébergement est utilisé ? Les données restent-elles au Luxembourg ?",
    a: "Les deux solutions peuvent être déployées on-premise sur votre propre infrastructure Datacenter Luxembourg, ce qui garantit la souveraineté complète des données. Le traitement IA via Claude (Anthropic) peut être routé via des endpoints européens. Nous construisons l'architecture de déploiement en fonction de vos contraintes RGPD et clients."
  },
  {
    q: "Quel est le coût estimé de déploiement ?",
    a: "Le modèle économique est adapté à chaque client. Pour l'AI Security Monitor, le pricing cible est en add-on récurrent (200-500 €/mois selon volume de trafic supervisé). Pour le NL Provisioning, développement initial sur devis + licence annuelle selon volume de leads traités. Nous proposons une démo gratuite et un proof-of-concept sur 30 jours avant tout engagement."
  },
  {
    q: "Combien de temps pour le premier MVP en production ?",
    a: "6 à 8 semaines pour le NL Provisioning (plus simple à connecter au catalogue existant), 8 à 10 semaines pour l'AI Security Monitor (nécessite une phase de calibration réseau). Les deux solutions peuvent être lancées en parallèle. Le PoC sur un périmètre limité (ex : 5 clients pilotes) peut être opérationnel en 3 semaines."
  },
  {
    q: "Easylab AI a-t-elle des références dans l'industrie datacenter / cloud ?",
    a: "Easylab AI est une société luxembourgeoise spécialisée en développement IA sur mesure. Nous avons déployé des agents IA en production dans les secteurs e-commerce, fintech et SaaS B2B, avec des intégrations Claude, n8n et Firebase. Ces deux solutions pour Datacenter Luxembourg sont des propositions exclusives, conçues sur la base d'une analyse approfondie de votre catalogue et de votre marché."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            section.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 lg:py-28"
      style={{ background: "#fff" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="fade-up flex justify-center mb-4">
            <span className="badge">FAQ</span>
          </div>
          <h2 className="fade-up delay-1 font-black mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#1a1a1a", letterSpacing: "-0.02em" }}>
            Questions fréquentes
          </h2>
          <p className="fade-up delay-2 text-base max-w-xl mx-auto" style={{ color: "#808080", lineHeight: 1.65 }}>
            Tout ce que vous devez savoir avant d&apos;envisager un partenariat.
          </p>
        </div>

        {/* Accordion */}
        <div className="fade-up delay-3 rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`faq-item${open === i ? " open" : ""}`}
              style={{ padding: "0 28px" }}
            >
              <button className="faq-trigger" onClick={() => toggle(i)} aria-expanded={open === i}>
                <span className="faq-question">{item.q}</span>
                <span className="faq-icon">
                  <Plus className="w-3.5 h-3.5" />
                </span>
              </button>
              <div className="faq-answer">
                <p className="text-sm leading-relaxed" style={{ color: "#666", paddingBottom: "4px" }}>
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="fade-up delay-4 mt-12 text-center">
          <p className="text-sm mb-4" style={{ color: "#808080" }}>
            Une question non couverte ici ?
          </p>
          <a
            href="mailto:contact@easylab.ai"
            className="btn-primary text-sm"
            style={{ display: "inline-flex" }}
          >
            Nous contacter directement
          </a>
        </div>
      </div>
    </section>
  );
}
