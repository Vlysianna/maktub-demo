const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

type HelpCenterScreenProps = {
  userName: string
  onBack: () => void
  onOpenChatSupport: () => void
}

const faqItems = ['Personalized Services', 'How is your data used?', 'Personalized Services']

const contactItems = [
  { id: 'email', label: 'info@maktub.id', type: 'email' as const },
  { id: 'phone', label: '021 1234 56', type: 'phone' as const },
  { id: 'whatsapp', label: '0813 1234 5678', type: 'whatsapp' as const },
]

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="3" stroke="#191927" strokeWidth="1.6" />
      <path d="M6.5 9L12 13L17.5 9" stroke="#191927" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7.9 4.7L10.5 4C11.1 3.8 11.7 4.1 12 4.7L13.3 7.2C13.6 7.8 13.4 8.5 12.9 8.8L11.4 9.8C12 11.2 12.9 12.4 14.2 13.4L15.3 11.9C15.7 11.4 16.4 11.2 17 11.5L19.4 12.8C20 13.1 20.3 13.8 20.1 14.4L19.4 17C19.2 17.7 18.5 18.1 17.8 18C10.7 17.2 5 11.5 4.2 4.4C4.1 3.7 4.5 3 5.2 2.8L7.9 2.1"
        stroke="#191927"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WhatsappIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 12C20 16.4 16.4 20 12 20C10.7 20 9.5 19.7 8.4 19.1L4.5 20L5.5 16.3C4.9 15 4.5 13.6 4.5 12C4.5 7.6 8.1 4 12.5 4C16.9 4 20 7.6 20 12Z"
        stroke="#191927"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 9.2C9.7 8.9 10.2 8.9 10.5 9.2L11.1 9.8C11.4 10.1 11.4 10.6 11.1 10.9L10.8 11.2C11.2 11.9 11.8 12.5 12.5 12.9L12.8 12.6C13.1 12.3 13.6 12.3 13.9 12.6L14.5 13.2C14.8 13.5 14.8 14 14.5 14.3L14.1 14.7C13.7 15.1 13.1 15.2 12.6 14.9C11 14.1 9.7 12.8 8.9 11.2C8.7 10.7 8.8 10.1 9.2 9.7L9.4 9.2Z"
        fill="#191927"
      />
    </svg>
  )
}

function ContactIcon({ type }: { type: 'email' | 'phone' | 'whatsapp' }) {
  if (type === 'email') {
    return <EmailIcon />
  }

  if (type === 'phone') {
    return <PhoneIcon />
  }

  return <WhatsappIcon />
}

export function HelpCenterScreen({ userName, onBack, onOpenChatSupport }: HelpCenterScreenProps) {
  return (
    <section className="phone-shell help-center-shell" aria-label="Pusat Bantuan">
      <header className="help-center-header">
        <button type="button" className="help-center-back" onClick={onBack} aria-label="Kembali">
          <img src={publicAsset('assets/figma/arrow-right.svg')} alt="" aria-hidden />
        </button>
        <h1>Pusat Bantuan</h1>
      </header>

      <div className="help-center-scroll">
        <section className="help-center-hero">
          <div className="help-center-hero-inner">
            <h2>Hai {userName}</h2>
            <p>Dapatkan bantuan yang diperlukan</p>
          </div>
          <img src={publicAsset('assets/figma/help-center.svg')} alt="Ilustrasi bantuan" className="help-center-hero-illustration" />
        </section>

        <section className="help-center-chat-card-wrap">
          <button type="button" className="help-center-chat-card" onClick={onOpenChatSupport}>
            <span className="help-center-chat-icon-wrap">
              <img src={publicAsset('assets/figma/chat-bot-bulk-rounded2.svg')} alt="" aria-hidden />
            </span>
            <span className="help-center-chat-copy">
              <strong>Chat untuk dapat bantuan</strong>
              <small>Fokus pada masalah yang dihadapi</small>
            </span>
          </button>
        </section>

        <section className="help-center-faq-section">
          <div className="help-center-section-head">
            <h3>FAQ</h3>
            <button type="button">Lihat semua</button>
          </div>

          <div className="help-center-faq-list">
            {faqItems.map((item, index) => (
              <button key={`${item}-${index}`} type="button" className="help-center-faq-item">
                <span>{item}</span>
                <img src={publicAsset('assets/figma/Icon-Outline arrow.svg')} alt="" aria-hidden />
              </button>
            ))}
          </div>
        </section>

        <section className="help-center-contact-section">
          <h3>Kontak Kami</h3>
          <div className="help-center-contact-list">
            {contactItems.map((item) => (
              <button key={item.id} type="button" className="help-center-contact-item">
                <ContactIcon type={item.type} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </section>
      </div>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}