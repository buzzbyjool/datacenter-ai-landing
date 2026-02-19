"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "L'IA a-t-elle accès à mes données sensibles ?",
    a: "Non. Notre IA opère en mode zéro-connaissance sur vos données métier. Pour le provisioning, elle traite uniquement les informations que vous fournissez volontairement lors de la qualification. Pour l'AI Security Monitor, seules les métadonnées réseau (NetFlow/sFlow) sont analysées — jamais le contenu des paquets. Tout reste au Luxembourg.",
  },
  {
    q: "Combien de temps pour la mise en service ?",
    a: "Le Natural Language Provisioning est activé dès la signature de votre contrat, sans délai. L'AI Security Monitor nécessite 2 à 4 semaines de calibration réseau pour établir votre baseline comportemental, puis la surveillance temps réel est active. Nous vous accompagnons sur toute la phase d'onboarding.",
  },
  {
    q: "Est-ce compatible avec mon infrastructure actuelle ?",
    a: "Oui. Nos solutions s'intègrent aux infrastructures existantes via des APIs standards. Le provisioning IA se connecte à votre portail client actuel ou fonctionne de façon autonome. L'AI Security Monitor supporte NetFlow v5/v9, IPFIX et sFlow — les formats standard de tous les équipements réseau majeurs.",
  },
  {
    q: "Comment fonctionne la détection d'anomalies réseau ?",
    a: "Notre système ML analyse en continu les flux NetFlow/sFlow de votre réseau. Il établit d'abord un baseline comportemental sur 2 à 4 semaines (volumes, patterns, horaires, sources). Toute déviation statistiquement significative déclenche une alerte graduée : info, avertissement ou critique. Les incidents sont enrichis avec notre threat intelligence pour un contexte immédiat.",
  },
  {
    q: "Mes données restent-elles au Luxembourg ?",
    a: "Absolument. C'est notre engagement fondamental. Toute l'infrastructure — compute, stockage, réseau — est opérée exclusivement depuis nos datacenters au Luxembourg. Aucune donnée ne transite ni n'est répliquée vers l'étranger. Nous sommes conformes RGPD et aux exigences de la CSSF pour les acteurs financiers.",
  },
  {
    q: "La solution NL Provisioning gère-t-elle des configurations complexes ?",
    a: "Oui. Notre IA est formée sur l'intégralité de notre catalogue et peut gérer des configurations hybrides complexes : multi-sites, haute disponibilité actif-actif, configurations spécifiques sectorielles (finance, santé, industrie). Elle pose des questions de clarification si le besoin est ambigu plutôt que de faire des hypothèses.",
  },
  {
    q: "Suis-je conforme NIS2 avec AI Security Monitor ?",
    a: "L'AI Security Monitor est conçu pour couvrir les exigences de surveillance continue de NIS2. Il génère automatiquement les rapports de conformité requis, documente tous les incidents et les actions prises, et fournit un historique auditables. Nous vous recommandons néanmoins de valider votre conformité globale avec votre DPO ou juriste NIS2.",
  },
  {
    q: "Puis-je tester avant de m'engager ?",
    a: "Oui. Le Plan Sécurité inclut 30 jours d'essai gratuit sans engagement ni CB requise. Pour le provisioning, nous proposons une démonstration live personnalisée sur votre catalogue réel. Contactez notre équipe pour organiser un PoC adapté à votre contexte.",
  },
  {
    q: "Quelle est la différence avec un SOC traditionnel ?",
    a: "Un SOC traditionnel coûte entre 80 000 et 150 000€/an, nécessite une équipe d'analystes humains et des semaines de déploiement. Notre AI Security Monitor offre une couverture 24/7 dès 200€/mois, avec une réponse en temps réel (pas de rotation d'équipes), des rapports en langage naturel accessibles à tous vos dirigeants, et une intégration native à votre infrastructure Datacenter Luxembourg.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll<HTMLElement>(".reveal").forEach((r, i) => {
              setTimeout(() => r.classList.add("visible"), i * 60);
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

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "#fff" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-5">
            <span className="badge">FAQ</span>
          </div>
          <h2
            className="reveal d1 font-black mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#0f1318",
              letterSpacing: "-0.03em",
            }}
          >
            Questions{" "}
            <span style={{ color: "#16BC00" }}>fréquentes</span>
          </h2>
          <p
            className="reveal d2 text-base leading-relaxed"
            style={{ color: "#666" }}
          >
            Tout ce que vous voulez savoir sur nos solutions IA avant de vous lancer.
          </p>
        </div>

        {/* Accordion */}
        <div
          className="reveal d3 rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(0,0,0,0.08)" }}
        >
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                className={`faq-trigger ${openIndex === i ? "open" : ""}`}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="pr-4">{faq.q}</span>
                <span className="faq-icon">
                  <Plus
                    className="w-3.5 h-3.5"
                    style={{ color: "#16BC00" }}
                  />
                </span>
              </button>
              <div
                className={`faq-body ${openIndex === i ? "open" : ""}`}
                aria-hidden={openIndex !== i}
              >
                <div className="faq-content">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
