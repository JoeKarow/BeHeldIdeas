import {
  dateField,
  imageField,
  mdEditor,
  objectField,
  relationSelection,
  stringField
} from '../../fields'
import { collectionDefaults } from '../../patterns'

const pageContentCollection = {
  ...collectionDefaults('Page Content', 'pagecontent'),
  folder: 'src/',
  path: 'src/',
  fields: [stringField('placeholder', 'placeholder')]
}

export default pageContentCollection
