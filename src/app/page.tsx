import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialStrip from "@/components/SocialStrip";
import ComoFunciona from "@/components/ComoFunciona";
import SobreAle from "@/components/SobreAle";
import Sessoes from "@/components/Sessoes";
import Testimonials from "@/components/Testimonials";
import OqueEReiki from "@/components/OqueEReiki";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import LeadMagnet from "@/components/LeadMagnet";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <FloatingWhatsApp />
      <Header />
      <main>
        <Hero />
        <SocialStrip />
        <ComoFunciona />
        <SobreAle />
        <Sessoes />
        <Testimonials />
        <OqueEReiki />
        <FAQ />
        <FinalCTA />
        <LeadMagnet />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
