// Technology groups. A plain string is a product name and stays literal in
// every locale; `{ i18nKey }` marks a prose entry that gets translated.
export const stacks = [
  {
    id: 'languages',
    items: ['Python', 'SQL', 'JavaScript / TypeScript', 'Bash'],
  },
  {
    id: 'transformation',
    items: ['dbt', 'Pandas', 'Polars', { i18nKey: 'technologies.items.dimensionalModelling' }],
  },
  {
    id: 'orchestration',
    items: ['Dagster', 'Airflow', { i18nKey: 'technologies.items.cronSchedules' }],
  },
  {
    id: 'warehouses',
    items: ['BigQuery', 'Snowflake', 'PostgreSQL', { i18nKey: 'technologies.items.objectStorage' }],
  },
  {
    id: 'streaming',
    items: [
      'Kafka',
      { i18nKey: 'technologies.items.restGraphqlApis' },
      { i18nKey: 'technologies.items.changeDataCapture' },
    ],
  },
  {
    id: 'platform',
    items: ['Docker', 'Kubernetes', 'Terraform', 'GitLab CI/CD'],
  },
  {
    id: 'quality',
    items: [
      { i18nKey: 'technologies.items.dataQualityChecks' },
      'Great Expectations',
      { i18nKey: 'technologies.items.monitoringAlerting' },
      'pytest',
    ],
  },
  {
    id: 'reporting',
    items: ['Looker', 'Metabase', 'Superset', { i18nKey: 'technologies.items.adHocAnalytics' }],
  },
]
