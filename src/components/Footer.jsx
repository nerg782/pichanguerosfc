export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-white/[0.07] bg-forest-deep py-12 text-pitch-light">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 md:flex-row md:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black/20 ring-1 ring-white/[0.08]">
            <img
              src="/logo.png"
              alt=""
              className="h-11 w-11 object-contain"
              style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.4))' }}
              width={44}
              height={44}
            />
          </span>
          <div>
            <p className="font-extrabold text-white">
              Pichangueros <span className="text-forest-accent">FC</span>
            </p>
            <p className="mt-1 max-w-sm text-sm leading-relaxed text-white/70">
              Club de fútbol amateur. Seguinos en redes o escribinos para alianzas y nuevos jugadores.
            </p>
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-forest-accent">Contacto</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:contacto@pichanguerosfc.local" className="text-white/75 transition hover:text-white">
                contacto@pichanguerosfc.local
              </a>
            </li>
            <li>
              <a href="#inscribirse" className="text-white/75 transition hover:text-white">
                Inscripciones vía formulario
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-5 pt-8 text-center text-xs text-white/45">
        © {new Date().getFullYear()} Pichangueros FC. Hecho con React y Tailwind.
      </div>
    </footer>
  )
}
