import type { UmrahStepAssets } from '../types'

type UmrahBudgetScreenProps = {
  assets: UmrahStepAssets
  options: string[]
  selectedBudget: string | null
  onSelectBudget: (value: string) => void
  onBack: () => void
  onClose: () => void
  onNext: () => void
}

export function UmrahBudgetScreen({
  assets,
  options,
  selectedBudget,
  onSelectBudget,
  onBack,
  onClose,
  onNext,
}: UmrahBudgetScreenProps) {
  return (
    <section className="phone-shell umrah-traveler-shell" aria-label="Pertanyaan Budget Umrah">
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

      <section className="umrah-choice-card" aria-label="Pilih budget per orang">
        <h2>Berapa Budget per orang yang anda rencanakan?</h2>

        <div className="umrah-radio-list budget">
          {options.map((option) => {
            const isActive = selectedBudget === option

            return (
              <button key={option} type="button" className="umrah-radio-row" onClick={() => onSelectBudget(option)}>
                <span className="umrah-radio-text">
                  <strong>{option}</strong>
                </span>
                <span className={`umrah-radio-circle ${isActive ? 'active' : ''}`} aria-hidden />
              </button>
            )
          })}
        </div>
      </section>

      <div className="umrah-traveler-actions">
        <button type="button" className="umrah-back-btn" onClick={onBack}>
          Kembali
        </button>
        <button type="button" className="umrah-next-btn" disabled={!selectedBudget} onClick={onNext}>
          Selanjutnya
        </button>
      </div>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
