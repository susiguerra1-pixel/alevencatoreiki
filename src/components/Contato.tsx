"use client";

import { MessageCircle, Instagram, Star, MapPin, Clock, Phone } from "lucide-react";
import {
  whatsappLink,
  WHATSAPP_MESSAGES,
  WHATSAPP_NUMBER,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  GOOGLE_REVIEW_URL,
  ADDRESS,
  HOURS,
} from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

const contactItems = [
  {
    icon: <MessageCircle className="h-4 w-4" />,
    label: "WhatsApp",
    content: (
      <a
        href={whatsappLink(WHATSAPP_MESSAGES.contato)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[0.95rem] text-[#524848] font-light hover:text-[#B8956A] transition-colors duration-300 block"
      >
        ({WHATSAPP_NUMBER.slice(0, 2)}) 9{WHATSAPP_NUMBER.slice(3, 7)}-{WHATSAPP_NUMBER.slice(7)}
      </a>
    ),
  },
  {
    icon: <Phone className="h-4 w-4" />,
    label: "Telefone",
    content: (
      <a
        href={whatsappLink(WHATSAPP_MESSAGES.contato)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[0.95rem] text-[#524848] font-light hover:text-[#B8956A] transition-colors duration-300 block"
      >
        ({WHATSAPP_NUMBER.slice(0, 2)}) 9{WHATSAPP_NUMBER.slice(3, 7)}-{WHATSAPP_NUMBER.slice(7)}
      </a>
    ),
  },
  {
    icon: <Instagram className="h-4 w-4" />,
    label: "Instagram",
    content: (
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[0.95rem] text-[#524848] font-light hover:text-[#B8956A] transition-colors duration-300 block"
      >
        @{INSTAGRAM_HANDLE}
      </a>
    ),
  },
  {
    icon: <Star className="h-4 w-4" />,
    label: "Google",
    content: (
      <a
        href={GOOGLE_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[0.95rem] text-[#524848] font-light hover:text-[#B8956A] transition-colors duration-300 block"
      >
        Deixar uma avaliação
      </a>
    ),
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    label: "Endereço",
    content: (
      <p className="text-[0.95rem] text-[#524848] font-light leading-[1.7]">
        {ADDRESS.street}, {ADDRESS.complement}
        <br />
        {ADDRESS.neighborhood}, {ADDRESS.city}, {ADDRESS.state}
      </p>
    ),
  },
  {
    icon: <Clock className="h-4 w-4" />,
    label: "Horários",
    content: (
      <p className="text-[0.95rem] text-[#524848] font-light">{HOURS}</p>
    ),
  },
];

export default function Contato() {
  return (
    <section id="contato" className="bg-[#F5F0EB] py-16 md:py-24 px-[6%]">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <AnimatedSection>
          <div className="mb-14">
            <p className="text-[0.65rem] tracking-[1.5px] uppercase text-[#4A2E0A] mb-3 font-light">
              Fale comigo
            </p>
            <h2 className="font-cormorant text-[clamp(2rem,3.2vw,3rem)] font-light text-[#4A4040] leading-[1.2]">
              Entre em <em className="italic text-[#B8956A]">contato</em>
            </h2>
            <div className="gold-line" />
            <p className="text-[1rem] leading-[1.85] text-[#524848] font-normal max-w-lg">
              Se você quiser conversar ou tirar alguma dúvida antes de agendar, estou aqui para te ajudar. Cada pessoa tem seu tempo e está tudo bem seguir no seu ritmo.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">

          {/* Info */}
          <AnimatedSection>
            <div className="flex flex-col">
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4.5 py-6 ${
                    i === 0 ? "border-t border-[rgba(184,149,106,0.1)]" : ""
                  } border-b border-[rgba(184,149,106,0.1)]`}
                >
                  <div className="w-10 h-10 border border-[rgba(184,149,106,0.22)] flex items-center justify-center shrink-0 text-[#B8956A]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[0.62rem] tracking-[1px] uppercase text-[#4A2E0A] mb-1.5 font-light">
                      {item.label}
                    </h4>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Mapa */}
          <AnimatedSection delay={0.15}>
            <div className="w-full h-full min-h-[400px] border border-[rgba(184,149,106,0.15)] overflow-hidden relative flex flex-col">
              <iframe
                src="https://maps.google.com/maps?q=R.+Dal+Canale,+2186,+Exposi%C3%A7%C3%A3o,+Caxias+do+Sul,+RS,+95080-150&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px", flex: 1 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Ale Vencato Reiki — R. Dal Canale, 2186, Caxias do Sul"
              />
              <a
                href={ADDRESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-[0.72rem] tracking-[1.5px] uppercase text-[#4A2E0A] hover:text-[#D4AF82] transition-colors duration-300 py-3 bg-[#F5F0EB] border-t border-[rgba(184,149,106,0.15)]"
              >
                Abrir no Google Maps →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
