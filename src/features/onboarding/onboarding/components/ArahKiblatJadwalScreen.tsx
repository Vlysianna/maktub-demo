import type { KiblatScheduleContent } from '../types'

type ArahKiblatJadwalScreenProps = {
  content: KiblatScheduleContent
  onBack: () => void
}

export function ArahKiblatJadwalScreen({ content, onBack }: ArahKiblatJadwalScreenProps) {
  return (
    <section className="phone-shell kiblat-shell" aria-label="Arah Kiblat dan Jadwal Sholat">
      <div className="kiblat-top-gradient" aria-hidden />

      <header className="kiblat-header">
        <button type="button" onClick={onBack} className="kiblat-back-btn" aria-label="Kembali">
          <img src={content.backIcon} alt="" aria-hidden />
        </button>

        <div className="kiblat-location">
          <img src={content.locationIcon} alt="" aria-hidden />
          <span>{content.locationLabel}</span>
        </div>
      </header>

      <div className="kiblat-scroll">
        <div className="kiblat-compass-wrap">
          <img src={content.compassRing} alt="" aria-hidden className="kiblat-compass-ring" />
          <img src={content.compassWedge} alt="" aria-hidden className="kiblat-compass-wedge" />
          <span className="kiblat-center" aria-hidden>
            <img src={content.compassNeedle} alt="" className="kiblat-needle" />
          </span>
          <img src={content.kaabaIcon} alt="" aria-hidden className="kiblat-kaaba" />
          <p>{content.turnHint}</p>
        </div>

        <div className="kiblat-date-row">
          <strong>{content.dateLabel}</strong>
          <span>{content.hijriDateLabel}</span>
        </div>

        <div className="kiblat-list">
          {content.items.map((item) => (
            <article key={item.id} className={`kiblat-item${item.active ? ' active' : ''}`}>
              <div className="kiblat-item-left">
                {item.iconVariant === 'fajr' ? (
                  <span className="informasi-fajr-icon" aria-hidden>
                    <img src={item.icon} alt="" className="informasi-fajr-moon" />
                    {item.iconOverlay ? <img src={item.iconOverlay} alt="" className="informasi-fajr-overlay" /> : null}
                    <span className="informasi-fajr-line informasi-fajr-line-1" />
                    <span className="informasi-fajr-line informasi-fajr-line-2" />
                    <span className="informasi-fajr-line informasi-fajr-line-3" />
                  </span>
                ) : (
                  <img src={item.icon} alt={item.label} className="kiblat-item-icon" />
                )}
                <span>{item.label}</span>
              </div>
              <strong>{item.time}</strong>
              <img src={item.audioIcon} alt="" aria-hidden className="kiblat-item-audio" />
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
