import { listObject, stringField } from '../../fields'

const navigation = {
  label: 'Navigation',
  name: 'items',
  file: 'src/data/navigation/navigation.json',
  fields: [
    listObject('Nav Items', 'navigation', [
      stringField('Title', 'text'),
      stringField('URL', 'url')
    ])
  ]
}

export default navigation
