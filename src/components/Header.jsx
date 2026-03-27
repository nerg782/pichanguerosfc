import { useState } from 'react'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#club', label: 'El club' },
  { href: '#partidos', label: 'Partidos' },
  { href: '#inscribirse', label: 'Inscribirse' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-forest-deep/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:py-4">
        <a href="#inicio" className="group flex items-center gap-3 outline-none">
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black/20 ring-1 ring-white/[0.08] md:h-12 md:w-12">
            <img
              src="/logo.png"
              alt=""
              className="h-9 w-9 object-contain md:h-10 md:w-10"
              style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.35))' }}
              width={40}
              height={40}
            />
          </span>
          <span className="font-extrabold tracking-tight text-white sm:text-[1.05rem]">
            PICHANGUEROS <span className="text-forest-accent">FC</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/[0.06] hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          aria-expanded={open}
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-forest-deep px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2.5 font-semibold text-white/90"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
