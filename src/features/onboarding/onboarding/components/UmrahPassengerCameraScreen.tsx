import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import { HiOutlineArrowPath, HiOutlineCamera } from 'react-icons/hi2'
import type { UmrahTicketAssets } from '../types'

type UmrahPassengerCameraScreenProps = {
  assets: UmrahTicketAssets
  onBack: () => void
  onCapture: (photoDataUrl: string) => void
}

type CameraFacing = 'environment' | 'user'

export function UmrahPassengerCameraScreen({ assets, onBack, onCapture }: UmrahPassengerCameraScreenProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const previewReadyTimeoutRef = useRef<number | null>(null)
  const previewReadyIntervalRef = useRef<number | null>(null)
  const cameraReadyRef = useRef(false)
  const fallbackToUserTriedRef = useRef(false)
  const [cameraReady, setCameraReady] = useState(false)
  const [cameraUnavailable, setCameraUnavailable] = useState(false)
  const [isStartingCamera, setIsStartingCamera] = useState(true)
  const [cameraMessage, setCameraMessage] = useState('Menyalakan kamera...')
  const [hasCameraStream, setHasCameraStream] = useState(false)
  const [requiresTapToStart, setRequiresTapToStart] = useState(false)
  const [activeFacing, setActiveFacing] = useState<CameraFacing>('environment')

  useEffect(() => {
    cameraReadyRef.current = cameraReady
  }, [cameraReady])

  const attemptVideoPlayback = (videoElement: HTMLVideoElement) => {
    const playPromise = videoElement.play()

    if (!playPromise) {
      return
    }

    void playPromise
      .then(() => {
        setRequiresTapToStart(false)
      })
      .catch(() => {
        setRequiresTapToStart(true)
        setIsStartingCamera(false)
        setCameraMessage('Ketuk tombol di bawah untuk mengaktifkan pratinjau kamera.')
      })
  }

  const clearPreviewReadyTimeout = () => {
    if (previewReadyTimeoutRef.current !== null) {
      window.clearTimeout(previewReadyTimeoutRef.current)
      previewReadyTimeoutRef.current = null
    }

    if (previewReadyIntervalRef.current !== null) {
      window.clearInterval(previewReadyIntervalRef.current)
      previewReadyIntervalRef.current = null
    }
  }

  const getUserMediaWithTimeout = async (constraints: MediaStreamConstraints, timeoutMs = 7000) => {
    let timeoutId: number | null = null

    try {
      return await Promise.race([
        navigator.mediaDevices.getUserMedia(constraints),
        new Promise<never>((_, reject) => {
          timeoutId = window.setTimeout(() => {
            reject(new DOMException('Permintaan kamera melebihi batas waktu.', 'AbortError'))
          }, timeoutMs)
        }),
      ])
    } finally {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId)
      }
    }
  }

  const getVideoDeviceCandidates = async (preferredFacing: CameraFacing) => {
    const devices = await navigator.mediaDevices.enumerateDevices()
    const videoDevices = devices.filter((device) => device.kind === 'videoinput')
    const frontKeywords = ['front', 'user', 'selfie']
    const backKeywords = ['back', 'rear', 'environment']
    const preferredKeywords = preferredFacing === 'environment' ? backKeywords : frontKeywords

    const scored = videoDevices
      .map((device) => {
        const label = device.label.toLowerCase()
        const score = preferredKeywords.some((keyword) => label.includes(keyword)) ? 1 : 0
        return { device, score }
      })
      .sort((a, b) => b.score - a.score)

    return scored.map((item) => item.device.deviceId).filter(Boolean)
  }

  const getCameraStream = async (preferredFacing: CameraFacing) => {
    const oppositeFacing: CameraFacing = preferredFacing === 'environment' ? 'user' : 'environment'
    const candidateDeviceIds = await getVideoDeviceCandidates(preferredFacing)

    const attempts: MediaStreamConstraints[] = [
      {
        video: {
          facingMode: { ideal: preferredFacing },
        },
        audio: false,
      },
      {
        video: {
          facingMode: { ideal: oppositeFacing },
        },
        audio: false,
      },
      {
        video: true,
        audio: false,
      },
    ]

    for (const deviceId of candidateDeviceIds) {
      attempts.splice(2, 0, {
        video: {
          deviceId: { exact: deviceId },
        },
        audio: false,
      })
    }

    let lastError: unknown = null

    for (const constraints of attempts) {
      try {
        return await getUserMediaWithTimeout(constraints)
      } catch (error) {
        lastError = error
      }
    }

    throw lastError
  }

  const markCameraReady = () => {
    if (!streamRef.current) {
      return
    }

    setCameraReady(true)
    setHasCameraStream(true)
    setCameraUnavailable(false)
    setCameraMessage('Arahkan kamera ke paspor')
    setIsStartingCamera(false)
    clearPreviewReadyTimeout()
  }

  const stopCamera = () => {
    clearPreviewReadyTimeout()
    streamRef.current?.getTracks().forEach((track) => track.stop())
    streamRef.current = null
    setHasCameraStream(false)
    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
  }

  const startCamera = async (preferredFacing: CameraFacing = activeFacing) => {
    let hasScheduledFallbackRetry = false
    setActiveFacing(preferredFacing)
    setIsStartingCamera(true)
    setCameraUnavailable(false)
    setCameraReady(false)
    setHasCameraStream(false)
    setRequiresTapToStart(false)
    setCameraMessage('Menyalakan kamera...')

    stopCamera()

    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'

    if (!window.isSecureContext && !isLocalhost) {
      setCameraUnavailable(true)
      setCameraMessage('Kamera membutuhkan koneksi HTTPS.')
      setIsStartingCamera(false)
      return
    }

    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraUnavailable(true)
      setCameraMessage('Perangkat tidak mendukung akses kamera.')
      setIsStartingCamera(false)
      return
    }

    try {
      const stream = await getCameraStream(preferredFacing)

      streamRef.current = stream

      const videoElement = videoRef.current

      if (!videoElement) {
        setCameraUnavailable(true)
        setCameraMessage('Pratinjau kamera belum siap. Coba lagi.')
        return
      }

      videoElement.srcObject = stream
      videoElement.muted = true
      videoElement.playsInline = true
      setCameraMessage('Menghubungkan pratinjau kamera...')
      setHasCameraStream(true)

      const activeTrack = stream.getVideoTracks()[0]
      if (activeTrack) {
        activeTrack.onunmute = () => {
          attemptVideoPlayback(videoElement)
        }
      }

      videoElement.onloadedmetadata = () => {
        attemptVideoPlayback(videoElement)
      }

      attemptVideoPlayback(videoElement)

      // Some mobile browsers miss media events even when stream is active.
      const startedAt = Date.now()
      previewReadyIntervalRef.current = window.setInterval(() => {
        if (streamRef.current !== stream) {
          clearPreviewReadyTimeout()
          return
        }

        const previewHasFrame =
          (videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && videoElement.videoWidth > 0) ||
          videoElement.currentTime > 0

        if (previewHasFrame) {
          markCameraReady()
          return
        }

        if (Date.now() - startedAt > 8000) {
          if (preferredFacing === 'environment' && !fallbackToUserTriedRef.current) {
            fallbackToUserTriedRef.current = true
            hasScheduledFallbackRetry = true
            clearPreviewReadyTimeout()
            stream.getTracks().forEach((track) => track.stop())
            if (streamRef.current === stream) {
              streamRef.current = null
            }
            setHasCameraStream(false)
            setCameraMessage('Kamera belakang belum merespons. Mencoba kamera depan...')
            void startCamera('user')
            return
          }

          clearPreviewReadyTimeout()
          setCameraUnavailable(true)
          setHasCameraStream(false)
          setIsStartingCamera(false)
          setCameraMessage('Pratinjau belum muncul. Ketuk Coba Lagi atau pilih Ambil dari Galeri.')
        }
      }, 160)

      previewReadyTimeoutRef.current = window.setTimeout(() => {
        if (!cameraReadyRef.current && streamRef.current === stream) {
          setIsStartingCamera(false)
        }
      }, 1200)
    } catch (error) {
      const mediaError = error as DOMException
      setCameraUnavailable(true)
      setHasCameraStream(false)

      if (mediaError.name === 'NotAllowedError') {
        setCameraMessage('Akses kamera ditolak. Izinkan kamera di browser lalu coba lagi.')
      } else if (mediaError.name === 'NotFoundError') {
        setCameraMessage('Kamera tidak ditemukan di perangkat ini.')
      } else if (mediaError.name === 'NotReadableError') {
        setCameraMessage('Kamera sedang dipakai aplikasi lain. Tutup aplikasi lain lalu coba lagi.')
      } else {
        setCameraMessage('Kamera tidak tersedia. Izinkan akses kamera lalu coba lagi.')
      }
    } finally {
      if (!hasScheduledFallbackRetry) {
        setIsStartingCamera(false)
      }
    }
  }

  useEffect(() => {
    fallbackToUserTriedRef.current = false
    if (videoRef.current) {
      videoRef.current.setAttribute('webkit-playsinline', 'true')
    }
  }, [])

  useEffect(() => {
    void startCamera()

    return () => {
      stopCamera()
    }
  }, [])

  const handleShutter = () => {
    if (hasCameraStream && videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current
      const activeTrack = streamRef.current?.getVideoTracks()[0] ?? null
      const settings = activeTrack?.getSettings()

      const width = video.videoWidth || settings?.width || 1280
      const height = video.videoHeight || settings?.height || 720

      if (!width || !height) {
        setCameraMessage('Pratinjau belum siap. Coba lagi dalam 1-2 detik.')
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
      stopCamera()
      onCapture(captured)
    }
  }

  const handleVideoReady = () => {
    if (!cameraReady) {
      markCameraReady()
    }
  }

  const handleVideoError = () => {
    clearPreviewReadyTimeout()
    setCameraReady(false)
    setHasCameraStream(false)
    setCameraUnavailable(true)
    setIsStartingCamera(false)
    setCameraMessage('Pratinjau kamera gagal dimuat. Coba Lagi.')
  }

  const handleManualPreviewStart = () => {
    const videoElement = videoRef.current

    if (!videoElement || !streamRef.current) {
      void startCamera()
      return
    }

    setCameraMessage('Mengaktifkan kamera...')
    setIsStartingCamera(true)
    attemptVideoPlayback(videoElement)

    window.setTimeout(() => {
      if (!cameraReady && streamRef.current) {
        setIsStartingCamera(false)
        setCameraMessage('Ketuk lagi jika pratinjau belum tampil.')
      }
    }, 900)
  }

  const handleSwitchCamera = () => {
    const nextFacing: CameraFacing = activeFacing === 'environment' ? 'user' : 'environment'

    fallbackToUserTriedRef.current = nextFacing === 'environment' ? false : fallbackToUserTriedRef.current
    setCameraMessage('Mengganti kamera...')
    void startCamera(nextFacing)
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
        <video
          ref={videoRef}
          className="umrah-camera-preview"
          autoPlay
          playsInline
          muted
          controls={false}
          disablePictureInPicture
          onLoadedData={handleVideoReady}
          onCanPlay={handleVideoReady}
          onPlaying={handleVideoReady}
          onError={handleVideoError}
        />
        {!cameraReady && (
          <div className={`umrah-camera-empty${hasCameraStream ? ' is-streaming' : ''}`}>
            {hasCameraStream ? (
              <span className="umrah-camera-empty-label">{isStartingCamera ? 'Menyalakan kamera...' : cameraMessage}</span>
            ) : (
              isStartingCamera ? 'Menyalakan kamera...' : cameraMessage
            )}
          </div>
        )}

        {requiresTapToStart && !cameraReady && (
          <button type="button" className="umrah-camera-activate-btn" onClick={handleManualPreviewStart}>
            Ketuk untuk aktifkan kamera
          </button>
        )}
      </div>

      <div className="umrah-camera-guide" aria-hidden />

      <button type="button" className="umrah-camera-flash" aria-label="Ganti kamera" onClick={handleSwitchCamera}>
        <HiOutlineArrowPath aria-hidden />
      </button>

      <button
        type="button"
        className="umrah-camera-shutter"
        aria-label="Ambil foto paspor"
        onClick={handleShutter}
        disabled={!cameraReady || !hasCameraStream || cameraUnavailable}
      >
        <span className="outer" aria-hidden />
        <span className="inner" aria-hidden>
          <HiOutlineCamera aria-hidden />
        </span>
      </button>

      {cameraUnavailable && (
        <div className="umrah-camera-warning-wrap">
          <p className="umrah-camera-warning">{cameraMessage}</p>
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
