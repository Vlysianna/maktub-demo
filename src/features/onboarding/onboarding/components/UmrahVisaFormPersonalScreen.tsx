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
  onChange: (field: keyof VisaPersonalFormValue, nextValue: string) => void
  onBack: () => void
  onNext: () => void
}

const dayOptions = Array.from({ length: 31 }, (_, index) => String(index + 1).padStart(2, '0'))
const monthOptions = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
]
const yearOptions = Array.from({ length: 80 }, (_, index) => String(2026 - index))

function isComplete(value: VisaPersonalFormValue) {
  return Object.values(value).every((fieldValue) => fieldValue.trim().length > 0)
}

export function UmrahVisaFormPersonalScreen({ value, onChange, onBack, onNext }: UmrahVisaFormPersonalScreenProps) {
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
          <input value={value.familyName} onChange={(event) => onChange('familyName', event.target.value)} />
          <small>(Masukkan nama belakang Anda persis seperti yang tertera di paspor Anda)</small>
        </label>

        <label>
          Nama depan dan tengah *
          <input value={value.givenName} onChange={(event) => onChange('givenName', event.target.value)} />
          <small>(Masukkan Nama Depan dan Tengah Anda seperti yang ditunjukkan di paspor Anda)</small>
        </label>

        <label>
          Jenis kelamin *
          <select value={value.gender} onChange={(event) => onChange('gender', event.target.value)}>
            <option value="">Pilih jenis kelamin</option>
            <option value="Pria">Pria</option>
            <option value="Wanita">Wanita</option>
          </select>
        </label>

        <label>
          Tanggal lahir *
          <div className="umrah-visa-row-3">
            <select value={value.birthDay} onChange={(event) => onChange('birthDay', event.target.value)}>
              <option value="">Tanggal</option>
              {dayOptions.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <select value={value.birthMonth} onChange={(event) => onChange('birthMonth', event.target.value)}>
              <option value="">Bulan</option>
              {monthOptions.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select value={value.birthYear} onChange={(event) => onChange('birthYear', event.target.value)}>
              <option value="">Tahun</option>
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </label>

        <label>
          Tempat lahir *
          <input value={value.birthPlace} onChange={(event) => onChange('birthPlace', event.target.value)} />
          <small>(Masukkan Kota atau Negara Lahir Anda seperti yang ditunjukkan di paspor Anda)</small>
        </label>

        <label>
          Negara tempat lahir *
          <input value={value.birthCountry} onChange={(event) => onChange('birthCountry', event.target.value)} />
        </label>

        <label>
          Alamat email *
          <input type="email" value={value.email} onChange={(event) => onChange('email', event.target.value)} />
        </label>

        <label>
          Phone *
          <input value={value.phone} onChange={(event) => onChange('phone', event.target.value)} />
        </label>

        <label>
          Status pernikahan *
          <select value={value.maritalStatus} onChange={(event) => onChange('maritalStatus', event.target.value)}>
            <option value="">Pilih</option>
            <option value="Single">Single</option>
            <option value="Menikah">Menikah</option>
            <option value="Cerai">Cerai</option>
          </select>
        </label>

        <label>
          Warga negara *
          <input value={value.nationality} onChange={(event) => onChange('nationality', event.target.value)} />
        </label>
      </div>

      <footer className="umrah-ticket-footer">
        <button type="button" className="cta-button" disabled={!isComplete(value)} onClick={onNext}>
          Selanjutnya
        </button>
      </footer>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
