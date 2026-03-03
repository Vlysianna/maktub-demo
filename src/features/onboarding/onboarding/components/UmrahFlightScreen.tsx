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
  if (flightOnly) {
    return (
      <section className="phone-shell umrah-flight-shell umrah-flight-shell--search" aria-label="Hasil Pencarian Penerbangan">
        {/* Compact header with route info */}
        <header className="sf-header">
          <button type="button" className="sf-back" aria-label="Kembali" onClick={onBack}>
            ←
          </button>
          <div className="sf-header-info">
            <h1 className="sf-route">
              {departureLabel} ({departureCode}) <span className="sf-arrow">→</span> {destinationLabel} ({destinationCode})
            </h1>
            <p className="sf-subtitle">
              {journeyLabel}
              <span> • {dateLabel}</span>
              <span> • {passengerText}</span>
              <span> • {selectedCabinLabel}</span>
            </p>
          </div>
        </header>

        {/* Sort / Filter bar */}
        <div className="sf-toolbar">
          <button type="button" className="sf-toolbar-btn">
            <img src={assets.sortIcon} alt="" aria-hidden className="sf-toolbar-icon sf-toolbar-icon--sort" />
            <span>Sort</span>
          </button>
          <span className="sf-toolbar-divider" />
          <button type="button" className="sf-toolbar-btn">
            <img src={assets.filterIcon} alt="" aria-hidden className="sf-toolbar-icon" />
            <span>Filter</span>
          </button>
        </div>

        {/* Flight list */}
        <div className="sf-list">
          {offers.map((offer) => (
            <article
              key={offer.id}
              className="sf-card"
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
              {/* Segments + price */}
              <div className="sf-card-body">
                {offer.segments.length <= 2 ? (
                  /* Direct / single-leg */
                  <div className="sf-card-row-top">
                    <div className="sf-segments">
                      {offer.segments.map((seg, idx) => (
                        <div key={`${offer.id}-seg-${idx}`} className="sf-seg">
                          <span className="sf-seg-time">{seg.time}</span>
                          <span className="sf-seg-code">{seg.code}</span>
                        </div>
                      ))}
                      {/* Duration + mode between first and last */}
                      {offer.segments[0]?.duration && (
                        <div className="sf-seg-duration">
                          <span>{offer.segments[0].duration}</span>
                          <span>{offer.segments[0].mode ?? ''}</span>
                        </div>
                      )}
                    </div>
                    <p className="sf-price">{toRupiah(offer.price)}</p>
                  </div>
                ) : (
                  /* Multi-leg / transit */
                  <div className="sf-card-row-top sf-card-row-top--multi">
                    <div className="sf-multi-legs">
                      {/* Group segments in pairs for each leg */}
                      {(() => {
                        const legs: Array<{ dep: typeof offer.segments[0]; arr: typeof offer.segments[0] }> = []
                        for (let i = 0; i < offer.segments.length - 1; i++) {
                          legs.push({ dep: offer.segments[i], arr: offer.segments[i + 1] })
                        }
                        return legs.map((leg, legIdx) => (
                          <div key={`leg-${legIdx}`} className="sf-leg-row">
                            <div className="sf-segments">
                              <div className="sf-seg">
                                <span className="sf-seg-time">{leg.dep.time}</span>
                                <span className="sf-seg-code">{leg.dep.code}</span>
                              </div>
                              {leg.dep.duration && (
                                <div className="sf-seg-duration">
                                  <span>{leg.dep.duration}</span>
                                  <span>{leg.dep.mode ?? ''}</span>
                                </div>
                              )}
                              <div className="sf-seg">
                                <span className="sf-seg-time">{leg.arr.time}</span>
                                <span className="sf-seg-code">{leg.arr.code}</span>
                              </div>
                            </div>
                            {legIdx === 0 && (
                              <p className="sf-price">{toRupiah(offer.price)}</p>
                            )}
                          </div>
                        ))
                      })()}
                    </div>
                  </div>
                )}

                {/* Airline + passenger count */}
                <div className="sf-meta">
                  <span className="sf-airline">
                    <img src={offer.airlineLogo} alt={offer.airline} /> {offer.airline}
                  </span>
                  <span className="sf-passengers">
                    <img src={assets.userIcon} alt="" aria-hidden /> {passengerText}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <hr className="sf-card-divider" />

              {/* Detail link */}
              <div className="sf-card-footer">
                <span className="sf-detail-label">Tap untuk lihat detail</span>
                <img src={assets.chevronRight} alt="" aria-hidden className="sf-detail-chevron" />
              </div>
            </article>
          ))}
        </div>

        <footer className="home-indicator" aria-hidden>
          <span />
        </footer>
      </section>
    )
  }

  /* ── Original Maktub-AI flow design ── */
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
