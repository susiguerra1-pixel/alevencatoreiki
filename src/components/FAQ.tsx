"use client";

import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: '"Preciso ter alguma crença religiosa?"',
    a: "Não. O Reiki não é religião e não exige nenhuma crença. Funciona independentemente do que você acredita, assim como a gravidade.",
  },
  {
    q: '"O atendimento é só presencial?"',
    a: "Sim. O atendimento da Ale é exclusivamente presencial em Caxias do Sul. Isso garante uma experiência completa, com ambiente preparado e presença total durante toda a sessão.",
  },
  {
    q: '"Vou sentir alguma coisa durante a sessão?"',
    a: "A maioria das pessoas sente calor, formigamento, leveza ou um relaxamento profundo. Algumas adormecem. Cada experiência é única e válida.",
  },
  {
    q: '"Quantas sessões preciso fazer?"',
    a: "Muitas pessoas sentem diferença já na primeira sessão. Para resultados duradouros, recomendamos um ciclo de sessões mensais, mas a escolha é sempre sua.",
  },
  {
    q: '"O Reiki substitui meu tratamento médico ou psicológico?"',
    a: "Não, e nunca deve ser usado assim. O Reiki é uma terapia complementar, reconhecida pelo Ministério da Saúde, que potencializa outros tratamentos. Muitos médicos e psicólogos inclusive indicam para seus pacientes.",
  },
  {
    q: '"Tenho medo de não conseguir relaxar."',
    a: "Esse é o medo mais comum, e o Reiki cuida exatamente disso. O ambiente, a condução e a energia da sessão naturalmente induzem o relaxamento, mesmo em pessoas com a mente acelerada.",
  },
  {
    q: '"Nunca ouvi falar disso antes. É seguro?"',
    a: "Totalmente. O Reiki é uma prática não invasiva, sem contraindicações, sem substâncias e sem efeitos colaterais. É indicado para qualquer faixa etária, inclusive crianças e gestantes.",
  },
  {
    q: '"Qual a diferença entre sessão avulsa e acompanhamento mensal?"',
    a: "A sessão avulsa traz alívio imediato e é ótima para quem quer experimentar. O acompanhamento mensal vai mais fundo, trabalhando camadas mais antigas de bloqueio energético, com resultados progressivos e duradouros.",
  },
];

export default function FAQ() {
  return (
    <section id="objecoes" className="bg-[#F0E6D6] py-24 px-[6%]">
      <div className="max-w-[960px] mx-auto">

        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-[0.65rem] tracking-[5px] uppercase text-[#B8956A] mb-3 font-light">
              Dúvidas frequentes
            </p>
            <h2 className="font-cormorant text-[clamp(2rem,3.2vw,3rem)] font-light text-[#4A4040] leading-[1.2]">
              Ainda com <em className="italic text-[#B8956A]">dúvidas?</em>
              <br />É normal.
            </h2>
            <div className="gold-line-center" />
          </div>
        </AnimatedSection>

        {/* Grid FAQ */}
        <div className="grid md:grid-cols-2 gap-0.5 bg-[rgba(184,149,106,0.12)]">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={Math.floor(i / 2) * 0.1}>
              <div className="bg-[#F0E6D6] p-9 hover:bg-[rgba(255,255,255,0.65)] transition-colors duration-300 h-full">
                <p className="font-cormorant text-[1.15rem] text-[#4A4040] font-normal mb-3 italic">
                  {faq.q}
                </p>
                <p className="text-[0.92rem] leading-[1.9] text-[#7A6E6E] font-light">
                  {faq.a}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
