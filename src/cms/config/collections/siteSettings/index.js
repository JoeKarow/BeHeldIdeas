import { collectionDefaults } from '../../patterns'
import navigation from './navigation'

const siteSettingsCollection = {
  ...collectionDefaults('Settings', 'settings'),
  files: [navigation]
}

export siteSettingsCollection
