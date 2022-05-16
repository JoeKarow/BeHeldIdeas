import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import * as styles from './blogPost.module.scss'

const BlogPost = ({ data }) => {
  const { mdx } = data
  const imageData = {
    image: getImage(mdx.frontmatter.coverImage.image),
    alt: mdx.frontmatter.coverImage.imageAlt
  }
  console.log(imageData)
  return (
    <section id="main" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={[styles.major, styles.header]}>
          <h2>{mdx.frontmatter.title}</h2>
        </div>
        <article>
          <GatsbyImage image={imageData.image} alt={imageData.alt} />

          <MDXRenderer className={styles.content}>{mdx.body}</MDXRenderer>
        </article>
      </div>
    </section>
  )
}

export default BlogPost
