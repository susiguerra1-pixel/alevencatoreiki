/* ── Rastreamento de eventos via dataLayer (GTM) e Meta Pixel ── */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    fbq: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick(location: string) {
  if (typeof window === "undefined") return;

  // GTM / GA4
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_click",
    cta_location: location,
  });

  // Meta Pixel — evento Contact
  if (typeof window.fbq === "function") {
    window.fbq("track", "Contact", { cta_location: location });
  }
}
