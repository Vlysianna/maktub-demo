import { useEffect, useMemo, useRef, useState } from 'react'
import type { LoginOtpAssets, LoginOtpContent } from '../types'

type LoginOtpScreenProps = {
  assets: LoginOtpAssets
  content: LoginOtpContent
  phoneNumber: string
  countryCode?: string
  onBack: () => void
  onResend?: () => void
  onOtpComplete?: (otp: string) => void
}

const otpLength = 6
const countdownStart = 21

export function LoginOtpScreen({
  assets,
  content,
  phoneNumber,
  countryCode = '+62',
  onBack,
  onResend,
  onOtpComplete,
}: LoginOtpScreenProps) {
  const [otpDigits, setOtpDigits] = useState<string[]>(() => Array.from({ length: otpLength }, () => ''))
  const [countdownSeconds, setCountdownSeconds] = useState(countdownStart)
  const otpInputRefs = useRef<Array<HTMLInputElement | null>>([])

  useEffect(() => {
    if (countdownSeconds === 0) {
      return
    }

    const timer = window.setInterval(() => {
      setCountdownSeconds((previous) => {
        if (previous <= 1) {
          window.clearInterval(timer)
          return 0
        }

        return previous - 1
      })
    }, 1000)

    return () => window.clearInterval(timer)
  }, [countdownSeconds])

  useEffect(() => {
    const value = otpDigits.join('')
    if (value.length === otpLength && !value.includes('')) {
      onOtpComplete?.(value)
    }
  }, [onOtpComplete, otpDigits])

  const formattedTimer = useMemo(() => `0.${String(countdownSeconds).padStart(2, '0')}`, [countdownSeconds])
  const fullPhoneNumber = `${countryCode} ${phoneNumber}`.trim()

  const applyOtpValue = (rawValue: string, startIndex = 0) => {
    const normalized = rawValue.replace(/\D/g, '')
    if (!normalized) {
      return
    }

    setOtpDigits((previous) => {
      const next = [...previous]

      for (let index = 0; index < normalized.length && startIndex + index < otpLength; index += 1) {
        next[startIndex + index] = normalized[index]
      }

      return next
    })

    const focusIndex = Math.min(startIndex + normalized.length, otpLength - 1)
    otpInputRefs.current[focusIndex]?.focus()
  }

  const handleOtpChange = (index: number, value: string) => {
    if (!value) {
      setOtpDigits((previous) => {
        const next = [...previous]
        next[index] = ''
        return next
      })
      return
    }

    if (value.length > 1) {
      applyOtpValue(value, index)
      return
    }

    const normalized = value.replace(/\D/g, '')
    if (!normalized) {
      return
    }

    setOtpDigits((previous) => {
      const next = [...previous]
      next[index] = normalized
      return next
    })

    if (index < otpLength - 1) {
      otpInputRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Backspace') {
      return
    }

    if (otpDigits[index]) {
      return
    }

    if (index > 0) {
      otpInputRefs.current[index - 1]?.focus()
    }
  }

  const handleOtpPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    applyOtpValue(event.clipboardData.getData('text'))
  }

  const handleResend = () => {
    setCountdownSeconds(countdownStart)
    setOtpDigits(Array.from({ length: otpLength }, () => ''))
    otpInputRefs.current[0]?.focus()
    onResend?.()
  }

  return (
    <section className="phone-shell login-otp-shell" aria-label="OTP Verification">
      <header className="login-otp-header">
        <button type="button" className="login-otp-back" onClick={onBack} aria-label="Kembali">
          <img src={assets.backIcon} alt="" />
        </button>
      </header>

      <p className="login-otp-instruction">
        {content.instructionPrefix} {fullPhoneNumber} {content.instructionSuffix}
      </p>

      <div className="login-otp-inputs" role="group" aria-label="Input OTP 6 digit">
        {otpDigits.map((digit, index) => (
          <input
            key={`otp-${index}`}
            ref={(node) => {
              otpInputRefs.current[index] = node
            }}
            type="text"
            inputMode="numeric"
            autoComplete={index === 0 ? 'one-time-code' : 'off'}
            maxLength={index === 0 ? otpLength : 1}
            className="login-otp-input"
            value={digit}
            placeholder="_"
            onChange={(event) => handleOtpChange(index, event.target.value)}
            onKeyDown={(event) => handleOtpKeyDown(index, event)}
            onPaste={handleOtpPaste}
          />
        ))}
      </div>

      <div className="login-otp-timer" aria-live="polite">
        <span>{formattedTimer}</span>
        <img src={assets.timerIcon} alt="" aria-hidden />
      </div>

      <p className="login-otp-resend-row">
        <span>{content.notReceiveLabel}</span>
        <button type="button" onClick={handleResend}>
          {content.resendLabel}
        </button>
      </p>

      <img src={assets.keypadImage} alt="" className="login-otp-keypad" aria-hidden />

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
