import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import { TimelinePageTemplate } from '../components'

const ResumePage = ({ data }) => {
  const { items, timelineOptions } = data.mdx.frontmatter

  return (
    <>
      <div className="wrapper style1">
        <section className="content container">
          <TimelinePageTemplate
            timelineOptions={timelineOptions}
            items={items}
          />
        </section>
      </div>
    </>
  )
}

ResumePage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        items: PropTypes.any,
        timelineOptions: PropTypes.any
      })
    })
  })
}
export default ResumePage
export const query = graphql`
  query ResumePageQuery($slug: String!) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        items {
          subheading
          heading
          dates
          icon
          body
        }
        templateKey
        timelineOptions {
          lineColor
          animate
        }
        seo {
          title
          description
        }
        title
      }
      id
      slug
    }
  }
`
