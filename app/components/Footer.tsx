import { Zap, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12"
      style={{
        background: "#161b22",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="flex items-center justify-center w-8 h-8 rounded-lg"
              style={{ background: "linear-gradient(135deg, #16bc00 0%, #2b8f1e 100%)" }}
            >
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-base tracking-tight">
              Easylab<span style={{ color: "#16bc00" }}> AI</span>
            </span>
          </div>

          {/* Center — tagline */}
          <div className="text-center">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              Solutions IA sur mesure pour l&apos;infrastructure datacenter
            </p>
            <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.2)" }}>
              © {currentYear} Easylab AI. Tous droits réservés.
            </p>
          </div>

          {/* Right — contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@easylab.ai"
              className="flex items-center gap-1.5 text-xs transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#16bc00")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              <Mail className="w-3.5 h-3.5" />
              contact@easylab.ai
            </a>
            <a
              href="https://datacenter.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#16bc00")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              datacenter.eu
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
