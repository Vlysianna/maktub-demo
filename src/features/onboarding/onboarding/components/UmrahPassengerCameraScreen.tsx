import { useEffect, useRef, useState } from 'react'
import type { UmrahTicketAssets } from '../types'

type UmrahPassengerCameraScreenProps = {
  assets: UmrahTicketAssets
  onBack: () => void
  onCapture: (photoDataUrl: string) => void
}

export function UmrahPassengerCameraScreen({ assets, onBack, onCapture }: UmrahPassengerCameraScreenProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const [cameraReady, setCameraReady] = useState(false)
  const [cameraUnavailable, setCameraUnavailable] = useState(false)

  useEffect(() => {
    let active = true

    async function startCamera() {
      if (!navigator.mediaDevices?.getUserMedia) {
        setCameraUnavailable(true)
        return
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: 'environment' },
          },
          audio: false,
        })

        if (!active) {
          stream.getTracks().forEach((track) => track.stop())
          return
        }

        streamRef.current = stream

        if (videoRef.current) {
          videoRef.current.srcObject = stream
          await videoRef.current.play()
          setCameraReady(true)
        }
      } catch {
        setCameraUnavailable(true)
      }
    }

    void startCamera()

    return () => {
      active = false
      streamRef.current?.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
  }, [])

  const handleShutter = () => {
    if (cameraReady && videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current

      const width = video.videoWidth
      const height = video.videoHeight

      if (!width || !height) {
        return
      }

      canvas.width = width
      canvas.height = height
      const context = canvas.getContext('2d')

      if (!context) {
        return
      }

      context.drawImage(video, 0, 0, width, height)
      const captured = canvas.toDataURL('image/jpeg', 0.92)
      onCapture(captured)
    }
  }

  return (
    <section className="phone-shell umrah-camera-shell" aria-label="Kamera Paspor">
      <img src={assets.cameraMaskOverlay} alt="" aria-hidden className="umrah-camera-overlay" />

      <header className="umrah-camera-header">
        <button type="button" className="umrah-ticket-back" aria-label="Kembali" onClick={onBack}>
          <img src={assets.backIcon} alt="" aria-hidden />
        </button>
      </header>

      <div className="umrah-camera-preview-wrap" aria-hidden>
        {cameraReady ? (
          <video ref={videoRef} className="umrah-camera-preview" autoPlay playsInline muted />
        ) : (
          <div className="umrah-camera-empty">Arahkan kamera ke paspor</div>
        )}
      </div>

      <img src={assets.cameraGuideFrame} alt="" aria-hidden className="umrah-camera-guide" />

      <button type="button" className="umrah-camera-flash" aria-label="Flashlight">
        <img src={assets.cameraFlashIcon} alt="" aria-hidden />
      </button>

      <button
        type="button"
        className="umrah-camera-shutter"
        aria-label="Ambil foto paspor"
        onClick={handleShutter}
        disabled={!cameraReady}
      >
        <img src={assets.cameraShutterOuter} alt="" aria-hidden className="outer" />
        <img src={assets.cameraShutterInner} alt="" aria-hidden className="inner" />
      </button>

      {cameraUnavailable && <p className="umrah-camera-warning">Kamera tidak tersedia. Izinkan akses kamera lalu coba lagi.</p>}

      <canvas ref={canvasRef} className="umrah-camera-canvas" aria-hidden />

      <footer className="umrah-camera-indicator" aria-hidden />
    </section>
  )
}
