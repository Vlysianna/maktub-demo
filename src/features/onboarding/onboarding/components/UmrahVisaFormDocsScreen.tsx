import { useMemo, useState } from 'react'
import type { UmrahVisaFormAssets } from '../types'

type VisaDocumentField = 'passport' | 'ktp' | 'familyCard' | 'marriageBook' | 'birthCertificate' | 'photo'

type VisaDocumentsValue = Record<VisaDocumentField, File | null>

type UmrahVisaFormDocsScreenProps = {
  assets: UmrahVisaFormAssets
  value: VisaDocumentsValue
  totalTravelerCount: number
  activeTravelerIndex: number
  hideStepper?: boolean
  onSelectTraveler: (index: number) => void
  onUpload: (field: VisaDocumentField, file: File | null) => void
  onBack: () => void
  onSave: () => void
}

const requiredFields: VisaDocumentField[] = ['passport', 'ktp', 'familyCard', 'photo']

const docItems: Array<{ field: VisaDocumentField; label: string; hint?: string; required?: boolean }> = [
  { field: 'passport', label: 'Paspor', required: true, hint: 'Pastikan paspor masih berlaku minimal 6 bulan sebelum tanggal keberangkatan ke Arab Saudi.' },
  { field: 'ktp', label: 'KTP', required: true },
  { field: 'familyCard', label: 'Kartu Keluarga', required: true },
  { field: 'marriageBook', label: 'Buku Nikah (jika sudah menikah)' },
  { field: 'birthCertificate', label: 'Akta Kelahiran (jika ada anak di bawah 17 tahun)' },
  { field: 'photo', label: 'Pas Foto', required: true, hint: 'Pas foto terbaru dengan latar belakang putih, ukuran 4×6 cm.' },
]

export function UmrahVisaFormDocsScreen({
  assets,
  value,
  totalTravelerCount,
  activeTravelerIndex,
  hideStepper,
  onSelectTraveler,
  onUpload,
  onBack,
  onSave,
}: UmrahVisaFormDocsScreenProps) {
  const [hasAttempted, setHasAttempted] = useState(false)
  const requiredComplete = useMemo(() => requiredFields.every((field) => value[field]), [value])

  return (
    <section className="phone-shell umrah-visa-shell" aria-label="Form Dokumen Visa">
      <header className="umrah-flight-header">
        <button type="button" className="umrah-flight-back" aria-label="Kembali" onClick={onBack}>
          <img src={assets.backIcon} alt="" aria-hidden />
        </button>
        <h1>Formulir Visa Saudi Online</h1>
        <span className="umrah-ticket-head-spacer" aria-hidden />
      </header>

      {!hideStepper && (
        <div className="umrah-visa-form-stepper" aria-hidden>
          <span className="umrah-visa-form-step active">
            <i>1</i>
            <b>Data Pribadi -----</b>
          </span>
          <span className="umrah-visa-form-step active">
            <i>2</i>
            <b>Dokumen</b>
          </span>
        </div>
      )}

      <div className="umrah-visa-form-scroll">
        <h2>Dokumen</h2>
        <div className="umrah-visa-travelers" role="tablist" aria-label="Pilih dokumen jamaah">
          {Array.from({ length: Math.max(totalTravelerCount, 1) }, (_, index) => {
            const active = index === activeTravelerIndex

            return (
              <button
                key={`visa-doc-jamaah-${index + 1}`}
                type="button"
                role="tab"
                aria-selected={active}
                className={`umrah-visa-traveler-chip${active ? ' active' : ''}`}
                onClick={() => onSelectTraveler(index)}
              >
                Jamaah {index + 1}
              </button>
            )
          })}
        </div>

        <p className="umrah-visa-form-intro">
          Anda harus memenuhi persyaratan dokumen berikut untuk mendapatkan visa perjalanan untuk menerima eVisa Arab Saudi:
        </p>

        {docItems.map((item) => {
          const selectedFile = value[item.field]

          return (
            <label key={item.field}>
              {item.label} {item.required ? '*' : ''}
              <span className={`umrah-visa-upload-box${hasAttempted && item.required && !selectedFile ? ' upload-invalid' : ''}`}>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(event) => {
                    const file = event.target.files?.[0] ?? null
                    onUpload(item.field, file)
                  }}
                />
                <strong>{selectedFile ? selectedFile.name : '+ Upload Foto'}</strong>
              </span>
              {item.hint ? <small>{item.hint}</small> : null}
              {hasAttempted && item.required && !selectedFile && (
                <span className="visa-field-error">Dokumen wajib diupload</span>
              )}
            </label>
          )
        })}
      </div>

      <footer className="umrah-ticket-footer">
        <button
          type="button"
          className="cta-button"
          onClick={() => {
            if (!requiredComplete) {
              setHasAttempted(true)
              return
            }
            onSave()
          }}
        >
          Simpan
        </button>
      </footer>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
