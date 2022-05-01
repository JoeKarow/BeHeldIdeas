import { listObject, stringField } from '../../fields'

const navigation = {
  label: 'Navbar Items',
  name: 'items',
  file: 'src/data/navigation/navigation.json',
  fields: [
    listObject(
      'Navbar Items',
      'items',
      [stringField('Title', 'text', true), stringField('URL', 'url', true)],
      true,
      true,
      false
    )
  ]
}

export default navigation
