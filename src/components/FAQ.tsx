"use client";

import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: '"Preciso ter alguma crença religiosa?"',
    a: ["Não.", "O Reiki não é uma religião e não exige nenhuma crença específica. Pessoas de diferentes crenças — ou mesmo sem religião — podem receber Reiki e se beneficiar da experiência."],
  },
  {
    q: '"O atendimento é só presencial?"',
    a: ["Sim.", "As sessões são realizadas exclusivamente de forma presencial em Caxias do Sul, em um ambiente preparado para proporcionar relaxamento, com presença e atenção dedicadas durante toda a experiência."],
  },
  {
    q: '"Vou sentir alguma coisa durante a sessão?"',
    a: ["Muitas pessoas sentem calor, formigamento, leveza ou um relaxamento profundo durante a sessão. Algumas até adormecem.", "Cada pessoa vivencia o Reiki de forma única, e todas as experiências são naturais."],
  },
  {
    q: '"Quantas sessões preciso fazer?"',
    a: ["Muitas pessoas percebem mudanças já na primeira sessão. Para aprofundar os efeitos e promover um equilíbrio mais duradouro, algumas pessoas optam por realizar um ciclo de sessões, que pode acontecer semanalmente, quinzenalmente ou mensalmente.", "A frequência ideal depende de cada pessoa e do momento que ela está vivendo."],
  },
  {
    q: '"O Reiki substitui meu tratamento médico ou psicológico?"',
    a: ["Não.", "O Reiki não substitui tratamentos médicos ou psicológicos. É uma terapia complementar que pode ser recebida junto a outros cuidados com a saúde.", "O Reiki faz parte das Práticas Integrativas e Complementares em Saúde (PICS), reconhecidas pelo Ministério da Saúde."],
  },
  {
    q: '"Tenho medo de não conseguir relaxar."',
    a: ["Esse é um dos receios mais comuns — e é completamente normal. O ambiente, a condução da sessão e a própria experiência do Reiki ajudam o corpo a desacelerar naturalmente, mesmo em pessoas com a mente mais agitada.", "Você não precisa fazer nada além de se permitir estar ali."],
  },
  {
    q: '"Nunca ouvi falar disso antes. É seguro?"',
    a: ["O Reiki é uma prática segura e não invasiva. A sessão é realizada por meio da imposição de mãos, com toques leves ou apenas próximos ao corpo, sempre respeitando o conforto de cada pessoa.", "Durante o atendimento, você permanece deitada, vestida e em um ambiente acolhedor, preparado para favorecer o relaxamento. Podem ser utilizados elementos como música suave, incenso ou óleos essenciais, criando uma atmosfera tranquila para a experiência."],
  },
  {
    q: '"Qual a diferença entre sessão avulsa e acompanhamento?"',
    a: ["A sessão avulsa é ideal para quem quer conhecer o Reiki ou receber um momento de cuidado e relaxamento.", "O acompanhamento acontece com sessões ao longo do tempo, permitindo aprofundar o processo e favorecer um equilíbrio mais consistente."],
  },
];

export default function FAQ() {
  return (
    <section id="objecoes" className="bg-[#F8F3EC] py-24 px-[6%]">
      <div className="max-w-[960px] mx-auto">

        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-[0.65rem] tracking-[5px] uppercase text-[#7A5230] mb-3 font-light">
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
              <div className="bg-[#F8F3EC] p-9 hover:bg-[rgba(255,255,255,0.65)] transition-colors duration-300 h-full">
                <p className="font-cormorant text-[1.15rem] text-[#4A4040] font-normal mb-3 italic">
                  {faq.q}
                </p>
                <div className="flex flex-col gap-2">
                  {faq.a.map((para, j) => (
                    <p key={j} className="text-[0.92rem] leading-[1.9] text-[#524848] font-light">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
