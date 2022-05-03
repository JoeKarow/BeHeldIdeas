import { collectionDefaults } from '../../patterns'
import { mainPage } from './mainPage'
import { resumeTimeline } from './resumeTimeline'

const pageContentCollection = {
  ...collectionDefaults('Page Content', 'pagecontent'),
  extension: 'mdx',
  format: 'frontmatter',
  files: [mainPage, resumeTimeline]
}
export default pageContentCollection
