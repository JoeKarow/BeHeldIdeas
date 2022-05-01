import { stringField, objectField } from '../../fields'

const siteMetadata = {
  label: 'Site Metadata',
  name: 'siteMetadata',
  file: 'src/data/settings/settings.json',
  fields: [
    objectField('Site Metadata', 'siteMetadata', [
      stringField('Site Title', 'title', true),
      stringField('URL', 'siteUrl', true, 'https://'),
      stringField('Default Author', 'author', true)
    ])
  ]
}

export default siteMetadata
