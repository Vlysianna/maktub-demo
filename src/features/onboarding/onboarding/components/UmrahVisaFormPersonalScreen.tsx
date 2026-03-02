import { useState } from 'react'

type VisaPersonalFormValue = {
  familyName: string
  givenName: string
  gender: string
  birthDay: string
  birthMonth: string
  birthYear: string
  birthPlace: string
  birthCountry: string
  email: string
  phone: string
  maritalStatus: string
  nationality: string
}

type UmrahVisaFormPersonalScreenProps = {
  value: VisaPersonalFormValue
  monthOptions: string[]
  yearSpan: number
  onChange: (field: keyof VisaPersonalFormValue, nextValue: string) => void
  onBack: () => void
  onNext: () => void
}

const dayOptions = Array.from({ length: 31 }, (_, index) => String(index + 1).padStart(2, '0'))
const currentYear = new Date().getFullYear()

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

type FieldErrors = Partial<Record<keyof VisaPersonalFormValue, string>>

function validate(value: VisaPersonalFormValue): FieldErrors {
  const errors: FieldErrors = {}
  const requiredKeys: Array<keyof VisaPersonalFormValue> = [
    'familyName', 'givenName', 'gender', 'birthDay', 'birthMonth', 'birthYear',
    'birthPlace', 'birthCountry', 'email', 'phone', 'maritalStatus', 'nationality',
  ]
  for (const key of requiredKeys) {
    if (!value[key].trim()) {
      errors[key] = 'Wajib diisi'
    }
  }
  if (!errors.email && !isValidEmail(value.email)) {
    errors.email = 'Format email tidak valid'
  }
  return errors
}

export function UmrahVisaFormPersonalScreen({ value, monthOptions, yearSpan, onChange, onBack, onNext }: UmrahVisaFormPersonalScreenProps) {
  const yearOptions = Array.from({ length: yearSpan }, (_, index) => String(currentYear - index))
  const [hasAttempted, setHasAttempted] = useState(false)
  const errors = hasAttempted ? validate(value) : {}
  const hasErrors = Object.keys(validate(value)).length > 0

  return (
    <section className="phone-shell umrah-visa-shell" aria-label="Formulir Visa Saudi Online">
      <header className="umrah-flight-header">
        <button type="button" className="umrah-flight-back" aria-label="Kembali" onClick={onBack}>
          ←
        </button>
        <h1>Formulir Visa Saudi Online</h1>
        <span className="umrah-ticket-head-spacer" aria-hidden />
      </header>

      <div className="umrah-visa-form-stepper" aria-hidden>
        <span className="active">1 Data Pribadi -----</span>
        <span>2 Dokumen</span>
      </div>

      <div className="umrah-visa-form-scroll">
        <h2>Data Pribadi</h2>

        <label>
          Keluarga / nama belakang *
          <input className={errors.familyName ? 'input-invalid' : ''} value={value.familyName} onChange={(event) => onChange('familyName', event.target.value)} />
          <small>(Masukkan nama belakang Anda persis seperti yang tertera di paspor Anda)</small>
          {errors.familyName && <span className="visa-field-error">{errors.familyName}</span>}
        </label>

        <label>
          Nama depan dan tengah *
          <input className={errors.givenName ? 'input-invalid' : ''} value={value.givenName} onChange={(event) => onChange('givenName', event.target.value)} />
          <small>(Masukkan Nama Depan dan Tengah Anda seperti yang ditunjukkan di paspor Anda)</small>
          {errors.givenName && <span className="visa-field-error">{errors.givenName}</span>}
        </label>

        <label>
          Jenis kelamin *
          <select className={errors.gender ? 'input-invalid' : ''} value={value.gender} onChange={(event) => onChange('gender', event.target.value)}>
            <option value="">Pilih jenis kelamin</option>
            <option value="Pria">Pria</option>
            <option value="Wanita">Wanita</option>
          </select>
          {errors.gender && <span className="visa-field-error">{errors.gender}</span>}
        </label>

        <label>
          Tanggal lahir *
          <div className="umrah-visa-row-3">
            <select className={errors.birthDay ? 'input-invalid' : ''} value={value.birthDay} onChange={(event) => onChange('birthDay', event.target.value)}>
              <option value="">Tanggal</option>
              {dayOptions.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <select className={errors.birthMonth ? 'input-invalid' : ''} value={value.birthMonth} onChange={(event) => onChange('birthMonth', event.target.value)}>
              <option value="">Bulan</option>
              {monthOptions.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select className={errors.birthYear ? 'input-invalid' : ''} value={value.birthYear} onChange={(event) => onChange('birthYear', event.target.value)}>
              <option value="">Tahun</option>
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          {(errors.birthDay || errors.birthMonth || errors.birthYear) && (
            <span className="visa-field-error">Tanggal lahir wajib diisi lengkap</span>
          )}
        </label>

        <label>
          Tempat lahir *
          <input className={errors.birthPlace ? 'input-invalid' : ''} value={value.birthPlace} onChange={(event) => onChange('birthPlace', event.target.value)} />
          <small>(Masukkan Kota atau Negara Lahir Anda seperti yang ditunjukkan di paspor Anda)</small>
          {errors.birthPlace && <span className="visa-field-error">{errors.birthPlace}</span>}
        </label>

        <label>
          Negara tempat lahir *
          <input className={errors.birthCountry ? 'input-invalid' : ''} value={value.birthCountry} onChange={(event) => onChange('birthCountry', event.target.value)} />
          {errors.birthCountry && <span className="visa-field-error">{errors.birthCountry}</span>}
        </label>

        <label>
          Alamat email *
          <input type="email" className={errors.email ? 'input-invalid' : ''} value={value.email} onChange={(event) => onChange('email', event.target.value)} />
          {errors.email && <span className="visa-field-error">{errors.email}</span>}
        </label>

        <label>
          Phone *
          <input className={errors.phone ? 'input-invalid' : ''} value={value.phone} onChange={(event) => onChange('phone', event.target.value)} />
          {errors.phone && <span className="visa-field-error">{errors.phone}</span>}
        </label>

        <label>
          Status pernikahan *
          <select className={errors.maritalStatus ? 'input-invalid' : ''} value={value.maritalStatus} onChange={(event) => onChange('maritalStatus', event.target.value)}>
            <option value="">Pilih</option>
            <option value="Single">Single</option>
            <option value="Menikah">Menikah</option>
            <option value="Cerai">Cerai</option>
          </select>
          {errors.maritalStatus && <span className="visa-field-error">{errors.maritalStatus}</span>}
        </label>

        <label>
          Warga negara *
          <input className={errors.nationality ? 'input-invalid' : ''} value={value.nationality} onChange={(event) => onChange('nationality', event.target.value)} />
          {errors.nationality && <span className="visa-field-error">{errors.nationality}</span>}
        </label>
      </div>

      <footer className="umrah-ticket-footer">
        <button
          type="button"
          className="cta-button"
          onClick={() => {
            if (hasErrors) {
              setHasAttempted(true)
              return
            }
            onNext()
          }}
        >
          Selanjutnya
        </button>
      </footer>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
