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
  selectedPackageId: VisaPackage['id'] | null
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
  const [hasAttemptedOpenForm, setHasAttemptedOpenForm] = useState(false)
  const [buyValidationMessage, setBuyValidationMessage] = useState<string | null>(null)
  const hasSelectedPackage = selectedPackageId !== null
  const isCountTooHigh = selectedVisaCount > travelerCount
  const isCountTooLow = selectedVisaCount < 1
  const isCountInvalid = isCountTooLow || isCountTooHigh
  const canBuy = formCompleted && !isCountInvalid

  const quantityError = isCountTooHigh
    ? `Jumlah visa tidak boleh melebihi jumlah keberangkatan (${travelerCount} orang).`
    : 'Jumlah visa minimal 1.'

  const handleBuy = () => {
    if (!canBuy) {
      if (!formCompleted) {
        setBuyValidationMessage('Lengkapi formulir visa sebelum melanjutkan pembayaran.')
        return
      }

      setBuyValidationMessage(quantityError)
      return
    }

    setBuyValidationMessage(null)
    onBuy()
  }

  const handleOpenForm = () => {
    if (!hasSelectedPackage) {
      setHasAttemptedOpenForm(true)
      return
    }

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

            <button
              type="button"
              className="umrah-visa-form-btn"
              onClick={handleOpenForm}
              disabled={!hasSelectedPackage}
              aria-disabled={!hasSelectedPackage}
            >
              {formCompleted ? 'Edit Formulir' : 'Lengkapi Formulir'}
            </button>
          </div>

          {hasAttemptedOpenForm && !hasSelectedPackage && (
            <p className="visa-field-error">Pilih jenis visa terlebih dahulu.</p>
          )}

          {hasAttemptedOpenForm && hasSelectedPackage && isCountTooLow && (
            <p className="visa-field-error">Isi jumlah visa terlebih dahulu.</p>
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
        <button type="button" className={`cta-button${canBuy ? '' : ' disabled'}`} aria-disabled={!canBuy} onClick={handleBuy}>
          Beli
        </button>
        {showSkipButton && onSkip && (
          <button type="button" className="umrah-visa-skip-btn" onClick={onSkip}>
            Lanjutkan tanpa membeli
          </button>
        )}
      </footer>

      {buyValidationMessage && (
        <div
          className="visa-popup-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Validasi pembelian visa"
          onClick={() => setBuyValidationMessage(null)}
        >
          <div className="visa-popup-card visa-popup-card--validation" onClick={(event) => event.stopPropagation()}>
            <div className="visa-popup-gradient" aria-hidden />
            <h3 className="visa-validation-title">Pembelian belum bisa dilanjutkan</h3>
            <p className="visa-validation-message">{buyValidationMessage}</p>

            <div className="visa-popup-actions">
              <button type="button" className="visa-option primary" onClick={() => setBuyValidationMessage(null)}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
