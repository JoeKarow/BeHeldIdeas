const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const { reporter } = require('gatsby-cli/lib/reporter/reporter')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            templateKey
          }
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('🚨  ERROR: Loading "createPages" query', result.errors)
  }

  const pages = result.data.allMdx.nodes
  console.table(pages)
  pages.forEach(page => {
    actions.createPage({
      path: `/${page.slug}`,
      component: require.resolve(
        `./src/templates/${page.frontmatter.templateKey}.js`
      ),
      context: {
        id: page.id,
        templateKey: page.frontmatter.templateKey
      }
    })
  })
}

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  //   fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `Mdx`) {
    const value = await createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}

// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions

//   await graphql(`
//     {
//       allMdx {
//         edges {
//           node {
//             id
//             frontmatter {
//               templateKey
//             }
//             slug
//           }
//         }
//       }
//     }
//   `).then(result => {
//     // check for errors & log
//     if (result.errors) {
//       reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
//       result.errors.forEach(e => console.error(e.toString()))
//       return Promise.reject(result.errors)
//     }
//     const posts = result.data.allMdx.edges

//     posts.forEach(edge => {
//       const { id } = edge.node
//       const { templateKey } = edge.node.frontmatter
//       createPage({
//         path: `/${edge.node.slug}`,
//         //tags part goes here??
//         component: path.resolve(
//           `${__dirname}/src/templates/${String(templateKey)}.js`
//         ),
//         // additional info
//         context: {
//           id,
//           template: templateKey
//         }
//       })
//       reporter.info(
//         `Created Page: /${edge.node.slug} with contexts passed: ${templateKey} ${id}`
//       )
//     })

//     //tagging logic goes here to create /tags/

//     //create blog post logic goes here later
//   })
// }
