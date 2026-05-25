import type { Metadata } from "next";
import Link from "next/link";
import EbookForm from "@/components/EbookForm";

export const metadata: Metadata = {
  title: "Ebook Gratuito — Mente que Não Para | Ale Vencato Reiki",
  description:
    "Baixe grátis: 5 técnicas de Reiki para desacelerar a ansiedade em 10 minutos por dia. Para mentes aceleradas e corpos em alerta.",
  robots: { index: false, follow: false },
};

/* ── Dados das seções ── */
const dores = [
  "A mente não para mesmo quando o corpo está exausto?",
  "Você sente tensão constante no peito, pescoço ou ombros?",
  "Fica irritada ou ansiosa sem saber exatamente por quê?",
  "O corpo está sempre em alerta, como se algo ruim fosse acontecer?",
  "Dorme mal e acorda já cansada?",
];

const aprendizados = [
  {
    num: "01",
    titulo: "Por que o corpo entra em modo alerta",
    desc: "Entenda o que acontece no seu sistema nervoso durante a ansiedade — e por que o Reiki age diretamente nesse estado.",
  },
  {
    num: "02",
    titulo: "A técnica Hatsurei Ho matinal",
    desc: "5 minutos pela manhã que reorganizam sua energia antes do dia começar.",
  },
  {
    num: "03",
    titulo: "Autoaplicação nos pontos-chave da ansiedade",
    desc: "Onde e como aplicar Reiki em si mesma para liberar a tensão acumulada.",
  },
  {
    num: "04",
    titulo: "Ritual noturno de 10 minutos",
    desc: "Como desacelerar corpo e mente antes de dormir — e finalmente ter um sono de verdade.",
  },
  {
    num: "05",
    titulo: "Protocolo de emergência para crises",
    desc: "Um recurso imediato para os momentos em que a ansiedade chega sem avisar.",
  },
];

export default function EbookPage() {
  return (
    <div className="min-h-screen bg-[#F5F0EB] font-jost">

      {/* ── Header mínimo ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F0EB]/95 backdrop-blur-sm border-b border-[rgba(184,149,106,0.12)] px-[6%] py-4 flex items-center justify-between">
        <span className="font-cormorant text-[1.1rem] text-[#4A4040] font-light tracking-[1px]">
          Ale Vencato <em className="italic text-[#B8956A]">Reiki</em>
        </span>
        <Link
          href="/"
          className="text-[0.7rem] tracking-[1.5px] uppercase text-[#524848] opacity-60 hover:opacity-100 transition-opacity duration-200 font-light"
        >
          ← Voltar ao site
        </Link>
      </header>

      <main>

        {/* ══════════════════════════════════════
            HERO — capa do ebook + formulário
        ══════════════════════════════════════ */}
        <section className="pt-28 md:pt-36 pb-20 px-[6%] relative overflow-hidden">
          {/* Blob decorativo */}
          <div
            className="absolute right-[-10%] top-0 w-[55vw] max-w-[680px] aspect-square rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(215,203,217,0.38) 0%, rgba(240,230,214,0.15) 50%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-[1100px] mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.05fr] gap-14 lg:gap-20 items-center">

              {/* Capa do ebook — visual CSS */}
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <div className="relative w-[240px] md:w-[280px]">
                  {/* Sombra/profundidade */}
                  <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#3A3030]/30" />
                  {/* Capa principal */}
                  <div className="relative bg-[#3A3030] border border-[rgba(212,175,130,0.2)] px-8 py-10 flex flex-col items-center text-center min-h-[360px] justify-between shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
                    {/* Topo */}
                    <div>
                      <span className="text-[0.58rem] tracking-[4px] uppercase text-[#D4AF82]/70 font-light">
                        Ale Vencato Reiki
                      </span>
                      <div className="w-10 h-px bg-[#D4AF82]/30 mx-auto mt-3 mb-6" />
                    </div>
                    {/* Símbolo */}
                    <div className="font-cormorant text-[5rem] text-[#D4AF82]/40 leading-none select-none">
                      ∞
                    </div>
                    {/* Título */}
                    <div>
                      <div className="w-10 h-px bg-[#D4AF82]/30 mx-auto mb-5" />
                      <h3 className="font-cormorant text-[1.45rem] leading-[1.2] text-[#F5F0EB] font-light italic mb-3">
                        Mente que<br />Não Para
                      </h3>
                      <p className="text-[0.6rem] tracking-[1.5px] uppercase text-[#D4AF82]/75 font-light leading-[1.7]">
                        5 técnicas de Reiki<br />para a ansiedade
                      </p>
                    </div>
                  </div>
                  {/* Badge gratuito */}
                  <div className="absolute -top-3 -right-3 bg-[#B8956A] text-white text-[0.62rem] tracking-[2px] uppercase px-3 py-1.5 font-normal">
                    Grátis
                  </div>
                </div>
              </div>

              {/* Texto + formulário */}
              <div className="order-1 lg:order-2">
                <span className="inline-block text-[0.62rem] tracking-[4px] uppercase text-[#B8956A] border border-[rgba(184,149,106,0.3)] px-4 py-1.5 mb-6 font-light">
                  Ebook gratuito
                </span>

                <h1 className="font-cormorant text-[clamp(2rem,4vw,3.4rem)] font-light text-[#4A4040] leading-[1.1] mb-4 tracking-[0.2px]">
                  5 técnicas de Reiki para{" "}
                  <em className="italic text-[#B8956A]">
                    desacelerar a ansiedade
                  </em>{" "}
                  em 10 minutos por dia
                </h1>

                <p className="text-[0.95rem] leading-[1.85] text-[#524848] font-light mb-8 max-w-[440px]">
                  Para quem tem a mente acelerada, o corpo em alerta constante
                  e sente que o cansaço não passa nem depois de descansar.
                  Técnicas simples que você pode fazer sozinha, em casa, agora.
                </p>

                <EbookForm location="hero" />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            DORES — identificação com o leitor
        ══════════════════════════════════════ */}
        <section className="bg-[#4A4040] py-16 px-[6%]">
          <div className="max-w-[720px] mx-auto text-center">
            <span className="inline-block text-[0.62rem] tracking-[4px] uppercase text-[#D4AF82] border border-[rgba(212,175,130,0.3)] px-4 py-1.5 mb-7 font-light">
              Você se identifica?
            </span>
            <h2 className="font-cormorant text-[clamp(1.7rem,3vw,2.5rem)] font-light text-[#F5F0EB] leading-[1.25] mb-10">
              Se alguma dessas situações soa{" "}
              <em className="italic text-[#D4AF82]">familiar…</em>
            </h2>

            <ul className="flex flex-col gap-4 text-left max-w-[520px] mx-auto">
              {dores.map((dor) => (
                <li key={dor} className="flex items-start gap-4">
                  <span className="shrink-0 mt-0.5 text-[#D4AF82] text-[1.1rem] leading-none">
                    ✦
                  </span>
                  <span className="text-[0.93rem] leading-[1.8] text-[rgba(245,240,235,0.8)] font-light">
                    {dor}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-10 font-cormorant text-[1.2rem] italic text-[#D4AF82] font-light">
              Este ebook foi feito exatamente para você.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════
            O QUE VOCÊ VAI APRENDER
        ══════════════════════════════════════ */}
        <section className="py-20 px-[6%]">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-[0.62rem] tracking-[4px] uppercase text-[#B8956A] border border-[rgba(184,149,106,0.3)] px-4 py-1.5 mb-6 font-light">
                O que está dentro
              </span>
              <h2 className="font-cormorant text-[clamp(1.7rem,3vw,2.5rem)] font-light text-[#4A4040] leading-[1.25]">
                5 capítulos práticos, diretos,{" "}
                <em className="italic text-[#B8956A]">que você aplica hoje</em>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {aprendizados.map((item) => (
                <div
                  key={item.num}
                  className="bg-white border border-[rgba(184,149,106,0.12)] p-7 card-hover"
                >
                  <span className="font-cormorant text-[2.2rem] text-[rgba(184,149,106,0.25)] font-light leading-none block mb-3">
                    {item.num}
                  </span>
                  <h3 className="font-cormorant text-[1.15rem] text-[#4A4040] font-light mb-2 leading-[1.3]">
                    {item.titulo}
                  </h3>
                  <p className="text-[0.85rem] leading-[1.75] text-[#524848] font-light">
                    {item.desc}
                  </p>
                </div>
              ))}

              {/* Card extra — bônus */}
              <div className="bg-[rgba(184,149,106,0.07)] border border-[rgba(184,149,106,0.2)] p-7 card-hover">
                <span className="text-[0.58rem] tracking-[3px] uppercase text-[#B8956A] font-light block mb-3">
                  + Bônus
                </span>
                <h3 className="font-cormorant text-[1.15rem] text-[#4A4040] font-light mb-2 leading-[1.3]">
                  Guia rápido de referência
                </h3>
                <p className="text-[0.85rem] leading-[1.75] text-[#524848] font-light">
                  Um resumo visual das técnicas para fixar na geladeira, na mesa de trabalho ou no celular.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SOBRE A ALE — credibilidade
        ══════════════════════════════════════ */}
        <section className="bg-[rgba(215,203,217,0.18)] py-16 px-[6%] border-t border-b border-[rgba(184,149,106,0.1)]">
          <div className="max-w-[680px] mx-auto text-center">
            <div className="gold-line-center" />
            <h2 className="font-cormorant text-[clamp(1.5rem,2.5vw,2.1rem)] font-light text-[#4A4040] mb-5 leading-[1.3]">
              Quem vai te guiar nessa jornada
            </h2>
            <p className="text-[0.93rem] leading-[1.9] text-[#524848] font-light mb-3">
              <strong className="font-normal text-[#4A4040]">Ale Vencato</strong> é terapeuta certificada em Reiki Usui nos três níveis, especialista em
              ansiedade e esgotamento emocional. Atende presencialmente em Caxias do Sul e online para
              quem tem a mente acelerada e o corpo em alerta.
            </p>
            <p className="text-[0.93rem] leading-[1.9] text-[#524848] font-light mb-2">
              O Reiki é reconhecido pelo SUS como prática integrativa desde 2017 — e os estudos
              científicos comprovam sua eficácia na redução dos sintomas de ansiedade.
            </p>
            <p className="font-cormorant text-[1.1rem] italic text-[#B8956A] mt-4 font-light">
              ✨ Sua mente pode desacelerar. O corpo sabe o caminho.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FORMULÁRIO — repetido no final
        ══════════════════════════════════════ */}
        <section className="py-20 px-[6%]">
          <div className="max-w-[500px] mx-auto text-center">
            <span className="inline-block text-[0.62rem] tracking-[4px] uppercase text-[#B8956A] border border-[rgba(184,149,106,0.3)] px-4 py-1.5 mb-6 font-light">
              100% gratuito
            </span>
            <h2 className="font-cormorant text-[clamp(1.7rem,3vw,2.4rem)] font-light text-[#4A4040] leading-[1.25] mb-3">
              Pronta para{" "}
              <em className="italic text-[#B8956A]">respirar de verdade</em>?
            </h2>
            <p className="text-[0.9rem] leading-[1.8] text-[#524848] font-light mb-8">
              Preencha abaixo e receba o ebook agora mesmo.
            </p>
            <EbookForm location="bottom" />
          </div>
        </section>

      </main>

      {/* ── Footer mínimo ── */}
      <footer className="bg-[#4A4040] py-6 px-[6%] text-center">
        <p className="text-[0.72rem] text-[rgba(245,240,235,0.4)] font-light tracking-[0.5px]">
          © {new Date().getFullYear()} Ale Vencato Reiki — Caxias do Sul, RS{" "}
          <span className="mx-2 opacity-30">·</span>
          <Link href="/" className="hover:text-[rgba(245,240,235,0.7)] transition-colors duration-200">
            alevencatoreiki.com.br
          </Link>
        </p>
      </footer>

    </div>
  );
}
