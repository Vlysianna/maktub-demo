import type { HotelDetail, HotelRoomOption, UmrahHotelAssets } from '../types'

type UmrahHotelDetailScreenProps = {
  assets: UmrahHotelAssets
  detail: HotelDetail
  selectedRoomId: string | null
  onBack: () => void
  onSelectRoom: (room: HotelRoomOption) => void
}

function toRupiah(amount: number) {
  return `Rp ${amount.toLocaleString('id-ID')}`
}

function iconForFeature(feature: string, assets: UmrahHotelAssets) {
  if (feature.includes('Bathtub')) return assets.bathtubIcon
  if (feature.includes('King bed')) return assets.bedIcon
  if (feature.includes('m2')) return assets.areaIcon
  if (feature.includes('Wifi')) return assets.wifiIcon
  if (feature.includes('Sarapan')) return assets.breakfastIcon
  return assets.noSmokingIcon
}

export function UmrahHotelDetailScreen({ assets, detail, selectedRoomId, onBack, onSelectRoom }: UmrahHotelDetailScreenProps) {
  const primaryPolicy = detail.policies[0]
  const otherPolicies = detail.policies.slice(1)
  const policyLines = primaryPolicy?.body
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  const checkInLabel = policyLines?.find((line) => line.toLowerCase().startsWith('check-in')) ?? 'Check-in: Dari 16:00'
  const checkOutLabel = policyLines?.find((line) => line.toLowerCase().startsWith('check-out')) ?? 'Check-out: Sebelum 12:00'

  return (
    <section className="phone-shell umrah-hotel-shell" aria-label="Detail Hotel">
      <header className="umrah-flight-header">
        <button type="button" className="umrah-flight-back" aria-label="Kembali" onClick={onBack}>
          ←
        </button>
        <h1>Detail Hotel</h1>
        <span className="umrah-ticket-head-spacer" aria-hidden />
      </header>

      <div className="umrah-flight-stepper umrah-flight-stepper--figma" aria-hidden>
        <span className="umrah-flight-step active">
          <i>1</i>
          <b>Flight ---</b>
        </span>
        <span className="umrah-flight-step active">
          <i>2</i>
          <b>Hotel ---</b>
        </span>
        <span className="umrah-flight-step">
          <i>3</i>
          <b>Pembayaran ---</b>
        </span>
        <span className="umrah-flight-step">
          <i>4</i>
          <b>Visa &amp; Lainnya</b>
        </span>
      </div>

      <div className="umrah-hotel-detail-scroll">
        <img src={detail.heroImage} alt={detail.name} className="umrah-hotel-hero" />

        <section className="umrah-hotel-detail-block">
          <h2>{detail.name}</h2>
          <p className="umrah-hotel-type-pill">{detail.typeLabel}</p>
          <p className="umrah-hotel-distance">
            <img src={assets.locationIcon} alt="" aria-hidden />
            {detail.locationDistanceLabel.replace('ke arah Mekah', 'dari ka’bah')}
          </p>
          <p className="umrah-hotel-description">{detail.description}</p>
          <button type="button" className="umrah-hotel-readmore">
            Read more..
          </button>
        </section>

        <section className="umrah-hotel-detail-block">
          <h3>Fasilitas</h3>
          <div className="umrah-hotel-facilities">
            {detail.facilities.map((item) => (
              <p key={item}>
                <img src={assets.facilityIcon} alt="" aria-hidden />
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="umrah-hotel-detail-block">
          <h3>Kamar</h3>
          <div className="umrah-room-list">
            {detail.rooms.map((room) => (
              <article key={room.id} className="umrah-room-card">
                <div className="umrah-room-images">
                  {room.images.map((image, index) => (
                    <img key={`${room.id}-${index}`} src={image} alt={room.name} />
                  ))}
                </div>

                <p className="umrah-room-name">{room.name}</p>

                <div className="umrah-room-features">
                  {room.features.map((feature) => (
                    <p key={`${room.id}-${feature}`}>
                      <img src={iconForFeature(feature, assets)} alt="" aria-hidden />
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="umrah-room-bottom-row">
                  <div>
                    <p>
                      {toRupiah(room.pricePerNight)} <span>/malam</span>
                    </p>
                    <p>
                      <strong>{toRupiah(room.totalPrice)}</strong> {room.totalLabel}
                    </p>
                  </div>
                  <button
                    type="button"
                    className={`umrah-ticket-select-btn ${selectedRoomId === room.id ? 'active' : ''}`}
                    onClick={() => onSelectRoom(room)}
                  >
                    Pilih
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="umrah-hotel-detail-block">
          <h3>Lokasi</h3>
          <p className="umrah-hotel-location-name">
            <img src={assets.locationIcon} alt="" aria-hidden />
            {detail.locationName}
          </p>
          <p className="umrah-hotel-location-distance">{detail.locationDistanceLabel}</p>
          <img src={detail.mapImage} alt="Peta lokasi hotel" className="umrah-hotel-map" />
        </section>

        <section className="umrah-hotel-detail-block">
          <h3>Kebijakan</h3>

          <article className="umrah-ticket-policy-highlight">
            <h3>
              <img src={assets.policyIcon} alt="" aria-hidden /> {detail.highlightedPolicy.title}
            </h3>
            <p>{detail.highlightedPolicy.body}</p>
            <button type="button">Selengkapnya</button>
          </article>

          {primaryPolicy && (
            <article className="umrah-ticket-policy-item umrah-hotel-policy-split">
              <h3>{primaryPolicy.title}</h3>
              <p>
                <span>Check-in :</span> <strong>{checkInLabel.replace(/^Check-in\s*:\s*/i, '')}</strong>
              </p>
              <p>
                <span>Check-out :</span> <strong>{checkOutLabel.replace(/^Check-out\s*:\s*/i, '')}</strong>
              </p>
            </article>
          )}

          {otherPolicies.map((policy) => (
            <article key={policy.title} className="umrah-ticket-policy-item">
              <h3>{policy.title}</h3>
              <p>{policy.body}</p>
            </article>
          ))}
        </section>
      </div>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
