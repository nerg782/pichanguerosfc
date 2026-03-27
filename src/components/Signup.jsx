import { GOOGLE_FORM_URL } from '../config'

function embedUrl(url) {
  try {
    const u = new URL(url)
    u.searchParams.set('embedded', 'true')
    return u.toString()
  } catch {
    return url
  }
}

const isPlaceholder = (url) => url.includes('REPLACE_ME')

export default function Signup() {
  const formEmbed = embedUrl(GOOGLE_FORM_URL)
  const showIframe = !isPlaceholder(GOOGLE_FORM_URL)

  return (
    <section id="inscribirse" className="border-t border-forest/15 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-forest-deep md:text-4xl">Inscribite al partido</h2>
          <p className="mt-3 text-lg text-gray-600">
            Completá el formulario: tus datos llegan al correo del club a través de Google Forms. Te confirmamos
            disponibilidad y equipo.
          </p>
        </div>

        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-forest-accent px-8 py-4 text-base font-bold text-white shadow-lg shadow-forest-accent/25 transition hover:bg-[#3d8f56]"
          >
            Abrir formulario en nueva pestaña
          </a>
          <p className="max-w-md text-center text-sm text-gray-500 sm:text-left">
            Reemplazá la URL en el archivo <code className="rounded bg-gray-100 px-1.5 py-0.5 text-forest">.env</code>{' '}
            con el enlace real de tu Google Form.
          </p>
        </div>

        {showIframe ? (
          <div className="overflow-hidden rounded-2xl border-2 border-forest/20 bg-gray-50 shadow-inner">
            <iframe
              title="Formulario de inscripción Pichangueros FC"
              src={formEmbed}
              className="min-h-[640px] w-full border-0"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-forest/30 bg-forest-deep/5 px-6 py-16 text-center">
            <p className="font-semibold text-forest">Configurá tu Google Form</p>
            <p className="mt-2 text-sm text-gray-600">
              Creá un formulario en Google Forms, activá “Recibir respuestas por correo” y pegá la URL pública en{' '}
              <code className="rounded bg-white px-2 py-0.5 text-forest">.env</code> como{' '}
              <code className="rounded bg-white px-2 py-0.5 text-forest">VITE_GOOGLE_FORM_URL=...</code>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
