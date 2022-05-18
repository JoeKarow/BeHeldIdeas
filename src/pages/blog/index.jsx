import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import * as styles from './index.module.scss'

const BlogList = ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <section id="main" className="wrapper style1">
      <ul className="container">
        {posts.map((post) => {
          const image = getImage(post.node.frontmatter.coverImage.image)
          return (
            <li key={post.node.slug} className="w-fit mx-auto py-10">
              <div className="container">
                <Link to={`/${post.node.slug}`}>
                  <GatsbyImage image={image} alt="" className="" />
                  <h3
                    className={`my-3 w-fit text-xl font-semibold ${styles.title}`}>
                    {post.node.frontmatter.title}
                  </h3>
                </Link>
                <p className="text-base">{post.node.frontmatter.description}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default BlogList

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { templateKey: { eq: "blog-page" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 10
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            coverImage {
              image {
                childImageSharp {
                  gatsbyImageData(
                    aspectRatio: 3
                    layout: CONSTRAINED
                    width: 750
                  )
                }
              }
            }
            description
          }
          slug
        }
      }
    }
  }
`
