import {
  imageField,
  mdEditor,
  mdButtons,
  objectField,
  stringField
} from '../../fields'
import { collectionDefaults, pageDefaults } from '../../patterns'

console.log(mdEditor('Blurb', 'content'))
const heroSectionFields = [
  stringField('Main heading', 'heading', true),
  stringField('Subheading', 'subheading', true),
  imageField('Main Image', 'image', '../../static/img', false, true),
  stringField('Image Alt Text', 'imgAlt', true)
]
const aboutSectionFields = [
  imageField('Featured Image', 'image', '../../static/img', false, true),
  stringField('Image Alt Text', 'imgAlt', true),
  stringField('Main heading', 'heading', true),
  stringField('Subheading', 'subheading', true),
  mdEditor('Blurb', 'content')
]

const mainPage = {
  label: 'Main Page',
  name: 'main',
  file: 'src/pages/index.mdx',
  fields: [
    ...pageDefaults('index-page'),
    objectField('Top Section', 'hero', heroSectionFields, true),
    objectField('About Section', 'about', aboutSectionFields, true)
  ]
}
const pageContentCollection = {
  ...collectionDefaults('Page Content', 'pagecontent'),
  extension: 'mdx',
  format: 'frontmatter',
  files: [mainPage]
}
export default pageContentCollection
