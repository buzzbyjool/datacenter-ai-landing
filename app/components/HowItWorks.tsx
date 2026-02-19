"use client";

import { useEffect, useRef } from "react";
import { MessageSquare, Cpu, FileCheck, Handshake, Wifi, AlertCircle, FileText, BarChart2 } from "lucide-react";

const STEPS_1 = [
  { icon: <MessageSquare className="w-4 h-4" />, title: "Conversation naturelle", desc: "Le client décrit son projet en français, anglais ou allemand. Aucune expertise technique requise." },
  { icon: <Cpu className="w-4 h-4" />, title: "Qualification + Architecture IA", desc: "Claude analyse le besoin, pose les questions clés et génère une architecture adaptée depuis le catalogue Datacenter.eu." },
  { icon: <FileCheck className="w-4 h-4" />, title: "Devis temps réel", desc: "Un devis structuré est généré instantanément avec les lignes de service détaillées et les options de SLA." },
  { icon: <Handshake className="w-4 h-4" />, title: "Handover qualifié", desc: "Le commercial reçoit le dossier complet. 80% du travail de qualification est fait — il n'a plus qu'à closer." },
];

const STEPS_2 = [
  { icon: <Wifi className="w-4 h-4" />, title: "Collecte NetFlow/sFlow", desc: "Intégration non-intrusive sur l'infrastructure réseau existante. Pas de sonde matérielle supplémentaire." },
  { icon: <Cpu className="w-4 h-4" />, title: "Apprentissage du baseline", desc: "Le moteur ML calibre le profil de trafic normal de chaque client sur 2 à 4 semaines." },
  { icon: <AlertCircle className="w-4 h-4" />, title: "Détection en temps réel", desc: "Anomalies, exfiltrations, malwares, IPs blacklistées — alertes immédiates avec scoring de sévérité." },
  { icon: <FileText className="w-4 h-4" />, title: "Rapport IA en langage clair", desc: "Claude génère un rapport d'incident compréhensible par un dirigeant, avec recommandations d'action priorisées." },
];

function Timeline({ steps, dark }: { steps: typeof STEPS_1; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-0">
      {steps.map((s, i) => (
        <div key={i} className="timeline-item pb-8">
          <div className="timeline-dot text-white">{i + 1}</div>
          <div className="flex-1 pt-1">
            <div className="flex items-center gap-2 mb-1">
              <span style={{ color: "#16BC00" }}>{s.icon}</span>
              <h4 className="font-bold text-sm" style={{ color: dark ? "#fff" : "#1a1a1a" }}>
                {s.title}
              </h4>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: dark ? "rgba(255,255,255,0.55)" : "#808080" }}>
              {s.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function HowItWorks1() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          ref.current?.querySelectorAll(".fade-up").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 80)
          );
          obs.disconnect();
        }
      });
    }, { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-12 p-8 rounded-2xl"
      style={{ background: "rgba(22,188,0,0.04)", border: "1px solid rgba(22,188,0,0.12)" }}>
      <h3 className="fade-up font-bold text-base mb-8 flex items-center gap-2" style={{ color: "#1a1a1a" }}>
        <span className="text-xs px-2.5 py-1 rounded font-bold" style={{ background: "rgba(22,188,0,0.12)", color: "#16BC00" }}>
          Comment ça marche
        </span>
      </h3>
      <div className="fade-up delay-1">
        <Timeline steps={STEPS_1} dark={false} />
      </div>
    </div>
  );
}

export function HowItWorks2() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          ref.current?.querySelectorAll(".fade-up").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 80)
          );
          obs.disconnect();
        }
      });
    }, { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-12 p-8 rounded-2xl"
      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <h3 className="fade-up font-bold text-base mb-8 flex items-center gap-2" style={{ color: "#fff" }}>
        <span className="text-xs px-2.5 py-1 rounded font-bold" style={{ background: "rgba(22,188,0,0.15)", color: "#16BC00" }}>
          Comment ça marche
        </span>
      </h3>
      <div className="fade-up delay-1">
        <Timeline steps={STEPS_2} dark={true} />
      </div>
    </div>
  );
}
