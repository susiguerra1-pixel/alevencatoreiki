"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const tags = ["Reiki Usui Certificada", "Terapia Complementar", "Caxias do Sul, RS"];

export default function SobreAle() {
  const waHref = whatsappLink(WHATSAPP_MESSAGES.ale);

  return (
    <section id="ale" className="bg-[#EDE7EF] py-24 px-[6%]">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1fr_1.2fr] gap-20 items-start">

        {/* Foto */}
        <AnimatedSection>
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src="/images/ale-vencato.jpg"
              alt="Ale Vencato, terapeuta de Reiki Usui em Caxias do Sul"
              fill
              className="object-cover object-top"
            />
          </div>
        </AnimatedSection>

        {/* Conteúdo */}
        <AnimatedSection delay={0.15}>
          <div>
            <p className="text-[0.65rem] tracking-[5px] uppercase text-[#B8956A] mb-3 font-light">
              Terapeuta de Reiki em Caxias do Sul
            </p>
            <h2 className="font-cormorant text-[clamp(2rem,3.2vw,3rem)] font-light text-[#4A4040] leading-[1.2]">
              Sobre Ale Vencato
            </h2>
            <div className="gold-line" />

            <p className="text-[0.72rem] tracking-[2.5px] uppercase text-[#B8956A] mb-5 font-light">
              ✨ Minha jornada até o Reiki
            </p>

            <div className="flex flex-col gap-4">
              <p className="text-[0.95rem] leading-[1.9] text-[#4A4040] font-light">
                Desde muito cedo senti que existia algo maior guiando a vida. Sempre fui uma pessoa sensível, intuitiva e naturalmente procurada por quem precisava conversar, ser ouvido ou simplesmente encontrar acolhimento.
              </p>
              <p className="text-[0.95rem] leading-[1.9] text-[#4A4040] font-light">
                Minha trajetória profissional começou cedo: aos 12 anos iniciei no trabalho e, aos 16, entrei para a área da saúde. Cuidar de pessoas sempre fez parte de quem eu sou.
              </p>
              <p className="text-[0.95rem] leading-[1.9] text-[#4A4040] font-light">
                Mas a vida também traz momentos que nos convidam a olhar para dentro. Após algumas experiências desafiadoras e, mais tarde, um período de burnout, percebi que precisava parar e me reconectar comigo mesma.
              </p>
              <p className="text-[0.95rem] leading-[1.9] text-[#4A4040] font-light">
                Foi nesse momento que o Reiki entrou na minha vida.
              </p>
              <p className="text-[0.95rem] leading-[1.9] text-[#4A4040] font-light">
                O que começou como um caminho de cura pessoal rapidamente se transformou em algo maior. O Reiki me ajudou a reorganizar minha energia, reencontrar meu equilíbrio e voltar para a minha própria luz.
              </p>
              <p className="text-[0.95rem] leading-[1.9] text-[#4A4040] font-light">
                Hoje compreendo que cada passo da minha história me trouxe até aqui.
              </p>
              <p className="text-[0.95rem] leading-[1.9] text-[#4A4040] font-light">
                E é com essa experiência, presença e cuidado que conduzo cada sessão de Reiki em Caxias do Sul: ajudando outras pessoas a desacelerar, equilibrar sua energia e se reconectar com aquilo que existe de mais verdadeiro dentro delas.
              </p>
            </div>

            {/* Tagline */}
            <blockquote className="font-cormorant text-[1.3rem] italic text-[#4A4040] mt-7 px-6 py-6 bg-[rgba(255,255,255,0.4)] border-l-2 border-[#D4AF82] leading-[1.7] font-light">
              ✨ &ldquo;Reconecte-se com a sua luz.&rdquo;
            </blockquote>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.65rem] tracking-[2px] uppercase text-[#524848] border border-[rgba(184,149,106,0.3)] px-3.5 py-1.5 font-light"
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
                className="inline-flex items-center gap-2.5 text-[0.8rem] tracking-[2px] uppercase text-[#F5F0EB] bg-[#B8956A] px-11 py-5 shadow-[0_6px_24px_rgba(184,149,106,0.45)] hover:bg-[#D4AF82] hover:-translate-y-0.5 transition-all duration-300 font-normal"
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
