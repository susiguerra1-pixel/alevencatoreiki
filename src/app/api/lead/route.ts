import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, source = "ebook-ansiedade" } = body;

    /* ── Validação básica ── */
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Nome e email são obrigatórios" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    /* ── Envia para o Google Sheets via Apps Script ── */
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      // Sem webhook configurado: deixa o usuário passar mesmo assim
      console.warn("[lead] GOOGLE_SHEETS_WEBHOOK_URL não configurado");
      return NextResponse.json({ success: true, warn: "webhook_missing" });
    }

    const sheetsRes = await fetch(webhookUrl, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        source,
      }),
    });

    if (!sheetsRes.ok) {
      // Sheets falhou, mas não bloqueia o usuário
      console.error("[lead] Sheets webhook status:", sheetsRes.status);
      return NextResponse.json({ success: true, warn: "webhook_error" });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[lead] Erro interno:", err);
    // Mesmo com erro interno, não bloqueia o usuário
    return NextResponse.json({ success: true, warn: "internal_error" });
  }
}
