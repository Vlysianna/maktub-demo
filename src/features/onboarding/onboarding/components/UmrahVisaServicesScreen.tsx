import type { UmrahVisaFormAssets, VisaPackage } from '../types'

type UmrahVisaServicesScreenProps = {
  assets: UmrahVisaFormAssets
  packages: VisaPackage[]
  landArrangementPrices: string[]
  additionalServices: string[]
  includedServices: string[]
  pairedCityLabel: string
  cityLabel: string
  formCompleted: boolean
  selectedPackageId: VisaPackage['id']
  travelerCount: number
  hideStepper?: boolean
  onBack: () => void
  onSelectPackage: (id: VisaPackage['id']) => void
  onOpenForm: () => void
  onBuy: () => void
  onSkip: () => void
}

export function UmrahVisaServicesScreen({
  assets,
  packages,
  landArrangementPrices,
  additionalServices,
  includedServices,
  pairedCityLabel,
  cityLabel,
  formCompleted,
  selectedPackageId,
  travelerCount,
  hideStepper,
  onBack,
  onSelectPackage,
  onOpenForm,
  onBuy,
  onSkip,
}: UmrahVisaServicesScreenProps) {
  return (
    <section className="phone-shell umrah-visa-shell" aria-label="Visa dan Lainnya">
      <header className="umrah-flight-header">
        <button type="button" className="umrah-flight-back" aria-label="Kembali" onClick={onBack}>
          <img src={assets.backIcon} alt="" aria-hidden />
        </button>
        <h1>Visa &amp; Lainnya</h1>
        <span className="umrah-ticket-head-spacer" aria-hidden />
      </header>

      {!hideStepper && (
        <div className="umrah-flight-stepper umrah-flight-stepper--figma" aria-hidden>
          <span className="umrah-flight-step active">
            <i>2</i>
            <b>Hotel ---</b>
          </span>
          <span className="umrah-flight-step active">
            <i>3</i>
            <b>Pembayaran ---</b>
          </span>
          <span className="umrah-flight-step active">
            <i>4</i>
            <b>Visa &amp; Lainnya</b>
          </span>
        </div>
      )}

      <div className="umrah-visa-scroll">
        <section className="umrah-visa-included-card">
          <p>Yang sudah termasuk di pelayanan Maktub:</p>
          <ul>
            {includedServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </section>

        <section className="umrah-visa-section">
          <header>
            <h2>Pembuatan Visa Umrah</h2>
            <span aria-hidden>⌃</span>
          </header>
          <p className="umrah-visa-learn">Pelajari selengkapnya</p>

          <div className="umrah-visa-package-grid">
            {packages.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`umrah-visa-package-card ${selectedPackageId === item.id ? 'active' : ''}`}
                onClick={() => onSelectPackage(item.id)}
              >
                <strong>{item.title}</strong>
                <small>{item.subtitle}</small>
                {item.priceLabel ? <p>{item.priceLabel}</p> : null}
              </button>
            ))}
          </div>

          <button type="button" className="umrah-visa-form-btn" onClick={onOpenForm}>
            {formCompleted ? 'Edit Formulir' : 'Lengkapi Formulir'}
          </button>
        </section>

        <section className="umrah-visa-section">
          <header>
            <h2>Land Arrangement</h2>
            <span aria-hidden>⌄</span>
          </header>
          <p className="umrah-visa-learn">Pelajari selengkapnya</p>
          <div className="umrah-visa-package-grid land">
            {landArrangementPrices.map((price, index) => (
              <article key={price} className="umrah-visa-package-card static">
                <strong>{cityLabel} / {pairedCityLabel}</strong>
                <small>Max {2 + index} Orang</small>
                <p>{price}</p>
              </article>
            ))}
          </div>
        </section>

        {additionalServices.map((service) => (
          <section key={service} className="umrah-visa-section collapsed">
            <header>
              <h2>{service}</h2>
              <span aria-hidden>⌄</span>
            </header>
            <p>Deskripsi singkat dari service ini</p>
          </section>
        ))}
      </div>

      <footer className="umrah-visa-footer">
        {!formCompleted && (
          <p className="visa-field-error visa-services-form-error">Lengkapi formulir visa sebelum melanjutkan pembayaran</p>
        )}
        <button type="button" className="cta-button" disabled={!formCompleted} onClick={onBuy}>
          Beli ({travelerCount} orang)
        </button>
        <button type="button" className="umrah-visa-skip-btn" onClick={onSkip}>
          Lanjutkan tanpa membeli
        </button>
      </footer>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
