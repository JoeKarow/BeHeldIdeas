import { imageField, mdEditor, objectField, stringField } from '../../fields'
import { pageDefaults } from '../../patterns'

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
const spotlightLeftFields = [
  imageField('Featured Image', 'image', '../../static/img', false, true),
  stringField('Image Alt Text', 'imgAlt', true),
  stringField('Main heading', 'heading', true),
  stringField('Subheading', 'subheading', true),
  mdEditor('Blurb', 'content')
]

export const mainPage = {
  label: 'Main Page',
  name: 'main',
  file: 'src/pages/index.mdx',
  fields: [
    ...pageDefaults('index-page'),
    objectField('Top Section', 'hero', heroSectionFields, true),
    objectField('About Section', 'about', aboutSectionFields, true),
    objectField('Left Spotlight', 'spotleft', spotlightLeftFields, true),
    objectField('Right Spotlight', 'spotright', spotlightLeftFields, true)
  ]
}
