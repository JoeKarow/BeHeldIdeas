import { collectionDefaults } from '../../patterns'
import { mainPage } from './mainPage'

const pageContentCollection = {
  ...collectionDefaults('Page Content', 'pagecontent'),
  extension: 'mdx',
  format: 'frontmatter',
  files: [mainPage]
}
export default pageContentCollection
