import Link from "next/link";
import { siteConfig } from "../data/content";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
          <Sparkles className="h-5 w-5 text-indigo-500" />
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#pricing"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all"
        >
          {siteConfig.primaryCta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}