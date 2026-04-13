"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES, HOURS, ADDRESS } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

export default function FinalCTA() {
  const waHref = whatsappLink(WHATSAPP_MESSAGES.cta);

  return (
    <div className="relative bg-[#EDE7EF] py-24 px-[6%] text-center overflow-hidden cta-radial">
      <AnimatedSection>
        <div className="relative z-10 max-w-[620px] mx-auto">
          {/* Escassez */}
          <div className="inline-block bg-[rgba(184,149,106,0.2)] border border-[rgba(184,149,106,0.3)] px-5 py-1.5 text-[0.68rem] tracking-[3px] uppercase text-[#7A5230] mb-6 font-light">
            🌿 Vagas limitadas por mês
          </div>

          <p className="text-[0.65rem] tracking-[5px] uppercase text-[#7A5230] mb-3 font-light">
            Não deixe para depois
          </p>

          <h2 className="font-cormorant text-[clamp(2rem,3.2vw,3rem)] font-light text-[#4A4040] leading-[1.2] mb-4">
            O cuidado que você procura
            <br />
            <em className="italic text-[#B8956A]">pode começar agora.</em>
          </h2>

          <div className="gold-line-center" />

          <div className="flex flex-col gap-4 text-[1rem] leading-[1.9] text-[#524848] font-light mb-10 text-left">
            <p>
              Muitas vezes adiamos o nosso próprio cuidado enquanto damos conta de tudo ao nosso redor. Mas chega um momento em que o corpo e a mente pedem pausa.
            </p>
            <p>Talvez este seja o seu momento.</p>
            <p>
              Enquanto você lê estas palavras, a possibilidade de se reconectar com a sua energia e encontrar mais equilíbrio já está disponível para você.
            </p>
            <p>Permita-se dar esse passo por si mesma. ✨</p>
          </div>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-[0.8rem] tracking-[2px] uppercase text-[#F5F0EB] bg-[#B8956A] px-11 py-5 shadow-[0_6px_24px_rgba(184,149,106,0.45)] hover:bg-[#D4AF82] hover:-translate-y-0.5 transition-all duration-300 font-normal mx-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Quero minha sessão agora
          </a>

          <span className="text-[0.7rem] tracking-[0.5px] text-[#4A3F3F] mt-4 block font-light">
            Atendimento presencial em {ADDRESS.city}, {ADDRESS.state} · {HOURS}
          </span>

          <p className="mt-3.5 text-[0.82rem] text-[#4A3F3F] font-light">
            ✦ Primeira conversa por WhatsApp para entender o que você precisa e
            indicar a melhor sessão
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
