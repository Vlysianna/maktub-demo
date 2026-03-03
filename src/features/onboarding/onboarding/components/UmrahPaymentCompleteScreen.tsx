import type { UmrahCompletionAssets } from '../types'

type UmrahPaymentCompleteScreenProps = {
  assets: UmrahCompletionAssets
  ctaLabel?: string
  onBack: () => void
  onNext: () => void
}

export function UmrahPaymentCompleteScreen({ assets, ctaLabel = 'Selesai', onBack, onNext }: UmrahPaymentCompleteScreenProps) {
  return (
    <section className="phone-shell umrah-payment-complete-shell" aria-label="Transaksi Umrah Berhasil">
      <button type="button" className="umrah-payment-complete-back" aria-label="Kembali" onClick={onBack}>
        <img src={assets.backIcon} alt="" aria-hidden />
      </button>

      <div className="umrah-payment-complete-content">
        <div className="umrah-payment-complete-icon-wrap" aria-hidden>
          <img src={assets.successBadge} alt="" className="umrah-payment-complete-icon" />
          <span className="dot dot-1" />
          <span className="dot dot-2" />
          <span className="dot dot-3" />
          <span className="dot dot-4" />
          <span className="dot dot-5" />
          <span className="dot dot-6" />
          <span className="dot dot-7" />
          <span className="dot dot-8" />
        </div>

        <h1>Alhamdulillah transaksi Anda telah berhasil!</h1>
      </div>

      <footer className="umrah-payment-complete-footer">
        <button type="button" className="cta-button umrah-payment-complete-cta" onClick={onNext}>
          {ctaLabel}
        </button>
      </footer>

      <footer className="home-indicator umrah-payment-complete-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
