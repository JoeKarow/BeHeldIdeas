import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { TimelineCard } from '../TimelineCard'
import 'react-vertical-timeline-component/style.min.css'
// @refresh reset
const TimelinePageTemplate = ({
  timelineOptions: { animate = true, className = '', lineColor = '#000000' },
  items
}) => {
  const timelineCards = items.map((item, index) => {
    const itemKey = (index + 1).toString().padStart(3, '0').toString()
    const cardOptions = {
      dateInnerStyle: {
        background: item.dates.background,
        color: item.dates.color
      }
    }
    return (
      <TimelineCard
        itemOptions={cardOptions}
        dateText={item.dates.text}
        heading={item.heading}
        subheading={item.subheading}
        body={item.subheading}
      />
    )
  })
  console.log(timelineCards)
  return <VerticalTimeline animate={true}>{timelineCards}</VerticalTimeline>
}

export default TimelinePageTemplate
