import AnimatedSection from "./AnimatedSection";

export default function OqueEReiki() {
  return (
    <section id="oque" className="bg-[#F3EEF5] py-24 px-[6%]">
      <div className="max-w-[900px] mx-auto text-center">
        <AnimatedSection>
          <p className="text-[0.65rem] tracking-[5px] uppercase text-[#B8956A] mb-3 font-light">
            Entenda a técnica
          </p>
          <h2 className="font-cormorant text-[clamp(2rem,3.2vw,3rem)] font-light text-[#4A4040] leading-[1.2]">
            O que é o <em className="italic text-[#B8956A]">Reiki?</em>
          </h2>
          <div className="gold-line-center" />
          <div className="bg-white p-13 mt-10 border border-[rgba(184,149,106,0.15)] px-[60px] py-[52px]">
            <p className="text-[1.05rem] leading-[2] text-[#4A4040] font-light">
              O Reiki é uma técnica japonesa de harmonização energética que
              auxilia no equilíbrio físico, mental e emocional. Durante a
              sessão, o corpo entra em estado profundo de relaxamento,
              permitindo que a energia vital flua com mais equilíbrio —
              promovendo bem-estar, clareza mental e sensação de leveza que
              muitas pessoas descrevem como &ldquo;um recomeço.&rdquo;
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
