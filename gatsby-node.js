// const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  type Mdx implements Node
    @mimeTypes(types: ["text/x-markdown"]){
      id: ID!
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  //call component & worker indexer
  // reporter.info('Generating index.js files for Components & Workers')
  // await generateIndexes()

  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            templateKey
            generate
          }
          slug
        }
      }
      settingsJson {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('🚨  ERROR: Loading "createPages" query', result.errors)
  }

  const pages = result.data.allMdx.nodes

  pages.forEach(page => {
    if (page.frontmatter.generate) {
      actions.createPage({
        path: `/${page.slug}`,
        component: require.resolve(
          `./src/templates/${page.frontmatter.templateKey}.jsx`
        ),
        context: {
          slug: page.slug,
          id: page.id,
          pageID: page.id,
          templateKey: page.frontmatter.templateKey
        }
      })
      reporter.info(
        `👷 🛠 Built page "/${page.slug}" using template "${page.frontmatter.templateKey}"`
      )
    } else {
      reporter.warn(`Skipping ${page.slug}, 'generate' set to FALSE`)
    }
  })
}

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = await createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}

exports.createSchemaCustomization = ({
  actions: { createTypes, createFieldExtension },
  createContentDigest
}) => {
  createFieldExtension({
    name: 'mdx',
    extend() {
      return {
        type: 'String',
        resolve(source, args, context, info) {
          // Grab field
          const value = source[info.fieldName]
          // Isolate MDX
          const mdxType = info.schema.getType('Mdx')
          // Grab just the body contents of what MDX generates
          const { resolve } = mdxType.getFields().body

          return resolve({
            rawBody: value,
            internal: {
              contentDigest: createContentDigest(value) // Used for caching
            },
            args,
            context,
            info
          })
        }
      }
    }
  })

  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }

    type MdxFrontmatterItems {
      body: String @mdx
    }
  `)
}
