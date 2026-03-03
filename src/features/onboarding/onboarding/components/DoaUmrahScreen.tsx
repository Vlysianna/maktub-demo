import type { GuideListContent } from '../types'

type DoaUmrahScreenProps = {
  content: GuideListContent
  onBack: () => void
}

export function DoaUmrahScreen({ content, onBack }: DoaUmrahScreenProps) {
  return (
    <section className="phone-shell guide-list-shell" aria-label={content.title}>
      <header className="guide-list-header">
        <button type="button" onClick={onBack} className="guide-list-back-btn" aria-label="Kembali">
          <img src={content.backIcon} alt="" aria-hidden />
        </button>
        <h1>{content.title}</h1>
        <button type="button" className="guide-list-search-btn" aria-label="Cari">
          <img src={content.searchIcon} alt="" aria-hidden />
        </button>
      </header>

      <div className="guide-list-scroll">
        {content.items.map((item) => (
          <button key={item.id} type="button" className="guide-list-item">
            <span className="guide-list-item-icon-wrap">
              <img src={content.icon} alt="" aria-hidden />
            </span>
            <span className="guide-list-item-text">
              <strong>{item.title}</strong>
              <small>{item.subtitle}</small>
            </span>
            <img src={content.chevronIcon} alt="" aria-hidden className="guide-list-chevron" />
          </button>
        ))}
      </div>

      <footer className="informasi-detail-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
