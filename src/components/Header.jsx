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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-forest-deep/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Pichangueros FC"
            className="h-12 w-12 object-contain md:h-14 md:w-14"
          />
          <span className="font-extrabold tracking-tight text-white sm:text-lg">
            PICHANGUEROS <span className="text-forest-accent">FC</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-white/90 transition hover:text-forest-accent"
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
        <div className="border-t border-white/10 bg-forest-deep px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-semibold text-white/90"
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
