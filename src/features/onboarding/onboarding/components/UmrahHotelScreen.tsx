import { useMemo, useState } from 'react'
import type { HotelOffer, UmrahHotelAssets } from '../types'

type UmrahHotelScreenProps = {
  assets: UmrahHotelAssets
  cityLabel: string
  guestSummaryText?: string
  isSearchHotelOnly?: boolean
  sortOptions?: string[]
  priceRanges?: Array<{
    id: string
    label: string
    min: number
    max: number | null
  }>
  propertyTypes?: string[]
  facilityOptions?: string[]
  checkInLabel: string
  checkOutLabel: string
  nightsLabel: string
  initialStartDate: Date
  initialEndDate: Date
  passengerText: string
  roomText: string
  hotels: HotelOffer[]
  onBack: () => void
  onSelectHotel: (hotel: HotelOffer) => void
  onSaveDateRange: (startDate: Date, endDate: Date) => void
}

const weekdayHeaders = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']

const monthFormatter = new Intl.DateTimeFormat('id-ID', {
  month: 'long',
  year: 'numeric',
})

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function isSameDate(left: Date, right: Date) {
  return (
    left.getDate() === right.getDate() &&
    left.getMonth() === right.getMonth() &&
    left.getFullYear() === right.getFullYear()
  )
}

function monthLabel(date: Date) {
  const text = monthFormatter.format(date)
  return text.charAt(0).toUpperCase() + text.slice(1)
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

function toRupiah(amount: number) {
  return `Rp ${amount.toLocaleString('id-ID')}`
}

function renderStars(count: number) {
  return '★'.repeat(count)
}

function parseDistanceKm(distanceLabel: string) {
  const numericText = distanceLabel.replace(',', '.').match(/\d+(?:\.\d+)?/)?.[0]
  return numericText ? Number(numericText) : Number.POSITIVE_INFINITY
}

export function UmrahHotelScreen({
  assets,
  cityLabel,
  guestSummaryText,
  isSearchHotelOnly = false,
  sortOptions = [],
  priceRanges = [],
  propertyTypes = [],
  facilityOptions = [],
  checkInLabel,
  checkOutLabel,
  nightsLabel,
  initialStartDate,
  initialEndDate,
  passengerText,
  roomText,
  hotels,
  onBack,
  onSelectHotel,
  onSaveDateRange,
}: UmrahHotelScreenProps) {
  const [isDateModalOpen, setIsDateModalOpen] = useState(false)
  const [isSortModalOpen, setIsSortModalOpen] = useState(false)
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState<string | null>(sortOptions[0] ?? null)
  const [selectedPriceRangeId, setSelectedPriceRangeId] = useState<string | null>(null)
  const [selectedPropertyType, setSelectedPropertyType] = useState<string | null>(null)
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([])
  const [draftPriceRangeId, setDraftPriceRangeId] = useState<string | null>(selectedPriceRangeId)
  const [draftPropertyType, setDraftPropertyType] = useState<string | null>(selectedPropertyType)
  const [draftFacilities, setDraftFacilities] = useState<string[]>(selectedFacilities)
  const [draftStartDate, setDraftStartDate] = useState<Date | null>(null)
  const [draftEndDate, setDraftEndDate] = useState<Date | null>(null)
  const [firstVisibleMonth, setFirstVisibleMonth] = useState(() => new Date(initialStartDate.getFullYear(), initialStartDate.getMonth(), 1))

  const today = useMemo(() => startOfDay(new Date()), [])
  const firstMonthCells = useMemo(() => buildCalendarCells(firstVisibleMonth), [firstVisibleMonth])
  const secondVisibleMonth = useMemo(
    () => new Date(firstVisibleMonth.getFullYear(), firstVisibleMonth.getMonth() + 1, 1),
    [firstVisibleMonth],
  )
  const secondMonthCells = useMemo(() => buildCalendarCells(secondVisibleMonth), [secondVisibleMonth])

  const openDateModal = () => {
    setDraftStartDate(startOfDay(initialStartDate))
    setDraftEndDate(startOfDay(initialEndDate))
    setFirstVisibleMonth(new Date(initialStartDate.getFullYear(), initialStartDate.getMonth(), 1))
    setIsDateModalOpen(true)
  }

  const getIsDisabled = (date: Date) => {
    return startOfDay(date).getTime() < today.getTime()
  }

  const handleSelectDate = (date: Date) => {
    if (getIsDisabled(date)) {
      return
    }

    if (!draftStartDate || draftEndDate) {
      setDraftStartDate(date)
      setDraftEndDate(null)
      return
    }

    if (date.getTime() < draftStartDate.getTime()) {
      setDraftEndDate(draftStartDate)
      setDraftStartDate(date)
      return
    }

    setDraftEndDate(date)
  }

  const renderMonthGrid = (monthDate: Date, cells: Array<Date | null>) => (
    <section className="umrah-hotel-date-month" key={`${monthDate.getFullYear()}-${monthDate.getMonth()}`}>
      <h4>{monthLabel(monthDate)}</h4>

      <div className="umrah-weekdays" aria-hidden>
        {weekdayHeaders.map((day, index) => (
          <span key={`${monthDate.getMonth()}-${day}`} className={index === 6 ? 'holiday' : ''}>
            {day}
          </span>
        ))}
      </div>

      <div className="umrah-calendar-grid">
        {cells.map((date, index) => {
          const isEmpty = date === null
          const isDisabled = date ? getIsDisabled(date) : false
          const isHoliday = index % 7 === 6 && !isEmpty
          const hasCompletedRange = draftStartDate && draftEndDate
          const isRangeStart = date && draftStartDate ? isSameDate(date, draftStartDate) : false
          const isRangeEnd = date && draftEndDate ? isSameDate(date, draftEndDate) : false
          const isSingleSelection = Boolean(isRangeStart && !draftEndDate)
          const isInRange =
            date &&
            hasCompletedRange &&
            date.getTime() > draftStartDate.getTime() &&
            date.getTime() < draftEndDate.getTime()

          return (
            <button
              key={date ? `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}` : `${monthDate.getMonth()}-empty-${index}`}
              type="button"
              className={`umrah-date ${isEmpty ? 'empty' : ''} ${isDisabled ? 'disabled' : ''} ${isHoliday ? 'holiday' : ''} ${isInRange ? 'in-range' : ''} ${isRangeStart ? 'range-start' : ''} ${isRangeEnd ? 'range-end' : ''} ${isSingleSelection ? 'selected' : ''}`}
              disabled={isEmpty || isDisabled}
              onClick={() => {
                if (date) {
                  handleSelectDate(date)
                }
              }}
            >
              {date ? date.getDate() : ''}
            </button>
          )
        })}
      </div>
    </section>
  )

  const compactCheckInLabel = useMemo(
    () =>
      initialStartDate.toLocaleDateString('id-ID', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
      }),
    [initialStartDate],
  )

  const searchMetaGuestLabel = guestSummaryText ?? passengerText

  const displayedHotels = useMemo(() => {
    if (!isSearchHotelOnly) {
      return hotels
    }

    const activeRange = priceRanges.find((item) => item.id === selectedPriceRangeId)

    const filtered = hotels.filter((hotel) => {
      const inPriceRange =
        !activeRange ||
        (activeRange.max === null
          ? hotel.pricePerNight >= activeRange.min
          : hotel.pricePerNight >= activeRange.min && hotel.pricePerNight <= activeRange.max)

      const inPropertyType = !selectedPropertyType || hotel.propertyType === selectedPropertyType

      const inFacilities =
        selectedFacilities.length === 0 ||
        selectedFacilities.every((facility) => (hotel.facilities ?? []).includes(facility))

      return inPriceRange && inPropertyType && inFacilities
    })

    const sorted = [...filtered]

    if (selectedSort === 'Harga: Rendah ke Tinggi') {
      sorted.sort((left, right) => left.pricePerNight - right.pricePerNight)
    } else if (selectedSort === 'Harga: Tinggi ke Rendah') {
      sorted.sort((left, right) => right.pricePerNight - left.pricePerNight)
    } else if (selectedSort === 'Peringkat: Tinggi ke Rendah') {
      sorted.sort((left, right) => right.rating - left.rating)
    } else if (selectedSort === 'Jarak: Terdekat dari Ka’bah' || selectedSort === 'Jarak: Terdekat dari Masjid Nabawi') {
      sorted.sort((left, right) => parseDistanceKm(left.distanceLabel) - parseDistanceKm(right.distanceLabel))
    }

    return sorted
  }, [
    hotels,
    isSearchHotelOnly,
    priceRanges,
    selectedFacilities,
    selectedPriceRangeId,
    selectedPropertyType,
    selectedSort,
  ])

  return (
    <section className={`phone-shell umrah-hotel-shell${isSearchHotelOnly ? ' search-only' : ''}`} aria-label="Daftar Hotel">
      {isSearchHotelOnly ? (
        <>
          <header className="umrah-hotel-search-head">
            <button type="button" className="umrah-flight-back" aria-label="Kembali" onClick={onBack}>
              ←
            </button>
            <div>
              <h1>{`Di sekitar saya (${cityLabel})`}</h1>
              <p>
                <span>{compactCheckInLabel}</span>
                <span>{searchMetaGuestLabel}</span>
              </p>
            </div>
          </header>

          <div className="umrah-hotel-search-toolbar" aria-label="Sort dan filter">
            <button type="button" aria-label="Sort" onClick={() => setIsSortModalOpen(true)}>
              <img src={assets.sortIcon} alt="" aria-hidden />
              Sort
            </button>
            <i aria-hidden />
            <button
              type="button"
              aria-label="Filter"
              onClick={() => {
                setDraftPriceRangeId(selectedPriceRangeId)
                setDraftPropertyType(selectedPropertyType)
                setDraftFacilities(selectedFacilities)
                setIsFilterModalOpen(true)
              }}
            >
              <img src={assets.filterIcon} alt="" aria-hidden />
              Filter
            </button>
          </div>
        </>
      ) : (
        <>
          <header className="umrah-flight-header">
            <button type="button" className="umrah-flight-back" aria-label="Kembali" onClick={onBack}>
              ←
            </button>
            <h1>Hotel</h1>
            <span className="umrah-ticket-head-spacer" aria-hidden />
          </header>

          <div className="umrah-flight-stepper umrah-flight-stepper--figma" aria-hidden>
            <span className="umrah-flight-step active">
              <i>1</i>
              <b>Flight ---</b>
            </span>
            <span className="umrah-flight-step active">
              <i>2</i>
              <b>Hotel ---</b>
            </span>
            <span className="umrah-flight-step">
              <i>3</i>
              <b>Pembayaran ---</b>
            </span>
            <span className="umrah-flight-step">
              <i>4</i>
              <b>Visa &amp; Lainnya</b>
            </span>
          </div>

          <button type="button" className="umrah-hotel-summary" onClick={openDateModal}>
            <div>
              <p>{cityLabel}</p>
              <div>
                <span>
                  <img src={assets.calendarIcon} alt="" aria-hidden />
                  {checkInLabel}
                </span>
                <span>
                  <img src={assets.userIcon} alt="" aria-hidden />
                  {passengerText}
                </span>
                <span>
                  <img src={assets.roomIcon} alt="" aria-hidden />
                  {roomText}
                </span>
              </div>
            </div>
            <strong>Ubah</strong>
          </button>
        </>
      )}

      {!isSearchHotelOnly && isDateModalOpen && (
        <div className="umrah-hotel-date-modal" role="dialog" aria-modal="true" aria-label="Ubah tanggal hotel">
          <div className="umrah-hotel-date-sheet">
            <span className="umrah-hotel-date-handle" aria-hidden />

            <header>
              <h3>{cityLabel}</h3>
              <button type="button" aria-label="Tutup" onClick={() => setIsDateModalOpen(false)}>
                ×
              </button>
            </header>

            <div className="umrah-hotel-date-summary">
              <div>
                <h4>Check-in</h4>
                <p>{checkInLabel}</p>
              </div>

              <p>{nightsLabel}</p>

              <div>
                <h4>Check-out</h4>
                <p>{checkOutLabel}</p>
              </div>
            </div>

            <div className="umrah-hotel-date-scroll">
              {renderMonthGrid(firstVisibleMonth, firstMonthCells)}
              {renderMonthGrid(secondVisibleMonth, secondMonthCells)}
            </div>

            <button
              type="button"
              className="umrah-hotel-save-date"
              disabled={!draftStartDate || !draftEndDate}
              onClick={() => {
                if (draftStartDate && draftEndDate) {
                  onSaveDateRange(draftStartDate, draftEndDate)
                  setIsDateModalOpen(false)
                }
              }}
            >
              Simpan
            </button>
          </div>
        </div>
      )}

      <div className={`umrah-hotel-list${isSearchHotelOnly ? ' search-only' : ''}`}>
        {displayedHotels.map((hotel) => (
          <article
            key={hotel.id}
            className={`umrah-hotel-card ${!isSearchHotelOnly && hotel.isRecommended ? 'recommended' : ''}`}
            role="button"
            tabIndex={0}
            onClick={() => onSelectHotel(hotel)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onSelectHotel(hotel)
              }
            }}
          >
            <div className="umrah-hotel-main-row">
              <img src={hotel.image} alt={hotel.name} className="umrah-hotel-thumb" />

              <div className="umrah-hotel-main-content">
                <p className="umrah-hotel-name">{hotel.name}</p>
                <p className="umrah-hotel-night">{hotel.nightsLabel}</p>
                <p className="umrah-hotel-stars">{renderStars(hotel.rating)}</p>
                <p className="umrah-hotel-distance">
                  <img src={assets.locationIcon} alt="" aria-hidden />
                  {hotel.distanceLabel}
                </p>
              </div>
            </div>

            <div className="umrah-hotel-price-row">
              <p>
                {toRupiah(hotel.pricePerNight)} <span>/malam</span>
              </p>
              <p>
                <strong>{toRupiah(hotel.totalPrice)}</strong> untuk {passengerText}
              </p>
            </div>

            <div className="umrah-hotel-detail-btn" aria-hidden>
              <span>Tap untuk lihat detail</span>
              <img src={assets.chevronRight} alt="" aria-hidden />
            </div>

            {!isSearchHotelOnly && hotel.isRecommended && (
              <div className="umrah-hotel-recommend-badge">
                <img src={assets.sparkleIcon} alt="" aria-hidden /> Paling sesuai dengan budget Anda.
              </div>
            )}
          </article>
        ))}
      </div>

      {!isSearchHotelOnly && (
        <footer className="umrah-hotel-costs" aria-hidden>
          <span className="active">Pesawat 60%</span>
          <span className="active">Hotel 30%</span>
          <span>Lainnya 10%</span>
        </footer>
      )}

      {isSearchHotelOnly && isSortModalOpen && <div className="flight-search-sheet-overlay" />}

      {isSearchHotelOnly && isSortModalOpen && (
        <section className="flight-search-sheet hotel-toolbar-sheet" role="dialog" aria-modal="true" aria-label="Sort hotel">
          <header>
            <h2>Sort</h2>
            <button type="button" aria-label="Tutup" onClick={() => setIsSortModalOpen(false)}>
              ×
            </button>
          </header>

          <p className="hotel-toolbar-label">Urut Berdasarkan</p>
          <div className="hotel-sort-list">
            {sortOptions.map((option) => (
              <button
                key={option}
                type="button"
                className="hotel-sort-item"
                onClick={() => {
                  setSelectedSort(option)
                  setIsSortModalOpen(false)
                }}
              >
                <i className={selectedSort === option ? 'active' : ''} aria-hidden />
                <span>{option}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {isSearchHotelOnly && isFilterModalOpen && <div className="flight-search-sheet-overlay" />}

      {isSearchHotelOnly && isFilterModalOpen && (
        <section className="flight-search-sheet hotel-filter-sheet" role="dialog" aria-modal="true" aria-label="Filter hotel">
          <header>
            <h2>Filter</h2>
            <button type="button" aria-label="Tutup" onClick={() => setIsFilterModalOpen(false)}>
              ×
            </button>
          </header>

          <div className="hotel-filter-scroll">
            <p className="hotel-toolbar-label">Harga per malam</p>
            <div className="hotel-price-chip-list">
              {priceRanges.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`hotel-price-chip${draftPriceRangeId === item.id ? ' active' : ''}`}
                  onClick={() => setDraftPriceRangeId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <hr />

            <p className="hotel-toolbar-label">Tipe Properti</p>
            <div className="hotel-filter-radio-list">
              {propertyTypes.map((type) => (
                <button key={type} type="button" className="hotel-filter-radio-item" onClick={() => setDraftPropertyType(type)}>
                  <span>{type}</span>
                  <i className={draftPropertyType === type ? 'active' : ''} aria-hidden />
                </button>
              ))}
            </div>

            <hr />

            <p className="hotel-toolbar-label">Fasilitas Properti</p>
            <div className="hotel-filter-check-list">
              {facilityOptions.map((facility) => {
                const isChecked = draftFacilities.includes(facility)
                return (
                  <button
                    key={facility}
                    type="button"
                    className="hotel-filter-check-item"
                    onClick={() => {
                      setDraftFacilities((prev) =>
                        prev.includes(facility) ? prev.filter((item) => item !== facility) : [...prev, facility],
                      )
                    }}
                  >
                    <i className={isChecked ? 'active' : ''} aria-hidden />
                    <span>{facility}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="hotel-filter-actions">
            <button
              type="button"
              className="hotel-filter-reset"
              onClick={() => {
                setDraftPriceRangeId(null)
                setDraftPropertyType(null)
                setDraftFacilities([])
              }}
            >
              Hapus Filter
            </button>
            <button
              type="button"
              className="hotel-filter-apply"
              onClick={() => {
                setSelectedPriceRangeId(draftPriceRangeId)
                setSelectedPropertyType(draftPropertyType)
                setSelectedFacilities(draftFacilities)
                setIsFilterModalOpen(false)
              }}
            >
              Terapkan
            </button>
          </div>
        </section>
      )}

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
