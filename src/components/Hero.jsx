export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-forest-deep">
      {/* Misma familia cromática que el PNG del escudo (verde + rayas suaves) */}
      <div className="absolute inset-0 bg-forest-canvas/80 bg-grass-stripes opacity-[0.45]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-forest-deep" />
      <div className="absolute inset-0 bg-hero-vignette" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] md:gap-14 md:py-24 lg:py-28">
        <div className="text-center md:text-left">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-forest-accent">Fútbol amateur</p>
          <h1 className="mb-5 max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white md:text-5xl">
            Pasión, equipo y cancha todos los fines de semana
          </h1>
          <p className="mb-9 max-w-lg text-lg leading-relaxed text-pitch-light/88 md:mx-0">
            Somos Pichangueros FC: un club donde sumarse es fácil. Entrená con nosotros, jugá los partidos y formá
            parte de la familia verde.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#inscribirse"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-forest-accent px-8 text-sm font-bold text-white shadow-lg shadow-forest-accent/25 transition hover:bg-[#3d8f56]"
            >
              Inscribirme al próximo partido
            </a>
            <a
              href="#partidos"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-6 text-sm font-semibold text-white/95 transition hover:border-white/35 hover:bg-white/[0.05]"
            >
              Ver calendario
            </a>
          </div>
        </div>

        {/* Escudo: sin “caja”; halo mínimo en verde para fundir borde del PNG con la sección */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[min(100%,20rem)] md:max-w-[22rem] lg:max-w-[24rem]">
            <div
              className="pointer-events-none absolute left-1/2 top-[52%] h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90"
              style={{
                background:
                  'radial-gradient(circle, rgba(26, 60, 45, 0.55) 0%, rgba(10, 26, 20, 0.2) 52%, transparent 72%)',
              }}
              aria-hidden
            />
            <img
              src="/logo.png"
              alt="Escudo oficial Pichangueros FC"
              className="relative z-[1] h-auto w-full object-contain"
              style={{
                filter: 'drop-shadow(0 16px 40px rgba(0, 0, 0, 0.45))',
              }}
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
