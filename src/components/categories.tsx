import { categories } from "@/lib/apps.config";
import { apps } from "@/lib/apps.config";
import { cn } from "@/lib/cn";

export function Categories() {
  // conta apps por categoria para deixar a seção "viva"
  const countByCat = apps.reduce<Record<string, number>>((acc, a) => {
    acc[a.category] = (acc[a.category] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <section id="categorias" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            Categorias
          </div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Qual problema você{" "}
            <span className="text-gradient">precisa resolver?</span>
          </h2>
          <p className="mt-4 text-white/60">
            Cada categoria reúne aplicativos pensados para um tipo de necessidade.
            Adicione ou ajuste categorias editando{" "}
            <code className="text-[var(--accent)]">lib/apps.config.ts</code>.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/apps?categoria=${cat.slug}`}
              className={cn(
                "group relative rounded-2xl glass glass-hover p-4 sm:p-5 overflow-hidden"
              )}
            >
              <div className="text-3xl">{cat.icon}</div>
              <div className="mt-3 font-semibold text-white">{cat.nome}</div>
              <div className="text-xs text-white/55 mt-1 line-clamp-2">
                {cat.descricao}
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[var(--accent)]">
                {countByCat[cat.slug] ?? 0} app
                {(countByCat[cat.slug] ?? 0) === 1 ? "" : "s"}
              </div>
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[var(--primary)]/10 group-hover:bg-[var(--accent)]/10 transition-colors blur-2xl" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}