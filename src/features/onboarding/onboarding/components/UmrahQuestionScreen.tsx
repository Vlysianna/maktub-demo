import { useMemo, useState } from 'react'
import type { UmrahQuestionAssets } from '../types'

type UmrahQuestionScreenProps = {
  assets: UmrahQuestionAssets
  onClose: () => void
  onNext: (selectedDate: Date) => void
}

const weekdayHeaders = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']

type VisaStatus = 'has-visa' | 'no-visa'

const dayFormatter = new Intl.DateTimeFormat('id-ID', {
  month: 'long',
  year: 'numeric',
})

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function addDays(date: Date, days: number) {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return startOfDay(next)
}

function toMonthLabel(date: Date) {
  const text = dayFormatter.format(date)
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function isSameDate(left: Date, right: Date) {
  return (
    left.getDate() === right.getDate() &&
    left.getMonth() === right.getMonth() &&
    left.getFullYear() === right.getFullYear()
  )
}

export function UmrahQuestionScreen({ assets, onClose, onNext }: UmrahQuestionScreenProps) {
  const [visaStatus, setVisaStatus] = useState<VisaStatus | null>(null)
  const [visibleMonth, setVisibleMonth] = useState(() => new Date(new Date().getFullYear(), new Date().getMonth(), 1))
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null)
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null)

  const today = useMemo(() => startOfDay(new Date()), [])
  const firstAvailableIfNoVisa = useMemo(() => addDays(today, 10), [today])

  const calendarCells = useMemo(() => {
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
  }, [visibleMonth])

  const monthLabel = useMemo(() => toMonthLabel(visibleMonth), [visibleMonth])

  const getIsDisabled = (date: Date) => {
    const current = startOfDay(date)

    if (current <= today) {
      return true
    }

    if (visaStatus === 'no-visa') {
      return current < firstAvailableIfNoVisa
    }

    return false
  }

  const handleSelectDate = (date: Date) => {
    if (getIsDisabled(date)) {
      return
    }

    if (!selectedStartDate || selectedEndDate) {
      setSelectedStartDate(date)
      setSelectedEndDate(null)
      return
    }

    if (date.getTime() < selectedStartDate.getTime()) {
      setSelectedEndDate(selectedStartDate)
      setSelectedStartDate(date)
      return
    }

    setSelectedEndDate(date)
  }

  const changeMonth = (offset: number) => {
    setVisibleMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + offset, 1))
  }

  return (
    <section className="phone-shell umrah-question-shell" aria-label="Pertanyaan Umrah">
      <img src={assets.blur} alt="" className="umrah-bg-blur" aria-hidden />

      <header className="umrah-topbar">
        <h1>
          Maktub AI
          <img src={assets.aiMagic} alt="" aria-hidden />
        </h1>

        <button type="button" className="umrah-close-btn" aria-label="Tutup" onClick={onClose}>
          <img src={assets.closeIcon} alt="" aria-hidden />
        </button>
      </header>

      <p className="umrah-heading">Lengkapi langkah berikut untuk dapatkan paket Umrah Kamu.</p>

      <section className={`umrah-calendar-card ${visaStatus === null ? 'blocked' : ''}`} aria-label="Pilih tanggal keberangkatan">
        <h2>Kapan rencana anda berangkat?</h2>

        <div className="umrah-calendar-head">
          <p>{monthLabel}</p>

          <div className="umrah-calendar-arrows">
            <button type="button" aria-label="Bulan sebelumnya" onClick={() => changeMonth(-1)}>
              <img src={assets.chevronLeft} alt="" />
            </button>
            <button type="button" aria-label="Bulan berikutnya" onClick={() => changeMonth(1)}>
              <img src={assets.chevronRight} alt="" />
            </button>
          </div>
        </div>

        <div className="umrah-weekdays" aria-hidden>
          {weekdayHeaders.map((day, index) => (
            <span key={day} className={index === 6 ? 'holiday' : ''}>
              {day}
            </span>
          ))}
        </div>

        <div className="umrah-calendar-grid">
          {calendarCells.map((date, index) => {
            const isEmpty = date === null
            const isHoliday = index % 7 === 6 && !isEmpty
            const isDisabled = date ? getIsDisabled(date) : false
            const hasCompletedRange = selectedStartDate && selectedEndDate
            const isRangeStart = date && selectedStartDate ? isSameDate(date, selectedStartDate) : false
            const isRangeEnd = date && selectedEndDate ? isSameDate(date, selectedEndDate) : false
            const isSingleSelection = Boolean(isRangeStart && !selectedEndDate)
            const isInRange =
              date &&
              hasCompletedRange &&
              date.getTime() > selectedStartDate.getTime() &&
              date.getTime() < selectedEndDate.getTime()

            return (
              <button
                key={date ? `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}` : `empty-${index}`}
                type="button"
                className={`umrah-date ${isEmpty ? 'empty' : ''} ${isDisabled ? 'disabled' : ''} ${isHoliday ? 'holiday' : ''} ${isInRange ? 'in-range' : ''} ${isRangeStart ? 'range-start' : ''} ${isRangeEnd ? 'range-end' : ''} ${isSingleSelection ? 'selected' : ''}`}
                disabled={isEmpty || isDisabled || visaStatus === null}
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

      <div className="umrah-next-wrap">
        <button
          type="button"
          className="umrah-next-btn"
          disabled={!selectedStartDate || !selectedEndDate}
          onClick={() => {
            if (selectedStartDate && selectedEndDate) {
              onNext(selectedStartDate)
            }
          }}
        >
          Selanjutnya
        </button>
      </div>

      {visaStatus === null && (
        <div className="visa-popup-backdrop" role="dialog" aria-modal="true" aria-label="Status visa">
          <div className="visa-popup-card">
            <div className="visa-popup-gradient" aria-hidden />
            <h3>Apakah semua yang berangkat sudah memiliki Visa?</h3>

            <div className="visa-popup-actions">
              <button type="button" className="visa-option" onClick={() => setVisaStatus('has-visa')}>
                Sudah
              </button>
              <button type="button" className="visa-option" onClick={() => setVisaStatus('no-visa')}>
                Belum
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}