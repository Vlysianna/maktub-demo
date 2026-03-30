const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

type TermsConditionsScreenProps = {
  onBack: () => void
}

const acknowledgementParagraph =
  "Maktub takes seriously the privacy of users' data. Data protection is taken seriously to ensure that personal data are secure. The Privacy Policy states how users' data are collected, used, disclosed, transferred, and stored. You are strongly advised to read this information. Should you have concerns about how your data is handled or other questions, please contact us with contact@maktub.id or use the contact form on our contact us page. Maktub takes seriously the privacy of users' data. Data protection is taken seriously to ensure that personal data are secure. The Privacy Policy states how users' data are collected, used, disclosed, transferred, and stored. You are strongly advised to read this information. Should you have concerns about how your data is handled or other questions, please contact us with contact@maktub.id or use the contact form on our contact us page."

const disclaimerParagraph =
  "Maktub takes seriously the privacy of users' data. Data protection is taken seriously to ensure that personal data are secure. The Privacy Policy states how users' data are collected, used, disclosed, transferred, and stored. You are strongly advised to read this information. Should you have concerns about how your data is handled or other questions, please contact us with contact@maktub.id or use the contact form on our contact us page. Maktub takes seriously the privacy of users' data. Data protection is taken seriously to ensure that personal data are secure. The Privacy Policy states how users' data are collected, used, disclosed."

function renderParagraphWithContactLink(text: string) {
  const segments = text.split('contact us')

  return (
    <>
      {segments.map((segment, index) => (
        <span key={`${segment}-${index}`}>
          {segment}
          {index < segments.length - 1 && <span className="terms-conditions-link">contact us</span>}
        </span>
      ))}
    </>
  )
}

export function TermsConditionsScreen({ onBack }: TermsConditionsScreenProps) {
  return (
    <section className="phone-shell terms-conditions-shell" aria-label="Syarat dan Ketentuan">
      <header className="terms-conditions-header">
        <button type="button" className="terms-conditions-back" onClick={onBack} aria-label="Kembali">
          <img src={publicAsset('assets/figma/arrow-right.svg')} alt="" aria-hidden />
        </button>
        <h1>Syarat dan Ketentuan</h1>
      </header>

      <div className="terms-conditions-scroll">
        <section className="terms-conditions-section">
          <h2>Acknowledgement of Terms</h2>
          <p>{renderParagraphWithContactLink(acknowledgementParagraph)}</p>
        </section>

        <section className="terms-conditions-section">
          <h2>Important Disclaimer</h2>
          <p>{renderParagraphWithContactLink(disclaimerParagraph)}</p>
        </section>
      </div>

      <footer className="home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}