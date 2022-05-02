import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/section/Hero'
import ShowcaseTop from '../components/section/ShowcaseTop'

export const IndexPageTemplate = ({ hero, about }, body) => {
  return (
    <>
      <Hero
        heading={hero.heading}
        subheading={hero.subheading}
        image={hero.image}
        alt={hero.imgAlt}
        thisSectionId="one"
        nextSectionId="two"
      />
      <ShowcaseTop
        coverImage={about.image}
        coverImageAlt={about.imgAlt}
        heading={about.heading}
        subheading={about.subheading}
        body={about.content}
        thisSectionId="two"
        nextSectionId="three"
      />
    </>
  )
}

const IndexPage = ({ data }) => {
  const { hero, about } = data.mdx.frontmatter
  return (
    <Layout>
      <IndexPageTemplate hero={hero} about={about} body={data.mdx.body} />
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery($id: String) {
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
