import type { FlightOffer, UmrahFlightAssets } from '../types'

type UmrahFlightScreenProps = {
  assets: UmrahFlightAssets
  departureLabel: string
  departureCode: string
  destinationLabel: string
  destinationCode: string
  dateLabel: string
  passengerText: string
  offers: FlightOffer[]
  onSelectOffer: (offer: FlightOffer) => void
  onBack: () => void
  onClose: () => void
}

function toRupiah(amount: number) {
  return `Rp ${amount.toLocaleString('id-ID')}`
}

export function UmrahFlightScreen({
  assets,
  departureLabel,
  departureCode,
  destinationLabel,
  destinationCode,
  dateLabel,
  passengerText,
  offers,
  onSelectOffer,
  onBack,
  onClose,
}: UmrahFlightScreenProps) {
  return (
    <section className="phone-shell umrah-flight-shell" aria-label="Hasil Rekomendasi Penerbangan">
      <header className="umrah-flight-header">
        <button type="button" className="umrah-flight-back" aria-label="Kembali" onClick={onBack}>
          ←
        </button>
        <h1>Pesawat</h1>
        <button type="button" className="umrah-flight-close" aria-label="Tutup" onClick={onClose}>
          ×
        </button>
      </header>

      <div className="umrah-flight-stepper" aria-hidden>
        <span className="active">1 Flight ---</span>
        <span>2 Hotel ---</span>
        <span>3 Pembayaran ---</span>
        <span>4 Visa &amp; Lainnya</span>
      </div>

      <section className="umrah-flight-summary">
        <p>
          Keberangkatan <span>• Ekonomi</span>
        </p>
        <h2>
          {departureLabel} ({departureCode}) <img src={assets.planeArrow} alt="" aria-hidden /> {destinationLabel} ({destinationCode})
        </h2>
        <div>
          <span>
            <img src={assets.calendarIcon} alt="" aria-hidden /> {dateLabel}
          </span>
          <span>
            <img src={assets.clockIcon} alt="" aria-hidden /> 09:45 - 21:45
          </span>
          <span>
            <img src={assets.userIcon} alt="" aria-hidden /> {passengerText}
          </span>
        </div>
      </section>

      <div className="umrah-flight-list">
        {offers.map((offer) => (
          <article key={offer.id} className={`flight-card ${offer.isRecommended ? 'recommended' : ''}`}>
            <div className="flight-main-row">
              <div className="flight-segments">
                {offer.segments.map((segment, index) => (
                  <div key={`${offer.id}-${segment.time}-${index}`} className="segment-item">
                    <strong>{segment.time}</strong>
                    <small>{segment.code}</small>
                    {segment.duration && <em>{segment.duration}</em>}
                    {segment.mode && <em>{segment.mode}</em>}
                  </div>
                ))}
              </div>
              <p className="flight-price">{toRupiah(offer.price)}</p>
            </div>

            <div className="flight-meta-row">
              <span>
                <img src={offer.airlineLogo} alt={offer.airline} /> {offer.airline}
              </span>
              <span>
                <img src={assets.userIcon} alt="" aria-hidden /> {passengerText}
              </span>
            </div>

            <div className="flight-footer-row">
              <button type="button" className="flight-detail-btn" onClick={() => onSelectOffer(offer)}>
                <span>{offer.isRecommended ? 'Tap untuk lihat detail' : 'Lihat detail'}</span>
                <img src={assets.chevronRight} alt="" aria-hidden />
              </button>
            </div>

            {offer.isRecommended && (
              <div className="flight-recommend-badge">
                <img src={assets.matchIcon} alt="" aria-hidden /> Paling sesuai dengan budget Anda.
              </div>
            )}
          </article>
        ))}
      </div>

      <footer className="umrah-flight-costs" aria-hidden>
        <span className="active">Pesawat 60%</span>
        <span>Hotel 30%</span>
        <span>Lainnya 10%</span>
      </footer>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
