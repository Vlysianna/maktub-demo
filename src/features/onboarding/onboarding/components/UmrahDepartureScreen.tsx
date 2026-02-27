import type { AirportOption, UmrahStepAssets } from '../types'

type UmrahDepartureScreenProps = {
  assets: UmrahStepAssets
  airports: AirportOption[]
  selectedAirportCode: string | null
  onSelectAirport: (code: string) => void
  onBack: () => void
  onClose: () => void
  onNext: () => void
}

export function UmrahDepartureScreen({
  assets,
  airports,
  selectedAirportCode,
  onSelectAirport,
  onBack,
  onClose,
  onNext,
}: UmrahDepartureScreenProps) {
  return (
    <section className="phone-shell umrah-traveler-shell" aria-label="Pertanyaan Kota Keberangkatan">
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

      <section className="umrah-choice-card" aria-label="Pilih kota keberangkatan">
        <h2>Dari kota mana anda akan berangkat?</h2>

        <div className="umrah-radio-list">
          {airports.map((airport) => {
            const isActive = selectedAirportCode === airport.code

            return (
              <button
                key={airport.code}
                type="button"
                className="umrah-radio-row"
                onClick={() => onSelectAirport(airport.code)}
              >
                <span className="umrah-radio-text">
                  <strong>{airport.label}</strong>
                  <em>{airport.code}</em>
                </span>
                <span className={`umrah-radio-circle ${isActive ? 'active' : ''}`} aria-hidden />
              </button>
            )
          })}
        </div>
      </section>

      <div className="umrah-traveler-actions">
        <button type="button" className="umrah-back-btn" onClick={onBack}>
          Kembali
        </button>
        <button type="button" className="umrah-next-btn" disabled={!selectedAirportCode} onClick={onNext}>
          Selanjutnya
        </button>
      </div>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
