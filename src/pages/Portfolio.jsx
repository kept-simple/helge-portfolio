import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'

import { projects } from '../data/projects.js'

export default function Portfolio() {
  const { t } = useTranslation()

  return (
    <Container className="py-5">
      <section className="text-panel text-panel-wide">
        <p className="text-panel-eyebrow">{t('portfolio.eyebrow')}</p>
        <h1 className="text-panel-title">
          {t('portfolio.title')}
          <span className="text-panel-subtitle">{t('portfolio.subtitle')}</span>
        </h1>

        <p>{t('portfolio.intro')}</p>

        <Row as="ul" className="project-grid mt-4 g-4" xs={1} sm={2} lg={3}>
          {projects.map((project) => {
            const name = t(`portfolio.projects.${project.id}.name`)

            return (
              <Col as="li" key={project.id}>
                <a
                  className="project-card"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-card-image"
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={t('portfolio.imageAlt', { name })}
                    loading="lazy"
                  />
                  <div className="project-card-body">
                    <h2 className="project-card-title h5">{name}</h2>
                    <p className="project-card-text">
                      {t(`portfolio.projects.${project.id}.description`)}
                    </p>
                    {project.tags?.length > 0 && (
                      <ul className="project-card-tags">
                        {project.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    )}
                    <span className="project-card-link" aria-hidden="true">
                      {t('portfolio.visit')}
                    </span>
                  </div>
                </a>
              </Col>
            )
          })}
        </Row>

        <p className="text-panel-note mt-4 mb-0">{t('portfolio.note')}</p>
      </section>
    </Container>
  )
}
