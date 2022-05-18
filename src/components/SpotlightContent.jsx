import React from 'react'
import * as styles from './spotlightContent.module.scss'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const SpotlightContent = ({ content, layout }) => {
  // 'content flex flex-col'
  return (
    <div className={styles[layout]}>
      <div className={styles.content}>
        <div className={styles.headings}>
          <h2>{content.heading}</h2>
          <h3>{content.subheading}</h3>
        </div>
        <div className={styles.body}>
          <MDXRenderer>{content.body}</MDXRenderer>
        </div>
      </div>
    </div>
  )
}

export default SpotlightContent
