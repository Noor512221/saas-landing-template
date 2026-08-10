import { siteConfig } from "../data/content";

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-900/30 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {siteConfig.faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-gray-950 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 bg-gray-950 border-t border-gray-800 text-center text-sm text-gray-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}