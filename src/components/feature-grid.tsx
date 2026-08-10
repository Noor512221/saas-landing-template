import { siteConfig } from "../data/content";
import { Zap, Smartphone, Code, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Smartphone,
  Code,
};

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 bg-gray-900/50 border-t border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Everything You Need to Launch Fast
          </h2>
          <p className="text-gray-400">
            Stop spending weeks configuring boilerplate code. Focus on building your core features instead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Code;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-950 border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}