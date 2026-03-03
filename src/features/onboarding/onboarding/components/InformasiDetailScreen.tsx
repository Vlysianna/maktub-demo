import type { CSSProperties } from 'react'
import type { InformasiDetailContent } from '../types'

type InformasiDetailScreenProps = {
  content: InformasiDetailContent
  onBack: () => void
}

export function InformasiDetailScreen({ content, onBack }: InformasiDetailScreenProps) {
  return (
    <section className="phone-shell informasi-detail-shell" aria-label="Informasi Detail">
      <header className="informasi-detail-header">
        <button type="button" onClick={onBack} className="informasi-detail-back-btn" aria-label="Kembali">
          <img src={content.backIcon} alt="" aria-hidden />
        </button>
      </header>

      <div className="informasi-detail-scroll">
        <h1>{content.title}</h1>

        <p className="informasi-detail-brand">{content.brand}</p>

        <img src={content.image} alt={content.title} className="informasi-detail-image" />

        <div className="informasi-detail-article">
          {content.sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </article>
          ))}
        </div>
      </div>

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

      <footer className="informasi-detail-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
