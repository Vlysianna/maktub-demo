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
  assets,
}: {
  value: string
  placeholder: string
  options: string[]
  onChange: (value: string) => void
  assets: UmrahTicketAssets
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
      <img src={assets.chevronDownIcon} alt="" aria-hidden />
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
              assets={assets}
            />
            <SelectInput
              value={form.birthMonth}
              placeholder="Bulan"
              options={monthOptions}
              onChange={(value) => onChange('birthMonth', value)}
              assets={assets}
            />
            <SelectInput
              value={form.birthYear}
              placeholder="Tahun"
              options={yearOptions}
              onChange={(value) => onChange('birthYear', value)}
              assets={assets}
            />
          </div>
        </LabeledField>

        <LabeledField title="Kewarganegaraan">
          <SelectInput
            value={form.nationality}
            placeholder="Pilih kewarganegaraan"
            options={nationalityOptions}
            onChange={(value) => onChange('nationality', value)}
            assets={assets}
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
            assets={assets}
          />
        </LabeledField>

        <LabeledField title="Tanggal habis berlaku">
          <div className="umrah-passenger-date-row">
            <SelectInput
              value={form.passportExpiryDay}
              placeholder="Tanggal"
              options={dayOptions}
              onChange={(value) => onChange('passportExpiryDay', value)}
              assets={assets}
            />
            <SelectInput
              value={form.passportExpiryMonth}
              placeholder="Bulan"
              options={monthOptions}
              onChange={(value) => onChange('passportExpiryMonth', value)}
              assets={assets}
            />
            <SelectInput
              value={form.passportExpiryYear}
              placeholder="Tahun"
              options={yearOptions}
              onChange={(value) => onChange('passportExpiryYear', value)}
              assets={assets}
            />
          </div>
        </LabeledField>
      </div>

      <footer className="umrah-passenger-footer">
        <button type="button" className="umrah-passport-photo-btn" onClick={onOpenCamera}>
          <img src={assets.cameraIcon} alt="" aria-hidden /> Foto Passport
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
