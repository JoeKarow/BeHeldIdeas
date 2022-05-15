import {
  dateField,
  hiddenField,
  imageField,
  mdEditor,
  objectField,
  // relationSelection,
  stringField
} from '../../fields'
import { collectionDefaults } from '../../patterns'
import siteMetadata from '../../../../data/settings/settings.json'

const { author } = siteMetadata

const blogEditFiends = [
  hiddenField('Template Key', 'templateKey', 'blog-page'),
  stringField('Post Title', 'title', true),
  objectField(
    'Cover Image',
    'coverImage',
    [
      imageField('Cover Image', 'image', '', false, true),
      stringField('Alt Text', 'imageAlt', true)
    ],
    true,
    false
  ),
  stringField('Short Description', 'description', true),
  stringField('Author', 'author', true, author),
  dateField('Publish Date', 'date', true),
  // relationSelection(
  //   'Tag(s)',
  //   'tags',
  //   'settings',
  //   'blogtags',
  //   'tagname',
  //   true
  // ),
  mdEditor('Body', 'body')
]

const blogCollection = {
  ...collectionDefaults('Blog', 'blog', true),
  folder: 'src/posts',
  path: '{{year}}/{{slug}}/index',
  media_folder: '',
  public_folder: '',
  create: true,
  fields: [...blogEditFiends]
}

export default blogCollection
