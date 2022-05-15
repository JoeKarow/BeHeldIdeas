import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { IndexPageTemplate } from '../components'

const IndexPage = ({ data }) => {
  // console.log(data.mdx)
  const { mdx } = data
  const { hero, about, spotleft } = data.mdx.frontmatter

  return <IndexPageTemplate data={data} />
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        templateKey
        seo {
          title
          description
        }
        hero {
          subheading
          imgAlt
          heading
          image {
            childImageSharp {
              gatsbyImageData(width: 480)
            }
          }
        }
        about {
          subheading
          imgAlt
          heading
          content
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        spotleft {
          subheading
          imgAlt
          heading
          content
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        spotright {
          subheading
          imgAlt
          heading
          content
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
      mdxAST
      rawBody
      body
    }
  }
`
