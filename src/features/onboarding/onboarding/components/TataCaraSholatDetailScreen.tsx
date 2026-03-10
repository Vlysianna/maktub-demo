import type { SholatDetailContent } from '../types'

type TataCaraSholatDetailScreenProps = {
  content: SholatDetailContent
  onBack: () => void
}

export function TataCaraSholatDetailScreen({ content, onBack }: TataCaraSholatDetailScreenProps) {
  return (
    <section className="phone-shell sholat-detail-shell" aria-label={content.title}>
      <header className="sholat-detail-header">
        <button type="button" onClick={onBack} className="sholat-detail-back-btn" aria-label="Kembali">
          <img src={content.backIcon} alt="" aria-hidden />
        </button>
        <h1>{content.title}</h1>
      </header>

      <div className="sholat-detail-scroll">
        <section className="sholat-detail-hero">
          <span>{content.stepLabel}</span>
          <h2>{content.title}</h2>
          <p>{content.summary}</p>
        </section>

        <section className="sholat-detail-focus-card">
          <strong>{content.niatLabel}</strong>
          <p>{content.niatText}</p>
        </section>

        <section className="sholat-detail-steps-card">
          <h3>Urutan Praktik</h3>
          <ol>
            {content.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="sholat-detail-reminder-card">
          <h3>{content.reminderTitle}</h3>
          <ul>
            {content.reminders.map((reminder) => (
              <li key={reminder}>{reminder}</li>
            ))}
          </ul>
        </section>
      </div>

      <footer className="informasi-detail-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}