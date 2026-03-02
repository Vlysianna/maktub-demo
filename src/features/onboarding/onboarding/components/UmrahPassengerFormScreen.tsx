import type { ReactNode } from 'react'
import type { PassengerFormData, UmrahTicketAssets } from '../types'

type UmrahPassengerFormScreenProps = {
  assets: UmrahTicketAssets
  title: string
  form: PassengerFormData
  nationalityOptions: string[]
  dayOptions: string[]
  monthOptions: string[]
  yearOptions: string[]
  onBack: () => void
  onSave: () => void
  onOpenCamera: () => void
  onChange: <K extends keyof PassengerFormData>(field: K, value: PassengerFormData[K]) => void
}

function LabeledField({ title, required = true, children }: { title: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="umrah-passenger-field">
      <p>
        {title} {required && <span>*</span>}
      </p>
      {children}
    </label>
  )
}

function SelectInput({
  value,
  placeholder,
  options,
  onChange,
}: {
  value: string
  placeholder: string
  options: string[]
  onChange: (value: string) => void
}) {
  return (
    <div className="umrah-passenger-select-wrap">
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
  yearOptions,
  onBack,
  onSave,
  onOpenCamera,
  onChange,
}: UmrahPassengerFormScreenProps) {
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
        <LabeledField title="Nama depan dan tengah">
          <input
            type="text"
            value={form.firstMiddleName}
            onChange={(event) => onChange('firstMiddleName', event.target.value)}
            placeholder=""
          />
        </LabeledField>

        <p className="umrah-passenger-hint">
          (Masukkan Nama Depan dan Tengah Anda seperti yang ditunjukkan di paspor Anda)
        </p>

        <LabeledField title="Nama belakang/ keluarga">
          <input
            type="text"
            value={form.lastFamilyName}
            onChange={(event) => onChange('lastFamilyName', event.target.value)}
            placeholder=""
          />
        </LabeledField>

        <LabeledField title="Tanggal lahir">
          <div className="umrah-passenger-date-row">
            <SelectInput
              value={form.birthDay}
              placeholder="Tanggal"
              options={dayOptions}
              onChange={(value) => onChange('birthDay', value)}
            />
            <SelectInput
              value={form.birthMonth}
              placeholder="Bulan"
              options={monthOptions}
              onChange={(value) => onChange('birthMonth', value)}
            />
            <SelectInput
              value={form.birthYear}
              placeholder="Tahun"
              options={yearOptions}
              onChange={(value) => onChange('birthYear', value)}
            />
          </div>
        </LabeledField>

        <LabeledField title="Kewarganegaraan">
          <SelectInput
            value={form.nationality}
            placeholder="Pilih kewarganegaraan"
            options={nationalityOptions}
            onChange={(value) => onChange('nationality', value)}
          />
        </LabeledField>

        <article className="umrah-ticket-policy-highlight umrah-passenger-note">
          <h3>
            <img src={assets.infoSolidIcon} alt="" aria-hidden /> Informasi Paspor
          </h3>
          <p>Untuk melakukan perjalanan internasional, pastikan paspor Anda masih berlaku minimal 6 bulan setelah tanggal keberangkatan.</p>
          <button type="button">Selengkapnya</button>
        </article>

        <LabeledField title="Nomor paspor">
          <input
            type="text"
            value={form.passportNumber}
            onChange={(event) => onChange('passportNumber', event.target.value)}
            placeholder=""
          />
        </LabeledField>

        <LabeledField title="Negara penerbit">
          <SelectInput
            value={form.issuingCountry}
            placeholder="Pilih kewarganegaraan"
            options={nationalityOptions}
            onChange={(value) => onChange('issuingCountry', value)}
          />
        </LabeledField>

        <LabeledField title="Tanggal habis berlaku">
          <div className="umrah-passenger-date-row">
            <SelectInput
              value={form.passportExpiryDay}
              placeholder="Tanggal"
              options={dayOptions}
              onChange={(value) => onChange('passportExpiryDay', value)}
            />
            <SelectInput
              value={form.passportExpiryMonth}
              placeholder="Bulan"
              options={monthOptions}
              onChange={(value) => onChange('passportExpiryMonth', value)}
            />
            <SelectInput
              value={form.passportExpiryYear}
              placeholder="Tahun"
              options={yearOptions}
              onChange={(value) => onChange('passportExpiryYear', value)}
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
        <button type="button" className="cta-button" onClick={onSave}>
          Simpan
        </button>
      </footer>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
