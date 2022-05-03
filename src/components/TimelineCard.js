import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export const TimelineCard = ({
  itemOptions: {
    dateInnerStyle: { background, color }
  },
  dateText,
  heading,
  subheading,
  body
}) => {
  return (
    <VerticalTimelineElement date={dateText}>
      <h2>{heading}</h2>
      <h3>{subheading}</h3>
      <MDXProvider>{body}</MDXProvider>
    </VerticalTimelineElement>
  )
}
// @refresh reset
