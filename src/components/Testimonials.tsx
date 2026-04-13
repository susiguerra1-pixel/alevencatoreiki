"use client";

import { Star } from "lucide-react";
import { GOOGLE_REVIEW_URL } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const images = [
  { src: "/images/depoimento-001.jpg", alt: "Depoimento de cliente — Ale Vencato Reiki" },
  { src: "/images/depoimento-002.jpg", alt: "Depoimento de cliente — Ale Vencato Reiki" },
  { src: "/images/depoimento-003.jpg", alt: "Depoimento de cliente — Ale Vencato Reiki" },
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

        {/* Imagens dos depoimentos */}
        <div className="grid md:grid-cols-3 gap-4 mb-12 items-start">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA para avaliação */}
        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <p className="text-[1rem] leading-[1.9] text-[#524848] font-light mb-5 max-w-lg mx-auto">
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
