import { useEffect, useMemo, useState } from 'react'
import type { MyBookingDetailAssets, UmrahPreparationChecklistSection } from '../types'

const umrahChecklistStorageKey = 'maktub-umrah-preparation-checklist'

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

  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>(() => {
    if (typeof window === 'undefined') {
      return initialCheckedState
    }

    try {
      const storedValue = window.localStorage.getItem(umrahChecklistStorageKey)
      if (!storedValue) {
        return initialCheckedState
      }

      const parsedValue = JSON.parse(storedValue)
      if (!parsedValue || typeof parsedValue !== 'object' || Array.isArray(parsedValue)) {
        return initialCheckedState
      }

      const normalizedStoredValue = Object.fromEntries(
        Object.entries(parsedValue).map(([key, value]) => [key, Boolean(value)]),
      ) as Record<string, boolean>

      return {
        ...initialCheckedState,
        ...normalizedStoredValue,
      }
    } catch {
      window.localStorage.removeItem(umrahChecklistStorageKey)
      return initialCheckedState
    }
  })

  useEffect(() => {
    setCheckedMap((previous) => ({
      ...initialCheckedState,
      ...previous,
    }))
  }, [initialCheckedState])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(umrahChecklistStorageKey, JSON.stringify(checkedMap))
  }, [checkedMap])

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
