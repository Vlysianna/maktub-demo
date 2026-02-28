import type { UmrahHotelAssets } from '../types'

type UmrahHotelTicketInfoScreenProps = {
  assets: UmrahHotelAssets
  hotelImage: string
  hotelName: string
  roomName: string
  travelerCount: number
  travelerText: string
  checkInLabel: string
  checkOutLabel: string
  contactName: string
  contactEmail: string
  contactPhone: string
  totalPrice: number
  totalLabel: string
  onBack: () => void
  onNext: () => void
}

function toRupiah(amount: number) {
  return `Rp ${amount.toLocaleString('id-ID')}`
}

export function UmrahHotelTicketInfoScreen({
  assets,
  hotelImage,
  hotelName,
  roomName,
  travelerCount,
  travelerText,
  checkInLabel,
  checkOutLabel,
  contactName,
  contactEmail,
  contactPhone,
  totalPrice,
  totalLabel,
  onBack,
  onNext,
}: UmrahHotelTicketInfoScreenProps) {
  return (
    <section className="phone-shell umrah-hotel-shell" aria-label="Info Tiket Hotel">
      <header className="umrah-flight-header">
        <button type="button" className="umrah-flight-back" aria-label="Kembali" onClick={onBack}>
          ←
        </button>
        <h1>Info Tiket</h1>
        <span className="umrah-ticket-head-spacer" aria-hidden />
      </header>

      <div className="umrah-flight-stepper umrah-flight-stepper--figma" aria-hidden>
        <span className="umrah-flight-step active">
          <i>1</i>
          <b>Flight ---</b>
        </span>
        <span className="umrah-flight-step active">
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

      <div className="umrah-hotel-ticket-scroll">
        <section className="umrah-hotel-ticket-timeline">
          <div className="umrah-hotel-timeline-column" aria-hidden>
            <span />
            <span />
          </div>

          <div className="umrah-hotel-ticket-content">
            <h3>Check-in</h3>
            <p>{checkInLabel}</p>

            <article className="umrah-hotel-stay-card">
              <div className="umrah-hotel-stay-head">
                <img src={hotelImage} alt={hotelName} />
                <div>
                  <p>{hotelName}</p>
                  <small>{roomName}</small>
                </div>
              </div>

              <div className="umrah-hotel-stay-meta">
                <p>
                  <img src={assets.userIcon} alt="" aria-hidden /> {travelerText}
                </p>
                <p>
                  <img src={assets.bedIcon} alt="" aria-hidden /> 1 King bed
                </p>
                <p>
                  <img src={assets.breakfastIcon} alt="" aria-hidden /> Sarapan
                </p>
              </div>
            </article>

            <h3>Check-out</h3>
            <p>{checkOutLabel}</p>
          </div>
        </section>

        <section className="umrah-hotel-ticket-section">
          <h2>Kontak</h2>
          <p className="umrah-info-caption">E-ticket akan dikirim kepada orang dibawah ini.</p>
          <article className="umrah-info-contact-card">
            <p>{contactName}</p>
            <small>
              {contactEmail} <span>•</span> {contactPhone}
            </small>
          </article>
        </section>

        <section className="umrah-hotel-ticket-section">
          <h2>Harga Akomodasi</h2>
          <p className="umrah-info-caption">Harga total untuk {travelerCount} orang</p>
          <p className="umrah-hotel-ticket-price">
            <strong>{toRupiah(totalPrice)}</strong> {totalLabel}
          </p>
        </section>
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
