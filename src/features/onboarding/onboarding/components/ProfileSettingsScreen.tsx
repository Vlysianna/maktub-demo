import { useState } from 'react'
import type { ProfileData } from '../types'
import {
  EMAIL_VALIDATION_MESSAGE,
  INDONESIAN_PHONE_VALIDATION_MESSAGE,
  isValidEmail,
  isValidIndonesianPhoneNumber,
  normalizeIndonesianPhoneNumber,
} from '../utils/validation'

type EditableField = 'name' | 'email' | 'phone'

type ProfileSettingsScreenProps = {
  profile: ProfileData
  onBack: () => void
  onSaveProfile: (nextProfile: ProfileData) => void
  onDeleteAccount: () => void
}

const fieldLabels: Record<EditableField, string> = {
  name: 'Nama',
  email: 'Email',
  phone: 'Nomor HP',
}

const monthMap: Record<string, string> = {
  januari: '01',
  februari: '02',
  febuari: '02',
  maret: '03',
  april: '04',
  mei: '05',
  juni: '06',
  juli: '07',
  agustus: '08',
  september: '09',
  oktober: '10',
  november: '11',
  desember: '12',
}

const monthLabel: Record<string, string> = {
  '01': 'Januari',
  '02': 'Februari',
  '03': 'Maret',
  '04': 'April',
  '05': 'Mei',
  '06': 'Juni',
  '07': 'Juli',
  '08': 'Agustus',
  '09': 'September',
  '10': 'Oktober',
  '11': 'November',
  '12': 'Desember',
}

const parseBirthDateToInputValue = (birthDate: ProfileData['birthDate']) => {
  const dayNumber = Number.parseInt(birthDate.day, 10)
  const yearNumber = Number.parseInt(birthDate.year, 10)
  const mappedMonth = monthMap[birthDate.month.trim().toLowerCase()]

  if (!dayNumber || !yearNumber || !mappedMonth) {
    return ''
  }

  return `${String(yearNumber).padStart(4, '0')}-${mappedMonth}-${String(dayNumber).padStart(2, '0')}`
}

const formatBirthDate = (inputValue: string): ProfileData['birthDate'] | null => {
  if (!inputValue) {
    return null
  }

  const [year, month, day] = inputValue.split('-')
  if (!year || !month || !day) {
    return null
  }

  return {
    day,
    month: monthLabel[month] ?? month,
    year,
  }
}

export function ProfileSettingsScreen({ profile, onBack, onSaveProfile, onDeleteAccount }: ProfileSettingsScreenProps) {
  const [editingField, setEditingField] = useState<EditableField | null>(null)
  const [editingValue, setEditingValue] = useState('')
  const [editingError, setEditingError] = useState('')
  const [isGenderModalOpen, setIsGenderModalOpen] = useState(false)
  const [selectedGender, setSelectedGender] = useState(profile.gender)
  const [isBirthDateModalOpen, setIsBirthDateModalOpen] = useState(false)
  const [birthDateInputValue, setBirthDateInputValue] = useState(parseBirthDateToInputValue(profile.birthDate))

  const openTextEditor = (field: EditableField, value: string) => {
    setEditingField(field)
    setEditingValue(value)
    setEditingError('')
  }

  const saveTextField = () => {
    const trimmedValue = editingValue.trim()

    if (!editingField || !trimmedValue) {
      return
    }

    if (editingField === 'email' && !isValidEmail(trimmedValue)) {
      setEditingError(EMAIL_VALIDATION_MESSAGE)
      return
    }

    if (editingField === 'phone' && !isValidIndonesianPhoneNumber(trimmedValue)) {
      setEditingError(INDONESIAN_PHONE_VALIDATION_MESSAGE)
      return
    }

    const normalizedValue = editingField === 'phone'
      ? normalizeIndonesianPhoneNumber(trimmedValue)
      : trimmedValue

    onSaveProfile({
      ...profile,
      [editingField]: normalizedValue,
    })

    setEditingField(null)
    setEditingError('')
  }

  const saveBirthDate = () => {
    const formattedBirthDate = formatBirthDate(birthDateInputValue)
    if (!formattedBirthDate) {
      return
    }

    onSaveProfile({
      ...profile,
      birthDate: formattedBirthDate,
    })
    setIsBirthDateModalOpen(false)
  }

  const saveGender = () => {
    if (!selectedGender.trim()) {
      return
    }

    onSaveProfile({
      ...profile,
      gender: selectedGender,
    })
    setIsGenderModalOpen(false)
  }

  const birthDateLabel = `${profile.birthDate.day} ${profile.birthDate.month} ${profile.birthDate.year}`

  return (
    <section className="phone-shell profile-settings-shell" aria-label="Profil Pengaturan">
      <header className="profile-settings-header">
        <button type="button" className="profile-settings-back" onClick={onBack} aria-label="Kembali">
          ←
        </button>
        <h1>Profil</h1>
      </header>

      <div className="profile-settings-scroll">
        <div className="profile-settings-avatar-wrap">
          <img src={profile.avatar} alt={profile.name} className="profile-settings-avatar" />
          <button type="button" className="profile-settings-photo-link">Ubah Foto</button>
        </div>

        <section className="profile-settings-section">
          <h2>Info Pribadi</h2>

          <div className="profile-settings-item">
            <div>
              <p>Nama</p>
              <strong>{profile.name}</strong>
            </div>
            <button type="button" onClick={() => openTextEditor('name', profile.name)}>Ubah</button>
          </div>

          <div className="profile-settings-item">
            <div>
              <p>Email</p>
              <strong>{profile.email}</strong>
            </div>
            <button type="button" onClick={() => openTextEditor('email', profile.email)}>Ubah</button>
          </div>

          <div className="profile-settings-item">
            <div>
              <p>Nomor HP</p>
              <strong>{profile.phone}</strong>
            </div>
            <button type="button" onClick={() => openTextEditor('phone', profile.phone)}>Ubah</button>
          </div>

          <div className="profile-settings-item">
            <div>
              <p>Jenis Kelamin</p>
              <strong>{profile.gender || '-'}</strong>
            </div>
            <button
              type="button"
              onClick={() => {
                setSelectedGender(profile.gender)
                setIsGenderModalOpen(true)
              }}
            >
              Ubah
            </button>
          </div>

          <div className="profile-settings-item">
            <div>
              <p>Tanggal Lahir</p>
              <strong>{birthDateLabel}</strong>
            </div>
            <button
              type="button"
              onClick={() => {
                setBirthDateInputValue(parseBirthDateToInputValue(profile.birthDate))
                setIsBirthDateModalOpen(true)
              }}
            >
              Ubah
            </button>
          </div>
        </section>

        <section className="profile-settings-section profile-settings-account">
          <h2>Info Akun</h2>
          <button type="button" className="profile-settings-delete" onClick={onDeleteAccount}>Hapus Akun</button>
        </section>
      </div>

      {editingField && (
        <div className="profile-sheet-overlay" role="dialog" aria-modal>
          <div className="profile-sheet">
            <span className="profile-sheet-handle" />
            <button type="button" className="profile-sheet-close" onClick={() => setEditingField(null)} aria-label="Tutup">
              ✕
            </button>
            <p className="profile-sheet-title">{fieldLabels[editingField]}</p>
            <input
              type={editingField === 'email' ? 'email' : editingField === 'phone' ? 'tel' : 'text'}
              className={editingError ? 'profile-sheet-input profile-sheet-input--invalid' : 'profile-sheet-input'}
              value={editingValue}
              onChange={(event) => {
                setEditingValue(event.target.value)
                if (editingError) {
                  setEditingError('')
                }
              }}
            />
            {editingError && <span className="profile-sheet-error">{editingError}</span>}
            <button type="button" className="profile-sheet-save" onClick={saveTextField}>Simpan</button>
          </div>
        </div>
      )}

      {isGenderModalOpen && (
        <div className="profile-sheet-overlay" role="dialog" aria-modal>
          <div className="profile-sheet">
            <span className="profile-sheet-handle" />
            <button type="button" className="profile-sheet-close" onClick={() => setIsGenderModalOpen(false)} aria-label="Tutup">
              ✕
            </button>
            <p className="profile-sheet-title">Jenis Kelamin</p>
            <select
              className="profile-sheet-input"
              value={selectedGender}
              onChange={(event) => setSelectedGender(event.target.value)}
            >
              <option value="">Pilih jenis kelamin</option>
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </select>
            <button type="button" className="profile-sheet-save" onClick={saveGender}>Simpan</button>
          </div>
        </div>
      )}

      {isBirthDateModalOpen && (
        <div className="profile-sheet-overlay" role="dialog" aria-modal>
          <div className="profile-sheet">
            <span className="profile-sheet-handle" />
            <button type="button" className="profile-sheet-close" onClick={() => setIsBirthDateModalOpen(false)} aria-label="Tutup">
              ✕
            </button>
            <p className="profile-sheet-title">Tanggal Lahir</p>
            <input
              type="date"
              className="profile-sheet-input profile-sheet-date-input"
              value={birthDateInputValue}
              onChange={(event) => setBirthDateInputValue(event.target.value)}
            />
            <button type="button" className="profile-sheet-save" onClick={saveBirthDate}>Simpan</button>
          </div>
        </div>
      )}

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
