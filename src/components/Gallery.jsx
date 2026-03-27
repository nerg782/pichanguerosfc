const placeholders = [
  { label: 'Equipo', sub: 'Antes del pitazo' },
  { label: 'Cancha', sub: 'Nuestro segundo hogar' },
  { label: 'Celebración', sub: 'Goles y abrazos' },
]

export default function Gallery() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-2xl font-extrabold text-forest-deep md:text-3xl">Momentos</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {placeholders.map((p) => (
            <div
              key={p.label}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-forest/20 bg-forest-deep"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-forest/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-sm font-bold uppercase tracking-wider text-forest-accent">{p.sub}</span>
                <span className="mt-1 text-xl font-extrabold text-white">{p.label}</span>
                <span className="mt-4 text-xs text-white/60">Añadí fotos reales en /public cuando quieras</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
