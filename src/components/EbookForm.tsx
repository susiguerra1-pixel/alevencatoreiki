"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EbookForm({ location = "hero" }: { location?: string }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, source: `ebook-ansiedade-${location}` }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erro ao processar");
      }

      router.push("/ebook/obrigada");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Erro ao processar. Tente novamente.";
      setError(message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      <input
        type="text"
        placeholder="Seu primeiro nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full bg-white border border-[rgba(184,149,106,0.35)] px-5 py-4 text-[0.9rem] text-[#4A4040] placeholder-[rgba(74,64,64,0.38)] font-light focus:outline-none focus:border-[#B8956A] transition-colors duration-200"
      />
      <input
        type="email"
        placeholder="Seu melhor email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full bg-white border border-[rgba(184,149,106,0.35)] px-5 py-4 text-[0.9rem] text-[#4A4040] placeholder-[rgba(74,64,64,0.38)] font-light focus:outline-none focus:border-[#B8956A] transition-colors duration-200"
      />

      {error && (
        <p className="text-red-600 text-[0.8rem] font-light text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full text-[0.78rem] tracking-[2.5px] uppercase text-white bg-[#B8956A] px-8 py-5 hover:bg-[#D4AF82] hover:-translate-y-px transition-all duration-300 font-normal shadow-[0_6px_24px_rgba(184,149,106,0.4)] disabled:opacity-60 disabled:cursor-not-allowed mt-1"
      >
        {loading ? "Enviando…" : "Quero meu ebook gratuito →"}
      </button>

      <p className="text-[0.7rem] text-[rgba(74,64,64,0.45)] text-center font-light tracking-[0.3px]">
        Nenhum spam. Seus dados ficam seguros e protegidos.
      </p>
    </form>
  );
}
