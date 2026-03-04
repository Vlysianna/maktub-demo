import { useMemo, useState } from 'react'
import type { BookingItem, BookingStatus, HomeAssets, MyBookingAssets } from '../types'

type MyBookingScreenProps = {
  assets: HomeAssets
  bookingAssets: MyBookingAssets
  bookings: BookingItem[]
  onBackHome: () => void
  onOpenDetail: (bookingId: string) => void
  onOpenLayananLain: () => void
  onOpenInformasi?: () => void
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

const monthMap: Record<string, number> = {
  jan: 0,
  january: 0,
  januari: 0,
  feb: 1,
  february: 1,
  februari: 1,
  mar: 2,
  march: 2,
  maret: 2,
  apr: 3,
  april: 3,
  may: 4,
  mei: 4,
  jun: 5,
  june: 5,
  juni: 5,
  jul: 6,
  july: 6,
  juli: 6,
  aug: 7,
  august: 7,
  agu: 7,
  agustus: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  okt: 9,
  oktober: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
  des: 11,
  desember: 11,
}

function parseDepartureDate(value: string): Date | null {
  const parts = value.trim().split(/\s+/)
  if (parts.length < 3) {
    return null
  }

  const day = Number.parseInt(parts[0], 10)
  const month = monthMap[parts[1].toLowerCase()]
  const year = Number.parseInt(parts[2], 10)

  if (Number.isNaN(day) || Number.isNaN(year) || month === undefined) {
    return null
  }

  return new Date(year, month, day)
}

function getEffectiveStatus(booking: BookingItem): BookingStatus {
  if (booking.status !== 'akan-datang') {
    return booking.status
  }

  const departureDate = parseDepartureDate(booking.departureDateLabel)
  if (!departureDate) {
    return booking.status
  }

  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  if (departureDate <= today) {
    return 'berlangsung'
  }

  return 'akan-datang'
}

export function MyBookingScreen({ assets, bookingAssets, bookings, onBackHome, onOpenDetail, onOpenLayananLain, onOpenInformasi }: MyBookingScreenProps) {
  const [activeStatus, setActiveStatus] = useState<BookingStatus>('berlangsung')

  const normalizedBookings = useMemo(
    () => bookings.map((booking) => ({ ...booking, effectiveStatus: getEffectiveStatus(booking) })),
    [bookings],
  )

  const filteredBookings = useMemo(
    () => normalizedBookings.filter((booking) => booking.effectiveStatus === activeStatus),
    [activeStatus, normalizedBookings],
  )

  const navItems = [
    { label: 'Home', icon: assets.navHomeInactiveIcon, active: false, onClick: onBackHome },
    { label: 'My Booking', icon: assets.navBookingActiveIcon, active: true },
    { label: 'Layanan Lain', icon: assets.navServicesIcon, active: false, onClick: onOpenLayananLain },
    { label: 'Informasi', icon: assets.navInfoIcon, active: false, onClick: onOpenInformasi },
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
                <span className="my-booking-badge">{statusBadgeLabel[booking.effectiveStatus]}</span>
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
