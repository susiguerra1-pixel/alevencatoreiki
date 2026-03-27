/* ── Informações de contato ── */
export const WHATSAPP_NUMBER = "54981178795";
export const INSTAGRAM_HANDLE = "alevencato.reiki";
export const INSTAGRAM_URL = "https://www.instagram.com/alevencato.reiki/";
export const GOOGLE_REVIEW_URL = "https://share.google/zb9aPHazDqkZ17Vc2";
export const SITE_URL = "https://alevencatoreiki.com.br";

/* ── Endereço ── */
export const ADDRESS = {
  street: "R. Dal Canale, 2186",
  complement: "Sala 10022",
  neighborhood: "Exposição",
  city: "Caxias do Sul",
  state: "RS",
  cep: "95080-150",
  full: "R. Dal Canale, 2186, Exposição, Caxias do Sul, RS, 95080-150 — Sala 10022",
  mapsUrl:
    "https://maps.google.com/?q=R.+Dal+Canale,+2186,+Exposi%C3%A7%C3%A3o,+Caxias+do+Sul,+RS",
};

/* ── Horários ── */
export const HOURS = "Segunda a sexta: 8h às 19h";

/* ── Mensagens contextuais do WhatsApp ── */
export const WHATSAPP_MESSAGES = {
  generic:
    "Olá, senti que preciso de uma sessão de Reiki. Pode me orientar sobre como funciona?",
  hero: "Olá, senti que preciso de uma sessão de Reiki. Pode me orientar sobre como funciona?",
  sobre: "Olá! Tenho interesse em experimentar o Reiki. Pode me contar mais sobre como funciona?",
  sessoes: "Olá! Quero saber mais sobre as sessões e o acompanhamento mensal.",
  ale: "Olá, Ale! Gostei muito da sua história e quero agendar uma conversa.",
  cta: "Olá! Quero reservar minha sessão de Reiki. Ainda há vagas disponíveis?",
  contato:
    "Olá! Tenho uma dúvida antes de agendar. Pode me ajudar?",
};

/* ── Função para gerar o link de WhatsApp ── */
export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/* ── Itens de navegação ── */
export const NAV_ITEMS = [
  { label: "Como funciona", href: "#sobre" },
  { label: "Sessões", href: "#sessoes" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];
