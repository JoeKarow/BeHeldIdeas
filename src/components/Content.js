import * as React from 'react'
import PropTypes from 'prop-types'
import MDXRenderer from 'gatsby-plugin-mdx'

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

export const MDXContent = ({ content, className }) => (
  <MDXRenderer>{content}</MDXRenderer>
)

const Content = ({ content, className }) => {
  console.log('i am the captain now')
  return <div className={className}>{content}</div>
}
Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
}

HTMLContent.propTypes = Content.propTypes

export default Content
