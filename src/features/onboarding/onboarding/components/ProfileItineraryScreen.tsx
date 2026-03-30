import type { BookingItem, BookingStatus, ItineraryDay, MyBookingAssets, MyBookingDetailAssets } from '../types'

type ProfileItineraryScreenProps = {
  assets: MyBookingAssets
  detailAssets: MyBookingDetailAssets
  bookings: BookingItem[]
  itineraryByBookingId: Record<string, ItineraryDay[]>
  fallbackItineraryDays: ItineraryDay[]
  onBack: () => void
  onOpenDetail: (bookingId: string) => void
}

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

function parseDateLabel(value: string): Date | null {
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

function formatDateLabel(date: Date): string {
  return date.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function addDays(date: Date, days: number): Date {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return next
}

function parseDurationDays(durationLabel: string): number {
  const numeric = Number.parseInt(durationLabel.replace(/[^\d]/g, ''), 10)
  if (Number.isNaN(numeric)) {
    return 1
  }

  return Math.max(numeric, 1)
}

function getEffectiveStatus(booking: BookingItem): BookingStatus {
  if (booking.status !== 'akan-datang') {
    return booking.status
  }

  const departureDate = parseDateLabel(booking.departureDateLabel)
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

function getDateRangeLabel(booking: BookingItem, itineraryDays: ItineraryDay[]): string {
  if (itineraryDays.length > 0) {
    const firstDate = itineraryDays[0].dateLabel
    const lastDate = itineraryDays[itineraryDays.length - 1].dateLabel
    return `${firstDate} - ${lastDate}`
  }

  const departureDate = parseDateLabel(booking.departureDateLabel)
  if (!departureDate) {
    return booking.departureDateLabel
  }

  const totalDays = parseDurationDays(booking.durationLabel)
  const endDate = addDays(departureDate, totalDays - 1)

  return `${formatDateLabel(departureDate)} - ${formatDateLabel(endDate)}`
}

export function ProfileItineraryScreen({
  assets,
  detailAssets,
  bookings,
  itineraryByBookingId,
  fallbackItineraryDays,
  onBack,
  onOpenDetail,
}: ProfileItineraryScreenProps) {
  return (
    <section className="phone-shell profile-itinerary-shell" aria-label="Itinerary Saya">
      <header className="profile-itinerary-header">
        <button type="button" className="profile-itinerary-back" onClick={onBack} aria-label="Kembali">
          <img src={detailAssets.backIcon} alt="" aria-hidden />
        </button>
        <h1>Itinerary Saya</h1>
      </header>

      <div className="profile-itinerary-scroll">
        {bookings.length === 0 && <p className="profile-itinerary-empty">Belum ada itinerary perjalanan.</p>}

        {bookings.map((booking) => {
          const effectiveStatus = getEffectiveStatus(booking)
          const itineraryDays = itineraryByBookingId[booking.id] ?? fallbackItineraryDays

          return (
            <article key={booking.id} className="profile-itinerary-card">
              <div className="profile-itinerary-card-top">
                <h2>{booking.packageName}</h2>
                <span className={`profile-itinerary-badge ${effectiveStatus}`}>{statusBadgeLabel[effectiveStatus]}</span>
              </div>

              <div className="profile-itinerary-meta-row">
                <span>
                  <img src={assets.clockIcon} alt="Durasi" />
                  {booking.durationLabel}
                </span>
                <span>
                  <img src={assets.calendarIcon} alt="Tanggal" />
                  {getDateRangeLabel(booking, itineraryDays)}
                </span>
              </div>

              <hr />

              <button
                type="button"
                className="profile-itinerary-detail-btn"
                onClick={() => onOpenDetail(booking.id)}
              >
                <span>Tap untuk lihat detail</span>
                <img src={assets.chevronRightIcon} alt="Lihat detail" />
              </button>
            </article>
          )
        })}
      </div>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}