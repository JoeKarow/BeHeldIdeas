const path = require('path')
const cmsJsonSettings = require('./src/data/settings/settings.json')

const { siteMetadata } = cmsJsonSettings
// const siteMetadata = {
//   title: 'html5up-landed-gatsby',
//   siteUrl: 'https://www.yourdomain.tld',
// };
const sourceFilesystemList = [
  // gatsby images -- *keep first*
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'uploads',
      path: `${__dirname}/static/img`
    },
    __key: 'uploads'
  },
  // pages
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: `${__dirname}/src/pages`
    },
    __key: 'pages'
  },
  // cms data files
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'data',
      path: `${__dirname}/src/data`
    },
    __key: 'jsonData'
  },
  // images
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'srcImages',
      path: `${__dirname}/src/images`
    },
    __key: 'srcImages'
  }
  // {
  //   resolve: `gatsby-graphql-sharp`,
  //   options: {
  //     image_url_fields: [
  //       //your graphql schema hierarchy
  //       'mdx.frontmatter.about.imgURL',
  //       'mdx.frontmatter.hero.imgURL'
  //     ]
  //   }
  // }
]
const pluginImageSharp = {
  resolve: 'gatsby-plugin-sharp',
  options: {
    defaults: {
      formats: ['auto', 'webp'],
      placeholder: 'blurred',
      quality: 50,
      breakpoints: [750, 1080, 1366, 1920],
      backgroundColor: 'transparent'
      // tracedSVGOptions: {},
      // blurredOptions: {},
      // jpgOptions: {},
      // pngOptions: {},
      // webpOptions: {},
      // avifOptions: {}
    },
    stripMetadata: true
  }
}
const pluginMdx = {
  resolve: 'gatsby-plugin-mdx',
  options: {
    extensions: ['.mdx', '.md'],
    gatsbyRemarkPlugins: [
      {
        resolve: 'gatsby-remark-copy-linked-files',
        options: {
          destinationDir: 'uploads'
        }
      },
      {
        resolve: 'gatsby-remark-relative-images',
        options: {
          staticFolderName: 'static/img',
          name: 'uploads'
        }
      },
      {
        resolve: 'gatsby-remark-images',
        options: {
          // It's important to specify the maxWidth (in pixels) of
          // the content container as this plugin uses this as the
          // base for generating different widths of each image.
          maxWidth: 2048
        }
      },
      {
        resolve: 'gatsby-remark-external-links'
      }
    ]
  }
}

const pluginNetlifyCMS = {
  resolve: 'gatsby-plugin-netlify-cms',
  options: {
    manualInit: true,
    modulePath: `${__dirname}/src/cms/index.js`
  }
}
const pluginCSS = {
  resolve: 'gatsby-plugin-sass',
  options: {
    // useResolveUrlLoader: true,
    postCssPlugins: []
    // sassOptions: {
    //   indentedSyntax: false,
    //   includePaths: ['./src/css', './src/css/libs'],
    // },
  }
}

const webpackAnalyze = {
  resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
  options: {
    devMode: true
  }
}

const pluginPnpm = {
  resolve: 'gatsby-plugin-pnpm',
  options: {
    include: [
      'mini-css-extract-plugin'
      //   'prop-types',
      //   'query-string',
      //   'lodash/merge',
      //   'mitt',
      //   '@gatsbyjs/reach-router/lib/utils',
      //   'gatsby-link',
      //   'gatsby-react-router-scroll'
    ]
    // projectPath: path.dirname(__dirname)
  }
}

const pluginPageCreator = {
  //fixes the issue where initial MDX builds are blank
  resolve: 'gatsby-plugin-page-creator',
  options: {
    path: `${__dirname}/src/pages`,
    ignore: [`**/*.mdx`, `**.*.md`]
  }
}

const plugins = [
  ...sourceFilesystemList,
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-image',
  // 'gatsby-plugin-mdx',
  // 'gatsby-plugin-postcss',
  'gatsby-remark-images',
  'gatsby-transformer-sharp',
  'gatsby-transformer-json',
  'gatsby-plugin-graphql-config',
  'gatsby-plugin-page-data-preview',
  // 'gatsby-plugin-mdx-frontmatter',
  pluginMdx,
  pluginImageSharp,
  pluginCSS,
  pluginNetlifyCMS,
  pluginPageCreator,
  pluginPnpm,
  //keep this last
  'gatsby-plugin-netlify'
]

module.exports = {
  siteMetadata: siteMetadata,
  plugins: plugins
}
