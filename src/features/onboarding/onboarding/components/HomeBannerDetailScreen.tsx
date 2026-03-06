import type { HomeBannerDetailContent } from '../types'

type HomeBannerDetailScreenProps = {
  content: HomeBannerDetailContent
  onBack: () => void
}

export function HomeBannerDetailScreen({ content, onBack }: HomeBannerDetailScreenProps) {
  return (
    <section className="phone-shell home-banner-detail-shell" aria-label="Banner detail home">
      <div className="home-banner-detail-scroll">
        <header className="home-banner-detail-hero">
          <img
            src={content.heroImage}
            alt={content.heroImageAlt}
            className="home-banner-detail-hero-image"
          />

          <button
            type="button"
            className="home-banner-detail-back-btn"
            aria-label="Kembali"
            onClick={onBack}
          >
            <img src={content.backIcon} alt="" aria-hidden />
          </button>

          <div className="home-banner-detail-hero-content">
            <img src={content.headingLogo} alt="" aria-hidden className="home-banner-detail-logo" />
            <p className="home-banner-detail-brand">{content.brand}</p>
            <h1>{content.title}</h1>
          </div>
        </header>

        <div className="home-banner-detail-body">
          <p className="home-banner-detail-description">{content.description}</p>

          <h2 className="home-banner-detail-section-title">{content.sectionTitle}</h2>

          <div className="home-banner-detail-gallery" aria-label="Galeri tempat bersejarah">
            <img
              src={content.galleryMainImage}
              alt={content.sectionTitle}
              className="home-banner-detail-gallery-main"
            />
            <img src={content.galleryTopImage} alt="Pemandangan lokasi bersejarah" />
            <img src={content.galleryBottomImage} alt="Detail lokasi bersejarah" />
          </div>

          <ol className="home-banner-detail-list">
            {content.places.map((place) => (
              <li key={place.id}>
                <strong>{place.title}</strong>
                <p>{place.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}