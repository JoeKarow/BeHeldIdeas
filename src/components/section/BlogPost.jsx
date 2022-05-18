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
  return (
    <section id="main" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={[styles.major, styles.header]}>
          <h1 className="mx-auto text-3xl w-fit">{mdx.frontmatter.title}</h1>
        </div>
        <article>
          <GatsbyImage
            image={imageData.image}
            alt={imageData.alt}
            className="my-5"
          />

          <MDXRenderer className={styles.content}>{mdx.body}</MDXRenderer>
        </article>
      </div>
    </section>
  )
}

export default BlogPost
