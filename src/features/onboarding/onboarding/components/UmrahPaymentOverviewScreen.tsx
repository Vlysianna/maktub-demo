import type { HotelOffer, PaymentBreakdown, UmrahPaymentAssets } from '../types'

type HotelPaymentCard = Pick<HotelOffer, 'id' | 'name' | 'nightsLabel' | 'rating' | 'image'> & {
  pricePerNight: number
  totalPrice: number
  travelerLabel: string
}

type FlightPaymentCard = {
  id: string
  fromTime: string
  fromCode: string
  duration: string
  mode: string
  toTime: string
  toCode: string
  airline: string
  price: number
  isSelected?: boolean
}

type UmrahPaymentOverviewScreenProps = {
  assets: UmrahPaymentAssets
  hotels: HotelPaymentCard[]
  flights: FlightPaymentCard[]
  breakdown: PaymentBreakdown
  travelerCount: number
  hotelNightsLabel: string
  primaryHotelCityLabel: string
  secondaryHotelCityLabel: string
  onBack: () => void
  onNext: () => void
}

function toRupiah(amount: number) {
  return `Rp ${amount.toLocaleString('id-ID')}`
}

function stars(count: number) {
  return '★'.repeat(count)
}

export function UmrahPaymentOverviewScreen({
  assets,
  hotels,
  flights,
  breakdown,
  travelerCount,
  hotelNightsLabel,
  primaryHotelCityLabel,
  secondaryHotelCityLabel,
  onBack,
  onNext,
}: UmrahPaymentOverviewScreenProps) {
  return (
    <section className="phone-shell umrah-payment-shell" aria-label="Pembayaran">
      <header className="umrah-flight-header">
        <button type="button" className="umrah-flight-back" aria-label="Kembali" onClick={onBack}>
          ←
        </button>
        <h1>Pembayaran</h1>
        <span className="umrah-ticket-head-spacer" aria-hidden />
      </header>

      <div className="umrah-flight-stepper umrah-flight-stepper--figma" aria-hidden>
        <span className="umrah-flight-step active">
          <i>2</i>
          <b>Hotel ---</b>
        </span>
        <span className="umrah-flight-step active">
          <i>3</i>
          <b>Pembayaran ---</b>
        </span>
        <span className="umrah-flight-step">
          <i>4</i>
          <b>Visa &amp; Lainnya</b>
        </span>
      </div>

      <div className="umrah-payment-scroll">
        <section className="umrah-payment-block">
          <h2>Hotel</h2>
          <div className="umrah-payment-hotel-list">
            {hotels.map((hotel) => (
              <article key={hotel.id} className="umrah-payment-hotel-card">
                <div className="umrah-payment-hotel-head">
                  <img src={hotel.image} alt={hotel.name} />
                  <div>
                    <p>{hotel.name}</p>
                    <small>{hotel.nightsLabel}</small>
                    <em>{stars(hotel.rating)}</em>
                  </div>
                </div>
                <p className="umrah-payment-night-price">
                  {toRupiah(hotel.pricePerNight)} <span>/malam</span>
                </p>
                <p className="umrah-payment-total-price">
                  <strong>{toRupiah(hotel.totalPrice)}</strong> untuk {hotel.travelerLabel}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="umrah-payment-block">
          <h2>Flight</h2>
          <div className="umrah-payment-flight-list">
            {flights.map((flight) => (
              <article key={flight.id} className={`umrah-payment-flight-card${flight.isSelected ? ' selected' : ''}`}>
                <div className="umrah-payment-flight-row">
                  <div>
                    <strong>{flight.fromTime}</strong>
                    <small>{flight.fromCode}</small>
                  </div>
                  <p>
                    <span>{flight.duration}</span>
                    <span>{flight.mode}</span>
                  </p>
                  <div>
                    <strong>{flight.toTime}</strong>
                    <small>{flight.toCode}</small>
                  </div>
                  <h3>{toRupiah(flight.price)}</h3>
                </div>

                <div className="umrah-payment-flight-meta">
                  <span>
                    <img src={assets.planeLogo} alt="" aria-hidden /> {flight.airline}
                  </span>
                  <span>
                    <img src={assets.userIcon} alt="" aria-hidden /> {travelerCount} orang
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="umrah-payment-block umrah-payment-detail">
          <h2>Detail Harga</h2>

          <div className="umrah-payment-line">
            <div>
              <p>Flight (Keberangkatan)</p>
              <small>x{travelerCount} orang</small>
            </div>
            <p>{toRupiah(breakdown.flightDeparture)}</p>
          </div>

          <div className="umrah-payment-line">
            <div>
              <p>Flight (Kepulangan)</p>
              <small>x{travelerCount} orang</small>
            </div>
            <p>{toRupiah(breakdown.flightReturn)}</p>
          </div>

          <div className="umrah-payment-line">
            <div>
              <p>Hotel ({primaryHotelCityLabel})</p>
              <small>x {travelerCount} orang - {hotelNightsLabel}</small>
            </div>
            <p>{toRupiah(breakdown.hotelMakkah)}</p>
          </div>

          <div className="umrah-payment-line">
            <div>
              <p>Hotel ({secondaryHotelCityLabel})</p>
              <small>x {travelerCount} orang - {hotelNightsLabel}</small>
            </div>
            <p>{toRupiah(breakdown.hotelMadinah)}</p>
          </div>

          <div className="umrah-payment-total">
            <p>Total Pembayaran</p>
            <strong>{toRupiah(breakdown.subtotal)}</strong>
          </div>
        </section>
      </div>

      <footer className="umrah-ticket-footer">
        <button type="button" className="cta-button" onClick={onNext}>
          Pilih Pembayaran
        </button>
      </footer>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
