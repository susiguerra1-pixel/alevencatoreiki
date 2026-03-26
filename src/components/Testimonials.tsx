"use client";

import { Star } from "lucide-react";
import { GOOGLE_REVIEW_URL } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    stars: 5,
    result: "Ansiedade reduziu em 2 sessões",
    text: "Entrei ansiosa e saí com uma leveza que não sentia há anos. Não sei explicar direito o que aconteceu, mas funcionou.",
    author: "Mariana S.",
    location: "São Paulo",
  },
  {
    stars: 5,
    result: "Dormiu bem pela primeira vez em meses",
    text: "Fiz sem muita expectativa. Na noite depois da sessão dormi de um jeito que não conseguia há meses.",
    author: "Juliana M.",
    location: "Rio de Janeiro",
  },
  {
    stars: 5,
    result: "Qualidade de vida transformada",
    text: "Faço o acompanhamento mensal há 4 meses. A diferença é visível — família e amigos perceberam.",
    author: "Carla F.",
    location: "Curitiba",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-[#F5F0EB] py-24 px-[6%]">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-[0.65rem] tracking-[5px] uppercase text-[#B8956A] mb-3 font-light">
              Experiências reais
            </p>
            <h2 className="font-cormorant text-[clamp(2rem,3.2vw,3rem)] font-light text-[#4A4040] leading-[1.2]">
              Transformações que começaram com o{" "}
              <em className="italic text-[#B8956A]">equilíbrio da energia através do Reiki</em>
            </h2>
            <div className="gold-line-center" />
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-[#F0EBF2] p-9">
                {/* Estrelas */}
                <div className="flex gap-0.5 mb-3.5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-3 w-3 fill-[#B8956A] text-[#B8956A]"
                    />
                  ))}
                </div>
                {/* Resultado */}
                <span className="text-[0.75rem] text-[#B8956A] font-normal mb-3.5 block">
                  → {t.result}
                </span>
                {/* Depoimento */}
                <p className="font-cormorant text-[1.05rem] leading-[1.85] text-[#4A4040] italic font-light mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                {/* Autor */}
                <div className="text-[0.65rem] tracking-[2px] uppercase text-[#7A6E6E] font-light">
                  {t.author} · {t.location}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA para avaliação */}
        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <p className="text-[1rem] leading-[1.9] text-[#7A6E6E] font-light mb-5 max-w-lg mx-auto">
              Sua experiência também importa. Deixe sua avaliação e ajude outras
              pessoas a encontrarem o equilíbrio que você encontrou.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-[0.8rem] tracking-[2px] uppercase text-[#FAFAF8] bg-[#B8956A] px-11 py-5 shadow-[0_6px_24px_rgba(184,149,106,0.45)] hover:bg-[#D4AF82] hover:-translate-y-0.5 transition-all duration-300 font-normal"
            >
              <Star className="h-4 w-4" />
              Deixar minha avaliação no Google
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
