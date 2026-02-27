import { useMemo } from 'react'
import type { UmrahTravelerAssets } from '../types'

type UmrahTravelerScreenProps = {
  assets: UmrahTravelerAssets
  participants: Record<ParticipantKey, number>
  selectedRoom: RoomType
  onChangeParticipants: (key: ParticipantKey, value: number) => void
  onSelectRoom: (value: RoomType) => void
  onBack: () => void
  onClose: () => void
  onNext: () => void
}

type ParticipantKey = 'dewasa' | 'anak' | 'bayi'
type RoomType = 2 | 3 | 4

const roomTypes: RoomType[] = [2, 3, 4]
const participantLabels: Record<ParticipantKey, string> = {
  dewasa: 'Dewasa',
  anak: 'Anak - anak',
  bayi: 'Bayi',
}

export function UmrahTravelerScreen({
  assets,
  participants,
  selectedRoom,
  onChangeParticipants,
  onSelectRoom,
  onBack,
  onClose,
  onNext,
}: UmrahTravelerScreenProps) {
  const totalParticipants = useMemo(
    () => participants.dewasa + participants.anak + participants.bayi,
    [participants],
  )

  const canProceed = totalParticipants > 0
  const requiredRooms = useMemo(() => Math.ceil(totalParticipants / selectedRoom), [totalParticipants, selectedRoom])

  const changeParticipant = (key: ParticipantKey, diff: -1 | 1) => {
    const current = participants[key]

    if (diff === -1 && current === 0) {
      return
    }

    if (diff === 1 && totalParticipants >= 9) {
      return
    }

    onChangeParticipants(key, Math.max(0, current + diff))
  }

  return (
    <section className="phone-shell umrah-traveler-shell" aria-label="Pertanyaan Jumlah Peserta">
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

      <section className="umrah-traveler-card" aria-label="Jumlah peserta dan susunan kamar">
        <h2>Berapa orang yang berangkat?</h2>

        <p className="traveler-subtitle">Jumlah Peserta</p>

        <div className="traveler-rows">
          {(Object.keys(participantLabels) as ParticipantKey[]).map((key) => (
            <div key={key} className="traveler-row">
              <span>{participantLabels[key]}</span>

              <div className="traveler-stepper">
                <button
                  type="button"
                  className="step-btn minus"
                  aria-label={`Kurangi ${participantLabels[key]}`}
                  disabled={participants[key] === 0}
                  onClick={() => changeParticipant(key, -1)}
                >
                  <img src={assets.counterMinusIcon} alt="" aria-hidden />
                </button>

                <strong>{participants[key]}</strong>

                <button
                  type="button"
                  className="step-btn plus"
                  aria-label={`Tambah ${participantLabels[key]}`}
                  disabled={totalParticipants >= 9}
                  onClick={() => changeParticipant(key, 1)}
                >
                  <img src={assets.counterPlusIcon} alt="" aria-hidden />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="traveler-subtitle room">Susunan Kamar</p>

        <div className="room-options">
          {roomTypes.map((room) => (
            <button
              key={room}
              type="button"
              className={`room-chip ${selectedRoom === room ? 'active' : ''}`}
              onClick={() => onSelectRoom(room)}
            >
              <img src={assets.roomPersonIcon} alt="" aria-hidden />
              <span>Max {room}</span>
            </button>
          ))}
        </div>

        {canProceed && <p className="room-summary">Estimasi {requiredRooms} kamar (maks {selectedRoom} orang per kamar)</p>}
      </section>

      <div className="traveler-note">
        <img src={assets.infoIcon} alt="Informasi" />
        <p>
          Untuk bisa mendapatkan visa Umrah, peserta bayi/anak anak masing-masing harus tetap memiliki tempat tidur sendiri.
        </p>
      </div>

      <p className="traveler-note-secondary">
        Apabila jumlah peserta lebih dari 9 orang, Anda bisa <strong>Hubungi Kami</strong>
      </p>

      <div className="umrah-traveler-actions">
        <button type="button" className="umrah-back-btn" onClick={onBack}>
          Kembali
        </button>
        <button type="button" className="umrah-next-btn" disabled={!canProceed} onClick={onNext}>
          Selanjutnya
        </button>
      </div>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
