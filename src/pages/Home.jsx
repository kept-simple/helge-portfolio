import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <Container className="py-5">
      <section className="text-panel">
        <div className="text-panel-header">
          <div>
            <p className="text-panel-eyebrow">{t('home.eyebrow')}</p>
            <h1 className="text-panel-title">
              Helge Dzierzon
              <span className="text-panel-subtitle">{t('home.role')}</span>
            </h1>
          </div>
          <img src="/helge_busy.png" alt={t('home.portraitAlt')} className="text-panel-portrait" />
        </div>

        <p>{t('home.intro')}</p>
        <p>{t('home.daily')}</p>
        <p className="mb-0">{t('home.extra')}</p>
      </section>
    </Container>
  )
}
