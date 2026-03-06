import { useMemo, useState } from 'react'
import type { UmrahHotelSearchAssets } from '../types'

const weekdayHeaders = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']

type HotelSearchResult = {
  destinationCity: string
  checkInDate: Date
  checkOutDate: Date
  guests: number
}

type UmrahHotelSearchScreenProps = {
  assets: UmrahHotelSearchAssets
  destinationOptions: string[]
  recentDestinations: string[]
  nearbyDestination: string
  initialDestinationCity: string | null
  initialCheckInDate: Date
  initialCheckOutDate: Date
  initialGuests: number
  onBack: () => void
  onSearch: (payload: HotelSearchResult) => void
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function addDays(date: Date, days: number) {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return startOfDay(next)
}

function monthLabel(date: Date) {
  const label = date.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })
  return label.charAt(0).toUpperCase() + label.slice(1)
}

function isSameDate(left: Date, right: Date) {
  return left.getDate() === right.getDate() && left.getMonth() === right.getMonth() && left.getFullYear() === right.getFullYear()
}

function buildCalendarCells(visibleMonth: Date) {
  const year = visibleMonth.getFullYear()
  const month = visibleMonth.getMonth()
  const firstDay = new Date(year, month, 1)
  const totalDays = new Date(year, month + 1, 0).getDate()
  const mondayIndex = (firstDay.getDay() + 6) % 7

  const cells: Array<Date | null> = []

  for (let index = 0; index < mondayIndex; index += 1) {
    cells.push(null)
  }

  for (let day = 1; day <= totalDays; day += 1) {
    cells.push(new Date(year, month, day))
  }

  const totalCells = Math.ceil(cells.length / 7) * 7
  while (cells.length < totalCells) {
    cells.push(null)
  }

  return cells
}

function formatHotelDateLabel(date: Date) {
  const weekday = date.toLocaleDateString('id-ID', { weekday: 'short' })
  const day = date.toLocaleDateString('id-ID', { day: '2-digit' })
  const month = date.toLocaleDateString('id-ID', { month: 'short' })
  return `${weekday}, ${day} ${month}`
}

export function UmrahHotelSearchScreen({
  assets,
  destinationOptions,
  recentDestinations,
  nearbyDestination,
  initialDestinationCity,
  initialCheckInDate,
  initialCheckOutDate,
  initialGuests,
  onBack,
  onSearch,
}: UmrahHotelSearchScreenProps) {
  const minimumCheckInDate = useMemo(() => {
    const today = startOfDay(new Date())
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow
  }, [])

  const normalizedInitialCheckIn = startOfDay(initialCheckInDate)
  const safeInitialCheckIn = normalizedInitialCheckIn.getTime() < minimumCheckInDate.getTime() ? minimumCheckInDate : normalizedInitialCheckIn
  const normalizedInitialCheckOut = startOfDay(initialCheckOutDate)
  const fallbackCheckOut = new Date(safeInitialCheckIn)
  fallbackCheckOut.setDate(fallbackCheckOut.getDate() + 1)
  const safeInitialCheckOut = normalizedInitialCheckOut.getTime() <= safeInitialCheckIn.getTime() ? fallbackCheckOut : normalizedInitialCheckOut

  const [destinationCity, setDestinationCity] = useState<string | null>(initialDestinationCity)
  const [checkInDate, setCheckInDate] = useState<Date>(safeInitialCheckIn)
  const [checkOutDate, setCheckOutDate] = useState<Date>(safeInitialCheckOut)
  const [guests, setGuests] = useState<number>(Math.max(1, initialGuests))
  const [draftCheckInDate, setDraftCheckInDate] = useState<Date>(safeInitialCheckIn)
  const [draftCheckOutDate, setDraftCheckOutDate] = useState<Date>(safeInitialCheckOut)
  const [draftGuests, setDraftGuests] = useState({
    dewasa: Math.max(1, Math.round(initialGuests)),
    anak: 0,
    bayi: 0,
  })
  const [calendarMonth, setCalendarMonth] = useState<Date>(new Date(safeInitialCheckIn.getFullYear(), safeInitialCheckIn.getMonth(), 1))
  const [locationQuery, setLocationQuery] = useState('')
  const [activeSheet, setActiveSheet] = useState<null | 'destination' | 'check-in' | 'check-out' | 'guests'>(null)
  const [hasAttemptedSearch, setHasAttemptedSearch] = useState(false)

  const allDestinationOptions = useMemo(() => {
    return Array.from(new Set([...destinationOptions, ...recentDestinations]))
  }, [destinationOptions, recentDestinations])

  const filteredDestinationOptions = useMemo(() => {
    const query = locationQuery.trim().toLowerCase()
    if (!query) {
      return allDestinationOptions
    }

    return allDestinationOptions.filter((option) => option.toLowerCase().includes(query))
  }, [allDestinationOptions, locationQuery])

  const checkInInvalid = checkInDate.getTime() < minimumCheckInDate.getTime()
  const checkOutInvalid = checkOutDate.getTime() <= checkInDate.getTime()
  const destinationInvalid = !destinationCity
  const guestsInvalid = guests < 1
  const calendarCells = useMemo(() => buildCalendarCells(calendarMonth), [calendarMonth])
  const totalGuestsDraft = draftGuests.dewasa + draftGuests.anak + draftGuests.bayi

  const openCheckInSheet = () => {
    setDraftCheckInDate(checkInDate)
    setCalendarMonth(new Date(checkInDate.getFullYear(), checkInDate.getMonth(), 1))
    setActiveSheet('check-in')
  }

  const openCheckOutSheet = () => {
    setDraftCheckOutDate(checkOutDate)
    setCalendarMonth(new Date(checkOutDate.getFullYear(), checkOutDate.getMonth(), 1))
    setActiveSheet('check-out')
  }

  const openGuestsSheet = () => {
    const defaultGuestCount = Math.max(1, guests)
    setDraftGuests({
      dewasa: defaultGuestCount,
      anak: 0,
      bayi: 0,
    })
    setActiveSheet('guests')
  }

  return (
    <section className="phone-shell umrah-hotel-search-shell" aria-label="Cari tiket hotel">
      <button type="button" className="umrah-flight-back" aria-label="Kembali" onClick={onBack}>
        <img src={assets.backIcon} alt="" aria-hidden />
      </button>
      <h1>Cari Tiket Hotel</h1>

      <div className="umrah-flight-search-blur" aria-hidden />

      <div className="umrah-hotel-search-fields">
        <button
          type="button"
          className={`flight-search-field${hasAttemptedSearch && destinationInvalid ? ' invalid' : ''}`}
          onClick={() => {
            setLocationQuery('')
            setActiveSheet('destination')
          }}
        >
          <img src={assets.iconLocation} alt="" aria-hidden />
          <span className={destinationCity ? 'filled' : ''}>{destinationCity ?? 'Kota, hotel, nama tempat'}</span>
        </button>
        {hasAttemptedSearch && destinationInvalid && <p className="flight-field-error">Pilih destinasi hotel</p>}

        <div className="umrah-flight-search-row">
          <button
            type="button"
            className={`flight-search-field half${hasAttemptedSearch && checkInInvalid ? ' invalid' : ''}`}
            onClick={openCheckInSheet}
          >
            <img src={assets.iconCalendar} alt="" aria-hidden />
            <span className="filled">{formatHotelDateLabel(checkInDate)}</span>
          </button>

          <button
            type="button"
            className={`flight-search-field half${hasAttemptedSearch && checkOutInvalid ? ' invalid' : ''}`}
            onClick={openCheckOutSheet}
          >
            <img src={assets.iconCalendar} alt="" aria-hidden />
            <span className="filled">{formatHotelDateLabel(checkOutDate)}</span>
          </button>
        </div>

        {hasAttemptedSearch && checkInInvalid && <p className="flight-field-error">Check in minimal besok</p>}
        {hasAttemptedSearch && checkOutInvalid && <p className="flight-field-error">Check out harus setelah check in</p>}

        <button
          type="button"
          className={`flight-search-field${hasAttemptedSearch && guestsInvalid ? ' invalid' : ''}`}
          onClick={openGuestsSheet}
        >
          <img src={assets.iconGuest} alt="" aria-hidden />
          <span className="filled">{guests} Dewasa</span>
        </button>

        {hasAttemptedSearch && guestsInvalid && <p className="flight-field-error">Minimal 1 tamu</p>}
      </div>

      <button
        type="button"
        className="umrah-flight-search-submit"
        onClick={() => {
          const hasInvalidField = destinationInvalid || checkInInvalid || checkOutInvalid || guestsInvalid
          if (hasInvalidField) {
            setHasAttemptedSearch(true)
            return
          }

          onSearch({
            destinationCity: destinationCity!,
            checkInDate,
            checkOutDate,
            guests,
          })
        }}
      >
        Cari Sekarang
      </button>

      {activeSheet && <div className="flight-search-sheet-overlay" />}

      {activeSheet === 'destination' && (
        <section className="flight-search-sheet hotel-location-sheet" role="dialog" aria-modal="true" aria-label="Pilih destinasi">
          <header>
            <h2>Pilih Destinasi</h2>
            <button type="button" aria-label="Tutup" onClick={() => setActiveSheet(null)}>
              ×
            </button>
          </header>

          <label className="flight-search-box">
            <img src={assets.iconSearch} alt="" aria-hidden />
            <input
              value={locationQuery}
              onChange={(event) => setLocationQuery(event.target.value)}
              placeholder="Kota, hotel, nama tempat"
            />
          </label>

          <div className="hotel-location-shortcuts">
            <button
              type="button"
              className="hotel-location-shortcut"
              onClick={() => {
                setDestinationCity(nearbyDestination)
                setActiveSheet(null)
              }}
            >
              <span>
                <img src={assets.iconNearMe} alt="" aria-hidden />
              </span>
              Di sekitar saya ({nearbyDestination})
            </button>

            <button type="button" className="hotel-location-shortcut" onClick={() => setActiveSheet(null)}>
              <span>
                <img src={assets.iconMap} alt="" aria-hidden />
              </span>
              Lihat melalui peta
            </button>
          </div>

          <div className="hotel-location-list">
            <p>Terakhir pencarian</p>
            {recentDestinations.map((option) => (
              <button
                key={`recent-${option}`}
                type="button"
                className="hotel-location-item"
                onClick={() => {
                  setDestinationCity(option)
                  setActiveSheet(null)
                }}
              >
                <img src={assets.iconClock} alt="" aria-hidden />
                {option}
              </button>
            ))}

            {filteredDestinationOptions.length > 0 && (
              <>
                <p>Semua destinasi</p>
                {filteredDestinationOptions.map((option) => (
                  <button
                    key={`all-${option}`}
                    type="button"
                    className="hotel-location-item"
                    onClick={() => {
                      setDestinationCity(option)
                      setActiveSheet(null)
                    }}
                  >
                    <img src={assets.iconClock} alt="" aria-hidden />
                    {option}
                  </button>
                ))}
              </>
            )}
          </div>
        </section>
      )}

      {activeSheet === 'check-in' && (
        <section className="flight-search-sheet" role="dialog" aria-modal="true" aria-label="Tanggal check in">
          <header>
            <h2>Tanggal Check In</h2>
            <button type="button" aria-label="Tutup" onClick={() => setActiveSheet(null)}>
              ×
            </button>
          </header>

          <div className="flight-calendar-head">
            <p>{monthLabel(calendarMonth)}</p>
            <div>
              <button type="button" aria-label="Bulan sebelumnya" onClick={() => setCalendarMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}>
                ‹
              </button>
              <button type="button" aria-label="Bulan berikutnya" onClick={() => setCalendarMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}>
                ›
              </button>
            </div>
          </div>

          <div className="flight-calendar-grid weekdays" aria-hidden>
            {weekdayHeaders.map((day, index) => (
              <span key={day} className={index >= 5 ? 'holiday' : ''}>
                {day}
              </span>
            ))}
          </div>

          <div className="flight-calendar-grid dates">
            {calendarCells.map((date, index) => {
              const isSelected = date ? isSameDate(date, draftCheckInDate) : false
              const isHoliday = index % 7 >= 5
              const isPastDate = date ? startOfDay(date).getTime() < minimumCheckInDate.getTime() : false

              return (
                <button
                  key={date ? date.toISOString() : `empty-checkin-${index}`}
                  type="button"
                  className={`${isSelected ? 'selected' : ''} ${isHoliday ? 'holiday' : ''}`}
                  disabled={!date || isPastDate}
                  onClick={() => {
                    if (!date) {
                      return
                    }

                    setDraftCheckInDate(startOfDay(date))
                  }}
                >
                  {date ? date.getDate() : ''}
                </button>
              )
            })}
          </div>

          <button
            type="button"
            className="flight-sheet-save"
            onClick={() => {
              setCheckInDate(draftCheckInDate)
              const minimumCheckOut = addDays(draftCheckInDate, 1)
              if (checkOutDate.getTime() <= draftCheckInDate.getTime()) {
                setCheckOutDate(minimumCheckOut)
              }
              if (draftCheckOutDate.getTime() <= draftCheckInDate.getTime()) {
                setDraftCheckOutDate(minimumCheckOut)
              }
              setActiveSheet(null)
            }}
          >
            Simpan
          </button>
        </section>
      )}

      {activeSheet === 'check-out' && (
        <section className="flight-search-sheet" role="dialog" aria-modal="true" aria-label="Tanggal check out">
          <header>
            <h2>Tanggal Check Out</h2>
            <button type="button" aria-label="Tutup" onClick={() => setActiveSheet(null)}>
              ×
            </button>
          </header>

          <div className="flight-calendar-head">
            <p>{monthLabel(calendarMonth)}</p>
            <div>
              <button type="button" aria-label="Bulan sebelumnya" onClick={() => setCalendarMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}>
                ‹
              </button>
              <button type="button" aria-label="Bulan berikutnya" onClick={() => setCalendarMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}>
                ›
              </button>
            </div>
          </div>

          <div className="flight-calendar-grid weekdays" aria-hidden>
            {weekdayHeaders.map((day, index) => (
              <span key={day} className={index >= 5 ? 'holiday' : ''}>
                {day}
              </span>
            ))}
          </div>

          <div className="flight-calendar-grid dates">
            {calendarCells.map((date, index) => {
              const isSelected = date ? isSameDate(date, draftCheckOutDate) : false
              const isHoliday = index % 7 >= 5
              const minimumCheckOut = addDays(checkInDate, 1)
              const isInvalidDate = date ? startOfDay(date).getTime() < minimumCheckOut.getTime() : false

              return (
                <button
                  key={date ? date.toISOString() : `empty-checkout-${index}`}
                  type="button"
                  className={`${isSelected ? 'selected' : ''} ${isHoliday ? 'holiday' : ''}`}
                  disabled={!date || isInvalidDate}
                  onClick={() => {
                    if (!date) {
                      return
                    }

                    setDraftCheckOutDate(startOfDay(date))
                  }}
                >
                  {date ? date.getDate() : ''}
                </button>
              )
            })}
          </div>

          <button
            type="button"
            className="flight-sheet-save"
            onClick={() => {
              setCheckOutDate(draftCheckOutDate)
              setActiveSheet(null)
            }}
          >
            Simpan
          </button>
        </section>
      )}

      {activeSheet === 'guests' && (
        <section className="flight-search-sheet small" role="dialog" aria-modal="true" aria-label="Jumlah tamu">
          <header>
            <h2>Tamu</h2>
            <button type="button" aria-label="Tutup" onClick={() => setActiveSheet(null)}>
              ×
            </button>
          </header>

          {([
            ['dewasa', 'Dewasa'],
            ['anak', 'Anak - anak'],
            ['bayi', 'Bayi'],
          ] as const).map(([key, label]) => (
            <div key={key} className="flight-counter-row">
              <p>{label}</p>
              <div>
                <button
                  type="button"
                  className="minus"
                  disabled={key === 'dewasa' ? draftGuests[key] <= 1 : draftGuests[key] <= 0}
                  onClick={() => setDraftGuests((prev) => ({ ...prev, [key]: Math.max(prev[key] - 1, key === 'dewasa' ? 1 : 0) }))}
                >
                  −
                </button>
                <strong>{draftGuests[key]}</strong>
                <button type="button" className="plus" onClick={() => setDraftGuests((prev) => ({ ...prev, [key]: prev[key] + 1 }))}>
                  +
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            className="flight-sheet-save"
            onClick={() => {
              setGuests(Math.max(1, totalGuestsDraft))
              setActiveSheet(null)
            }}
          >
            Simpan
          </button>
        </section>
      )}

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
