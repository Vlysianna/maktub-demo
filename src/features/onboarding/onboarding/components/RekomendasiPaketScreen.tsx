import type { RekomendasiPaketAssets, RekomendasiPaketItem } from '../types'

type RekomendasiPaketScreenProps = {
  assets: RekomendasiPaketAssets
  packages: RekomendasiPaketItem[]
  onBack: () => void
  onSelectPackage: (id: string) => void
}

export function RekomendasiPaketScreen({
  assets,
  packages,
  onBack,
  onSelectPackage,
}: RekomendasiPaketScreenProps) {
  return (
    <section className="phone-shell rekomendasi-paket-shell" aria-label="Rekomendasi Paket">
      <div className="rekomendasi-paket-header-bg" aria-hidden />

      <header className="rekomendasi-paket-header">
        <button
          type="button"
          className="umrah-flight-back"
          aria-label="Kembali"
          onClick={onBack}
        >
          <img src={assets.backIcon} alt="" aria-hidden />
        </button>
        <h1>Rekomendasi Paket</h1>
        <span aria-hidden />
      </header>

      <div className="rekomendasi-paket-scroll">
        {packages.map((pkg) => (
          <article key={pkg.id} className="rekomendasi-paket-card">
            <div className="rekomendasi-paket-card-body">
              <span className="rekomendasi-paket-badge">{pkg.badgeLabel}</span>

              <h2 className="rekomendasi-paket-name">{pkg.name}</h2>

              <div className="rekomendasi-paket-meta">
                <span className="rekomendasi-paket-meta-item">
                  <img src={assets.clockIcon} alt="" aria-hidden />
                  {pkg.durationLabel}
                </span>
                <span className="rekomendasi-paket-meta-item">
                  <img src={assets.calendarIcon} alt="" aria-hidden />
                  {pkg.dateLabel}
                </span>
              </div>

              <div className="rekomendasi-paket-price">
                <p className="rekomendasi-paket-price-from">Mulai dari</p>
                <div className="rekomendasi-paket-price-row">
                  <strong className="rekomendasi-paket-price-amount">
                    {pkg.startingPriceLabel}
                  </strong>
                  <span className="rekomendasi-paket-price-unit">/orang</span>
                </div>
              </div>
            </div>

            <div className="rekomendasi-paket-divider" aria-hidden />

            <button
              type="button"
              className="rekomendasi-paket-detail-row"
              onClick={() => onSelectPackage(pkg.id)}
            >
              <span>Lihat detail</span>
              <img src={assets.chevronRightIcon} alt="" aria-hidden />
            </button>
          </article>
        ))}
      </div>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
