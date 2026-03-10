import type { HomeAssets, InformasiContent } from '../types'

type InformasiScreenProps = {
  assets: HomeAssets
  content: InformasiContent
  onOpenHome: () => void
  onOpenMyBooking: () => void
  onOpenLayananLain: () => void
  onOpenArahKiblat: () => void
  onOpenPanduanUmrah: () => void
  onOpenDoaUmrah: () => void
  onOpenDzikirHarian: () => void
  onOpenDoaHarian: () => void
  onOpenTataCaraSholat: () => void
  onOpenInformasiDetail: (itemId: string) => void
  onOpenAkun?: () => void
}

export function InformasiScreen({
  assets,
  content,
  onOpenHome,
  onOpenMyBooking,
  onOpenLayananLain,
  onOpenArahKiblat,
  onOpenPanduanUmrah,
  onOpenDoaUmrah,
  onOpenDzikirHarian,
  onOpenDoaHarian,
  onOpenTataCaraSholat,
  onOpenInformasiDetail,
  onOpenAkun,
}: InformasiScreenProps) {
  const navItems = [
    { label: 'Home', icon: assets.navHomeInactiveIcon, active: false, onClick: onOpenHome },
    { label: 'My Booking', icon: assets.navBookingIcon, active: false, onClick: onOpenMyBooking },
    { label: 'Layanan Lain', icon: assets.navServicesIcon, active: false, onClick: onOpenLayananLain },
    { label: 'Informasi', icon: assets.navInfoActiveIcon, active: true },
    { label: 'Akun', icon: assets.navAccountIcon, active: false, onClick: onOpenAkun },
  ]

  return (
    <section className="phone-shell informasi-shell" aria-label="Informasi">
      <div className="informasi-header-gradient" aria-hidden />

      <header className="informasi-header">
        <h1>{content.title}</h1>
      </header>

      <div className="informasi-scroll">
        <section className="informasi-prayer-card">
          <div className="informasi-prayer-header">
            <p>{content.prayerTitle}</p>
            <div>
              <img src={content.locationIcon} alt="Lokasi" />
              <span>{content.locationLabel}</span>
            </div>
          </div>

          <div className="informasi-prayer-grid">
            {content.prayerTimes.map((item) => (
              <article key={item.name} className={`informasi-prayer-item${item.active ? ' active' : ''}`}>
                <div className="informasi-prayer-icon-wrap">
                  {item.iconVariant === 'fajr' ? (
                    <span className="informasi-fajr-icon" aria-hidden>
                      <img src={item.icon} alt="" className="informasi-fajr-moon" />
                      {item.iconOverlay ? <img src={item.iconOverlay} alt="" className="informasi-fajr-overlay" /> : null}
                      <span className="informasi-fajr-line informasi-fajr-line-1" />
                      <span className="informasi-fajr-line informasi-fajr-line-2" />
                      <span className="informasi-fajr-line informasi-fajr-line-3" />
                    </span>
                  ) : (
                    <img src={item.icon} alt={item.name} />
                  )}
                </div>
                <p>{item.name}</p>
                <strong>{item.time}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="informasi-guide-card">
          <h2>{content.guideTitle}</h2>
          <div className="informasi-guide-grid">
            {content.guideItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="informasi-guide-item"
                onClick={
                  item.id === 'arah-kiblat'
                    ? onOpenArahKiblat
                    : item.id === 'panduan-umrah'
                      ? onOpenPanduanUmrah
                      : item.id === 'doa-umrah'
                        ? onOpenDoaUmrah
                        : item.id === 'dzikir-harian'
                          ? onOpenDzikirHarian
                          : item.id === 'doa-harian'
                            ? onOpenDoaHarian
                            : item.id === 'tata-cara-sholat'
                              ? onOpenTataCaraSholat
                        : undefined
                }
              >
                <span className="informasi-guide-icon-wrap">
                  <img src={item.icon} alt="" aria-hidden />
                </span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </section>

        <button type="button" className="informasi-hero-card" onClick={() => onOpenInformasiDetail(content.hero.id)}>
          <img src={content.hero.image} alt={content.hero.alt} />
          <div className="informasi-hero-overlay" />
          <div className="informasi-hero-content">
            <div className="informasi-hero-logo-wrap">
              <img src={content.hero.headingLogo} alt="Maktub" className="informasi-hero-logo" />
            </div>
            <div className="informasi-hero-text">
              <p className="informasi-hero-brand">{content.hero.brand}</p>
              <h3>{content.hero.title}</h3>
            </div>
          </div>
          <div className="informasi-hero-dots" aria-hidden>
            {Array.from({ length: content.hero.dotsCount }).map((_, index) => (
              <span key={`dot-${index}`} className={index === content.hero.activeDotIndex ? 'active' : ''} />
            ))}
          </div>
        </button>

        <div className="informasi-tab-scroll" role="tablist" aria-label="Kategori informasi">
          {content.tabs.map((tab, index) => (
            <button key={tab} type="button" role="tab" aria-selected={index === 0} className={`informasi-tab${index === 0 ? ' active' : ''}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="informasi-article-list">
          {content.articles.map((item) => {
            const [brandLabel, categoryLabel] = item.brand.split('•').map((value) => value.trim())

            return (
              <button key={item.id} type="button" className="informasi-article-card" onClick={() => onOpenInformasiDetail(item.id)}>
                <img src={item.image} alt={item.title} />
                <div className="informasi-article-copy">
                  <h4>{item.title}</h4>
                  <p>
                    <span>{brandLabel}</span>
                    {categoryLabel ? (
                      <>
                        <span className="informasi-article-dot" aria-hidden>
                          •
                        </span>
                        <span>{categoryLabel}</span>
                      </>
                    ) : null}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <nav className="home-nav" aria-label="Navigasi utama">
        {navItems.map((item) => (
          <button key={item.label} type="button" className={`home-nav-item${item.active ? ' active' : ''}`} onClick={item.onClick}>
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