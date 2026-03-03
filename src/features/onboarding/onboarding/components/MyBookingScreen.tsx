import { useMemo, useState } from 'react'
import type { BookingItem, BookingStatus, HomeAssets, MyBookingAssets } from '../types'

type MyBookingScreenProps = {
  assets: HomeAssets
  bookingAssets: MyBookingAssets
  bookings: BookingItem[]
  onBackHome: () => void
  onOpenDetail: (bookingId: string) => void
  onOpenLayananLain: () => void
}

const bookingTabs: Array<{ id: BookingStatus; label: string }> = [
  { id: 'menunggu-pembayaran', label: 'Menunggu Pembayaran' },
  { id: 'berlangsung', label: 'Berlangsung' },
  { id: 'akan-datang', label: 'Akan Datang' },
  { id: 'history', label: 'History' },
]

const statusBadgeLabel: Record<BookingStatus, string> = {
  'menunggu-pembayaran': 'Menunggu Pembayaran',
  berlangsung: 'Berlangsung',
  'akan-datang': 'Akan Datang',
  history: 'History',
}

export function MyBookingScreen({ assets, bookingAssets, bookings, onBackHome, onOpenDetail, onOpenLayananLain }: MyBookingScreenProps) {
  const [activeStatus, setActiveStatus] = useState<BookingStatus>('berlangsung')

  const filteredBookings = useMemo(
    () => bookings.filter((booking) => booking.status === activeStatus),
    [activeStatus, bookings],
  )

  const navItems = [
    { label: 'Home', icon: assets.navHomeInactiveIcon, active: false, onClick: onBackHome },
    { label: 'My Booking', icon: assets.navBookingActiveIcon, active: true },
    { label: 'Layanan Lain', icon: assets.navServicesIcon, active: false, onClick: onOpenLayananLain },
    { label: 'Informasi', icon: assets.navInfoIcon, active: false },
    { label: 'Akun', icon: assets.navAccountIcon, active: false },
  ]

  return (
    <section className="phone-shell my-booking-shell" aria-label="My Booking">
      <header className="my-booking-header">
        <h1>My Booking</h1>
      </header>

      <div className="my-booking-tabs" role="tablist" aria-label="Booking Status">
        {bookingTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={tab.id === activeStatus}
            className={`my-booking-tab ${tab.id === activeStatus ? 'active' : ''}`}
            onClick={() => setActiveStatus(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="my-booking-list">
        {filteredBookings.length === 0 && <p className="my-booking-empty">Belum ada booking pada status ini.</p>}

        {filteredBookings.map((booking) => (
          <article key={booking.id} className="my-booking-card">
            <div className="my-booking-card-main">
              <div className="my-booking-card-top">
                <p>{booking.packageName}</p>
                <span className="my-booking-badge">{statusBadgeLabel[booking.status]}</span>
              </div>

              <div className="my-booking-meta-row">
                <span>
                  <img src={bookingAssets.clockIcon} alt="Durasi" />
                  {booking.durationLabel}
                </span>
                <span>
                  <img src={bookingAssets.calendarIcon} alt="Tanggal" />
                  {booking.bookingDateLabel}
                </span>
              </div>

              <div className="my-booking-route-wrap">
                <div className="my-booking-route-line">
                  <strong>{booking.departureRouteLabel}</strong>
                  <img src={bookingAssets.routeArrowIcon} alt="Arah perjalanan" />
                  <strong>{booking.arrivalRouteLabel}</strong>
                </div>

                <div className="my-booking-meta-row muted">
                  <span>
                    <img src={bookingAssets.calendarMutedIcon} alt="Tanggal keberangkatan" />
                    {booking.departureDateLabel}
                  </span>
                  <span>
                    <img src={bookingAssets.userIcon} alt="Jumlah traveler" />
                    {booking.travelerLabel}
                  </span>
                </div>
              </div>

              <div className="my-booking-total">
                <p>Total harga</p>
                <strong>{booking.totalPriceLabel}</strong>
              </div>
            </div>

            <button type="button" className="my-booking-detail" onClick={() => onOpenDetail(booking.id)}>
              <span>Lihat detail</span>
              <img src={bookingAssets.chevronRightIcon} alt="Lihat detail" />
            </button>
          </article>
        ))}
      </div>

      <nav className="home-nav" aria-label="Bottom Navigation">
        {navItems.map((item) => (
          <button key={item.label} type="button" className={`home-nav-item ${item.active ? 'active' : ''}`} onClick={item.onClick}>
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
