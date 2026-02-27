import type { UmrahProcessingAssets } from '../types'

type UmrahProcessingScreenProps = {
  assets: UmrahProcessingAssets
}

export function UmrahProcessingScreen({ assets }: UmrahProcessingScreenProps) {
  return (
    <section className="phone-shell umrah-processing-shell" aria-label="Memproses Rekomendasi">
      <img src={assets.blur} alt="" className="umrah-processing-blur" aria-hidden />

      <div className="umrah-processing-center">
        <img src={assets.aiMagic} alt="" className="umrah-processing-icon" aria-hidden />
        <p>Memproses..</p>
      </div>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
