import { collectionDefaults } from '../../patterns'
import navigation from './navigation'
import siteMetadata from './siteMetadata'
import socials from './socials'

const siteSettingsCollection = {
  ...collectionDefaults('Settings', 'settings'),
  files: [navigation, siteMetadata, socials]
}

export default siteSettingsCollection
