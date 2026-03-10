import type { AboutUsContent } from '../types'

type AboutUsScreenProps = {
  content: AboutUsContent
  onBack: () => void
}

export function AboutUsScreen({ content, onBack }: AboutUsScreenProps) {
  return (
    <section className="phone-shell about-us-shell" aria-label="Tentang Maktub">
      <div className="about-us-accent" aria-hidden />

      <div className="about-us-scroll">
        <header className="about-us-header">
          <button type="button" className="about-us-back-btn" aria-label="Kembali" onClick={onBack}>
            <img src={content.backIcon} alt="" aria-hidden />
          </button>
        </header>

        <div className="about-us-body">
          <div className="about-us-mark">
            <h1>{content.arabicTitle}</h1>
            <p>{content.subtitle}</p>
          </div>

          <section className="about-us-copy-card">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="about-us-signature">
              <strong>{content.signatureTitle}</strong>
              {content.signatureLines.map((line) => (
                <strong key={line}>{line}</strong>
              ))}
            </div>
          </section>
        </div>
      </div>

      <footer className="about-us-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}