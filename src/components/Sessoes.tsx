"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

const sessions = [
  {
    type: "Presencial · Caxias do Sul",
    title: "Sessão Individual",
    hook: '"Quero sentir os resultados pessoalmente, num ambiente tranquilo."',
    description:
      "Um espaço preparado para o seu relaxamento total. A Ale conduz cada sessão com atenção e cuidado exclusivos para você.",
    cta: "Agendar sessão",
    msg: WHATSAPP_MESSAGES.sessoes,
  },
  {
    type: "Pacote · Resultados duradouros",
    title: "Acompanhamento Mensal",
    hook: '"Quero transformação de verdade, não só alívio momentâneo."',
    description:
      "Para quem quer ir fundo. Sessões regulares com acompanhamento do processo — os resultados se aprofundam a cada encontro.",
    cta: "Quero saber mais",
    msg: WHATSAPP_MESSAGES.sessoes,
  },
];

export default function Sessoes() {
  return (
    <section id="sessoes" className="bg-white py-24 px-[6%]">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-[0.65rem] tracking-[5px] uppercase text-[#B8956A] mb-3 font-light">
              Como posso te ajudar
            </p>
            <h2 className="font-cormorant text-[clamp(2rem,3.2vw,3rem)] font-light text-[#4A4040] leading-[1.2]">
              Escolha o formato
              <br />
              <em className="italic text-[#B8956A]">ideal para você</em>
            </h2>
            <div className="gold-line-center" />
            <p className="text-[1rem] leading-[1.9] text-[#7A6E6E] font-light max-w-[500px] mx-auto">
              Cada sessão dura entre 50 e 60 minutos. Você fica deitada,
              vestida, em silêncio. Não precisa fazer nada — só receber.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {sessions.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-[#F3EEF5] p-12 relative overflow-hidden flex flex-col card-hover">
                {/* Acento superior */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF82] to-[#C4B5C8]" />

                <span className="text-[0.65rem] tracking-[3px] uppercase text-[#B8956A] mb-4 font-light block">
                  {s.type}
                </span>
                <h3 className="font-cormorant text-[1.7rem] text-[#4A4040] font-normal mb-3">
                  {s.title}
                </h3>
                <blockquote className="text-[0.85rem] text-[#4A4040] font-light italic mb-6 px-4 py-3.5 bg-[rgba(184,149,106,0.07)] border-l-2 border-[#D4AF82]">
                  {s.hook}
                </blockquote>
                <p className="text-[0.95rem] leading-[1.9] text-[#7A6E6E] font-light mb-6 flex-1">
                  {s.description}
                </p>
                <a
                  href={whatsappLink(s.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.75rem] tracking-[1.5px] uppercase text-[#FAFAF8] bg-[#B8956A] px-7 py-4 shadow-[0_4px_16px_rgba(184,149,106,0.35)] hover:bg-[#D4AF82] hover:-translate-y-0.5 transition-all duration-300 font-normal self-start"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  {s.cta}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
