import blogCollection from './collections/blog'
import pageContentCollection from './collections/pageContent'
import siteSettingsCollection from './collections/siteSettings'

const config = {
  backend: {
    name: 'git-gateway',
    branch: 'main'
  },
  media_folder: '/static/img',
  public_folder: '/img',
  local_backend: true,
  load_config_file: false,
  collections: [blogCollection, pageContentCollection, siteSettingsCollection]
}

export default config
