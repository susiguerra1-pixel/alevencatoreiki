"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function LeadMagnet() {
  const waHref = whatsappLink(WHATSAPP_MESSAGES.vagas);

  return (
    <section className="bg-[#4A4040] py-16 px-[6%]">
      <div className="max-w-[700px] mx-auto text-center">

        {/* Pill label */}
        <span className="inline-block text-[0.62rem] tracking-[4px] uppercase text-[#D4AF82] border border-[rgba(212,175,130,0.35)] px-4 py-1.5 mb-7 font-light">
          Vagas limitadas
        </span>

        <h2 className="font-cormorant text-[clamp(1.8rem,3vw,2.6rem)] font-light text-[#F5F0EB] leading-[1.25] mb-4">
          Não perca a sua{" "}
          <em className="italic text-[#D4AF82]">próxima vaga</em>
        </h2>

        <p className="text-[0.97rem] leading-[1.85] text-[rgba(245,240,235,0.72)] font-light mb-8 max-w-[480px] mx-auto">
          O atendimento é exclusivo e as vagas são limitadas intencionalmente, para que cada sessão tenha a atenção e o cuidado que você merece.{" "}
          <span className="text-[rgba(245,240,235,0.9)]">
            Me mande uma mensagem e garanta seu lugar.
          </span>
        </p>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("lead_magnet")}
          className="inline-flex items-center gap-2.5 text-[0.8rem] tracking-[2px] uppercase text-[#4A4040] bg-[#D4AF82] px-10 py-4 hover:bg-[#B8956A] hover:-translate-y-px transition-all duration-300 font-normal shadow-[0_6px_24px_rgba(0,0,0,0.25)]"
        >
          <MessageCircle className="h-4 w-4" />
          Quero garantir minha vaga
        </a>

        <p className="text-[0.72rem] text-[rgba(245,240,235,0.4)] mt-5 font-light tracking-[0.5px]">
          Nada de spam — só uma conversa gentil pelo WhatsApp.
        </p>

      </div>
    </section>
  );
}
