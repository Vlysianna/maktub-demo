import type { TicketFareOption, UmrahTicketAssets } from '../types'

type UmrahFlightDetailScreenProps = {
  assets: UmrahTicketAssets
  flightOnly?: boolean
  journeyLabel: 'Keberangkatan' | 'Kepulangan'
  fareOptions: TicketFareOption[]
  travelerCount: number
  selectedFareId: TicketFareOption['id']
  onBack: () => void
  onClose: () => void
  onSelectFare: (fareId: TicketFareOption['id']) => void
  onNext: () => void
}

const policyBody =
  'Informasi perjalanan yang tercantum pada e-voucher dan informasi produk yang tercantum dalam syarat dan ketentuan yang bersangkutan.'

function toRupiah(amount: number) {
  return `Rp ${amount.toLocaleString('id-ID')}`
}

export function UmrahFlightDetailScreen({
  assets,
  flightOnly = false,
  journeyLabel,
  fareOptions,
  travelerCount,
  selectedFareId,
  onBack,
  onClose,
  onSelectFare,
  onNext,
}: UmrahFlightDetailScreenProps) {
  return (
    <section className="phone-shell umrah-ticket-shell" aria-label="Detail Pesawat">
      <header className="umrah-ticket-header">
        <button type="button" className="umrah-ticket-back" aria-label="Kembali" onClick={onBack}>
          <img src={assets.backIcon} alt="" aria-hidden />
        </button>
        <h1>Detail Pesawat</h1>
        <button type="button" className="umrah-ticket-close" aria-label="Tutup" onClick={onClose}>
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

      <div className="umrah-ticket-scroll">
        <h2 className="umrah-ticket-title">Tiket {journeyLabel}</h2>

        <div className="umrah-ticket-card-list">
          {fareOptions.map((fare) => (
            <article key={fare.id} className="umrah-ticket-card">
              <div className="umrah-ticket-top-row">
                <div>
                  <p className="umrah-ticket-name">{fare.name}</p>
                  <p className="umrah-ticket-price">
                    <strong>{toRupiah(Math.round(fare.totalPrice / travelerCount))}</strong>
                    <span>/org</span>
                  </p>
                  <p className="umrah-ticket-subtitle">
                    {toRupiah(fare.totalPrice)} untuk {travelerCount} org
                  </p>
                </div>

                <button
                  type="button"
                  className={`umrah-ticket-select-btn ${selectedFareId === fare.id ? 'active' : ''}`}
                  onClick={() => onSelectFare(fare.id)}
                >
                  Pilih
                </button>
              </div>

              <div className="umrah-ticket-feature-list">
                {fare.features.map((feature) => {
                  const icon =
                    feature.icon === 'bag' ? assets.bagIcon : feature.icon === 'check' ? assets.checkIcon : assets.cancelIcon

                  return (
                    <p key={`${fare.id}-${feature.label}`}>
                      <img src={icon} alt="" aria-hidden />
                      {feature.label}
                    </p>
                  )
                })}
              </div>
            </article>
          ))}
        </div>

        <h2 className="umrah-ticket-title">Kebijakan</h2>

        <article className="umrah-ticket-policy-highlight">
          <h3>
            <img src={assets.infoSolidIcon} alt="" aria-hidden /> Catatan Penting
          </h3>
          <p>{policyBody}</p>
          <button type="button">Selengkapnya</button>
        </article>

        <article className="umrah-ticket-policy-item">
          <h3>
            <img src={assets.clockIcon} alt="" aria-hidden /> Petunjuk Umum
          </h3>
          <p>{policyBody}</p>
        </article>

        <article className="umrah-ticket-policy-item">
          <h3>
            <img src={assets.clockIcon} alt="" aria-hidden /> Kebijakan Tambahan
          </h3>
          <p>{policyBody}</p>
        </article>
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
