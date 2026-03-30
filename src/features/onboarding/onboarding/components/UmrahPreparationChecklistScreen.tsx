import { useMemo, useState } from 'react'
import type { MyBookingDetailAssets, UmrahPreparationChecklistSection } from '../types'

type UmrahPreparationChecklistScreenProps = {
  assets: MyBookingDetailAssets
  sections: UmrahPreparationChecklistSection[]
  onBack: () => void
}

export function UmrahPreparationChecklistScreen({ assets, sections, onBack }: UmrahPreparationChecklistScreenProps) {
  const initialCheckedState = useMemo(() => {
    const entries = sections
      .flatMap((section) => section.groups)
      .flatMap((group) => group.items)
      .map((item) => [item.id, Boolean(item.checked)] as const)

    return Object.fromEntries(entries)
  }, [sections])

  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>(initialCheckedState)

  const toggleItem = (itemId: string) => {
    setCheckedMap((previous) => ({
      ...previous,
      [itemId]: !previous[itemId],
    }))
  }

  return (
    <section className="phone-shell umrah-preparation-shell" aria-label="Checklist Persiapan Umrah">
      <header className="umrah-preparation-header">
        <button type="button" className="umrah-preparation-back" onClick={onBack} aria-label="Kembali">
          <img src={assets.backIcon} alt="" aria-hidden />
        </button>
        <h1>Cheklist Persiapan Umrah</h1>
      </header>

      <div className="umrah-preparation-scroll">
        {sections.map((section) => (
          <section key={section.id} className="umrah-preparation-section">
            <h2>{section.title}</h2>

            {section.groups.map((group) => (
              <div key={group.id} className="umrah-preparation-group">
                {group.title && <h3>{group.title}</h3>}

                <div className="umrah-preparation-items">
                  {group.items.map((item) => {
                    const isChecked = Boolean(checkedMap[item.id])
                    return (
                      <button
                        key={item.id}
                        type="button"
                        className={`umrah-preparation-item${isChecked ? ' checked' : ''}`}
                        onClick={() => toggleItem(item.id)}
                        aria-pressed={isChecked}
                      >
                        <span>{item.label}</span>
                        <span className={`umrah-preparation-checkbox${isChecked ? ' checked' : ''}`} aria-hidden />
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
