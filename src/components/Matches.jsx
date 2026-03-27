const upcoming = [
  { day: 'Jue 26-03', time: '20:00', rival: 'Pichangueros A vs. Pichangueros B', place: 'Los Cancheros, La Reina' },
  { day: 'Sab 28-03', time: '19:00', rival: 'Pichangueros A vs. Pichangueros B', place: 'A Definir' },
  { day: 'Jue 03-04', time: '20:00', rival: 'Pichangueros A vs. Pichangueros B', place: 'A Definir' },
]

export default function Matches() {
  return (
    <section id="partidos" className="bg-forest-deep py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">Próximos partidos</h2>
            <p className="mt-2 max-w-xl text-pitch-light/85">
              Actualizamos el calendario según la liga y los amistosos. Confirmá tu cupo antes de cada fecha.
            </p>
          </div>
          <a
            href="#inscribirse"
            className="inline-flex w-fit items-center rounded-xl bg-forest-accent px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#3d8f56]"
          >
            Quiero jugar
          </a>
        </div>
        <ul className="space-y-4">
          {upcoming.map((m) => (
            <li
              key={`${m.day}-${m.rival}`}
              className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="rounded-lg bg-forest-accent/90 px-3 py-1 text-sm font-bold">{m.day}</span>
                <span className="text-white/80">{m.time}</span>
              </div>
              <div className="flex-1 sm:px-4">
                <p className="font-semibold">{m.rival}</p>
                <p className="text-sm text-pitch-light/75">{m.place}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
