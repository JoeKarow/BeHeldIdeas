import React from 'react'
import Layout from '../components/Layout'
import { graphql, Reporter, useStaticQuery } from 'gatsby'
import TimelinePageTemplate from '../components/templates/timelinePageTemplate'

const ResumePage = ({ data }) => {
  const { items, timelineOptions } = data.mdx.frontmatter
  console.log(items)
  console.log(timelineOptions)

  return (
    <Layout>
      <div className="wrapper style1">
        <section className="content container">
          <TimelinePageTemplate
            timelineOptions={timelineOptions}
            items={items}
          />
        </section>
      </div>
    </Layout>
  )
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
