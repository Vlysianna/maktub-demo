import { useMemo, useState } from 'react'
import type { ChatAssistantAssets } from '../types'

type ChatMessage = {
  id: string
  role: 'assistant' | 'user'
  text: string
  time: string
}

type ChatAssistantScreenProps = {
  assets: ChatAssistantAssets
  displayName: string
  onBack: () => void
}

function nowLabel() {
  const value = new Date()
  const hours = String(value.getHours()).padStart(2, '0')
  const minutes = String(value.getMinutes()).padStart(2, '0')
  return `${hours}.${minutes}`
}

export function ChatAssistantScreen({ assets, displayName, onBack }: ChatAssistantScreenProps) {
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'assistant-welcome',
      role: 'assistant',
      text: `Halo ${displayName}, Maktub di sini. Saat ini siap membantu sebagai Virtual Assistant-mu!\n\nKamu bisa ketik kendalamu secara langsung dengan Maktub! Yuk, coba tanyakan apa saja terkait Umrah.`,
      time: nowLabel(),
    },
  ])

  const canSend = useMemo(() => inputValue.trim().length > 0, [inputValue])

  const handleSend = () => {
    const trimmed = inputValue.trim()
    if (!trimmed) {
      return
    }

    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, role: 'user', text: trimmed, time: nowLabel() },
      {
        id: `assistant-${Date.now() + 1}`,
        role: 'assistant',
        text: 'Terima kasih, pesanmu sudah diterima. Maktub akan bantu proses pertanyaanmu ya.',
        time: nowLabel(),
      },
    ])
    setInputValue('')
  }

  return (
    <section className="phone-shell chat-assistant-shell" aria-label="Chat Assistant">
      <header className="chat-assistant-header">
        <button type="button" className="chat-assistant-back" onClick={onBack} aria-label="Kembali">
          <img src={assets.backIcon} alt="" aria-hidden />
        </button>
        <div className="chat-assistant-title-wrap">
          <span className="chat-assistant-title-icon">
            <img src={assets.botIcon} alt="" />
          </span>
          <div>
            <h1>Maktub</h1>
            <p>Virtual Assistant Anda</p>
          </div>
        </div>
      </header>

      <div className="chat-assistant-scroll">
        {messages.map((message) => (
          <div key={message.id} className={`chat-row ${message.role === 'user' ? 'user' : 'assistant'}`}>
            {message.role === 'assistant' ? (
              <span className="chat-bot-badge" aria-hidden>
                <img src={assets.botIcon} alt="" />
              </span>
            ) : null}
            <article className={`chat-bubble ${message.role === 'user' ? 'user' : 'assistant'}`}>
              <p>{message.text}</p>
              <small>{message.time}</small>
            </article>
          </div>
        ))}
      </div>

      <footer className="chat-assistant-input-bar">
        <label className="chat-assistant-input-wrap">
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Ketik pesan disini.."
          />
        </label>
        <button type="button" className="chat-assistant-mic" aria-label="Microphone">
          <img src={assets.micIcon} alt="" />
        </button>
        <button
          type="button"
          className="chat-assistant-send"
          aria-label="Kirim"
          disabled={!canSend}
          onClick={handleSend}
        >
          <img src={assets.sendIcon} alt="" />
        </button>
      </footer>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
