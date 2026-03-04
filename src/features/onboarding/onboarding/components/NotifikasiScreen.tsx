import type { NotificationItem, NotifikasiAssets } from '../types'

type NotifikasiScreenProps = {
  assets: NotifikasiAssets
  notifications: NotificationItem[]
  onBack: () => void
}

export function NotifikasiScreen({ assets, notifications, onBack }: NotifikasiScreenProps) {
  return (
    <section className="phone-shell notifikasi-shell" aria-label="Notifikasi">
      <header className="notifikasi-header">
        <button className="notifikasi-back" type="button" onClick={onBack} aria-label="Kembali">
          <img src={assets.backIcon} alt="" />
        </button>
        <h1 className="notifikasi-title">Notifikasi</h1>
      </header>

      <div className="notifikasi-scroll">
        <div className="notifikasi-list">
          {notifications.map((item) => (
            <article
              key={item.id}
              className={`notifikasi-item${item.read ? '' : ' notifikasi-item--unread'}`}
            >
              <div className="notifikasi-item-icon">
                <img src={assets.infoIcon} alt="" />
              </div>

              <div className="notifikasi-item-content">
                <p className="notifikasi-item-title">{item.title}</p>
                <p className={`notifikasi-item-desc${item.read ? ' notifikasi-item-desc--read' : ''}`}>
                  {item.description}
                </p>
              </div>

              <span className={`notifikasi-item-time${item.read ? ' notifikasi-item-time--read' : ''}`}>
                {item.time}
              </span>

              {!item.read && (
                <span className="notifikasi-item-dot" aria-label="Belum dibaca">
                  <img src={assets.unreadDot} alt="" />
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
