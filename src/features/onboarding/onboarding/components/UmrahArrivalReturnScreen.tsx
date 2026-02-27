import type { UmrahStepAssets } from '../types'

type UmrahArrivalReturnScreenProps = {
  assets: UmrahStepAssets
  cities: string[]
  arrivalCity: string | null
  returnCity: string | null
  onSelectArrival: (city: string) => void
  onSelectReturn: (city: string) => void
  onBack: () => void
  onClose: () => void
  onNext: () => void
}

export function UmrahArrivalReturnScreen({
  assets,
  cities,
  arrivalCity,
  returnCity,
  onSelectArrival,
  onSelectReturn,
  onBack,
  onClose,
  onNext,
}: UmrahArrivalReturnScreenProps) {
  const canProceed = Boolean(arrivalCity && returnCity)

  return (
    <section className="phone-shell umrah-traveler-shell" aria-label="Pertanyaan Kota Kedatangan dan Kepulangan">
      <img src={assets.blur} alt="" className="umrah-bg-blur" aria-hidden />

      <header className="umrah-topbar">
        <h1>
          Maktub AI
          <img src={assets.aiMagic} alt="" aria-hidden />
        </h1>

        <button type="button" className="umrah-close-btn" aria-label="Tutup" onClick={onClose}>
          <img src={assets.closeIcon} alt="" aria-hidden />
        </button>
      </header>

      <p className="umrah-heading">Lengkapi langkah berikut untuk dapatkan paket Umrah Kamu.</p>

      <section className="umrah-choice-card" aria-label="Pilih kota kedatangan dan kepulangan">
        <h2>Pilih kota kedatangan</h2>
        <div className="umrah-chip-grid">
          {cities.map((city) => (
            <button
              key={`arrival-${city}`}
              type="button"
              className={`umrah-city-chip ${arrivalCity === city ? 'active' : ''}`}
              onClick={() => onSelectArrival(city)}
            >
              {city}
            </button>
          ))}
        </div>

        <h2 className="second">Dan pilih kota kepulangan</h2>
        <div className="umrah-chip-grid">
          {cities.map((city) => (
            <button
              key={`return-${city}`}
              type="button"
              className={`umrah-city-chip ${returnCity === city ? 'active' : ''}`}
              onClick={() => onSelectReturn(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </section>

      <div className="umrah-traveler-actions">
        <button type="button" className="umrah-back-btn" onClick={onBack}>
          Kembali
        </button>
        <button type="button" className="umrah-next-btn" disabled={!canProceed} onClick={onNext}>
          Selanjutnya
        </button>
      </div>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
