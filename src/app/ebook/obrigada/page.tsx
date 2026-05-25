import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import ObrigadaWhatsAppButton from "@/components/ObrigadaWhatsAppButton";

export const metadata: Metadata = {
  title: "Seu ebook está pronto! | Ale Vencato Reiki",
  description: "Baixe agora o ebook Mente que Não Para — 5 técnicas de Reiki para a ansiedade.",
  robots: { index: false, follow: false },
};

export default function ObrigadaPage() {
  return (
    <div className="min-h-screen bg-[#F5F0EB] font-jost flex flex-col">

      {/* ── Header mínimo ── */}
      <header className="px-[6%] py-5 border-b border-[rgba(184,149,106,0.12)] flex items-center justify-between">
        <span className="font-cormorant text-[1.1rem] text-[#4A4040] font-light tracking-[1px]">
          Ale Vencato <em className="italic text-[#B8956A]">Reiki</em>
        </span>
        <Link
          href="/"
          className="text-[0.7rem] tracking-[1.5px] uppercase text-[#524848] opacity-60 hover:opacity-100 transition-opacity duration-200 font-light"
        >
          Ir ao site →
        </Link>
      </header>

      {/* ── Conteúdo principal ── */}
      <main className="flex-1 flex items-center justify-center px-[6%] py-20">
        <div className="max-w-[620px] w-full text-center">

          {/* Ícone / símbolo */}
          <div className="font-cormorant text-[4rem] text-[#D4AF82]/50 leading-none mb-6 select-none">
            ∞
          </div>

          <span className="inline-block text-[0.62rem] tracking-[4px] uppercase text-[#B8956A] border border-[rgba(184,149,106,0.3)] px-4 py-1.5 mb-7 font-light">
            Tudo certo!
          </span>

          <h1 className="font-cormorant text-[clamp(2rem,4vw,3.2rem)] font-light text-[#4A4040] leading-[1.15] mb-5">
            Seu ebook está{" "}
            <em className="italic text-[#B8956A]">pronto para download</em>
          </h1>

          <p className="text-[0.95rem] leading-[1.85] text-[#524848] font-light mb-10 max-w-[440px] mx-auto">
            Clique no botão abaixo para baixar o seu exemplar. Salve no celular
            ou no computador para ler quando precisar.
          </p>

          {/* Botão de download */}
          <a
            href="/ebook-ansiedade.pdf"
            download="Mente-que-Nao-Para-Ale-Vencato-Reiki.pdf"
            className="inline-flex items-center gap-3 text-[0.8rem] tracking-[2.5px] uppercase text-white bg-[#B8956A] px-12 py-5 hover:bg-[#D4AF82] hover:-translate-y-px transition-all duration-300 font-normal shadow-[0_6px_24px_rgba(184,149,106,0.4)] mb-4"
          >
            ↓ Baixar meu ebook agora
          </a>

          <p className="text-[0.72rem] text-[rgba(74,64,64,0.42)] font-light mb-14">
            PDF gratuito · Ale Vencato Reiki
          </p>

          {/* Divisor */}
          <div className="gold-line-center mb-14" />

          {/* CTA secundário — sessão */}
          <div className="bg-white border border-[rgba(184,149,106,0.15)] p-8 text-center">
            <h2 className="font-cormorant text-[1.5rem] font-light text-[#4A4040] mb-3 leading-[1.3]">
              Quer ir além das técnicas do ebook?
            </h2>
            <p className="text-[0.88rem] leading-[1.8] text-[#524848] font-light mb-6 max-w-[360px] mx-auto">
              Uma sessão de Reiki com a Ale trabalha as camadas mais profundas
              da ansiedade — de forma presencial ou online.
            </p>
            <ObrigadaWhatsAppButton />
          </div>

          {/* Instrução para salvar contato */}
          <p className="text-[0.78rem] leading-[1.7] text-[rgba(74,64,64,0.5)] font-light mt-10">
            💡 Dica: salve o número da Ale na agenda —&nbsp;
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.ebook)}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#B8956A] transition-colors"
            >
              +55 (54) 98117-8795
            </a>
            &nbsp;— para receber conteúdos exclusivos pelo WhatsApp.
          </p>

        </div>
      </main>

      {/* ── Footer mínimo ── */}
      <footer className="bg-[#4A4040] py-5 px-[6%] text-center">
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
