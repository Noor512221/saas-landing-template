import { siteConfig } from "../data/content";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400">Choose the plan that best fits your launching needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {siteConfig.pricing.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl border ${
                plan.isPopular
                  ? "border-indigo-500 bg-gray-900/80 shadow-xl shadow-indigo-500/10 relative"
                  : "border-gray-800 bg-gray-900/30"
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3 right-6 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-gray-400 text-sm">{plan.period}</span>
              </div>

              <a
                href="#pricing"
                className={`w-full block text-center py-3 rounded-xl font-semibold transition-all mb-8 ${
                  plan.isPopular
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-gray-800 hover:bg-gray-700 text-white"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-3 border-t border-gray-800 pt-6">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}