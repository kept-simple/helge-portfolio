import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'

import { stacks } from '../data/stacks.js'

export default function Technologies() {
  const { t } = useTranslation()
  const label = (item) => (typeof item === 'string' ? item : t(item.i18nKey))

  return (
    <Container className="py-5">
      <section className="text-panel">
        <p className="text-panel-eyebrow">{t('technologies.eyebrow')}</p>
        <h1 className="text-panel-title">
          {t('technologies.title')}
          <span className="text-panel-subtitle">{t('technologies.subtitle')}</span>
        </h1>

        <p>{t('technologies.intro')}</p>

        <Row className="mt-4 g-4">
          {stacks.map((stack) => (
            <Col key={stack.id} md={6} lg={4}>
              <h2 className="h5">{t(`technologies.groups.${stack.id}`)}</h2>
              <ul className="mb-0">
                {stack.items.map((item) => (
                  <li key={typeof item === 'string' ? item : item.i18nKey}>{label(item)}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

        <p className="text-panel-note mt-4 mb-0">{t('technologies.note')}</p>
      </section>
    </Container>
  )
}
