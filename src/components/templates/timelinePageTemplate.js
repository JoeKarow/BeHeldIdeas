import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'

const timelinePageTemplate = ({
  timelineOptions: { animate = true, className = '', lineColor = '#000000' },
  items: {
    itemOptions: {
      key,
      dateInnerStyle: { background, color }
    },
    dateText,
    heading,
    subheading,
    body
  }
}) => {
  const timelineCards = items =>
    items.map((item, index) => {
      const itemKey = (index + 1).padStart(3, '0').toString()
      const cardOptions = {
        key: itemKey,
        dateInnerStyle: {
          background: item.itemOptions.background,
          color: item.itemOptions.color
        }
      }
      return (
        <TimelineCard
          itemOptions={cardOptions}
          dateText={item.dateText}
          heading={item.heading}
          subheading={item.subheading}
          body={item.subheading}
        />
      )
    })
  return (
    <Timeline
      animate={timelineOptions.animate}
      className={timelineOptions.className}
      lineColor={timelineOptions.lineColor}></Timeline>
  )
}

const TimelineCard = ({
  itemOptions: {
    key,
    dateInnerStyle: { background, color }
  },
  dateText,
  heading,
  subheading,
  body
}) => {
  return (
    <TimelineItem
      key={itemOptions.key}
      dateText={dateText}
      dateInnerStyle={{
        background: dateInnerStyle.background,
        color: dateInnerStyle.color
      }}>
      <h3>{heading}</h3>
      <h4>{subheading}</h4>
      <MDXProvider>{body}</MDXProvider>
    </TimelineItem>
  )
}

export default timelinePageTemplate
