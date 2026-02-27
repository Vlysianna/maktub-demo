type VisaPackage = {
  id: 'visa-1-bulan' | 'visa-2-minggu' | 'visa-express'
  title: string
  subtitle: string
  priceLabel: string
}

type UmrahVisaServicesScreenProps = {
  cityLabel: string
  formCompleted: boolean
  selectedPackageId: VisaPackage['id']
  travelerCount: number
  onBack: () => void
  onSelectPackage: (id: VisaPackage['id']) => void
  onOpenForm: () => void
  onBuy: () => void
  onSkip: () => void
}

const visaPackages: VisaPackage[] = [
  {
    id: 'visa-1-bulan',
    title: 'Visa 1 Bulan',
    subtitle: 'Mulai dari',
    priceLabel: 'Rp 3.000.000 /orang',
  },
  {
    id: 'visa-2-minggu',
    title: 'Visa 2 Minggu',
    subtitle: 'Mulai dari',
    priceLabel: 'Rp 4.000.000 /orang',
  },
  {
    id: 'visa-express',
    title: 'Visa Express',
    subtitle: 'Hubungi customer support kami',
    priceLabel: '',
  },
]

const landArrangementPrices = [
  'Rp 200.000 /hari',
  'Rp 300.000 /hari',
  'Rp 400.000 /hari',
  'Rp 500.000 /hari',
  'Rp 600.000 /hari',
  'Rp 700.000 /hari',
]

export function UmrahVisaServicesScreen({
  cityLabel,
  formCompleted,
  selectedPackageId,
  travelerCount,
  onBack,
  onSelectPackage,
  onOpenForm,
  onBuy,
  onSkip,
}: UmrahVisaServicesScreenProps) {
  return (
    <section className="phone-shell umrah-visa-shell" aria-label="Visa dan Lainnya">
      <header className="umrah-flight-header">
        <button type="button" className="umrah-flight-back" aria-label="Kembali" onClick={onBack}>
          ←
        </button>
        <h1>Visa &amp; Lainnya</h1>
        <span className="umrah-ticket-head-spacer" aria-hidden />
      </header>

      <div className="umrah-flight-stepper" aria-hidden>
        <span className="active">2 Hotel ---</span>
        <span className="active">3 Pembayaran ---</span>
        <span className="active">4 Visa &amp; Lainnya</span>
      </div>

      <div className="umrah-visa-scroll">
        <section className="umrah-visa-included-card">
          <p>Yang sudah termasuk di pelayanan Maktub:</p>
          <ul>
            <li>Penjemputan kedatangan di bandara</li>
            <li>Membantu penanganan force majeure (sakit / meninggal)</li>
            <li>Layanan online selama perjalanan</li>
          </ul>
        </section>

        <section className="umrah-visa-section">
          <header>
            <h2>Pembuatan Visa Umrah</h2>
            <span aria-hidden>⌃</span>
          </header>
          <p className="umrah-visa-learn">Pelajari selengkapnya</p>

          <div className="umrah-visa-package-grid">
            {visaPackages.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`umrah-visa-package-card ${selectedPackageId === item.id ? 'active' : ''}`}
                onClick={() => onSelectPackage(item.id)}
              >
                <strong>{item.title}</strong>
                <small>{item.subtitle}</small>
                {item.priceLabel ? <p>{item.priceLabel}</p> : null}
              </button>
            ))}
          </div>

          <button type="button" className="umrah-visa-form-btn" onClick={onOpenForm}>
            {formCompleted ? 'Edit Formulir' : 'Lengkapi Formulir'}
          </button>
        </section>

        <section className="umrah-visa-section">
          <header>
            <h2>Land Arrangement</h2>
            <span aria-hidden>⌄</span>
          </header>
          <p className="umrah-visa-learn">Pelajari selengkapnya</p>
          <div className="umrah-visa-package-grid land">
            {landArrangementPrices.map((price, index) => (
              <article key={price} className="umrah-visa-package-card static">
                <strong>{cityLabel} / Mekah</strong>
                <small>Max {2 + index} Orang</small>
                <p>{price}</p>
              </article>
            ))}
          </div>
        </section>

        {['Mutawif', 'Travel Insurance', 'Support Disabilitas', 'Rawdah', 'Paket Wisata'].map((service) => (
          <section key={service} className="umrah-visa-section collapsed">
            <header>
              <h2>{service}</h2>
              <span aria-hidden>⌄</span>
            </header>
            <p>Deskripsi singkat dari service ini</p>
          </section>
        ))}
      </div>

      <footer className="umrah-visa-footer">
        <button type="button" className="cta-button" onClick={onBuy}>
          Beli ({travelerCount} orang)
        </button>
        <button type="button" className="umrah-visa-skip-btn" onClick={onSkip}>
          Lanjutkan tanpa membeli
        </button>
      </footer>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
