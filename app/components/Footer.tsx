import { Shield, Zap } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { label: "Solution 1", href: "#solution-1" },
    { label: "Solution 2", href: "#solution-2" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#cta" },
  ];

  return (
    <footer style={{ background: "#0d1117", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #16BC00, #2B8F1E)" }}>
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-black text-lg tracking-tight">Easylab AI</span>
            </div>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              Intelligence artificielle sur mesure
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="nav-link text-xs font-medium">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Partner mention */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: "rgba(22,188,0,0.08)", border: "1px solid rgba(22,188,0,0.15)" }}>
            <Shield className="w-3.5 h-3.5" style={{ color: "#16BC00" }} />
            <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
              Exclusif Datacenter Luxembourg
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © {year} Easylab AI S.A.R.L. — Luxembourg. Tous droits réservés.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>
            Proposition commerciale confidentielle
          </p>
        </div>
      </div>
    </footer>
  );
}
