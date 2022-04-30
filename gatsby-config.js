const cmsJsonSettings = require('./src/data/settings/settings.json');

const { siteMetadata } = cmsJsonSettings;
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
      path: `${__dirname}/static/img`,
    },
    __key: 'uploads',
  },
  // pages
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: `${__dirname}/src/pages`,
    },
    __key: 'pages',
  },
  // cms data files
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'data',
      path: `${__dirname}/src/data`,
    },
  },
];
const pluginImageSharp = {
  resolve: 'gatsby-plugin-sharp',
  options: {
    defaults: {
      formats: ['auto', 'webp'],
      placeholder: 'blurred',
      quality: 50,
      breakpoints: [750, 1080, 1366, 1920],
      backgroundColor: 'transparent',
      tracedSVGOptions: {},
      blurredOptions: {},
      jpgOptions: {},
      pngOptions: {},
      webpOptions: {},
      avifOptions: {},
    },
  },
};
const pluginMdx = {
  resolve: 'gatsby-plugin-mdx',
  options: {
    extensions: ['.mdx', '.md'],
    gatsbyRemarkPlugins: [
      {
        resolve: 'gatsby-remark-relative-images',
        options: {
          name: 'uploads',
        },
      },
      {
        resolve: 'gatsby-remark-images',
        options: {
          // It's important to specify the maxWidth (in pixels) of
          // the content container as this plugin uses this as the
          // base for generating different widths of each image.
          maxWidth: 2048,
        },
      },
      {
        resolve: 'gatsby-remark-copy-linked-files',
        options: {
          destinationDir: 'static',
        },
      },
      {
        resolve: 'gatsby-remark-external-links',
      },
    ],
  },
};
const pluginNetlifyCMS = {
  resolve: 'gatsby-plugin-netlify-cms',
  options: {
    manualInit: true,
    modulePath: `${__dirname}/src/cms/index.js`,
  },
};
const pluginCSS = {
  resolve: 'gatsby-plugin-sass',
  options: {
    // useResolveUrlLoader: true,
    postCssPlugins: [],
    // sassOptions: {
    //   indentedSyntax: false,
    //   includePaths: ['./src/css', './src/css/libs'],
    // },
  },
};

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-image',
'gatsby-plugin-mdx',
  'gatsby-plugin-postcss',
  'gatsby-transformer-json',
  'gatsby-transformer-sharp',
  pluginImageSharp,
  pluginCSS,
  pluginNetlifyCMS,

  ...sourceFilesystemList,
  //keep this last
  'gatsby-plugin-netlify',
];

module.exports = {
  siteMetadata: siteMetadata,
  plugins: plugins,
};
