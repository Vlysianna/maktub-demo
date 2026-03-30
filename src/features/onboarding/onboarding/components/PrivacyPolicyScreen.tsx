import { useState } from 'react'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

type PrivacySection = {
  id: string
  title: string
  content: string
}

type PrivacyPolicyScreenProps = {
  onBack: () => void
}

const sections: PrivacySection[] = [
  {
    id: 'how-your-data-is-used-main',
    title: 'How is your data used?',
    content:
      'Your personal data are processed in accordance with applicable data protection laws in Nigeria. As such, your data are not used for other purposes than stated in the Privacy Policy statement. Your information is processed during your registration process on the paseero.ng platform. This information (last name, first name, address, telephone number, email, bank account, etc.) is required for the setting up of your user account on the platform. Your data can also be used for other objectives, which includes different market analyses that can be useful for the improving our business organization.',
  },
  {
    id: 'personalized-services-main',
    title: 'Personalized Services',
    content: '',
  },
  {
    id: 'how-your-data-is-used-secondary',
    title: 'How is your data used?',
    content: '',
  },
  {
    id: 'personalized-services-secondary',
    title: 'Personalized Services',
    content: '',
  },
]

export function PrivacyPolicyScreen({ onBack }: PrivacyPolicyScreenProps) {
  const [openSectionIds, setOpenSectionIds] = useState<string[]>([sections[0].id])

  const toggleSection = (sectionId: string) => {
    setOpenSectionIds((previous) =>
      previous.includes(sectionId) ? previous.filter((id) => id !== sectionId) : [...previous, sectionId],
    )
  }

  return (
    <section className="phone-shell privacy-policy-shell" aria-label="Kebijakan Privasi">
      <header className="privacy-policy-header">
        <button type="button" className="privacy-policy-back" onClick={onBack} aria-label="Kembali">
          <img src={publicAsset('assets/figma/arrow-right.svg')} alt="" aria-hidden />
        </button>
        <h1>Kebijakan Privasi</h1>
      </header>

      <div className="privacy-policy-scroll">
        <p className="privacy-policy-intro">
          Maktub takes seriously the privacy of users' data. Data protection is taken seriously to ensure that personal
          data are secure. The Privacy Policy states how users' data are collected, used, disclosed, transferred, and
          stored. You are strongly advised to read this information. Should you have concerns about how your data is
          handled or other questions, please contact us with contact@maktub.id or use the contact form on our{' '}
          <span className="privacy-policy-link">contact us</span> page.
        </p>

        <div className="privacy-policy-accordion" role="list">
          {sections.map((section) => {
            const isOpen = openSectionIds.includes(section.id)
            return (
              <section key={section.id} className="privacy-policy-item" role="listitem">
                <button
                  type="button"
                  className="privacy-policy-item-trigger"
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={isOpen}
                >
                  <span>{section.title}</span>
                  <span className={`privacy-policy-item-arrow${isOpen ? ' is-open' : ''}`} aria-hidden>
                    <img src={publicAsset('assets/figma/Icon-Outline arrow.svg')} alt="" />
                  </span>
                </button>

                {isOpen && section.content && <p className="privacy-policy-item-content">{section.content}</p>}
              </section>
            )
          })}
        </div>
      </div>
    </section>
  )
}
