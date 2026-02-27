import type { WalkthroughSlide } from '../types'

type WalkthroughScreenProps = {
  step: number
  totalSteps: number
  currentSlide: WalkthroughSlide
  onNext: () => void
}

export function WalkthroughScreen({ step, totalSteps, currentSlide, onNext }: WalkthroughScreenProps) {
  return (
    <section className="phone-shell">
      <div className="decorative-shape" aria-hidden />

      <div className="walkthrough-content">
        <div className="progress" aria-label={`Step ${step} dari ${totalSteps}`}>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <span key={index} className={`progress-item ${index < step ? 'active' : ''}`} />
          ))}
        </div>

        <article className="hero-card">
          <img src={currentSlide.image} alt="Walkthrough" className="hero-image" />
          <div className="hero-overlay" aria-hidden />
          <p className="hero-brand">Maktub.com | مكتوب</p>
        </article>

        <div className="description">
          {currentSlide.text.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>

      <div className="cta-wrap">
        <button type="button" className="cta-button" onClick={onNext}>
          Mulai Perjalanan
        </button>
      </div>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
