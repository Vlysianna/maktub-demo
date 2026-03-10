import type { UmrahTicketAssets } from '../types'

type RouteCardProps = {
  airline: string
  airlineLogo: string
  flightCode: string
  cabinLabel: string
  baggageLabel: string
  aircraftLabel: string
  seatLayoutLabel: string
  seatPitchLabel: string
  fromLabel: string
  fromCode: string
  toLabel: string
  toCode: string
  departTime: string
  arriveTime: string
  dateLabel: string
  durationLabel: string
  assets: UmrahTicketAssets
}

type UmrahTicketInfoScreenProps = {
  assets: UmrahTicketAssets
  airline: string
  airlineLogo: string
  returnAirline: string
  returnAirlineLogo: string
  departureLabel: string
  departureCode: string
  destinationLabel: string
  destinationCode: string
  departureDateLabel: string
  returnDateLabel: string
  departureTime: string
  arrivalTime: string
  returnDepartureTime: string
  returnArrivalTime: string
  durationLabel: string
  returnDurationLabel: string
  departureFlightCode: string
  departureCabinLabel: string
  departureBaggageLabel: string
  departureAircraftLabel: string
  departureSeatLayoutLabel: string
  departureSeatPitchLabel: string
  returnFlightCode: string
  returnCabinLabel: string
  returnBaggageLabel: string
  returnAircraftLabel: string
  returnSeatLayoutLabel: string
  returnSeatPitchLabel: string
  travelerNames: string[]
  contactName: string
  contactEmail: string
  contactPhone: string
  totalPrice: number
  validationMessage?: string
  flightOnly?: boolean
  onBack: () => void
  onAddPassenger: () => void
  onEditPassenger: (index: number) => void
  onNext: () => void
}

function toRupiah(amount: number) {
  return `Rp ${amount.toLocaleString('id-ID')}`
}

function RouteCard({
  airline,
  airlineLogo,
  flightCode,
  cabinLabel,
  baggageLabel,
  aircraftLabel,
  seatLayoutLabel,
  seatPitchLabel,
  fromLabel,
  fromCode,
  toLabel,
  toCode,
  departTime,
  arriveTime,
  dateLabel,
  durationLabel,
  assets,
}: RouteCardProps) {
  return (
    <div className="umrah-info-route-grid">
      <div className="umrah-info-times">
        <div>
          <strong>{departTime}</strong>
          <small>{dateLabel}</small>
        </div>
        <p>{durationLabel}</p>
        <div>
          <strong>{arriveTime}</strong>
          <small>{dateLabel}</small>
        </div>
      </div>

      <div className="umrah-info-line">
        <img src={assets.timelineIcon} alt="" aria-hidden />
      </div>

      <div className="umrah-info-route">
        <div className="umrah-info-airport-block">
          <h4>
            {fromLabel} ({fromCode})
          </h4>
          <p>Terminal 3E International</p>
        </div>

        <article className="umrah-info-flight-card">
          <div className="umrah-info-airline-row">
            <img src={airlineLogo} alt={airline} />
            <div>
              <p>{airline}</p>
              <small>{flightCode} | {cabinLabel}</small>
            </div>
          </div>

          <img src={assets.routeDivider} alt="" aria-hidden className="umrah-info-divider" />

          <p className="umrah-info-bag-row">
            <img src={assets.bagIcon} alt="" aria-hidden /> {baggageLabel}
          </p>

          <div className="umrah-info-seat-row">
            <img src={assets.infoOutlineIcon} alt="" aria-hidden />
            <div>
              <p>
                <span>Pesawat</span>
                <span>: {aircraftLabel}</span>
              </p>
              <p>
                <span>Tata kursi</span>
                <span>: {seatLayoutLabel}</span>
              </p>
              <p>
                <span>Jarak antar kursi</span>
                <span>: {seatPitchLabel}</span>
              </p>
            </div>
          </div>
        </article>

        <div className="umrah-info-airport-block">
          <h4>
            {toLabel} ({toCode})
          </h4>
          <p>Terminal 3E International</p>
        </div>
      </div>
    </div>
  )
}

export function UmrahTicketInfoScreen({
  assets,
  airline,
  airlineLogo,
  returnAirline,
  returnAirlineLogo,
  departureLabel,
  departureCode,
  destinationLabel,
  destinationCode,
  departureDateLabel,
  returnDateLabel,
  departureTime,
  arrivalTime,
  returnDepartureTime,
  returnArrivalTime,
  durationLabel,
  returnDurationLabel,
  departureFlightCode,
  departureCabinLabel,
  departureBaggageLabel,
  departureAircraftLabel,
  departureSeatLayoutLabel,
  departureSeatPitchLabel,
  returnFlightCode,
  returnCabinLabel,
  returnBaggageLabel,
  returnAircraftLabel,
  returnSeatLayoutLabel,
  returnSeatPitchLabel,
  travelerNames,
  contactName,
  contactEmail,
  contactPhone,
  totalPrice,
  validationMessage,
  flightOnly = false,
  onBack,
  onAddPassenger,
  onEditPassenger,
  onNext,
}: UmrahTicketInfoScreenProps) {
  return (
    <section className="phone-shell umrah-ticket-shell" aria-label="Info Tiket">
      <header className="umrah-ticket-header">
        <button type="button" className="umrah-ticket-back" aria-label="Kembali" onClick={onBack}>
          <img src={assets.backIcon} alt="" aria-hidden />
        </button>
        <h1>Info Tiket</h1>
        <span className="umrah-ticket-head-spacer" aria-hidden />
      </header>

      {!flightOnly && (
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

      <div className="umrah-ticket-scroll umrah-ticket-scroll-info">
        <h2 className="umrah-ticket-title">Keberangkatan</h2>
        <RouteCard
          airline={airline}
          airlineLogo={airlineLogo}
          flightCode={departureFlightCode}
          cabinLabel={departureCabinLabel}
          baggageLabel={departureBaggageLabel}
          aircraftLabel={departureAircraftLabel}
          seatLayoutLabel={departureSeatLayoutLabel}
          seatPitchLabel={departureSeatPitchLabel}
          fromLabel={departureLabel}
          fromCode={departureCode}
          toLabel={destinationLabel}
          toCode={destinationCode}
          departTime={departureTime}
          arriveTime={arrivalTime}
          dateLabel={departureDateLabel}
          durationLabel={durationLabel}
          assets={assets}
        />

        <h2 className="umrah-ticket-title">Kepulangan</h2>
        <RouteCard
          airline={returnAirline}
          airlineLogo={returnAirlineLogo}
          flightCode={returnFlightCode}
          cabinLabel={returnCabinLabel}
          baggageLabel={returnBaggageLabel}
          aircraftLabel={returnAircraftLabel}
          seatLayoutLabel={returnSeatLayoutLabel}
          seatPitchLabel={returnSeatPitchLabel}
          fromLabel={destinationLabel}
          fromCode={destinationCode}
          toLabel={departureLabel}
          toCode={departureCode}
          departTime={returnDepartureTime}
          arriveTime={returnArrivalTime}
          dateLabel={returnDateLabel}
          durationLabel={returnDurationLabel}
          assets={assets}
        />

        <h2 className="umrah-ticket-title">Penumpang</h2>
        <article className="umrah-info-passenger-card">
          <button type="button" className="umrah-info-add-passenger" onClick={onAddPassenger}>
            Tambah Nama Baru
            <img src={assets.addCircleIcon} alt="" aria-hidden />
          </button>
          {travelerNames.map((name, index) => (
            <button
              key={`${name}-${index}`}
              type="button"
              className="umrah-info-passenger-item"
              onClick={() => onEditPassenger(index)}
            >
              <span>{name}</span>
              <span aria-hidden>›</span>
            </button>
          ))}
        </article>
        {validationMessage && <p className="umrah-ticket-validation">{validationMessage}</p>}

        <h2 className="umrah-ticket-title">Kontak</h2>
        <p className="umrah-info-caption">E-ticket akan dikirim kepada orang dibawah ini.</p>
        <article className="umrah-info-contact-card">
          <p>{contactName}</p>
          <small>
            {contactEmail} <span>•</span> {contactPhone}
          </small>
        </article>

        <h2 className="umrah-ticket-title">Harga Tiket</h2>
        <p className="umrah-info-caption">Harga total untuk {travelerNames.length} orang</p>
        <p className="umrah-info-price">{toRupiah(totalPrice)}</p>
      </div>

      <footer className="umrah-ticket-footer">
        <button type="button" className="cta-button" onClick={onNext}>
          Lanjut
        </button>
      </footer>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
