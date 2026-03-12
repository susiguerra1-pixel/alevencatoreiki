"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const href = whatsappLink(WHATSAPP_MESSAGES.generic);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-7 right-7 z-50 flex items-center gap-3 bg-[#B8956A] text-[#FAFAF8] px-5 py-3.5 shadow-[0_6px_24px_rgba(184,149,106,0.5)] transition-all duration-300 hover:bg-[#D4AF82] hover:-translate-y-1 hover:shadow-[0_10px_32px_rgba(184,149,106,0.55)]"
    >
      <MessageCircle className="h-5 w-5 shrink-0" />
      <span className="hidden sm:inline text-xs tracking-widest uppercase font-light">
        Agendar sessão
      </span>
    </a>
  );
}
