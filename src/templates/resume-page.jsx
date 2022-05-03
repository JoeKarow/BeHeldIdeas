import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import TimelinePageTemplate from '../components/templates/TimelinePageTemplate'

const ResumePage = ({ data }) => {
  const { items, timelineOptions } = data.mdx.frontmatter
  console.log(items)
  console.log(timelineOptions)

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
  query ResumePageQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        items {
          subheading
          heading
          dates {
            text
            color
            background
          }
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
