import { useState } from 'react'
import type { NotificationItem, NotifikasiAssets, NotificationPreferenceSection } from '../types'

type NotifikasiScreenProps = {
  assets: NotifikasiAssets
  mode?: 'feed' | 'settings'
  notifications?: NotificationItem[]
  sections?: NotificationPreferenceSection[]
  onBack: () => void
}

type ToggleMap = Record<string, boolean>

const buildInitialToggles = (sections: NotificationPreferenceSection[]): ToggleMap => {
  const initial: ToggleMap = {}

  sections.forEach((section) => {
    section.items.forEach((item) => {
      initial[`${section.id}:${item.id}`] = item.enabled
    })
  })

  return initial
}

export function NotifikasiScreen({
  assets,
  mode = 'feed',
  notifications = [],
  sections = [],
  onBack,
}: NotifikasiScreenProps) {
  const [toggleState, setToggleState] = useState<ToggleMap>(() => buildInitialToggles(sections))

  const toggleItem = (sectionId: string, itemId: string) => {
    const key = `${sectionId}:${itemId}`
    setToggleState((previous) => ({
      ...previous,
      [key]: !previous[key],
    }))
  }

  return (
    <section
      className={`phone-shell notifikasi-shell${mode === 'settings' ? ' notifikasi-shell--settings' : ''}`}
      aria-label="Notifikasi"
    >
      <header className="notifikasi-header">
        <button className="notifikasi-back" type="button" onClick={onBack} aria-label="Kembali">
          <img src={assets.backIcon} alt="" />
        </button>
        <h1 className="notifikasi-title">Notifikasi</h1>
      </header>

      <div className="notifikasi-scroll">
        {mode === 'settings' ? (
          <div className="notifikasi-settings-list">
            {sections.map((section) => (
              <article key={section.id} className="notifikasi-settings-card">
                <header className="notifikasi-settings-card-header">
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                </header>

                <div className="notifikasi-settings-items">
                  {section.items.map((item) => {
                    const key = `${section.id}:${item.id}`
                    const isEnabled = toggleState[key]

                    return (
                      <div key={key} className="notifikasi-settings-item">
                        <span>{item.label}</span>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={isEnabled}
                          aria-label={`${section.title} ${item.label}`}
                          className={`notifikasi-switch${isEnabled ? ' is-on' : ''}`}
                          onClick={() => toggleItem(section.id, item.id)}
                        >
                          <span />
                        </button>
                      </div>
                    )
                  })}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="notifikasi-list">
            {notifications.map((item) => (
              <article key={item.id} className={`notifikasi-item${item.read ? '' : ' notifikasi-item--unread'}`}>
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
        )}
      </div>
    </section>
  )
}
