import type { LayananLainAssets } from '../types'

export type LayananLainService = {
  id: string
  label: string
  icon: string
  onClick?: () => void
}

type LayananLainScreenProps = {
  assets: LayananLainAssets
  services: LayananLainService[]
  onOpenHome: () => void
  onOpenMyBooking: () => void
  onOpenInformasi?: () => void
  onOpenAkun?: () => void
}

export function LayananLainScreen({
  assets,
  services,
  onOpenHome,
  onOpenMyBooking,
  onOpenInformasi,
  onOpenAkun,
}: LayananLainScreenProps) {
  const navItems = [
    { label: 'Home', icon: assets.navHomeInactiveIcon, active: false, onClick: onOpenHome },
    { label: 'Informasi', icon: assets.navInfoIcon, active: false, onClick: onOpenInformasi },
    { label: 'Layanan Lain', icon: assets.navServicesActiveIcon, active: true, onClick: undefined },
    { label: 'My Booking', icon: assets.navBookingIcon, active: false, onClick: onOpenMyBooking },
    { label: 'Akun', icon: assets.navAccountIcon, active: false, onClick: onOpenAkun },
  ]

  return (
    <section className="phone-shell layanan-lain-shell" aria-label="Layanan Lain">
      <div className="layanan-lain-bg" aria-hidden />

      <header className="layanan-lain-header">
        <h1>Layanan Lain</h1>
      </header>

      <div className="layanan-lain-scroll">
        <h2 className="layanan-lain-hero">Layanan lain untuk ibadah Umrah Anda.</h2>

        <div className="layanan-lain-grid">
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              className="layanan-lain-tile"
              onClick={service.onClick}
            >
              <div className="layanan-lain-tile-icon" aria-hidden>
                <img src={service.icon} alt="" />
              </div>
              <span>{service.label}</span>
            </button>
          ))}
        </div>
      </div>

      <nav className="home-nav" aria-label="Navigasi utama">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`home-nav-item${item.active ? ' active' : ''}`}
            onClick={item.onClick}
          >
            <img src={item.icon} alt="" className="home-nav-icon" aria-hidden />
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
