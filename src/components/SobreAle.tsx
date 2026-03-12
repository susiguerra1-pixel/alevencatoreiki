"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

const journey = [
  {
    icon: "🌑",
    title: "A cética",
    text: `Por muito tempo, Alessandra foi uma das pessoas que você conhece — racional, produtiva, desconfiante de qualquer coisa que não pudesse ser explicada. Terapias energéticas? "Não é para mim."`,
  },
  {
    icon: "🔥",
    title: "O ponto de ruptura",
    text: "Até que o burnout chegou. Não como aviso — como parede. O corpo parou, a mente esgotou, e todas as saídas conhecidas deixaram de funcionar. Foi quando, quase sem acreditar, ela marcou sua primeira sessão de Reiki.",
  },
  {
    icon: "🌱",
    title: "A descoberta",
    text: "O que era para ser uma tentativa isolada virou um caminho. Sessão após sessão, algo foi se transformando — leveza que ela não conseguia explicar, mas que não conseguia mais ignorar. A cética havia se rendido.",
  },
  {
    icon: "📖",
    title: "A formação",
    text: "A curiosidade virou vocação. Ale completou as três formações em Reiki Usui, não para mudar de vida, mas porque a vida já havia mudado, e ela precisava entender o porquê.",
  },
  {
    icon: "✨",
    title: "O propósito",
    text: "Hoje, Alessandra espelha o que viveu. Cada sessão que conduz carrega a mesma intenção de quando era cliente: ajudar pessoas a viverem mais leves, felizes, completas e conectadas com sua espiritualidade. Não como missão distante, mas como sentido de vida.",
  },
];

const tags = ["Reiki Usui Certificada", "Terapia Complementar", "Caxias do Sul, RS"];

export default function SobreAle() {
  const waHref = whatsappLink(WHATSAPP_MESSAGES.ale);

  return (
    <section id="ale" className="bg-[#D7CBD9] py-24 px-[6%]">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1fr_1.2fr] gap-20 items-start">

        {/* Foto */}
        <AnimatedSection>
          <div className="w-full aspect-square bg-gradient-to-br from-[rgba(255,255,255,0.4)] to-[#C4B5C8] flex items-center justify-center">
            {/* <Image src="/images/ale-sobre.jpg" alt="Ale Vencato, terapeuta de Reiki Usui em Caxias do Sul" fill className="object-cover" /> */}
            <p className="text-[0.7rem] tracking-[3px] uppercase text-[#7A6E6E] font-light">
              Foto da Ale
            </p>
          </div>
        </AnimatedSection>

        {/* Conteúdo */}
        <AnimatedSection delay={0.15}>
          <div>
            <p className="text-[0.65rem] tracking-[5px] uppercase text-[#B8956A] mb-3 font-light">
              Quem vai te atender
            </p>
            <h2 className="font-cormorant text-[clamp(2rem,3.2vw,3rem)] font-light text-[#4A4040] leading-[1.2]">
              Ale Vencato,
              <br />
              <em className="italic text-[#B8956A]">sua guia nessa jornada.</em>
            </h2>
            <div className="gold-line" />

            {/* Jornada */}
            <div className="flex flex-col">
              {journey.map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4.5 py-5 ${
                    i < journey.length - 1
                      ? "border-b border-[rgba(255,255,255,0.4)]"
                      : ""
                  } ${i === 0 ? "pt-0" : ""}`}
                >
                  <div className="text-[1.3rem] shrink-0 w-7 text-center mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <strong className="block text-[0.72rem] tracking-[2px] uppercase text-[#B8956A] mb-1.5 font-normal">
                      {item.title}
                    </strong>
                    <p className="text-[0.9rem] leading-[1.85] text-[#4A4040] font-light">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-7">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.65rem] tracking-[2px] uppercase text-[#7A6E6E] border border-[rgba(184,149,106,0.3)] px-3.5 py-1.5 font-light"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[0.8rem] tracking-[2px] uppercase text-[#FAFAF8] bg-[#B8956A] px-11 py-5 shadow-[0_6px_24px_rgba(184,149,106,0.45)] hover:bg-[#D4AF82] hover:-translate-y-0.5 transition-all duration-300 font-normal"
              >
                <MessageCircle className="h-4 w-4" />
                Falar com a Ale
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
