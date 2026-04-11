import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import LoanTypesSection from "@/components/LoanTypesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inversiones ANACO — Préstamos con Garantía Hipotecaria" },
      { name: "description", content: "Obtené liquidez inmediata de ₡1 millón hasta ₡25 millones con préstamos hipotecarios. Más de 40 años de experiencia en Costa Rica." },
      { property: "og:title", content: "Inversiones ANACO — Préstamos con Garantía Hipotecaria" },
      { property: "og:description", content: "Préstamos hipotecarios en Costa Rica. Tasas competitivas, proceso rápido y asesoría personalizada." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <LoanTypesSection />
        <WhyChooseSection />
        <ProcessSection />
        <TestimonialsSection />
        <WhatsAppCTA />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
