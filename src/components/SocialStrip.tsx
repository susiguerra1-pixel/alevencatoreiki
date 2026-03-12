import AnimatedSection from "./AnimatedSection";

const items = [
  {
    icon: "✨",
    text: (
      <>
        <strong className="text-[#4A4040] font-normal">Reiki Usui</strong>, terapia
        reconhecida pelo Ministério da Saúde
      </>
    ),
  },
  {
    icon: "📍",
    text: (
      <>
        Presencial em{" "}
        <strong className="text-[#4A4040] font-normal">Caxias do Sul, RS</strong>
      </>
    ),
  },
  {
    icon: "⚡",
    text: (
      <>
        Resposta em{" "}
        <strong className="text-[#4A4040] font-normal">até 24h</strong>
      </>
    ),
  },
];

export default function SocialStrip() {
  return (
    <AnimatedSection>
      <div className="bg-[#F0EBF2] border-t border-b border-[rgba(184,149,106,0.1)] py-7 px-[6%]">
        <div className="max-w-[1100px] mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="text-[1.1rem]">{item.icon}</span>
              <p className="text-[0.8rem] text-[#7A6E6E] font-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
