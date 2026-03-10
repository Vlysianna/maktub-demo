import { useMemo, useState } from 'react'
import type { AirportOption, UmrahFlightSearchAssets } from '../types'

const weekdayHeaders = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']

type PassengerState = {
  dewasa: number
  anak: number
  bayi: number
}

type FlightCabinClass = string

type DestinationOption = {
  city: string
  code: string
  country?: string
}

type FlightSearchResult = {
  departureCode: string
  destinationCity: string
  departureDate: Date
  returnDate: Date
  passengers: PassengerState
  cabinClass: FlightCabinClass
}

type UmrahFlightSearchScreenProps = {
  assets: UmrahFlightSearchAssets
  cabinClasses: string[]
  departureOptions: AirportOption[]
  destinationOptions: DestinationOption[]
  initialDepartureCode: string | null
  initialDestinationCity: string | null
  initialDepartureDate: Date
  initialReturnDate: Date
  initialPassengers: PassengerState
  initialCabinClass: FlightCabinClass | null
  onBack: () => void
  onSearch: (payload: FlightSearchResult) => void
}

function monthLabel(date: Date) {
  const label = date.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })
  return label.charAt(0).toUpperCase() + label.slice(1)
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function addDays(date: Date, days: number) {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return startOfDay(next)
}

function maxDate(left: Date, right: Date) {
  return left.getTime() >= right.getTime() ? left : right
}

function isSameDate(left: Date, right: Date) {
  return left.getDate() === right.getDate() && left.getMonth() === right.getMonth() && left.getFullYear() === right.getFullYear()
}

function formatDateLabel(date: Date) {
  return date.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
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

export function UmrahFlightSearchScreen({
  assets,
  cabinClasses,
  departureOptions,
  destinationOptions,
  initialDepartureCode,
  initialDestinationCity,
  initialDepartureDate,
  initialReturnDate,
  initialPassengers,
  initialCabinClass,
  onBack,
  onSearch,
}: UmrahFlightSearchScreenProps) {
  const minimumDepartureDate = addDays(startOfDay(new Date()), 1)
  const normalizedInitialDepartureDate = maxDate(startOfDay(initialDepartureDate), minimumDepartureDate)
  const normalizedInitialReturnDate = maxDate(startOfDay(initialReturnDate), normalizedInitialDepartureDate)

  const [departureCode, setDepartureCode] = useState<string | null>(initialDepartureCode)
  const [destinationCity, setDestinationCity] = useState<string | null>(initialDestinationCity)
  const [departureDate, setDepartureDate] = useState<Date>(normalizedInitialDepartureDate)
  const [returnDate, setReturnDate] = useState<Date>(normalizedInitialReturnDate)
  const [passengers, setPassengers] = useState<PassengerState>(initialPassengers)
  const [cabinClass, setCabinClass] = useState<FlightCabinClass | null>(initialCabinClass)

  const [activeSheet, setActiveSheet] = useState<
    null | 'departure' | 'destination' | 'departure-date' | 'return-date' | 'passengers' | 'class'
  >(null)

  const [draftDepartureCode, setDraftDepartureCode] = useState<string | null>(departureCode)
  const [draftDestinationCity, setDraftDestinationCity] = useState<string | null>(destinationCity)
  const [draftDepartureDate, setDraftDepartureDate] = useState<Date>(departureDate)
  const [draftReturnDate, setDraftReturnDate] = useState<Date>(returnDate)
  const [draftPassengers, setDraftPassengers] = useState<PassengerState>(passengers)
  const [draftCabinClass, setDraftCabinClass] = useState<FlightCabinClass | null>(cabinClass)

  const [departureQuery, setDepartureQuery] = useState('')
  const [destinationQuery, setDestinationQuery] = useState('')
  const [departureMonth, setDepartureMonth] = useState<Date>(new Date(departureDate.getFullYear(), departureDate.getMonth(), 1))
  const [returnMonth, setReturnMonth] = useState<Date>(new Date(returnDate.getFullYear(), returnDate.getMonth(), 1))

  const [hasAttemptedSearch, setHasAttemptedSearch] = useState(false)

  const departureOption = departureOptions.find((option) => option.code === departureCode)
  const destinationOption = destinationOptions.find((option) => option.city === destinationCity)
  const passengerTotal = passengers.dewasa + passengers.anak + passengers.bayi

  const filteredDepartureOptions = useMemo(() => {
    const query = departureQuery.trim().toLowerCase()
    if (!query) {
      return departureOptions
    }

    return departureOptions.filter((option) => {
      const text = `${option.label} ${option.code}`.toLowerCase()
      return text.includes(query)
    })
  }, [departureOptions, departureQuery])

  const filteredDestinationOptions = useMemo(() => {
    const query = destinationQuery.trim().toLowerCase()
    if (!query) {
      return destinationOptions
    }

    return destinationOptions.filter((option) => {
      const text = `${option.city} ${option.code}`.toLowerCase()
      return text.includes(query)
    })
  }, [destinationOptions, destinationQuery])

  const departureDateCells = useMemo(() => buildCalendarCells(departureMonth), [departureMonth])
  const returnDateCells = useMemo(() => buildCalendarCells(returnMonth), [returnMonth])

  const openDepartureSheet = () => {
    setDraftDepartureCode(departureCode)
    setDepartureQuery('')
    setActiveSheet('departure')
  }

  const openDestinationSheet = () => {
    setDraftDestinationCity(destinationCity)
    setDestinationQuery('')
    setActiveSheet('destination')
  }

  const openDepartureDateSheet = () => {
    setDraftDepartureDate(maxDate(departureDate, minimumDepartureDate))
    setDepartureMonth(new Date(departureDate.getFullYear(), departureDate.getMonth(), 1))
    setActiveSheet('departure-date')
  }

  const openReturnDateSheet = () => {
    setDraftReturnDate(maxDate(returnDate, departureDate))
    setReturnMonth(new Date(returnDate.getFullYear(), returnDate.getMonth(), 1))
    setActiveSheet('return-date')
  }

  const openPassengerSheet = () => {
    setDraftPassengers(passengers)
    setActiveSheet('passengers')
  }

  const openClassSheet = () => {
    setDraftCabinClass(cabinClass)
    setActiveSheet('class')
  }

  const canSearch = Boolean(departureOption && destinationOption && cabinClass && passengers.dewasa >= 1)

  return (
    <section className="phone-shell umrah-flight-search-shell" aria-label="Cari tiket pesawat">
      <button type="button" className="umrah-flight-back" aria-label="Kembali" onClick={onBack}>
        <img src={assets.backIcon} alt="" aria-hidden />
      </button>

      <h1>Cari Tiket Pesawat</h1>

      <div className="umrah-flight-search-blur" aria-hidden />

      <div className="umrah-flight-search-fields">
        <button type="button" className={`flight-search-field${hasAttemptedSearch && !departureOption ? ' invalid' : ''}`} onClick={openDepartureSheet}>
          <img src={assets.iconTakeOff} alt="" aria-hidden />
          <span className={departureOption ? 'filled' : ''}>
            {departureOption ? (
              <>
                <strong>{departureOption.label}</strong>
                <em>{departureOption.code}</em>
              </>
            ) : (
              'Dari'
            )}
          </span>
        </button>
        {hasAttemptedSearch && !departureOption && (
          <p className="flight-field-error">Pilih kota keberangkatan</p>
        )}

        <button type="button" className={`flight-search-field${hasAttemptedSearch && !destinationOption ? ' invalid' : ''}`} onClick={openDestinationSheet}>
          <img src={assets.iconLanding} alt="" aria-hidden />
          <span className={destinationOption ? 'filled' : ''}>
            {destinationOption ? (
              <>
                <strong>{destinationOption.city}</strong>
                <em>{destinationOption.code}</em>
              </>
            ) : (
              'Ke'
            )}
          </span>
        </button>
        {hasAttemptedSearch && !destinationOption && (
          <p className="flight-field-error">Pilih kota tujuan</p>
        )}

        <button
          type="button"
          className="flight-swap-btn"
          aria-label="Tukar asal dan tujuan"
          onClick={() => {
            if (!departureOption || !destinationOption) {
              return
            }

            const nextDeparture = departureOptions.find((option) => option.code === destinationOption.code)
            const currentDepartureCity = departureOption.label.split(',')[0]
            const nextDestination = destinationOptions.find((option) => option.city === currentDepartureCity)

            if (!nextDeparture || !nextDestination) {
              return
            }

            setDepartureCode(nextDeparture.code)
            setDestinationCity(nextDestination.city)
          }}
        >
          <img src={assets.iconSwap} alt="" aria-hidden />
        </button>
      </div>

      <div className="umrah-flight-search-row">
        <button type="button" className="flight-search-field half" onClick={openDepartureDateSheet}>
          <img src={assets.iconCalendar} alt="" aria-hidden />
          <span className="filled">{formatDateLabel(departureDate)}</span>
        </button>

        <button type="button" className="flight-search-field half" onClick={openReturnDateSheet}>
          <img src={assets.iconCalendar} alt="" aria-hidden />
          <span className="filled">{formatDateLabel(returnDate)}</span>
        </button>
      </div>

      <button type="button" className={`flight-search-field${hasAttemptedSearch && passengers.dewasa < 1 ? ' invalid' : ''}`} onClick={openPassengerSheet}>
        <img src={assets.iconPassenger} alt="" aria-hidden />
        <span className={passengerTotal > 0 ? 'filled' : ''}>{passengerTotal > 0 ? `${passengerTotal} Penumpang` : 'Penumpang'}</span>
      </button>
      {hasAttemptedSearch && passengers.dewasa < 1 && (
        <p className="flight-field-error">Minimal 1 penumpang dewasa</p>
      )}

      <button type="button" className={`flight-search-field${hasAttemptedSearch && !cabinClass ? ' invalid' : ''}`} onClick={openClassSheet}>
        <img src={assets.iconSeat} alt="" aria-hidden />
        <span className={cabinClass ? 'filled' : ''}>{cabinClass ?? 'Kelas'}</span>
      </button>
      {hasAttemptedSearch && !cabinClass && (
        <p className="flight-field-error">Pilih kelas penerbangan</p>
      )}

      <button
        type="button"
        className="umrah-flight-search-submit"
        onClick={() => {
          if (!canSearch) {
            setHasAttemptedSearch(true)
            return
          }

          onSearch({
            departureCode: departureOption!.code,
            destinationCity: destinationOption!.city,
            departureDate,
            returnDate,
            passengers,
            cabinClass: cabinClass!,
          })
        }}
      >
        Cari Sekarang
      </button>

      {activeSheet && <div className="flight-search-sheet-overlay" />}

      {activeSheet === 'departure' && (
        <section className="flight-search-sheet" role="dialog" aria-modal="true" aria-label="Pilih keberangkatan">
          <header>
            <h2>Pilih Keberangkatan</h2>
            <button type="button" aria-label="Tutup" onClick={() => setActiveSheet(null)}>
              ×
            </button>
          </header>

          <label className="flight-search-box">
            <img src={assets.iconSearch} alt="" aria-hidden />
            <input value={departureQuery} onChange={(event) => setDepartureQuery(event.target.value)} placeholder="Masukan nama kota.." />
          </label>

          <div className="flight-radio-list">
            {filteredDepartureOptions.map((option) => (
              <button key={option.code} type="button" className="flight-radio-row" onClick={() => setDraftDepartureCode(option.code)}>
                <span>
                  <strong>{option.label}</strong>
                  <em>{option.code}</em>
                </span>
                <i className={draftDepartureCode === option.code ? 'active' : ''} aria-hidden />
              </button>
            ))}
          </div>

          <button
            type="button"
            className="flight-sheet-save"
            onClick={() => {
              setDepartureCode(draftDepartureCode)
              setActiveSheet(null)
            }}
          >
            Simpan
          </button>
        </section>
      )}

      {activeSheet === 'destination' && (
        <section className="flight-search-sheet" role="dialog" aria-modal="true" aria-label="Pilih tujuan">
          <header>
            <h2>Pilih Tujuan</h2>
            <button type="button" aria-label="Tutup" onClick={() => setActiveSheet(null)}>
              ×
            </button>
          </header>

          <label className="flight-search-box">
            <img src={assets.iconSearch} alt="" aria-hidden />
            <input value={destinationQuery} onChange={(event) => setDestinationQuery(event.target.value)} placeholder="Masukan nama kota.." />
          </label>

          <div className="flight-radio-list">
            {filteredDestinationOptions.map((option) => (
              <button key={option.city} type="button" className="flight-radio-row" onClick={() => setDraftDestinationCity(option.city)}>
                <span>
                  <strong>{option.city}{option.country ? `, ${option.country}` : ''}</strong>
                  <em>{option.code}</em>
                </span>
                <i className={draftDestinationCity === option.city ? 'active' : ''} aria-hidden />
              </button>
            ))}
          </div>

          <button
            type="button"
            className="flight-sheet-save"
            onClick={() => {
              setDestinationCity(draftDestinationCity)
              setActiveSheet(null)
            }}
          >
            Simpan
          </button>
        </section>
      )}

      {activeSheet === 'departure-date' && (
        <section className="flight-search-sheet" role="dialog" aria-modal="true" aria-label="Tanggal keberangkatan">
          <header>
            <h2>Tanggal Keberangkatan</h2>
            <button type="button" aria-label="Tutup" onClick={() => setActiveSheet(null)}>
              ×
            </button>
          </header>

          <div className="flight-calendar-head">
            <p>{monthLabel(departureMonth)}</p>
            <div>
              <button type="button" aria-label="Bulan sebelumnya" onClick={() => setDepartureMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}>
                ‹
              </button>
              <button type="button" aria-label="Bulan berikutnya" onClick={() => setDepartureMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}>
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
            {departureDateCells.map((date, index) => {
              const isSelected = date ? isSameDate(date, draftDepartureDate) : false
              const isHoliday = index % 7 >= 5
              const isPastDate = date ? startOfDay(date).getTime() < minimumDepartureDate.getTime() : false

              return (
                <button
                  key={date ? date.toISOString() : `empty-${index}`}
                  type="button"
                  className={`${isSelected ? 'selected' : ''} ${isHoliday ? 'holiday' : ''}`}
                  disabled={!date || isPastDate}
                  onClick={() => {
                    if (date) {
                      setDraftDepartureDate(startOfDay(date))
                    }
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
              setDepartureDate(draftDepartureDate)
              const syncedReturnDate = maxDate(returnDate, draftDepartureDate)
              setReturnDate(syncedReturnDate)
              setDraftReturnDate(syncedReturnDate)
              setActiveSheet(null)
            }}
          >
            Simpan
          </button>
        </section>
      )}

      {activeSheet === 'return-date' && (
        <section className="flight-search-sheet" role="dialog" aria-modal="true" aria-label="Tanggal kepulangan">
          <header>
            <h2>Tanggal Kepulangan</h2>
            <button type="button" aria-label="Tutup" onClick={() => setActiveSheet(null)}>
              ×
            </button>
          </header>

          <div className="flight-calendar-head">
            <p>{monthLabel(returnMonth)}</p>
            <div>
              <button type="button" aria-label="Bulan sebelumnya" onClick={() => setReturnMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}>
                ‹
              </button>
              <button type="button" aria-label="Bulan berikutnya" onClick={() => setReturnMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}>
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
            {returnDateCells.map((date, index) => {
              const isSelected = date ? isSameDate(date, draftReturnDate) : false
              const isHoliday = index % 7 >= 5
              const isBeforeDeparture = date ? startOfDay(date).getTime() < startOfDay(departureDate).getTime() : false

              return (
                <button
                  key={date ? date.toISOString() : `empty-${index}`}
                  type="button"
                  className={`${isSelected ? 'selected' : ''} ${isHoliday ? 'holiday' : ''}`}
                  disabled={!date || isBeforeDeparture}
                  onClick={() => {
                    if (date) {
                      setDraftReturnDate(startOfDay(date))
                    }
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
              setReturnDate(draftReturnDate)
              setActiveSheet(null)
            }}
          >
            Simpan
          </button>
        </section>
      )}

      {activeSheet === 'passengers' && (
        <section className="flight-search-sheet small" role="dialog" aria-modal="true" aria-label="Jumlah penumpang">
          <header>
            <h2>Penumpang</h2>
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
                  disabled={key === 'dewasa' ? draftPassengers[key] <= 1 : draftPassengers[key] <= 0}
                  onClick={() => setDraftPassengers((prev) => ({ ...prev, [key]: Math.max(prev[key] - 1, key === 'dewasa' ? 1 : 0) }))}
                >
                  −
                </button>
                <strong>{draftPassengers[key]}</strong>
                <button type="button" className="plus" onClick={() => setDraftPassengers((prev) => ({ ...prev, [key]: prev[key] + 1 }))}>
                  +
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            className="flight-sheet-save"
            onClick={() => {
              setPassengers(draftPassengers)
              setActiveSheet(null)
            }}
          >
            Simpan
          </button>
        </section>
      )}

      {activeSheet === 'class' && (
        <section className="flight-search-sheet small" role="dialog" aria-modal="true" aria-label="Pilih kelas penerbangan">
          <header>
            <h2>Kelas</h2>
            <button type="button" aria-label="Tutup" onClick={() => setActiveSheet(null)}>
              ×
            </button>
          </header>

          <div className="flight-radio-list compact">
            {cabinClasses.map((item) => (
              <button key={item} type="button" className="flight-radio-row" onClick={() => setDraftCabinClass(item)}>
                <span>
                  <strong>{item}</strong>
                </span>
                <i className={draftCabinClass === item ? 'active' : ''} aria-hidden />
              </button>
            ))}
          </div>

          <button
            type="button"
            className="flight-sheet-save"
            onClick={() => {
              setCabinClass(draftCabinClass)
              setActiveSheet(null)
            }}
          >
            Simpan
          </button>
        </section>
      )}
    </section>
  )
}