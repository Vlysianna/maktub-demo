import { useState } from 'react'
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
  selectedVisaCount: number
  hideStepper?: boolean
  showSkipButton?: boolean
  onBack: () => void
  onSelectPackage: (id: VisaPackage['id']) => void
  onChangeVisaCount: (count: number) => void
  onOpenForm: () => void
  onBuy: () => void
  onSkip?: () => void
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
  selectedVisaCount,
  hideStepper,
  showSkipButton,
  onBack,
  onSelectPackage,
  onChangeVisaCount,
  onOpenForm,
  onBuy,
  onSkip,
}: UmrahVisaServicesScreenProps) {
  const [hasAttemptedBuy, setHasAttemptedBuy] = useState(false)
  const [hasAttemptedOpenForm, setHasAttemptedOpenForm] = useState(false)
  const isCountTooHigh = selectedVisaCount > travelerCount
  const isCountTooLow = selectedVisaCount < 1
  const isCountInvalid = isCountTooLow || isCountTooHigh
  const canBuy = formCompleted && !isCountInvalid

  const quantityError = isCountTooHigh
    ? `Jumlah visa tidak boleh melebihi jumlah keberangkatan (${travelerCount} orang).`
    : 'Jumlah visa minimal 1.'

  const handleBuy = () => {
    if (!canBuy) {
      setHasAttemptedBuy(true)
      return
    }

    onBuy()
  }

  const handleOpenForm = () => {
    if (isCountTooLow) {
      setHasAttemptedOpenForm(true)
      return
    }

    onOpenForm()
  }

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
            <b>Hotel</b>
          </span>
          <span className="umrah-flight-step active">
            <i>3</i>
            <b>Pembayaran</b>
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

          <div className="umrah-visa-actions-row">
            <div className="umrah-visa-count-wrap">
              <span>Jumlah</span>
              <div className="umrah-visa-counter" aria-label="Jumlah visa">
                <button
                  type="button"
                  aria-label="Kurangi jumlah visa"
                  onClick={() => onChangeVisaCount(Math.max(0, selectedVisaCount - 1))}
                >
                  -
                </button>
                <strong>{selectedVisaCount}</strong>
                <button
                  type="button"
                  aria-label="Tambah jumlah visa"
                  onClick={() => onChangeVisaCount(Math.min(travelerCount, selectedVisaCount + 1))}
                >
                  +
                </button>
              </div>
            </div>

            <button type="button" className="umrah-visa-form-btn" onClick={handleOpenForm}>
              {formCompleted ? 'Edit Formulir' : 'Lengkapi Formulir'}
            </button>
          </div>

          {hasAttemptedOpenForm && isCountTooLow && (
            <p className="visa-field-error">Isi jumlah visa terlebih dahulu.</p>
          )}

          {hasAttemptedBuy && isCountInvalid && (
            <p className="visa-field-error">{quantityError}</p>
          )}
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
        {hasAttemptedBuy && !formCompleted && (
          <p className="visa-field-error visa-services-form-error">Lengkapi formulir visa sebelum melanjutkan pembayaran</p>
        )}
        {hasAttemptedBuy && isCountInvalid && (
          <p className="visa-field-error visa-services-form-error">{quantityError}</p>
        )}
        <button type="button" className="cta-button" disabled={!canBuy} onClick={handleBuy}>
          Beli
        </button>
        {showSkipButton && onSkip && (
          <button type="button" className="umrah-visa-skip-btn" onClick={onSkip}>
            Lanjutkan tanpa membeli
          </button>
        )}
      </footer>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
