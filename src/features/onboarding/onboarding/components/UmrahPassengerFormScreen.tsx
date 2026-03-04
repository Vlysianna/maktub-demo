import { useState, type ReactNode } from 'react'
import type { PassengerFormData, UmrahTicketAssets } from '../types'

type UmrahPassengerFormScreenProps = {
  assets: UmrahTicketAssets
  title: string
  form: PassengerFormData
  nationalityOptions: string[]
  dayOptions: string[]
  monthOptions: string[]
  birthYearOptions: string[]
  passportExpiryYearOptions: string[]
  onBack: () => void
  onSave: () => void
  onOpenCamera: () => void
  onChange: <K extends keyof PassengerFormData>(field: K, value: PassengerFormData[K]) => void
}

type FormErrors = Partial<Record<keyof PassengerFormData, string>>

function validatePassengerForm(form: PassengerFormData): FormErrors {
  const errors: FormErrors = {}

  if (!form.firstMiddleName.trim()) {
    errors.firstMiddleName = 'Nama depan dan tengah wajib diisi'
  }

  if (!form.lastFamilyName.trim()) {
    errors.lastFamilyName = 'Nama belakang/keluarga wajib diisi'
  }

  if (!form.birthDay || !form.birthMonth || !form.birthYear) {
    errors.birthDay = 'Tanggal lahir wajib diisi lengkap'
  }

  if (!form.nationality) {
    errors.nationality = 'Kewarganegaraan wajib dipilih'
  }

  if (!form.passportNumber.trim()) {
    errors.passportNumber = 'Nomor paspor wajib diisi'
  } else if (form.passportNumber.trim().length < 5) {
    errors.passportNumber = 'Nomor paspor tidak valid'
  }

  if (!form.issuingCountry) {
    errors.issuingCountry = 'Negara penerbit wajib dipilih'
  }

  if (!form.passportExpiryDay || !form.passportExpiryMonth || !form.passportExpiryYear) {
    errors.passportExpiryDay = 'Tanggal habis berlaku wajib diisi lengkap'
  } else {
    // Validate expiry is at least 6 months from today
    const monthNames: Record<string, number> = {
      Januari: 0, Februari: 1, Maret: 2, April: 3, Mei: 4, Juni: 5,
      Juli: 6, Agustus: 7, September: 8, Oktober: 9, November: 10, Desember: 11,
    }
    const monthIndex = monthNames[form.passportExpiryMonth] ?? parseInt(form.passportExpiryMonth, 10) - 1
    const expiryDate = new Date(
      parseInt(form.passportExpiryYear, 10),
      monthIndex,
      parseInt(form.passportExpiryDay, 10),
    )
    const minExpiry = new Date()
    minExpiry.setMonth(minExpiry.getMonth() + 6)
    if (expiryDate < minExpiry) {
      errors.passportExpiryDay = 'Paspor harus berlaku minimal 6 bulan dari sekarang'
    }
  }

  return errors
}

function LabeledField({
  title,
  required = true,
  error,
  children,
}: {
  title: string
  required?: boolean
  error?: string
  children: ReactNode
}) {
  return (
    <label className={`umrah-passenger-field${error ? ' umrah-passenger-field--error' : ''}`}>
      <p>
        {title} {required && <span>*</span>}
      </p>
      {children}
      {error && <span className="umrah-passenger-error-msg">{error}</span>}
    </label>
  )
}

function SelectInput({
  value,
  placeholder,
  options,
  hasError,
  onChange,
}: {
  value: string
  placeholder: string
  options: string[]
  hasError?: boolean
  onChange: (value: string) => void
}) {
  return (
    <div className={`umrah-passenger-select-wrap${hasError ? ' has-error' : ''}`}>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M4 6L8 10L12 6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export function UmrahPassengerFormScreen({
  assets,
  title,
  form,
  nationalityOptions,
  dayOptions,
  monthOptions,
  birthYearOptions,
  passportExpiryYearOptions,
  onBack,
  onSave,
  onOpenCamera,
  onChange,
}: UmrahPassengerFormScreenProps) {
  const [errors, setErrors] = useState<FormErrors>({})

  function handleSave() {
    const validationErrors = validatePassengerForm(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      // Scroll to top to show first error
      const scrollEl = document.querySelector('.umrah-passenger-scroll')
      if (scrollEl) scrollEl.scrollTop = 0
      return
    }
    setErrors({})
    onSave()
  }

  function handleChange<K extends keyof PassengerFormData>(field: K, value: PassengerFormData[K]) {
    onChange(field, value)
    // Clear error for the modified field on change
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  return (
    <section className="phone-shell umrah-passenger-shell" aria-label="Form Data Penumpang">
      <header className="umrah-ticket-header">
        <button type="button" className="umrah-ticket-back" aria-label="Kembali" onClick={onBack}>
          <img src={assets.backIcon} alt="" aria-hidden />
        </button>
        <h1>{title}</h1>
        <span className="umrah-ticket-head-spacer" aria-hidden />
      </header>

      <div className="umrah-passenger-blank-rect" aria-hidden />

      <div className="umrah-passenger-scroll">
        <LabeledField title="Nama depan dan tengah" error={errors.firstMiddleName}>
          <input
            type="text"
            value={form.firstMiddleName}
            onChange={(event) => handleChange('firstMiddleName', event.target.value)}
            placeholder=""
            className={errors.firstMiddleName ? 'input-error' : ''}
          />
        </LabeledField>

        <p className="umrah-passenger-hint">
          (Masukkan Nama Depan dan Tengah Anda seperti yang ditunjukkan di paspor Anda)
        </p>

        <LabeledField title="Nama belakang/ keluarga" error={errors.lastFamilyName}>
          <input
            type="text"
            value={form.lastFamilyName}
            onChange={(event) => handleChange('lastFamilyName', event.target.value)}
            placeholder=""
            className={errors.lastFamilyName ? 'input-error' : ''}
          />
        </LabeledField>

        <LabeledField title="Tanggal lahir" error={errors.birthDay}>
          <div className="umrah-passenger-date-row">
            <SelectInput
              value={form.birthDay}
              placeholder="Tanggal"
              options={dayOptions}
              hasError={!!errors.birthDay}
              onChange={(value) => handleChange('birthDay', value)}
            />
            <SelectInput
              value={form.birthMonth}
              placeholder="Bulan"
              options={monthOptions}
              hasError={!!errors.birthDay}
              onChange={(value) => handleChange('birthMonth', value)}
            />
            <SelectInput
              value={form.birthYear}
              placeholder="Tahun"
              options={birthYearOptions}
              hasError={!!errors.birthDay}
              onChange={(value) => handleChange('birthYear', value)}
            />
          </div>
        </LabeledField>

        <LabeledField title="Kewarganegaraan" error={errors.nationality}>
          <SelectInput
            value={form.nationality}
            placeholder="Pilih kewarganegaraan"
            options={nationalityOptions}
            hasError={!!errors.nationality}
            onChange={(value) => handleChange('nationality', value)}
          />
        </LabeledField>

        <article className="umrah-ticket-policy-highlight umrah-passenger-note">
          <h3>
            <img src={assets.infoSolidIcon} alt="" aria-hidden /> Informasi Paspor
          </h3>
          <p>
            Masa berlaku paspor WNI dewasa umumnya 10 tahun (anak 5 tahun), dan untuk perjalanan internasional paspor wajib
            masih berlaku minimal 6 bulan setelah tanggal keberangkatan.
          </p>
          <button type="button">Selengkapnya</button>
        </article>

        <LabeledField title="Nomor paspor" error={errors.passportNumber}>
          <input
            type="text"
            value={form.passportNumber}
            onChange={(event) => handleChange('passportNumber', event.target.value)}
            placeholder=""
            className={errors.passportNumber ? 'input-error' : ''}
          />
        </LabeledField>

        <LabeledField title="Negara penerbit" error={errors.issuingCountry}>
          <SelectInput
            value={form.issuingCountry}
            placeholder="Pilih kewarganegaraan"
            options={nationalityOptions}
            hasError={!!errors.issuingCountry}
            onChange={(value) => handleChange('issuingCountry', value)}
          />
        </LabeledField>

        <LabeledField title="Tanggal habis berlaku" error={errors.passportExpiryDay}>
          <div className="umrah-passenger-date-row">
            <SelectInput
              value={form.passportExpiryDay}
              placeholder="Tanggal"
              options={dayOptions}
              hasError={!!errors.passportExpiryDay}
              onChange={(value) => handleChange('passportExpiryDay', value)}
            />
            <SelectInput
              value={form.passportExpiryMonth}
              placeholder="Bulan"
              options={monthOptions}
              hasError={!!errors.passportExpiryDay}
              onChange={(value) => handleChange('passportExpiryMonth', value)}
            />
            <SelectInput
              value={form.passportExpiryYear}
              placeholder="Tahun"
              options={passportExpiryYearOptions}
              hasError={!!errors.passportExpiryDay}
              onChange={(value) => handleChange('passportExpiryYear', value)}
            />
          </div>
        </LabeledField>
      </div>

      <footer className="umrah-passenger-footer">
        <button type="button" className="umrah-passport-photo-btn" onClick={onOpenCamera}>
          {form.passportPhoto ? (
            <img src={form.passportPhoto} alt="Foto Passport" className="umrah-passport-thumb" />
          ) : (
            <><img src={assets.cameraIcon} alt="" aria-hidden /> Foto Passport</>
          )}
        </button>
        <button type="button" className="cta-button" onClick={handleSave}>
          Simpan
        </button>
      </footer>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
