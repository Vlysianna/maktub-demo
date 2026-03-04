import { useState } from 'react'
import type { ProfileData } from '../types'

type EditableField = 'name' | 'email' | 'phone' | 'gender'

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
  gender: 'Jenis Kelamin',
}

export function ProfileSettingsScreen({ profile, onBack, onSaveProfile, onDeleteAccount }: ProfileSettingsScreenProps) {
  const [editingField, setEditingField] = useState<EditableField | null>(null)
  const [editingValue, setEditingValue] = useState('')
  const [isBirthDateModalOpen, setIsBirthDateModalOpen] = useState(false)
  const [day, setDay] = useState(profile.birthDate.day)
  const [month, setMonth] = useState(profile.birthDate.month)
  const [year, setYear] = useState(profile.birthDate.year)

  const openTextEditor = (field: EditableField, value: string) => {
    setEditingField(field)
    setEditingValue(value)
  }

  const saveTextField = () => {
    if (!editingField || !editingValue.trim()) {
      return
    }

    onSaveProfile({
      ...profile,
      [editingField]: editingValue.trim(),
    })

    setEditingField(null)
  }

  const saveBirthDate = () => {
    onSaveProfile({
      ...profile,
      birthDate: {
        day,
        month,
        year,
      },
    })
    setIsBirthDateModalOpen(false)
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
              <strong>{profile.gender}</strong>
            </div>
            <button type="button" onClick={() => openTextEditor('gender', profile.gender)}>Ubah</button>
          </div>

          <div className="profile-settings-item">
            <div>
              <p>Tanggal Lahir</p>
              <strong>{birthDateLabel}</strong>
            </div>
            <button type="button" onClick={() => setIsBirthDateModalOpen(true)}>Ubah</button>
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
              className="profile-sheet-input"
              value={editingValue}
              onChange={(event) => setEditingValue(event.target.value)}
            />
            <button type="button" className="profile-sheet-save" onClick={saveTextField}>Simpan</button>
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
            <div className="profile-sheet-date-row">
              <input value={day} onChange={(event) => setDay(event.target.value)} />
              <input value={month} onChange={(event) => setMonth(event.target.value)} />
              <input value={year} onChange={(event) => setYear(event.target.value)} />
            </div>
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
