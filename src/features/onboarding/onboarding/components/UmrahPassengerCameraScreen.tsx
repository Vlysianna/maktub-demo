import type { UmrahTicketAssets } from '../types'

type UmrahPassengerCameraScreenProps = {
  assets: UmrahTicketAssets
  onBack: () => void
  onCapture: () => void
}

export function UmrahPassengerCameraScreen({ assets, onBack, onCapture }: UmrahPassengerCameraScreenProps) {
  return (
    <section className="phone-shell umrah-camera-shell" aria-label="Kamera Paspor">
      <img src={assets.cameraMaskOverlay} alt="" aria-hidden className="umrah-camera-overlay" />

      <header className="umrah-camera-header">
        <button type="button" className="umrah-ticket-back" aria-label="Kembali" onClick={onBack}>
          <img src={assets.backIcon} alt="" aria-hidden />
        </button>
      </header>

      <div className="umrah-camera-preview-wrap" aria-hidden>
        <img src={assets.cameraSamplePassport} alt="" className="umrah-camera-preview" />
      </div>

      <img src={assets.cameraGuideFrame} alt="" aria-hidden className="umrah-camera-guide" />

      <button type="button" className="umrah-camera-flash" aria-label="Flashlight">
        <img src={assets.cameraFlashIcon} alt="" aria-hidden />
      </button>

      <button type="button" className="umrah-camera-shutter" aria-label="Ambil foto paspor" onClick={onCapture}>
        <img src={assets.cameraShutterOuter} alt="" aria-hidden className="outer" />
        <img src={assets.cameraShutterInner} alt="" aria-hidden className="inner" />
      </button>

      <footer className="umrah-camera-indicator" aria-hidden />
    </section>
  )
}
