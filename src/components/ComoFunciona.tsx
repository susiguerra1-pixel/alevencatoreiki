"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

const symptoms = [
  "Ansiedade que não passa, mesmo sem motivo aparente",
  "Dificuldade para dormir ou acordar descansada",
  "Sensação constante de peso emocional ou esgotamento",
  "Estresse acumulado que o corpo já está sinalizando",
  "Vontade de se cuidar, mas sem saber por onde começar",
];

export default function ComoFunciona() {
  const waHref = whatsappLink(WHATSAPP_MESSAGES.sobre);

  return (
    <section id="sobre" className="bg-[#FAFAF8] py-24 px-[6%]">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Imagem */}
        <AnimatedSection>
          <div className="relative">
            <div className="w-full aspect-[4/5] bg-gradient-to-br from-[#F0EBF2] to-[#D7CBD9] flex items-center justify-center relative image-frame-offset">
              {/* <Image src="/images/ale-sessao.jpg" alt="Sessão de Reiki Usui em Caxias do Sul" fill className="object-cover" /> */}
              <p className="text-[0.7rem] tracking-[3px] uppercase text-[#B8956A] font-light">
                Foto da sessão
              </p>
            </div>
            <div className="absolute top-[-14px] right-[-14px] w-[55%] h-[50%] border border-[rgba(184,149,106,0.18)] pointer-events-none" />
          </div>
        </AnimatedSection>

        {/* Conteúdo */}
        <AnimatedSection delay={0.15}>
          <div>
            <p className="text-[0.65rem] tracking-[5px] uppercase text-[#B8956A] mb-3 font-light">
              Você se identifica com isso?
            </p>
            <h2 className="font-cormorant text-[clamp(2rem,3.2vw,3rem)] font-light text-[#4A4040] leading-[1.2] mb-0">
              Quando o corpo fala,
              <br />
              <em className="italic text-[#B8956A]">é hora de ouvir.</em>
            </h2>

            <div className="gold-line" />

            <ul className="flex flex-col gap-3 mb-6 list-none">
              {symptoms.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[0.95rem] text-[#7A6E6E] font-light leading-[1.65]"
                >
                  <span className="text-[#B8956A] text-[0.85rem] mt-0.5 shrink-0">✓</span>
                  {s}
                </li>
              ))}
            </ul>

            <p className="text-[1rem] leading-[1.9] text-[#7A6E6E] font-light mb-8">
              O Reiki trabalha na raiz, equilibrando o campo energético para
              que seu corpo e mente encontrem o estado natural de harmonia.{" "}
              <strong className="text-[#4A4040] font-normal">
                Sem medicamentos, sem julgamentos, sem contraindicações.
              </strong>
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
