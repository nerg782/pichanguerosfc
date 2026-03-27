const items = [
  {
    title: 'Espíritu de equipo',
    text: 'Priorizamos el respeto, la diversión y el compañerismo en cada entrenamiento y partido.',
  },
  {
    title: 'Todos los niveles',
    text: 'Si volvés a la pelota o querés competir con más intensidad, hay un lugar para vos.',
  },
  {
    title: 'Comunidad',
    text: 'Eventos, asados y actividades fuera de la cancha para fortalecer el grupo.',
  },
]

export default function About() {
  return (
    <section id="club" className="border-t border-forest/20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-forest-deep md:text-4xl">El club</h2>
          <p className="mt-3 text-lg text-gray-600">
            Nacimos del amor por el fútbol callejero y la buena onda. Hoy somos un equipo que representa con orgullo
            los colores verde y blanco.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border-2 border-forest/25 bg-gradient-to-b from-white to-gray-50/80 p-6 shadow-sm transition hover:border-forest-accent/50 hover:shadow-md"
            >
              <div className="mb-3 h-1 w-12 rounded-full bg-forest-accent" />
              <h3 className="mb-2 text-xl font-bold text-forest">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
