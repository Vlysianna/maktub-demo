import type { ArticleItem, HomeAssets, ServiceItem } from '../types'

type HomeGuestScreenProps = {
  assets: HomeAssets
  services: ServiceItem[]
  articles: ArticleItem[]
  userDisplayName?: string
  userPhotoUrl?: string
  onStartJourney: () => void
  onOpenFlightSearch: () => void
  onOpenHotelSearch: () => void
  onOpenMyBooking: () => void
  onOpenLayananLain?: () => void
  onOpenInformasi?: () => void
  onOpenAkun?: () => void
  onOpenVisa?: () => void
  onOpenNotifikasi?: () => void
  onOpenChatAssistant?: () => void
  onOpenBannerDetail?: () => void
  onOpenAboutUs?: () => void
}

export function HomeGuestScreen({
  assets,
  services,
  articles,
  userDisplayName,
  userPhotoUrl,
  onStartJourney,
  onOpenFlightSearch,
  onOpenHotelSearch,
  onOpenMyBooking,
  onOpenLayananLain,
  onOpenInformasi,
  onOpenAkun,
  onOpenVisa,
  onOpenNotifikasi,
  onOpenChatAssistant,
  onOpenBannerDetail,
  onOpenAboutUs,
}: HomeGuestScreenProps) {
  const navItems = [
    { label: 'Home', icon: assets.navHomeIcon, active: true },
    { label: 'My Booking', icon: assets.navBookingIcon, active: false, onClick: onOpenMyBooking },
    { label: 'Layanan Lain', icon: assets.navServicesIcon, active: false, onClick: onOpenLayananLain },
    { label: 'Informasi', icon: assets.navInfoIcon, active: false, onClick: onOpenInformasi },
    { label: 'Akun', icon: assets.navAccountIcon, active: false, onClick: onOpenAkun },
  ]

  return (
    <section className="phone-shell home-shell" aria-label="Home Guest">
      <div className="home-top-bg" aria-hidden />
      <div className="home-top-pattern" aria-hidden />

      <div className="home-scroll">
        <div className="home-header-row">
          <div className="home-user-box">
            {userPhotoUrl ? (
              <img src={userPhotoUrl} alt="Profile" className="home-avatar" />
            ) : (
              <div className="home-avatar home-avatar--placeholder" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#B8B8B8" strokeWidth="1.5"/>
                  <path d="M14 14H10C7.23858 14 5 16.2386 5 19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19C19 16.2386 16.7614 14 14 14Z" stroke="#B8B8B8" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
            <div>
              <p className="home-welcome">Selamat datang,</p>
              <p className="home-name">{userDisplayName || 'Teman Maktub'}</p>
            </div>
          </div>

          <button className="home-bell" type="button" aria-label="Notifikasi" onClick={onOpenNotifikasi}>
            <img src={assets.bell} alt="Notifikasi" />
            <span className="home-badge">2</span>
          </button>
        </div>

        <section className="ai-card">
          <div className="ai-star-wrap" aria-hidden>
            <img src={assets.sparkleGlow} alt="" className="ai-star-glow" />
            <img src={assets.sparkle} alt="" className="ai-star" />
          </div>
          <h2>Maktub AI</h2>
          <p>akan melakukan pemilihan perjalanan Anda seperti,</p>

          <div className="ai-tags">
            <span>Tiket Pesawat</span>
            <span>Tiket Hotel</span>
            <span>Visa & lainnya</span>
          </div>

          <button type="button" className="ai-search-btn" onClick={onStartJourney}>
            <span>Mulai Cari</span>
            <strong>Paket perjalanan</strong>
            <img src={assets.searchIcon} alt="Cari" />
          </button>
        </section>

        <button className="about-strip" type="button" onClick={onOpenAboutUs}>
          <img src={assets.infoIcon} alt="Info" />
          <span>Cari tau tentang Maktub</span>
          <img src={assets.arrowRight} alt="Lanjut" />
        </button>

        <section className="home-content">
          <div className="services-card">
            {services.map((item) => (
              <button
                key={item.label}
                type="button"
                className="service-item"
                onClick={
                item.label === 'Pesawat'
                  ? onOpenFlightSearch
                  : item.label === 'Hotel'
                    ? onOpenHotelSearch
                    : item.label === 'Visa & Lainnya'
                      ? onOpenVisa
                      : undefined
              }
              >
                <div className="service-icon-wrap">
                  <img src={item.icon} alt={item.label} className="service-icon" />
                </div>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="articles-scroll">
            {articles.map((article) =>
              article.id === 'tempat-bersejarah' ? (
                <button
                  key={article.id}
                  type="button"
                  className="article-card article-card--button"
                  onClick={onOpenBannerDetail}
                >
                  <img src={article.image} alt={article.title} />
                  <div className="article-overlay" />
                  <p className="article-brand">Maktub.com | مكتوب</p>
                  <h3>{article.title}</h3>
                </button>
              ) : (
                <article key={article.id} className="article-card">
                  <img src={article.image} alt={article.title} />
                  <div className="article-overlay" />
                  <p className="article-brand">Maktub.com | مكتوب</p>
                  <h3>{article.title}</h3>
                </article>
              ),
            )}
          </div>
        </section>
      </div>

      <button className="chatbot-fab" type="button" aria-label="Chat bot" onClick={onOpenChatAssistant}>
        <img src={assets.chatbot} alt="Chat bot" />
      </button>

      <nav className="home-nav" aria-label="Bottom Navigation">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`home-nav-item ${item.active ? 'active' : ''}`}
            onClick={item.onClick}
          >
            <img src={item.icon} alt="" aria-hidden className="home-nav-icon" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
