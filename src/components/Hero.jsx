export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-forest-deep bg-grass-stripes"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-forest-deep" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 text-center md:flex-row md:py-24 md:text-left">
        <div className="flex flex-1 flex-col items-center md:items-start">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-forest-accent">
            Fútbol amateur
          </p>
          <h1 className="mb-4 max-w-xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Pasión, equipo y cancha todos los fines de semana
          </h1>
          <p className="mb-8 max-w-lg text-lg text-pitch-light/90">
            Somos Pichangueros FC: un club donde sumarse es fácil. Entrená con nosotros, jugá los partidos y
            formá parte de la familia verde.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#inscribirse"
              className="inline-flex items-center justify-center rounded-xl bg-forest-accent px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-forest-accent/30 transition hover:bg-[#3d8f56] hover:shadow-forest-accent/40"
            >
              Inscribirme al próximo partido
            </a>
            <a
              href="#partidos"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-6 py-3.5 font-semibold text-white transition hover:border-forest-accent hover:text-forest-accent"
            >
              Ver calendario
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-forest-accent/20 to-transparent blur-2xl" />
            <img
              src="/logo.png"
              alt=""
              className="relative h-56 w-56 object-contain drop-shadow-2xl md:h-72 md:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
