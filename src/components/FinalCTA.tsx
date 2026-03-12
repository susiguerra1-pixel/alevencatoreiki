"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES, HOURS, ADDRESS } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

export default function FinalCTA() {
  const waHref = whatsappLink(WHATSAPP_MESSAGES.cta);

  return (
    <div className="relative bg-[#C4B5C8] py-24 px-[6%] text-center overflow-hidden cta-radial">
      <AnimatedSection>
        <div className="relative z-10 max-w-[620px] mx-auto">
          {/* Escassez */}
          <div className="inline-block bg-[rgba(184,149,106,0.2)] border border-[rgba(184,149,106,0.3)] px-5 py-1.5 text-[0.68rem] tracking-[3px] uppercase text-[#B8956A] mb-6 font-light">
            🌿 Vagas limitadas por mês
          </div>

          <p className="text-[0.65rem] tracking-[5px] uppercase text-[#B8956A] mb-3 font-light">
            Não deixe para depois
          </p>

          <h2 className="font-cormorant text-[clamp(2rem,3.2vw,3rem)] font-light text-[#4A4040] leading-[1.2] mb-4">
            O único momento
            <br />
            certo é <em className="italic text-[#B8956A]">agora.</em>
          </h2>

          <div className="gold-line-center" />

          <p className="text-[1rem] leading-[1.9] text-[#7A6E6E] font-light mb-10">
            Você já adiou o seu cuidado vezes demais. Enquanto lê isso, outra
            pessoa está agendando a sessão que pode mudar como você se sente.
            Dê esse passo por você.
          </p>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-[0.8rem] tracking-[2px] uppercase text-[#FAFAF8] bg-[#B8956A] px-11 py-5 shadow-[0_6px_24px_rgba(184,149,106,0.45)] hover:bg-[#D4AF82] hover:-translate-y-0.5 transition-all duration-300 font-normal mx-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Quero minha sessão agora
          </a>

          <span className="text-[0.7rem] tracking-[0.5px] text-[rgba(74,64,64,0.55)] mt-4 block font-light">
            Atendimento presencial em {ADDRESS.city}, {ADDRESS.state} · {HOURS}
          </span>

          <p className="mt-3.5 text-[0.82rem] text-[rgba(74,64,64,0.65)] font-light">
            ✦ Primeira conversa por WhatsApp para entender o que você precisa e
            indicar a melhor sessão
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
