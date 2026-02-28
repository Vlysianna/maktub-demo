import type { BookingDetail, BookingStatus, MyBookingDetailAssets } from '../types'

type MyBookingDetailScreenProps = {
  assets: MyBookingDetailAssets
  detail: BookingDetail
  onBack: () => void
}

const statusBadgeLabel: Record<BookingStatus, string> = {
  'menunggu-pembayaran': 'Menunggu Pembayaran',
  berlangsung: 'Berlangsung',
  'akan-datang': 'Akan Datang',
  history: 'History',
}

const statusBadgeClassName: Record<BookingStatus, string> = {
  'menunggu-pembayaran': 'warning',
  berlangsung: 'success',
  'akan-datang': 'info',
  history: 'neutral',
}

export function MyBookingDetailScreen({ assets, detail, onBack }: MyBookingDetailScreenProps) {
  return (
    <section className="phone-shell my-booking-detail-shell" aria-label="My Booking Detail">
      <header className="my-booking-detail-header">
        <button type="button" className="my-booking-detail-back" onClick={onBack} aria-label="Kembali">
          <img src={assets.backIcon} alt="" aria-hidden />
        </button>
        <h1>Detail Umrah</h1>
      </header>

      <div className="my-booking-detail-scroll">
        <section className="my-booking-detail-summary">
          <div className="my-booking-detail-title-row">
            <p>{detail.title}</p>
            <span className={`my-booking-detail-status ${statusBadgeClassName[detail.status]}`}>
              {statusBadgeLabel[detail.status]}
            </span>
          </div>

          <div className="my-booking-detail-summary-meta">
            <div>
              <p>Invoice</p>
              <strong>{detail.invoiceId}</strong>
            </div>
            <div>
              <p>Tanggal Transaksi</p>
              <strong>{detail.transactionDateLabel}</strong>
            </div>
          </div>
        </section>

        <section className="my-booking-helper-card">
          <p>{detail.helperTitle}</p>
          <small>{detail.helperSubtitle}</small>
          <button type="button">Selengkapnya</button>
        </section>

        <section className="my-booking-detail-section">
          <h2>Flight</h2>
          <div className="my-booking-flight-grid">
            <div className="my-booking-flight-time">
              <div>
                <strong>{detail.flight.departureTime}</strong>
                <p>{detail.flight.departureDate}</p>
              </div>
              <p>{detail.flight.duration}</p>
              <div>
                <strong>{detail.flight.arrivalTime}</strong>
                <p>{detail.flight.arrivalDate}</p>
              </div>
            </div>

            <img src={assets.routeTimelineIcon} alt="Rute" className="my-booking-route-timeline" />

            <div className="my-booking-flight-airports">
              <div>
                <strong>{detail.flight.departureAirport}</strong>
                <p>{detail.flight.departureTerminal}</p>
              </div>

              <div className="my-booking-flight-info-card">
                <div className="my-booking-airline">
                  <img src={assets.airlineLogo} alt={detail.flight.airlineName} />
                  <div>
                    <strong>{detail.flight.airlineName}</strong>
                    <p>
                      {detail.flight.airlineCode} | {detail.flight.cabinLabel}
                    </p>
                  </div>
                </div>

                <div className="my-booking-flight-line">
                  <img src={assets.baggageIcon} alt="Bagasi" />
                  <p>{detail.flight.baggageLabel}</p>
                </div>

                <div className="my-booking-flight-line">
                  <img src={assets.infoIcon} alt="Info" />
                  <p>Pesawat : {detail.flight.aircraftLabel}</p>
                </div>
                <div className="my-booking-flight-line subline">
                  <p>Tata kursi : {detail.flight.seatLayoutLabel}</p>
                  <p>Jarak antar kursi : {detail.flight.seatPitchLabel}</p>
                </div>
              </div>

              <div>
                <strong>{detail.flight.arrivalAirport}</strong>
                <p>{detail.flight.arrivalTerminal}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-booking-detail-section">
          <h2>Hotel</h2>
          {detail.hotels.map((hotel) => (
            <article key={hotel.id} className="my-booking-hotel-card">
              <div className="my-booking-hotel-head">
                <p>{hotel.name}</p>
                <small>
                  {hotel.nightsLabel} • {hotel.cityLabel}
                </small>
              </div>

              <div className="my-booking-hotel-dates">
                <div>
                  <p>{hotel.checkInTitle}</p>
                  <strong>{hotel.checkInDate}</strong>
                  <small>{hotel.checkInTime}</small>
                </div>
                <div>
                  <p>{hotel.checkOutTitle}</p>
                  <strong>{hotel.checkOutDate}</strong>
                  <small>{hotel.checkOutTime}</small>
                </div>
              </div>

              <div className="my-booking-hotel-room">
                <p>
                  <img src={assets.bedIcon} alt="Kamar" />
                  {hotel.roomLabel}
                </p>
                <p>
                  <img src={assets.userIcon} alt="Tamu" />
                  {hotel.guestLabel}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="my-booking-detail-section">
          <div className="my-booking-section-head">
            <h2>Peserta</h2>
            <button type="button">Detail</button>
          </div>
          <div className="my-booking-participant-box">
            <p>
              <img src={assets.userIcon} alt="Peserta laki-laki" />
              {detail.participants.maleLabel}
            </p>
            <p>
              <img src={assets.userIcon} alt="Peserta perempuan" />
              {detail.participants.femaleLabel}
            </p>
          </div>
        </section>

        <section className="my-booking-detail-section payment">
          <h2>Detail Pembayaran</h2>
          <div className="my-booking-payment-box">
            <div className="my-booking-payment-total">
              <div>
                <p>Total harga</p>
                <strong>{detail.payment.totalLabel}</strong>
              </div>
              <span>{detail.payment.noteLabel}</span>
            </div>

            <div className="my-booking-payment-breakdown">
              {detail.payment.breakdown.map((item) => (
                <div key={item.label} className={item.emphasized ? 'emphasized' : ''}>
                  <p>{item.label}</p>
                  <p>{item.amountLabel}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="my-booking-payment-method-title">Metode Pembayaran</p>
          <div className="my-booking-payment-method">
            <img src={assets.bankLogo} alt="Bank" />
            <p>{detail.payment.methodLabel}</p>
          </div>

          <p className="my-booking-help">
            Bantuan seputar umrah? <strong>Hubungi Pusat Bantuan</strong>
          </p>
        </section>
      </div>

      <button type="button" className="my-booking-itinerary-btn">
        <span>Lihat itinerary perjalanan</span>
        <img src={assets.itineraryArrowIcon} alt="Lihat itinerary" />
      </button>

      <button type="button" className="my-booking-pay-btn">
        Bayar Sekarang
      </button>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
