"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { NAV_ITEMS, whatsappLink, WHATSAPP_MESSAGES, WHATSAPP_NUMBER } from "@/lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const waHref = whatsappLink(WHATSAPP_MESSAGES.generic);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[rgba(250,250,248,0.97)] backdrop-blur-md border-b border-[rgba(184,149,106,0.15)] py-3 shadow-sm"
          : "bg-[rgba(250,250,248,0.96)] backdrop-blur-sm border-b border-[rgba(184,149,106,0.1)] py-4"
      }`}
    >
      <div className="mx-auto max-w-[1100px] px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#inicio" className="font-cormorant text-[1.05rem] tracking-[4px] uppercase text-[#4A4040] hover:opacity-75 transition-opacity duration-300">
          Ale Vencato{" "}
          <span className="text-[#B8956A] text-[0.65rem] tracking-[5px] block mt-0.5 font-light">
            Reiki
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          <ul className="flex gap-7 list-none">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[0.75rem] tracking-[2px] uppercase text-[#524848] hover:text-[#B8956A] transition-colors duration-300 font-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[0.75rem] tracking-[1.5px] uppercase text-[#FAFAF8] bg-[#B8956A] px-6 py-3 shadow-[0_4px_14px_rgba(184,149,106,0.4)] hover:bg-[#D4AF82] hover:-translate-y-px transition-all duration-300 font-normal whitespace-nowrap"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Agendar sessão
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-[#4A4040]"
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[rgba(250,250,248,0.98)] backdrop-blur-sm border-t border-[rgba(184,149,106,0.1)] px-6 py-6">
          <ul className="flex flex-col gap-5 list-none mb-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="text-[0.8rem] tracking-[2px] uppercase text-[#524848] hover:text-[#B8956A] transition-colors duration-300 font-light block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 text-[0.75rem] tracking-[1.5px] uppercase text-[#FAFAF8] bg-[#B8956A] px-6 py-3.5 w-full shadow-[0_4px_14px_rgba(184,149,106,0.4)] hover:bg-[#D4AF82] transition-all duration-300 font-normal"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar sessão
          </a>
          <a
            href={`tel:+55${WHATSAPP_NUMBER}`}
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 text-[0.75rem] tracking-[1.5px] uppercase text-[#B8956A] border border-[rgba(184,149,106,0.4)] px-6 py-3.5 w-full hover:bg-[rgba(184,149,106,0.06)] transition-all duration-300 font-light mt-3"
          >
            <Phone className="h-4 w-4" />
            (54) 98117-8795
          </a>
        </div>
      )}
    </header>
  );
}
