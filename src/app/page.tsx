import Navbar from "../components/navbar";
import Hero from "../components/hero";
import FeatureGrid from "../components/feature-grid";
import Pricing from "../components/pricing";
import { ContactForm } from "../components/contact-form";
import { Footer } from "../components/faq-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  );
}