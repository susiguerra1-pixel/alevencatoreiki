"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const sessions = [
  {
    featured: false,
    featuredLabel: "",
    title: "Sessão Individual",
    hook: '"Quero experimentar o Reiki e sentir como funciona."',
    paragraphs: [
      "Uma sessão de Reiki Usui completa para relaxar, desacelerar e permitir que o corpo e a mente entrem em estado de equilíbrio.",
      "Ideal para quem deseja conhecer o Reiki ou precisa de um momento de cuidado e pausa.",
    ],
    bullets: ["✨ duração de 50 a 60 minutos", "✨ sessão de Reiki presencial em Caxias do Sul"],
    cta: "Agendar sessão",
    msg: WHATSAPP_MESSAGES.sessoes,
  },
  {
    featured: true,
    featuredLabel: "opção mais escolhida",
    title: "Processo de Equilíbrio",
    hook: '"Quero cuidar de mim de forma mais profunda."',
    paragraphs: [
      "O Reiki atua de forma mais consistente quando realizado em sequência. Neste formato, as sessões acontecem semanalmente ou quinzenalmente, permitindo que o corpo e o campo energético integrem melhor os benefícios da prática.",
      "Um caminho de cuidado contínuo e reconexão.",
    ],
    bullets: [],
    cta: "Quero saber mais",
    msg: WHATSAPP_MESSAGES.sessoes,
  },
  {
    featured: false,
    featuredLabel: "",
    title: "Jornada de Reconexão",
    hook: '"Quero um processo completo de transformação interior."',
    paragraphs: [
      "Um acompanhamento mais profundo para quem sente que é momento de olhar com mais presença para si mesma.",
      "As sessões são planejadas de acordo com o seu momento, criando um espaço seguro para liberar tensões, equilibrar a energia e fortalecer o bem-estar ao longo do tempo.",
    ],
    bullets: [],
    cta: "Conversar sobre o acompanhamento",
    msg: WHATSAPP_MESSAGES.sessoes,
  },
];

export default function Sessoes() {
  return (
    <section id="sessoes" className="bg-[#F5F0EB] py-24 px-[6%]">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-[0.65rem] tracking-[5px] uppercase text-[#B8956A] mb-3 font-light">
              Como posso te ajudar
            </p>
            <h2 className="font-cormorant text-[clamp(2rem,3.2vw,3rem)] font-light text-[#4A4040] leading-[1.2]">
              Escolha a experiência que faz sentido
              <br />
              <em className="italic text-[#B8956A]">para o seu momento</em>
            </h2>
            <div className="gold-line-center" />
            <p className="text-[1rem] leading-[1.9] text-[#524848] font-light max-w-[500px] mx-auto">
              Cada sessão dura entre 50 e 60 minutos. Você permanece deitada, vestida, em um ambiente tranquilo. Não precisa fazer nada — apenas relaxar e receber.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {sessions.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-[#F3EEF5] p-10 relative overflow-hidden flex flex-col card-hover h-full">
                {/* Acento superior */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF82] to-[#C4B5C8]" />

                {/* Badge "opção mais escolhida" */}
                {s.featured && (
                  <div className="inline-flex items-center gap-1.5 mb-4 self-start">
                    <span className="text-[0.62rem] tracking-[2px] uppercase text-[#B8956A] border border-[rgba(184,149,106,0.4)] px-3 py-1 font-light">
                      ⭐ {s.featuredLabel}
                    </span>
                  </div>
                )}

                <h3 className="font-cormorant text-[1.7rem] text-[#4A4040] font-normal mb-3">
                  {s.title}
                </h3>
                <blockquote className="text-[0.85rem] text-[#4A4040] font-light italic mb-5 px-4 py-3.5 bg-[rgba(184,149,106,0.07)] border-l-2 border-[#D4AF82]">
                  {s.hook}
                </blockquote>
                <div className="flex flex-col gap-3 text-[0.95rem] leading-[1.9] text-[#524848] font-light mb-5 flex-1">
                  {s.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {s.bullets.length > 0 && (
                    <div className="flex flex-col gap-1 mt-1">
                      {s.bullets.map((b, k) => (
                        <span key={k} className="text-[0.9rem] text-[#524848] font-light">{b}</span>
                      ))}
                    </div>
                  )}
                </div>
                <a
                  href={whatsappLink(s.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.73rem] tracking-[1.5px] uppercase text-[#F5F0EB] bg-[#B8956A] px-6 py-4 shadow-[0_4px_16px_rgba(184,149,106,0.35)] hover:bg-[#D4AF82] hover:-translate-y-0.5 transition-all duration-300 font-normal self-start"
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
