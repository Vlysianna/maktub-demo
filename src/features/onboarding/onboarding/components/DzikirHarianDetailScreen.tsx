import type { GuideDetailContent } from '../types'

type DzikirHarianDetailScreenProps = {
  content: GuideDetailContent
  onBack: () => void
}

export function DzikirHarianDetailScreen({ content, onBack }: DzikirHarianDetailScreenProps) {
  return (
    <section className="phone-shell recitation-detail-shell" aria-label={content.title}>
      <header className="recitation-detail-header">
        <button type="button" onClick={onBack} className="recitation-detail-back-btn" aria-label="Kembali">
          <img src={content.backIcon} alt="" aria-hidden />
        </button>
        <h1>{content.title}</h1>
      </header>

      <div className="recitation-detail-scroll">
        <section className="recitation-hero-card">
          <span className="recitation-hero-chip">{content.categoryLabel}</span>
          <strong>{content.heroLabel}</strong>
          <h2>{content.title}</h2>
          <p>{content.contextLabel}</p>
        </section>

        {content.arabicText ? (
          <section className="recitation-arabic-card">
            <p className="recitation-arabic-text">{content.arabicText}</p>
            {content.latinText ? <p className="recitation-latin-text">{content.latinText}</p> : null}
          </section>
        ) : null}

        <section className="recitation-meaning-card">
          <span>{content.translationTitle}</span>
          <p>{content.translationText}</p>
        </section>

        <div className="recitation-section-list">
          {content.sections.map((section) => (
            <article key={section.title} className="recitation-section-card">
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>

      <footer className="informasi-detail-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}