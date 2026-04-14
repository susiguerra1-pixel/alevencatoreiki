/* ── Rastreamento de eventos via dataLayer (GTM) ── */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function trackWhatsAppClick(location: string) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_click",
    cta_location: location,
  });
}
