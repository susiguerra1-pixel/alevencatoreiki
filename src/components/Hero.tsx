"use client";

import { MessageCircle, ChevronDown } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function Hero() {
  const waHref = whatsappLink(WHATSAPP_MESSAGES.hero);

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-[#F5F0EB] flex items-center overflow-hidden pt-24 pb-8 md:pt-32 md:pb-20 px-[6%]"
    >
      {/* Blob decorativo */}
      <div className="hero-blob" />

      <div className="relative z-10 max-w-[1100px] mx-auto w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* Texto */}
          <AnimatedSection>
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[rgba(184,149,106,0.1)] border border-[rgba(184,149,106,0.25)] px-4 py-2 mb-4 md:mb-6">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B8956A] animate-pulse-gold" />
                <span className="text-[0.7rem] tracking-[1px] uppercase text-[#4A2E0A] font-light">
                  Vagas disponíveis para este mês
                </span>
              </div>

              <h1 className="font-cormorant text-[clamp(2.2rem,4.8vw,4.6rem)] font-light text-[#4A4040] leading-[1.1] mb-3 md:mb-5 tracking-[0.3px]">
                Equilibre sua energia e acalme sua mente com{" "}
                <em className="italic text-[#B8956A]">Reiki em Caxias do Sul.</em>
              </h1>

              <p className="text-[0.95rem] md:text-[1rem] leading-[1.8] md:leading-[1.9] text-[#524848] font-light max-w-[480px] mb-3 md:mb-4">
                Sessões de Reiki para quem sente ansiedade, cansaço emocional ou
                excesso de pensamentos. Um espaço de pausa, cuidado e reconexão
                com você.
              </p>

              <p className="font-cormorant text-[1.05rem] md:text-[1.15rem] italic text-[#B8956A] mb-6 md:mb-9 font-light">
                ✨ Reconecte-se com a sua luz.
              </p>

              {/* CTAs */}
              <div className="flex flex-col items-start gap-3 md:gap-4">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("hero")}
                  className="inline-flex items-center gap-2.5 text-[0.8rem] tracking-[2px] uppercase text-[#FAFAF8] bg-[#B8956A] px-8 md:px-11 py-4 md:py-5 shadow-[0_6px_24px_rgba(184,149,106,0.45)] hover:bg-[#D4AF82] hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(184,149,106,0.5)] transition-all duration-300 font-normal w-full sm:w-auto justify-center sm:justify-start"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  Quero agendar minha sessão
                </a>
                <a
                  href="#sobre"
                  className="btn-secondary-line text-[0.75rem] tracking-[0.5px] uppercase text-[#4A2E0A] font-light hover:opacity-80 transition-opacity duration-300 flex items-center"
                >
                  Ver como funciona
                </a>
              </div>

              {/* Foto — mobile only, abaixo do CTA */}
              <div className="block lg:hidden mt-10 relative">
                <div className="relative w-full aspect-[3/4] overflow-hidden image-frame-offset">
                  <Image
                    src="/images/ale-hero.jpg"
                    alt="Ale Vencato — Terapeuta de Reiki em Caxias do Sul"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Imagem — oculta no mobile para não empurrar o CTA */}
          <AnimatedSection delay={0.2}>
            <div className="relative mx-auto max-w-md hidden lg:block">
              {/* Frame principal */}
              <div className="relative w-full aspect-[3/4] overflow-hidden image-frame-offset">
                <Image
                  src="/images/ale-hero.jpg"
                  alt="Ale Vencato — Terapeuta de Reiki em Caxias do Sul"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Float card */}
              <div className="absolute -bottom-4 -left-4 bg-[#F5F0EB] px-5 py-4 border border-[rgba(184,149,106,0.15)]">
                <div className="font-cormorant text-[1.8rem] text-[#B8956A] font-light leading-none">
                  ∞
                </div>
                <div className="text-[0.62rem] tracking-[2px] uppercase text-[#524848] mt-1 font-light">
                  Energia Universal
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll hint — só desktop */}
        <div className="hidden md:flex justify-center mt-16">
          <a href="#sobre" aria-label="Rolar para baixo">
            <ChevronDown className="h-5 w-5 text-[#B8956A] animate-bounce opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
