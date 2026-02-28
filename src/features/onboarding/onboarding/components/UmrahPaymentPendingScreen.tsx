import { useEffect, useMemo, useState } from 'react'
import type { UmrahPaymentAssets } from '../types'

type UmrahPaymentPendingScreenProps = {
  assets: UmrahPaymentAssets
  virtualAccountNumber: string
  virtualAccountName: string
  totalPayment: number
  onBack: () => void
  onNext: () => void
}

function toRupiah(amount: number) {
  return `Rp ${amount.toLocaleString('id-ID')}`
}

function formatTimer(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `00:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export function UmrahPaymentPendingScreen({
  assets,
  virtualAccountNumber,
  virtualAccountName,
  totalPayment,
  onBack,
  onNext,
}: UmrahPaymentPendingScreenProps) {
  const [secondsLeft, setSecondsLeft] = useState(585)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  const timerLabel = useMemo(() => formatTimer(secondsLeft), [secondsLeft])

  return (
    <section className="phone-shell umrah-payment-shell" aria-label="Pembayaran Pending">
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
        <section className="umrah-payment-status waiting">
          <p>Batas pembayaran :</p>
          <strong>{timerLabel}</strong>
        </section>

        <section className="umrah-payment-va-block">
          <p>Virtual Account</p>
          <h2>
            {virtualAccountNumber}
            <img src={assets.copyIcon} alt="" aria-hidden />
          </h2>

          <p>Nama Virtual Account</p>
          <h3>{virtualAccountName}</h3>

          <p>Nominal yang akan dibayarkan</p>
          <h3>{toRupiah(totalPayment)}</h3>
        </section>

        <section className="umrah-payment-block">
          <h2>Cara Pembayaran</h2>

          <article className="umrah-payment-method-card instructions">
            <header>
              <p>Mobile Banking</p>
              <span>⌃</span>
            </header>
            <div className="umrah-payment-steps">
              <p>Pembayaran {virtualAccountName} dengan Mobile Banking</p>
              <ol>
                <li>Akses BNI Mobile Banking melalui handphone.</li>
                <li>Masukkan User ID dan password.</li>
                <li>Pilih menu Transfer.</li>
                <li>Pilih menu Virtual Account Billing, lalu pilih rekening debet.</li>
                <li>Masukkan nomor Virtual Account Anda pada menu Input Baru.</li>
                <li>Tagihan yang harus dibayarkan akan muncul pada layar konfirmasi.</li>
                <li>Konfirmasi transaksi dan masukkan Password Transaksi.</li>
                <li>Pembayaran Anda Telah Berhasil.</li>
              </ol>
            </div>
          </article>

          <article className="umrah-payment-method-card collapsed">
            <header>
              <p>ATM</p>
              <span>⌄</span>
            </header>
          </article>

          <article className="umrah-payment-method-card collapsed">
            <header>
              <p>Internet Banking</p>
              <span>⌄</span>
            </header>
          </article>
        </section>
      </div>

      <footer className="umrah-ticket-footer">
        <button type="button" className="cta-button disabled" onClick={onNext}>
          Lanjut
        </button>
      </footer>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
