import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import { HiOutlineArrowPath, HiOutlineBolt, HiOutlineCamera } from 'react-icons/hi2'
import type { UmrahTicketAssets } from '../types'

type UmrahPassengerCameraScreenProps = {
  assets: UmrahTicketAssets
  onBack: () => void
  onCapture: (photoDataUrl: string) => void
}

export function UmrahPassengerCameraScreen({ assets, onBack, onCapture }: UmrahPassengerCameraScreenProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const [cameraReady, setCameraReady] = useState(false)
  const [cameraUnavailable, setCameraUnavailable] = useState(false)
  const [isStartingCamera, setIsStartingCamera] = useState(true)

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop())
    streamRef.current = null
    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
  }

  const startCamera = async () => {
    setIsStartingCamera(true)
    setCameraUnavailable(false)
    setCameraReady(false)

    stopCamera()

    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraUnavailable(true)
      setIsStartingCamera(false)
      return
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: 'environment' },
        },
        audio: false,
      })

      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
        setCameraReady(true)
      }
    } catch {
      setCameraUnavailable(true)
    } finally {
      setIsStartingCamera(false)
    }
  }

  useEffect(() => {
    void startCamera()

    return () => {
      stopCamera()
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

  const handleFileCapture = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onCapture(reader.result)
      }
    }
    reader.readAsDataURL(file)
    event.currentTarget.value = ''
  }

  return (
    <section className="phone-shell umrah-camera-shell" aria-label="Kamera Paspor">
      <header className="umrah-camera-header">
        <button type="button" className="umrah-ticket-back" aria-label="Kembali" onClick={onBack}>
          <img src={assets.backIcon} alt="" aria-hidden />
        </button>
      </header>

      <div className="umrah-camera-preview-wrap">
        {cameraReady ? (
          <video ref={videoRef} className="umrah-camera-preview" autoPlay playsInline muted />
        ) : (
          <div className="umrah-camera-empty">{isStartingCamera ? 'Menyalakan kamera...' : 'Arahkan kamera ke paspor'}</div>
        )}
      </div>

      <div className="umrah-camera-guide" aria-hidden />

      <button type="button" className="umrah-camera-flash" aria-label="Flashlight">
        <HiOutlineBolt aria-hidden />
      </button>

      <button
        type="button"
        className="umrah-camera-shutter"
        aria-label="Ambil foto paspor"
        onClick={handleShutter}
        disabled={!cameraReady}
      >
        <span className="outer" aria-hidden />
        <span className="inner" aria-hidden>
          <HiOutlineCamera aria-hidden />
        </span>
      </button>

      {cameraUnavailable && (
        <div className="umrah-camera-warning-wrap">
          <p className="umrah-camera-warning">Kamera tidak tersedia. Izinkan akses kamera lalu coba lagi.</p>
          <div className="umrah-camera-warning-actions">
            <button type="button" className="umrah-camera-retry-btn" onClick={() => void startCamera()}>
              <HiOutlineArrowPath aria-hidden />
              Coba Lagi
            </button>
            <button type="button" className="umrah-camera-retry-btn" onClick={() => fileInputRef.current?.click()}>
              <HiOutlineCamera aria-hidden />
              Ambil dari Galeri
            </button>
          </div>
        </div>
      )}

      <canvas ref={canvasRef} className="umrah-camera-canvas" aria-hidden />
      <input
        ref={fileInputRef}
        className="umrah-camera-input"
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileCapture}
      />

      <footer className="umrah-camera-indicator" aria-hidden />
    </section>
  )
}
