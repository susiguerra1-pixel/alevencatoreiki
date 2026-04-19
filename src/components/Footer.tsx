"use client";

import { NAV_ITEMS, INSTAGRAM_URL, GOOGLE_REVIEW_URL, whatsappLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function Footer() {
  return (
    <footer className="bg-[#F0EBF2] border-t border-[rgba(184,149,106,0.1)] pt-11 pb-6 px-[6%]">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-5 mb-0">

          {/* Brand */}
          <a href="#inicio" className="hover:opacity-75 transition-opacity duration-300 font-cormorant text-[0.95rem] tracking-[4px] uppercase text-[#4A4040] font-light">
            Ale Vencato{" "}
            <span className="text-[#B8956A] text-[0.6rem] tracking-[5px] block mt-0.5">
              Reiki
            </span>
          </a>

          {/* Links */}
          <ul className="flex flex-wrap gap-5 list-none justify-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[0.7rem] tracking-[2px] uppercase text-[#524848] hover:text-[#B8956A] transition-colors duration-300 font-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social */}
          <div className="flex gap-2.5">
            {[
              { href: INSTAGRAM_URL, label: "Instagram", text: "ig", track: false },
              {
                href: whatsappLink(WHATSAPP_MESSAGES.generic),
                label: "WhatsApp",
                text: "wa",
                track: true,
              },
              { href: GOOGLE_REVIEW_URL, label: "Google", text: "g", track: false },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                onClick={s.track ? () => trackWhatsAppClick("footer") : undefined}
                className="w-8.5 h-8.5 border border-[rgba(184,149,106,0.22)] flex items-center justify-center text-[#524848] text-[0.65rem] tracking-wider hover:border-[#B8956A] hover:text-[#B8956A] transition-all duration-300"
              >
                {s.text}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(184,149,106,0.1)] mt-4 pt-5 text-center">
          <p className="text-[0.65rem] text-[#524848] font-light leading-[1.9]">
            © 2026 Ale Vencato Reiki · Todos os direitos reservados · Reiki em Caxias do Sul, RS
            <br />
            O Reiki é uma terapia complementar e não substitui tratamento médico convencional.
          </p>
        </div>
      </div>
    </footer>
  );
}
