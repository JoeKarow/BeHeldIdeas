// Gatsby's required rules
// const path = require('path')

// const gatsbyRequiredRules = path.join(
//   process.cwd(),
//   'node_modules',
//   'gatsby',
//   'dist',
//   'utils',
//   'eslint-rules'
// )

module.exports = {
  // globals: {
  //   __PATH_PREFIX__: true
  // },
  // rulePaths: [gatsbyRequiredRules],
  parser: '@babel/eslint-parser', // uses babel-eslint transforms
  settings: {
    react: {
      version: 'detect', // detect react version
    },
  },
  env: {
    node: true, // defines things like process.env when generating through node
  },
  extends: [
    // 'eslint:recommended', // use recommended configs
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  plugins: [],
  rules: {
    // 'no-anonymous-exports-page-templates': 'warn',
    // 'limited-exports-page-templates': 'warn'
  },
};
