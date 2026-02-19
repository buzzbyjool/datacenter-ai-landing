import React from "react";

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
  dark?: boolean;
}

export default function FeatureList({ features, dark = false }: FeatureListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`animate-on-scroll delay-${(index + 1) * 100} ${
            dark ? "dark-card p-6" : "light-card p-6"
          } flex flex-col gap-4`}
        >
          {/* Icon */}
          <div
            className="flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0"
            style={{
              background: dark
                ? "rgba(22, 188, 0, 0.15)"
                : "rgba(22, 188, 0, 0.1)",
              border: "1px solid rgba(22, 188, 0, 0.25)",
            }}
          >
            <span style={{ color: "#16bc00" }}>{feature.icon}</span>
          </div>

          {/* Content */}
          <div>
            <h4
              className="font-semibold text-sm mb-1.5"
              style={{ color: dark ? "#ffffff" : "#1a1a1a" }}
            >
              {feature.title}
            </h4>
            <p
              className="text-sm leading-relaxed"
              style={{ color: dark ? "rgba(255,255,255,0.55)" : "#808080" }}
            >
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
