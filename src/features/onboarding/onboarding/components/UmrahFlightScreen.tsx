import type { FlightOffer, UmrahFlightAssets } from '../types'

type UmrahFlightScreenProps = {
  assets: UmrahFlightAssets
  flightOnly?: boolean
  journeyLabel: 'Keberangkatan' | 'Kepulangan'
  selectedCabinLabel: string
  departureLabel: string
  departureCode: string
  destinationLabel: string
  destinationCode: string
  dateLabel: string
  summaryTimeRangeLabel: string
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
  flightOnly = false,
  journeyLabel,
  selectedCabinLabel,
  departureLabel,
  departureCode,
  destinationLabel,
  destinationCode,
  dateLabel,
  summaryTimeRangeLabel,
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

      {flightOnly ? (
        <div className="umrah-flight-stepper umrah-flight-stepper--figma" aria-hidden>
          <span className="umrah-flight-step active">
            <i>1</i>
            <b>Pilih Tiket ---</b>
          </span>
          <span className="umrah-flight-step">
            <i>2</i>
            <b>Pembayaran</b>
          </span>
        </div>
      ) : (
        <div className="umrah-flight-stepper umrah-flight-stepper--figma" aria-hidden>
          <span className="umrah-flight-step active">
            <i>1</i>
            <b>Flight ---</b>
          </span>
          <span className="umrah-flight-step">
            <i>2</i>
            <b>Hotel ---</b>
          </span>
          <span className="umrah-flight-step">
            <i>3</i>
            <b>Pembayaran ---</b>
          </span>
          <span className="umrah-flight-step">
            <i>4</i>
            <b>Visa &amp; Lainnya</b>
          </span>
        </div>
      )}

      <section className="umrah-flight-summary">
        <p>
          {journeyLabel} <span>• {selectedCabinLabel}</span>
        </p>
        <h2>
          {departureLabel} ({departureCode}) <img src={assets.planeArrow} alt="" aria-hidden /> {destinationLabel} ({destinationCode})
        </h2>
        <div>
          <span>
            <img src={assets.calendarIcon} alt="" aria-hidden /> {dateLabel}
          </span>
          <span>
            <img src={assets.clockIcon} alt="" aria-hidden /> {summaryTimeRangeLabel}
          </span>
          <span>
            <img src={assets.userIcon} alt="" aria-hidden /> {passengerText}
          </span>
        </div>
      </section>

      <div className="umrah-flight-list">
        {offers.map((offer) => (
          <article
            key={offer.id}
            className={`flight-card ${offer.isRecommended ? 'recommended' : ''}`}
            role="button"
            tabIndex={0}
            onClick={() => onSelectOffer(offer)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onSelectOffer(offer)
              }
            }}
          >
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
              <div className="flight-detail-btn" aria-hidden>
                <span>
                  {journeyLabel === 'Keberangkatan'
                    ? offer.isRecommended
                      ? 'Tap untuk pilih keberangkatan'
                      : 'Pilih keberangkatan'
                    : offer.isRecommended
                      ? 'Tap untuk pilih kepulangan'
                      : 'Pilih kepulangan'}
                </span>
                <img src={assets.chevronRight} alt="" aria-hidden />
              </div>
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
