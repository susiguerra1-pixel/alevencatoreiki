"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const href = whatsappLink(WHATSAPP_MESSAGES.generic);

  return (
    <div className="fixed bottom-6 right-5 z-50">
      {/* Anel de pulso */}
      <span className="absolute inset-0 rounded-sm bg-[#B8956A] opacity-30 animate-wa-ping" />

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar sessão de Reiki pelo WhatsApp"
        className="relative flex items-center gap-3 bg-[#B8956A] text-[#FAFAF8] px-5 py-4 shadow-[0_6px_28px_rgba(184,149,106,0.55)] transition-all duration-300 hover:bg-[#D4AF82] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(184,149,106,0.6)]"
      >
        <MessageCircle className="h-5 w-5 shrink-0" />
        <span className="text-[0.72rem] tracking-[1.5px] uppercase font-normal">
          Agendar sessão
        </span>
      </a>
    </div>
  );
}
