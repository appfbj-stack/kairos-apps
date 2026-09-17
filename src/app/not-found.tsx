import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="pt-24 pb-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
          404
        </div>
        <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight">
          Página não encontrada
        </h1>
        <p className="mt-4 text-white/60">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--accent)] text-black font-semibold"
        >
          <ArrowLeft size={18} />
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}