import { useState } from 'react'
import type { LoginGuestAssets, LoginGuestContent } from '../types'
import { LOGIN_PHONE_VALIDATION_MESSAGE, normalizeLoginPhoneNumber } from '../utils/validation'

type LoginGuestScreenProps = {
  assets: LoginGuestAssets
  content: LoginGuestContent
  onClose: () => void
  onContinueWithGoogle?: () => void
  onContinueWithPhone?: (phoneNumber: string, countryCode: string) => void
}

export function LoginGuestScreen({ assets, content, onClose, onContinueWithGoogle, onContinueWithPhone }: LoginGuestScreenProps) {
  const [countryCode] = useState('+62')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneError, setPhoneError] = useState('')

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '')
    setPhoneNumber(digitsOnly)

    if (phoneError) {
      setPhoneError('')
    }
  }

  const handleContinue = () => {
    const normalizedPhone = normalizeLoginPhoneNumber(phoneNumber, countryCode)

    if (!normalizedPhone) {
      if (phoneNumber.replace(/\D/g, '')) {
        setPhoneError(LOGIN_PHONE_VALIDATION_MESSAGE)
      }
      return
    }

    onContinueWithPhone?.(normalizedPhone, countryCode)
  }

  return (
    <section className="phone-shell login-guest-shell" aria-label="Login Guest">
      <button type="button" className="login-guest-close" onClick={onClose} aria-label="Tutup login">
        <img src={assets.closeIcon} alt="" />
      </button>

      <div className="login-guest-brand">
        <p>{content.arabicLogo}</p>
        <span>{content.subtitle}</span>
      </div>

      <img src={assets.backgroundGlow} alt="" className="login-guest-bg-glow" aria-hidden />

      <div className="login-guest-form-wrap">
        <button type="button" className="login-guest-google-btn" onClick={onContinueWithGoogle}>
          <img src={assets.googleIcon} alt="" aria-hidden />
          <span>{content.googleButtonLabel}</span>
        </button>

        <div className="login-guest-or-row" aria-hidden>
          <span />
          <p>{content.orLabel}</p>
          <span />
        </div>

        <label className={`login-guest-phone-input-wrap${phoneError ? ' login-guest-phone-input-wrap--invalid' : ''}`} aria-label="Nomor telepon">
          <span className="login-guest-code">{countryCode}</span>
          <img src={assets.phoneArrowIcon} alt="" className="login-guest-arrow" aria-hidden />
          <span className="login-guest-separator" aria-hidden>
            |
          </span>
          <input
            type="tel"
            inputMode="numeric"
            placeholder={content.phonePlaceholder}
            value={phoneNumber}
            onChange={(event) => handlePhoneChange(event.target.value)}
          />
        </label>
        {phoneError && <span className="login-guest-phone-error">{phoneError}</span>}

        <button
          type="button"
          className="login-guest-continue-btn"
          onClick={handleContinue}
        >
          {content.continueLabel}
        </button>

        <p className="login-guest-legal-text">
          {content.legalPrefix}
          <strong>{content.legalTerms}</strong>
          {content.legalMiddle}
          <strong>{content.legalPrivacy}</strong>
          {content.legalSuffix}
        </p>
      </div>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
