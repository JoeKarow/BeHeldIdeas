import React from 'react'
import { graphql } from 'gatsby'
import { BlogPostTemplate } from '../components'

const BlogPage = ({ data }) => {
  return <BlogPostTemplate data={data} />
}

export default BlogPage

export const query = graphql`
  query BlogPageQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      slug
      id
      frontmatter {
        author
        date
        description
        coverImage {
          image {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.777778)
            }
          }
          imageAlt
        }
        title
      }
    }
  }
`
