import { useMemo, useState } from 'react'
import type { PaymentBreakdown, PaymentMethod, UmrahPaymentAssets } from '../types'

type UmrahPaymentMethodScreenProps = {
  assets: UmrahPaymentAssets
  breakdown: PaymentBreakdown
  title?: string
  payLabel?: string
  hideStepper?: boolean
  paymentFor?: 'package' | 'visa'
  packageSummaryLabel?: string
  visaLabel?: string
  travelerCount?: number
  flightOnly?: boolean
  taxLabel?: string
  onBack: () => void
  onPay: (method: PaymentMethod) => void
}

function toRupiah(amount: number) {
  return `Rp ${amount.toLocaleString('id-ID')}`
}

export function UmrahPaymentMethodScreen({
  assets,
  breakdown,
  title = 'Pembayaran',
  payLabel = 'Bayar',
  hideStepper = false,
  paymentFor = 'package',
  packageSummaryLabel,
  visaLabel,
  travelerCount = 1,
  flightOnly = false,
  taxLabel = 'Pajak 10%',
  onBack,
  onPay,
}: UmrahPaymentMethodScreenProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('bni-va')
  const [referralCode, setReferralCode] = useState('')
  const isCard = selectedMethod === 'credit-card'

  const lessText = useMemo(() => (referralCode.trim() ? 'Lebih sedikit' : 'Lebih sedikit'), [referralCode])

  return (
    <section className="phone-shell umrah-payment-shell" aria-label="Metode Pembayaran">
      <header className="umrah-flight-header">
        <button type="button" className="umrah-flight-back" aria-label="Kembali" onClick={onBack}>
          ←
        </button>
        <h1>{title}</h1>
        <span className="umrah-ticket-head-spacer" aria-hidden />
      </header>

      {hideStepper ? null : flightOnly ? (
        <div className="umrah-flight-stepper umrah-flight-stepper--figma" aria-hidden>
          <span className="umrah-flight-step">
            <i>1</i>
            <b>Pilih Tiket ---</b>
          </span>
          <span className="umrah-flight-step active">
            <i>2</i>
            <b>Pembayaran</b>
          </span>
        </div>
      ) : (
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
      )}

      <div className="umrah-payment-scroll">
        <section className="umrah-payment-block">
          <h2>Detail Harga</h2>
          <article className="umrah-payment-summary-box">
            <p>Total harga</p>
            <strong>{toRupiah(breakdown.subtotal)}</strong>
            <span>{lessText}</span>

            <div className="umrah-payment-summary-lines">
              <p>
                <span>
                  {paymentFor === 'visa'
                    ? `Harga ${visaLabel ?? 'Visa Umrah'}`
                    : flightOnly
                      ? 'Harga tiket pesawat'
                      : packageSummaryLabel ?? 'Harga paket hotel &amp; flight'}
                </span>
                <span>{toRupiah(breakdown.subtotal)}</span>
              </p>
              {paymentFor === 'visa' && (
                <p>
                  <span>Jumlah jamaah</span>
                  <span>x{travelerCount} orang</span>
                </p>
              )}
              <p>
                <span>Biaya layanan</span>
                <span>{toRupiah(breakdown.serviceFee)}</span>
              </p>
              <p>
                <span>{taxLabel}</span>
                <span>{toRupiah(breakdown.taxAmount)}</span>
              </p>
              <p className="bold">
                <span>Total harga</span>
                <span>{toRupiah(breakdown.grandTotal)}</span>
              </p>
            </div>
          </article>
        </section>

        <section className="umrah-payment-block">
          <h2>Kode Referral</h2>
          <input
            type="text"
            className="umrah-payment-referral-input"
            value={referralCode}
            onChange={(event) => setReferralCode(event.target.value)}
          />
          <p className="umrah-payment-referral-help">(Masukkan kode referral untuk dapatkan poin dari transaksi ini)</p>
        </section>

        <section className="umrah-payment-block">
          <h2>Metode Pembayaran</h2>

          <article className="umrah-payment-method-card">
            <header>
              <p>Virtual Account</p>
              <span>⌃</span>
            </header>

            <button type="button" onClick={() => setSelectedMethod('bni-va')}>
              <span>
                <img src={assets.bankBniLogo} alt="BNI" /> BNI Virtual Account
              </span>
              <i className={selectedMethod === 'bni-va' ? 'active' : ''} />
            </button>
            <button type="button" onClick={() => setSelectedMethod('bri-va')}>
              <span>
                <img src={assets.bankBriLogo} alt="BRI" /> BRI Virtual Account
              </span>
              <i className={selectedMethod === 'bri-va' ? 'active' : ''} />
            </button>
            <button type="button" onClick={() => setSelectedMethod('mandiri-va')}>
              <span>
                <img src={assets.bankMandiriLogo} alt="Mandiri" /> Mandiri Virtual Account
              </span>
              <i className={selectedMethod === 'mandiri-va' ? 'active' : ''} />
            </button>
            <button type="button" onClick={() => setSelectedMethod('bca-va')}>
              <span>
                <img src={assets.bankBcaLogo} alt="BCA" /> BCA Virtual Account
              </span>
              <i className={selectedMethod === 'bca-va' ? 'active' : ''} />
            </button>
          </article>

          <article className="umrah-payment-method-card">
            <header>
              <p>Credit Card</p>
              <span>⌃</span>
            </header>

            <button type="button" onClick={() => setSelectedMethod('credit-card')}>
              <span>
                <img src={assets.visaLogo} alt="Visa" className="card-logo" />
                <img src={assets.mastercardLogo} alt="Mastercard" className="card-logo" />
                Visa / Master Card
              </span>
              <i className={selectedMethod === 'credit-card' ? 'active' : ''} />
            </button>

            {isCard && (
              <div className="umrah-payment-card-inputs">
                <label>
                  Credit card number
                  <input type="text" placeholder="Input credit card number" />
                </label>
                <div>
                  <label>
                    Valid until
                    <input type="text" placeholder="MM/YYYY" />
                  </label>
                  <label>
                    CCV
                    <input type="text" placeholder="000" />
                  </label>
                </div>
              </div>
            )}
          </article>
        </section>
      </div>

      <footer className="umrah-ticket-footer">
        <button type="button" className="cta-button" onClick={() => onPay(selectedMethod)}>
          {payLabel}
        </button>
      </footer>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
