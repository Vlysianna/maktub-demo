import type { CSSProperties } from 'react'
import type { InformasiDetailContent } from '../types'

type InformasiDetailScreenProps = {
  content: InformasiDetailContent
  onBack: () => void
}

export function InformasiDetailScreen({ content, onBack }: InformasiDetailScreenProps) {
  const hasCta = content.ctaPrefix && content.ctaHighlight && content.ctaIcon && content.ctaPattern

  return (
    <section className="phone-shell informasi-detail-shell" aria-label="Informasi Detail">
      <header className="informasi-detail-header">
        <button type="button" onClick={onBack} className="informasi-detail-back-btn" aria-label="Kembali">
          <img src={content.backIcon} alt="" aria-hidden />
        </button>
      </header>

      <div className="informasi-detail-scroll">
        <div className="informasi-detail-media-wrap">
          <img src={content.image} alt={content.imageAlt ?? content.title} className="informasi-detail-image" />
          {content.showPlayButton ? (
            <span className="informasi-detail-play-btn" aria-hidden>
              <span className="informasi-detail-play-icon" />
            </span>
          ) : null}
        </div>

        <h1>{content.title}</h1>

        <p className="informasi-detail-brand">{content.brand}</p>

        {content.summary ? <p className="informasi-detail-summary">{content.summary}</p> : null}

        {content.checklistItems?.length ? (
          <ul className="informasi-detail-checklist">
            {content.checklistItems.map((item) => (
              <li key={item}>
                {content.checklistIcon ? <img src={content.checklistIcon} alt="" aria-hidden /> : null}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {content.sections?.length ? (
          <div className="informasi-detail-article">
            {content.sections.map((section, index) => (
              <article key={`${section.title ?? 'section'}-${index}`}>
                {section.title ? <h2>{section.title}</h2> : null}
                <p>{section.description}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>

      {hasCta ? (
        <div className="informasi-detail-cta-wrap">
          <div
            className="informasi-detail-cta-bg"
            aria-hidden
            style={{ '--informasi-cta-pattern': `url('${content.ctaPattern}')` } as CSSProperties}
          />
          <button type="button" className="informasi-detail-cta-btn">
            <span>{content.ctaPrefix}</span>
            <strong>{content.ctaHighlight}</strong>
            <img src={content.ctaIcon} alt="" aria-hidden />
          </button>
        </div>
      ) : null}

      <footer className="informasi-detail-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
