import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { IndexPageTemplate } from '../components/templates/IndexPageTemplate'

const IndexPage = ({ data }) => {
  const { hero, about } = data.mdx.frontmatter
  return (
    <Layout>
      <IndexPageTemplate hero={hero} about={about} body={data.mdx.body} />
    </Layout>
  )
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
              gatsbyImageData
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
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
