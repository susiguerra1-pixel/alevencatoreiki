"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function ObrigadaWhatsAppButton() {
  const waHref = whatsappLink(WHATSAPP_MESSAGES.ebook);

  return (
    <a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("ebook_obrigada")}
      className="inline-flex items-center gap-2.5 text-[0.75rem] tracking-[2px] uppercase text-[#4A4040] bg-[#D4AF82] px-8 py-4 hover:bg-[#B8956A] hover:text-white hover:-translate-y-px transition-all duration-300 font-normal shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
    >
      <MessageCircle className="h-4 w-4" />
      Quero agendar uma sessão
    </a>
  );
}
