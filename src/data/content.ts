export const siteConfig = {
  name: "SaaSify",
  badge: "🚀 Next.js 15 & Tailwind CSS Ready",
  title: "Launch Your SaaS Product in Record Time",
  subtitle: "A modern, high-converting starter kit designed for indie hackers and developers. Clean code, customizable sections, and production-ready.",
  primaryCta: "Get Started Free",
  secondaryCta: "Live Demo",
  
  navLinks: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],

  features: [
    {
      title: "Lightning Fast Performance",
      description: "Built on Next.js App Router for optimal speed, SEO, and lighthouse scores.",
      icon: "Zap",
    },
    {
      title: "Fully Responsive UI",
      description: "Designed carefully for mobile, tablet, and desktop viewports out of the box.",
      icon: "Smartphone",
    },
    {
      title: "Clean & Modular Code",
      description: "Organized components and centralized content management for quick editing.",
      icon: "Code",
    },
  ],

  pricing: [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "Perfect for side projects and individual builders.",
      features: ["Up to 3 Projects", "Basic Analytics", "Community Access", "Standard Speed"],
      isPopular: false,
      cta: "Get Started",
    },
    {
      name: "Pro Starter",
      price: "$49",
      period: "/month",
      description: "Ideal for growing startups and serious developers.",
      features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "Custom Branding", "Source Code Included"],
      isPopular: true,
      cta: "Claim Pro Access",
    },
  ],

  faqs: [
    {
      question: "Can I customize the colors and fonts?",
      answer: "Yes! All styles use Tailwind CSS variables and standard utility classes, making design updates instant.",
    },
    {
      question: "Is this template commercial use ready?",
      answer: "Absolutely. You can use this template for your personal projects or clients.",
    },
  ],
};