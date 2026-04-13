import AnimatedSection from "./AnimatedSection";

export default function OqueEReiki() {
  return (
    <section id="oque" className="bg-[#F3EEF5] py-16 md:py-24 px-[6%]">
      <div className="max-w-[900px] mx-auto text-center">
        <AnimatedSection>
          <p className="text-[0.65rem] tracking-[1.5px] uppercase text-[#4A2E0A] mb-3 font-light">
            Entenda a técnica
          </p>
          <h2 className="font-cormorant text-[clamp(2rem,3.2vw,3rem)] font-light text-[#4A4040] leading-[1.2]">
            O que é o <em className="italic text-[#B8956A]">Reiki?</em>
          </h2>
          <div className="gold-line-center" />
          <div className="bg-white mt-10 border border-[rgba(184,149,106,0.15)] px-[52px] py-[48px] text-left">
            <div className="flex flex-col gap-5 text-[1.02rem] leading-[1.95] text-[#4A4040] font-normal">
              <p>
                O Reiki é uma técnica japonesa de harmonização energética que busca equilibrar corpo, mente e emoções por meio da energia vital universal.
              </p>
              <p>
                A palavra Reiki vem da união de dois termos japoneses:{" "}
                <em>Rei</em>, que significa universal, e <em>Ki</em>, que representa a energia vital que circula em todos os seres vivos.
              </p>
              <p>
                Durante a sessão, essa energia é transmitida por meio da imposição de mãos, com toques leves ou apenas próximos ao corpo. O objetivo é ajudar o fluxo natural da energia do organismo, favorecendo o relaxamento profundo e o equilíbrio energético.
              </p>
              <p>
                A técnica foi desenvolvida no Japão pelo mestre Mikao Usui, a partir de conhecimentos tradicionais da medicina oriental e práticas de cura milenares.
              </p>
              <p>
                Embora utilize a imposição de mãos — gesto presente em diversas tradições culturais e espirituais — o Reiki não é uma religião e não exige qualquer tipo de crença. A prática é voltada ao bem-estar e pode ser recebida por qualquer pessoa.
              </p>
              <p>
                Hoje, o Reiki Usui é utilizado no mundo todo como terapia complementar, auxiliando na redução do estresse, da ansiedade, da insônia e de tensões físicas e emocionais.
              </p>
              <p>
                No Brasil, práticas de imposição de mãos passaram a integrar as Práticas Integrativas e Complementares em Saúde (PICS) oferecidas pelo Sistema Único de Saúde, reconhecendo seu potencial de apoio ao cuidado integral.
              </p>
              <p>
                É importante destacar que o Reiki não substitui tratamentos médicos ou psicológicos, mas pode ser utilizado como complemento para promover mais equilíbrio, relaxamento e qualidade de vida.
              </p>
              <p>
                Em Caxias do Sul, ofereço sessões de Reiki com atendimento presencial, exclusivo e foco no cuidado integral de cada pessoa.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
