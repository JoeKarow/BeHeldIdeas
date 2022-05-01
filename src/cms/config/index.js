import blogCollection from '@/cms/collections/blog'
import pageContentCollection from '@/cms/collections/pageContent'
import siteSettingsCollection from '@/cms/collections/siteSettings'

const config = {
  backend: {
    name: 'git-gateway',
    branch: 'main'
  },
  media_folder: 'src/static/img',
  public_folder: '/static/img',
  local_backend: true,
  load_config_file: false,
  collections: [blogCollection, pageContentCollection, siteSettingsCollection]
}

export default config
