// Portfolio entries. Everything locale-independent lives here; the name and
// description of each project come from `portfolio.projects.<id>` in the
// locale files. `image` is resolved against the Vite base URL at render time.
//
// Placeholder content — replace the urls, images and tags with real projects
// and drop the screenshots into `public/projects/`.
export const projects = [
  {
    id: 'dataPlatform',
    url: 'https://example.com',
    image: 'projects/project-placeholder.svg',
    tags: ['Dagster', 'dbt', 'BigQuery'],
  },
  {
    id: 'retailReporting',
    url: 'https://example.com',
    image: 'projects/project-placeholder.svg',
    tags: ['Python', 'Snowflake', 'Looker'],
  },
  {
    id: 'geoAnalytics',
    url: 'https://example.com',
    image: 'projects/project-placeholder.svg',
    tags: ['PostGIS', 'GeoPandas', 'QGIS'],
  },
  {
    id: 'streamingIngest',
    url: 'https://example.com',
    image: 'projects/project-placeholder.svg',
    tags: ['Kafka', 'Kubernetes', 'Terraform'],
  },
]
