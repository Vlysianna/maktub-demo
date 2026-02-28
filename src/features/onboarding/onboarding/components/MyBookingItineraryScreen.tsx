import type { ItineraryDay, MyBookingAssets, MyBookingDetailAssets } from '../types'

type MyBookingItineraryScreenProps = {
  assets: MyBookingAssets
  detailAssets: MyBookingDetailAssets
  days: ItineraryDay[]
  onBack: () => void
  onEdit: () => void
}

export function MyBookingItineraryScreen({ assets, detailAssets, days, onBack, onEdit }: MyBookingItineraryScreenProps) {
  return (
    <section className="phone-shell itinerary-shell" aria-label="Itinerary">
      <header className="itinerary-header">
        <button type="button" className="itinerary-back" onClick={onBack} aria-label="Kembali">
          <img src={detailAssets.backIcon} alt="" aria-hidden />
        </button>
        <h1>Itinerary</h1>
      </header>

      <div className="itinerary-scroll">
        <div className="itinerary-note">
          Itinerary ini adalah saran dan rekomendasi kami berdasarkan waktu perjalanan Anda.
        </div>

        <div className="itinerary-day-list">
          {days.map((day) => (
            <article key={day.id} className="itinerary-card">
              <div className="itinerary-card-head">
                <div className="itinerary-day-pill">
                  <img src={assets.calendarIcon} alt="Kalender" />
                  <span>
                    Hari ke {day.dayNumber} {day.dayLabel}, {day.dateLabel}
                  </span>
                </div>
                <p>{day.routeLabel}</p>
              </div>

              <div className="itinerary-events">
                {day.activities.map((activity) => (
                  <div key={activity.id} className="itinerary-event-row">
                    <div className="itinerary-time-wrap">
                      <span className="itinerary-bullet" aria-hidden />
                      <strong>{activity.time}</strong>
                    </div>
                    <p>{activity.description}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="itinerary-action-wrap">
        <button type="button" className="itinerary-primary-btn" onClick={onEdit}>
          Edit Itinerary
        </button>
      </div>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
