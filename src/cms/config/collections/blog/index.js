import {
  dateField,
  imageField,
  mdEditor,
  objectField,
  relationSelection,
  stringField
} from '../../fields'
import { collectionDefaults } from '../../patterns'
// import { siteMetadata } from '../../../../data/settings.json';
import * as settingsJSON from '../../../../data/settings/settings.json'

const { author } = settingsJSON.siteMetadata

const blogCollection = {
  ...collectionDefaults('Blog', 'blog'),
  folder: 'src/posts',
  path: '{{year}}/{{slug}}/index',
  media_folder: 'img/',
  public_folder: 'img/',
  create: true,
  fields: [
    stringField('Post Title', 'title', true),
    objectField('Cover Image', 'coverImage', [
      imageField('Cover Image', 'image', false, true),
      stringField('Alt Text', 'image-alt', true)
    ]),
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
    mdEditor('Body', 'body', false)
  ]
}

export default blogCollection
