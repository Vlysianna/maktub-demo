import type { HomeAssets, ProfileData } from '../types'

type ProfileScreenProps = {
  assets: HomeAssets
  profile: ProfileData
  onOpenProfileSettings: () => void
  onOpenHome: () => void
  onOpenMyBooking: () => void
  onOpenLayananLain: () => void
  onOpenInformasi: () => void
  onOpenNotifikasi: () => void
  onOpenItinerary: () => void
  onOpenPrivacyPolicy: () => void
  onOpenTermsConditions: () => void
  onOpenHelpCenter: () => void
  onOpenUmrahPreparation: () => void
  onLogout: () => void
}

export function ProfileScreen({
  assets,
  profile,
  onOpenProfileSettings,
  onOpenHome,
  onOpenMyBooking,
  onOpenLayananLain,
  onOpenInformasi,
  onOpenNotifikasi,
  onOpenItinerary,
  onOpenPrivacyPolicy,
  onOpenTermsConditions,
  onOpenHelpCenter,
  onOpenUmrahPreparation,
  onLogout,
}: ProfileScreenProps) {
  const navItems = [
    { label: 'Home', icon: assets.navHomeInactiveIcon, active: false, onClick: onOpenHome },
    { label: 'Informasi', icon: assets.navInfoActiveIcon, active: false, onClick: onOpenInformasi },
    { label: 'Layanan Lain', icon: assets.navServicesIcon, active: false, onClick: onOpenLayananLain },
    { label: 'My Booking', icon: assets.navBookingIcon, active: false, onClick: onOpenMyBooking },
    { label: 'Akun', icon: assets.navAccountIcon, active: true, onClick: undefined },
  ]

  return (
    <section className="phone-shell profile-shell" aria-label="Profil">
      <div className="profile-header-gradient" aria-hidden />

      <div className="profile-scroll">
        <header className="profile-header">
          <img src={profile.avatar} alt={profile.name} className="profile-avatar" />
          <div className="profile-identity">
            <h1>{profile.name}</h1>
            <p>{profile.email}</p>
          </div>
          <button type="button" className="profile-edit" aria-label="Edit profil" onClick={onOpenProfileSettings}>
            ✎
          </button>
        </header>

        <section className="profile-points-card">
          <div className="profile-points-top">
            <div>
              <p>{profile.pointsLabel}</p>
              <strong>{profile.points}</strong>
            </div>
            <span>{profile.badgeLabel}</span>
          </div>

          <div className="profile-referral-row">
            <p>{profile.referralLabel}</p>
            <strong>{profile.referralCode}</strong>
            <button type="button">{profile.referralActionLabel}</button>
          </div>
        </section>

        <section className="profile-prep-card">
          <h2>{profile.prepTitle}</h2>
          <p>{profile.prepDescription}</p>
          <button type="button" onClick={onOpenUmrahPreparation}>{profile.prepActionLabel}</button>
        </section>

        <div className="profile-menu-list">
          {profile.menuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="profile-menu-item"
              onClick={
                item.id === 'itinerary'
                  ? onOpenItinerary
                  : item.id === 'notifikasi'
                  ? onOpenNotifikasi
                  : item.id === 'kebijakan-privasi'
                    ? onOpenPrivacyPolicy
                    : item.id === 'syarat-ketentuan'
                      ? onOpenTermsConditions
                      : item.id === 'pusat-bantuan'
                        ? onOpenHelpCenter
                    : undefined
              }
            >
              <img src={item.icon} alt="" aria-hidden />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <button type="button" className="profile-logout" onClick={onLogout}>
          {profile.logoutLabel}
        </button>
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
