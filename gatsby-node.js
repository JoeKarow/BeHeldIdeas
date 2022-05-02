const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const { reporter } = require('gatsby-cli/lib/reporter/reporter')

// exports.createSchemaCustomization = ({ actions, schema }) => {
//   const { createTypes, printTypeDefinitions } = actions
//   createTypes(`
// type MdxFrontmatterHero {
//   heading: String
//   subheading: String
//   image: File
//   imgAlt: String
// }

// type MdxFrontmatterAbout {
//   image: File
//   imgAlt: String
//   heading: String
//   subheading: String
//   content: String
// }

//   `)
//   printTypeDefinitions({ path: './typeDefs.txt' })
// }

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  //   fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              templateKey
            }
            slug
          }
        }
      }
    }
  `).then(result => {
    // check for errors & log
    if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
    const posts = result.data.allMdx.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: `/${edge.node.slug}`,
        //tags part goes here??
        component: path.resolve(
          `${__dirname}/src/templates/${String(
            edge.node.frontmatter.templateKey
          )}.js`
        ),
        // additional info
        context: {
          id
        }
      })
      reporter.info(`Created Page: /${edge.node.slug}`)
    })

    //tagging logic goes here to create /tags/

    //create blog post logic goes here later
  })
}
