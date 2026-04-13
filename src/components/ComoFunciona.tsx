"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const symptoms = [
  "Ansiedade que aparece sem um motivo claro",
  "Dificuldade para dormir ou sensação de não descansar de verdade",
  "Cansaço emocional constante",
  "Estresse acumulado que o corpo já começa a manifestar",
  "A sensação de que precisa cuidar de si, mas não sabe por onde começar",
];

export default function ComoFunciona() {
  const waHref = whatsappLink(WHATSAPP_MESSAGES.sobre);

  return (
    <section id="sobre" className="bg-[#F5F0EB] py-24 px-[6%]">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Imagem */}
        <AnimatedSection>
          <div className="relative">
            <div className="relative w-full aspect-[4/5] overflow-hidden image-frame-offset">
              <Image
                src="/images/sala.png"
                alt="Espaço de atendimento — Ale Vencato Reiki em Caxias do Sul"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="absolute top-[-14px] right-[-14px] w-[55%] h-[50%] border border-[rgba(184,149,106,0.18)] pointer-events-none" />
          </div>
        </AnimatedSection>

        {/* Conteúdo */}
        <AnimatedSection delay={0.15}>
          <div>
            <p className="text-[0.65rem] tracking-[5px] uppercase text-[#4A2E0A] mb-3 font-light">
              Você sente que algo dentro de você pede cuidado?
            </p>
            <h2 className="font-cormorant text-[clamp(2rem,3.2vw,3rem)] font-light text-[#4A4040] leading-[1.2] mb-0">
              Quando o corpo fala,
              <br />
              <em className="italic text-[#B8956A]">é hora de ouvir.</em>
            </h2>

            <div className="gold-line" />

            <p className="text-[1rem] leading-[1.9] text-[#524848] font-light mb-5">
              Muitas vezes o corpo começa a falar antes mesmo de entendermos o
              que está acontecendo. Talvez você esteja passando por momentos
              como:
            </p>

            <ul className="flex flex-col gap-3 mb-5 list-none">
              {symptoms.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[0.95rem] text-[#4A4040] font-light leading-[1.65]"
                >
                  <span className="text-[#B8956A] text-[0.85rem] mt-0.5 shrink-0">✓</span>
                  {s}
                </li>
              ))}
            </ul>

            <p className="text-[1rem] leading-[1.9] font-light italic mb-5" style={{color:"var(--gold,#B8956A)"}}>
              Esses sinais não são fraqueza. São convites para desacelerar e se
              reconectar consigo mesma.
            </p>

            <p className="text-[1rem] leading-[1.9] text-[#524848] font-light mb-5">
              O Reiki é uma terapia energética que atua no equilíbrio do campo
              energético, ajudando corpo e mente a voltarem ao seu estado natural
              de harmonia e bem-estar — especialmente eficaz para ansiedade,
              insônia e esgotamento emocional.
            </p>

            <div className="flex flex-col gap-1.5 mb-5">
              {["sem medicamentos", "sem julgamentos", "sem contraindicações"].map((item) => (
                <span key={item} className="text-[0.95rem] text-[#524848] font-light">
                  ✨ {item}
                </span>
              ))}
            </div>

            <p className="text-[1rem] leading-[1.9] text-[#524848] font-light italic mb-8">
              Um momento para pausar, respirar e reconectar-se com a sua luz.
              Permita-se viver essa experiência.
            </p>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-[0.8rem] tracking-[2px] uppercase text-[#FAFAF8] bg-[#B8956A] px-11 py-5 shadow-[0_6px_24px_rgba(184,149,106,0.45)] hover:bg-[#D4AF82] hover:-translate-y-0.5 transition-all duration-300 font-normal"
            >
              <MessageCircle className="h-4 w-4" />
              Quero experimentar
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
