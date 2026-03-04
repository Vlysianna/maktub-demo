import { useState } from 'react'
import type { LoginNameAssets, LoginNameContent } from '../types'

type LoginNameScreenProps = {
  assets: LoginNameAssets
  content: LoginNameContent
  initialName?: string
  onBack: () => void
  onContinue: (name: string) => void
}

export function LoginNameScreen({ assets, content, initialName = '', onBack, onContinue }: LoginNameScreenProps) {
  const [name, setName] = useState(initialName)

  return (
    <section className="phone-shell login-name-shell" aria-label="Isi Nama">
      <header className="login-name-header">
        <button type="button" className="login-name-back" onClick={onBack} aria-label="Kembali">
          <img src={assets.backIcon} alt="" />
        </button>
      </header>

      <div className="login-name-content">
        <label className="login-name-label" htmlFor="login-name-input">
          {content.title}
        </label>
        <input
          id="login-name-input"
          className="login-name-input"
          type="text"
          value={name}
          placeholder={content.placeholder}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <button
        type="button"
        className="login-name-continue"
        onClick={() => onContinue(name.trim())}
        disabled={!name.trim()}
      >
        {content.continueLabel}
      </button>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
