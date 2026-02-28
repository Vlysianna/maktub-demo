import { useMemo, useState } from 'react'
import type {
  ItineraryActivity,
  ItineraryDay,
  ItinerarySuggestionGroup,
  MyBookingAssets,
  MyBookingDetailAssets,
} from '../types'

type MyBookingItineraryEditScreenProps = {
  assets: MyBookingAssets
  detailAssets: MyBookingDetailAssets
  initialDays: ItineraryDay[]
  suggestionGroups: ItinerarySuggestionGroup[]
  onBack: () => void
  onSave: (days: ItineraryDay[]) => void
}

const defaultAdditionalTimes = ['17:00', '18:00', '19:00', '20:00', '21:00']

function buildAddedActivities(selectedLabels: string[], existingCount: number): ItineraryActivity[] {
  return selectedLabels.map((label, index) => ({
    id: `added-${existingCount + index}-${label.slice(0, 12)}`,
    time: defaultAdditionalTimes[(existingCount + index) % defaultAdditionalTimes.length],
    description: label,
  }))
}

export function MyBookingItineraryEditScreen({
  assets,
  detailAssets,
  initialDays,
  suggestionGroups,
  onBack,
  onSave,
}: MyBookingItineraryEditScreenProps) {
  const [days, setDays] = useState<ItineraryDay[]>(initialDays)
  const [activeDayId, setActiveDayId] = useState<string | null>(null)
  const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([])

  const activeDay = useMemo(() => days.find((day) => day.id === activeDayId) ?? null, [activeDayId, days])

  const suggestionLabelMap = useMemo(() => {
    const entries = suggestionGroups.flatMap((group) => group.options.map((option) => [option.id, option.label] as const))
    return Object.fromEntries(entries)
  }, [suggestionGroups])

  const openModal = (dayId: string) => {
    setSelectedOptionIds([])
    setActiveDayId(dayId)
  }

  const handleToggleOption = (optionId: string) => {
    setSelectedOptionIds((prev) => (prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId]))
  }

  const handleAddActivities = () => {
    if (!activeDay || selectedOptionIds.length === 0) {
      setActiveDayId(null)
      return
    }

    const selectedLabels = selectedOptionIds.map((id) => suggestionLabelMap[id]).filter(Boolean)

    if (selectedLabels.length === 0) {
      setActiveDayId(null)
      return
    }

    setDays((prev) =>
      prev.map((day) => {
        if (day.id !== activeDay.id) {
          return day
        }

        return {
          ...day,
          activities: [...day.activities, ...buildAddedActivities(selectedLabels, day.activities.length)],
        }
      }),
    )

    setActiveDayId(null)
  }

  return (
    <section className="phone-shell itinerary-shell" aria-label="Edit Itinerary">
      <header className="itinerary-header">
        <button type="button" className="itinerary-back" onClick={onBack} aria-label="Kembali">
          <img src={detailAssets.backIcon} alt="" aria-hidden />
        </button>
        <h1>Edit Itinerary</h1>
      </header>

      <div className="itinerary-scroll edit">
        <div className="itinerary-note">
          Itinerary ini adalah saran dan rekomendasi kami berdasarkan waktu perjalanan Anda.
        </div>

        <div className="itinerary-day-list">
          {days.map((day) => (
            <article key={day.id} className={`itinerary-card ${day.editable === false ? 'locked' : ''}`}>
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

              {day.editable !== false && (
                <button type="button" className="itinerary-add-btn" onClick={() => openModal(day.id)}>
                  Tambah kegiatan
                </button>
              )}
            </article>
          ))}
        </div>
      </div>

      <div className="itinerary-action-wrap">
        <button type="button" className="itinerary-primary-btn" onClick={() => onSave(days)}>
          Simpan
        </button>
      </div>

      {activeDay && (
        <div className="itinerary-modal-overlay" role="presentation">
          <div className="itinerary-modal-sheet" role="dialog" aria-label="Tambah Kegiatan">
            <div className="itinerary-modal-handle" />

            <div className="itinerary-modal-head">
              <h2>Tambah Kegiatan</h2>
              <button type="button" onClick={() => setActiveDayId(null)} aria-label="Tutup">
                ✕
              </button>
            </div>

            <div className="itinerary-modal-content">
              {suggestionGroups.map((group) => (
                <section key={group.id} className="itinerary-modal-group">
                  <h3>{group.title}</h3>
                  <div className="itinerary-modal-options">
                    {group.options.map((option) => (
                      <label key={option.id} className="itinerary-modal-option">
                        <input
                          type="checkbox"
                          checked={selectedOptionIds.includes(option.id)}
                          onChange={() => handleToggleOption(option.id)}
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <button type="button" className="itinerary-primary-btn" onClick={handleAddActivities}>
              Tambah
            </button>
          </div>
        </div>
      )}

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
