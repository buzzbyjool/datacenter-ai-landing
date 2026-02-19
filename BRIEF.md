# Brief — Datacenter AI Landing Page

## Contexte
Easylab AI propose deux solutions IA sur mesure à Datacenter Luxembourg (datacenter.eu).
Cette landing page présente ces deux produits de manière professionnelle et convaincante.

## Design System (inspiré de datacenter.eu)
- Primary color: #16BC00 (vert)
- Secondary: #414141 (gris foncé)
- Dark background: #2f353e
- Accent: #2B8F1E
- Text gris: #808080
- Font: Roboto (Google Fonts)
- Style: moderne, tech, professionnel. Dark/light mix. Sections bien structurées.

## Stack
Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui

## Produits à présenter

### Produit 1 — Natural Language Infrastructure Provisioning
**Tagline**: "Décrivez votre projet. On s'occupe du reste."

Le problème: commander de l'infra nécessite expertise technique, appels commerciaux, délais.
La solution: assistant IA conversationnel intégré au portail client.
- Le client décrit son projet en langage naturel (FR/EN/DE)
- L'IA pose les bonnes questions (usage, charge, conformité réglementaire, budget)
- Génère une architecture complète (cloud type, specs, connectivité, SLA)
- Produit un devis structuré en temps réel depuis le catalogue Datacenter.eu
- Handover qualifié vers le commercial si besoin
Stack: Claude AI + RAG sur catalogue + connecteur CRM
Bénéfices: 24/7, multilingue, cycle de vente divisé par 3, leads 80% qualifiés à l'arrivée chez le commercial

### Produit 2 — AI Network Security Monitor
**Tagline**: "Un analyste sécurité IA. Sans le coût d'un SOC."

Le problème: les PME ne peuvent pas se payer un SOC (80-150k€/an). Angle mort entre DDoS et infra.
La solution: couche IA au-dessus de l'infra réseau existante de Datacenter.eu.
- Apprend le profil "normal" du trafic de chaque client
- Détecte anomalies: exfiltration, malware, scan de ports, connexions vers IPs blacklistées
- Génère des incident reports en langage clair (pas du jargon réseau)
- Threat intelligence enrichie par la position réseau unique de Datacenter.eu
- Dashboard client: score de sécurité, historique, recommandations
- Conformité NIS2 intégrée (entrée en vigueur 2024)
Stack: NetFlow/sFlow + anomaly detection ML + Claude pour reports + Next.js dashboard
Bénéfices: 200-500€/mois (vs 80k+/an SOC), NIS2-ready, différenciant concurrentiel fort

## Structure de la page
1. Hero section — headline fort, sous-titre, CTA "Découvrir nos solutions"
2. Section problème — pourquoi l'IA change tout pour les datacenters
3. Produit 1 — présentation complète avec features, bénéfices, stack
4. Produit 2 — même structure
5. Section "Pourquoi Easylab" — expertise, références, approche
6. CTA final — "Planifier une démo"
7. Footer simple

## Notes importantes
- Pas de vrai formulaire de contact (juste UI)
- Animations subtiles (fade in on scroll)
- Mobile responsive
- Placeholder images avec des icônes SVG tech (pas d'images réelles requises)
- Textes en français
- Très soigné visuellement — c'est un outil de vente
