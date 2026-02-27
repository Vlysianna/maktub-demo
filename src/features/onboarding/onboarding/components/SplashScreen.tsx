type SplashScreenProps = {
  logoUrl: string
}

export function SplashScreen({ logoUrl }: SplashScreenProps) {
  return (
    <section className="phone-shell splash-shell" aria-label="Splash Screen">
      <div className="splash-pattern" aria-hidden />

      <img className="splash-logo" src={logoUrl} alt="Maktub" />

      <footer className="home-indicator splash-home-indicator" aria-hidden>
        <span />
      </footer>
    </section>
  )
}
