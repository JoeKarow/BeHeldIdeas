import React from 'react'
import { TimelineCard } from '../src/components/TimelineCard'

const timelineGenerator = items =>
  items.map((item, index) => {
    const itemKey = (index + 1).toString().padStart(3, '0').toString()
    const cardOptions = {
      dateInnerStyle: {
        background: item.dates.background,
        color: item.dates.color
      }
    }
    return (
      <TimelineCard
        key={itemKey}
        itemOptions={cardOptions}
        dateText={item.dates.text}
        heading={item.heading}
        subheading={item.subheading}
        body={item.subheading}
      />
    )
  })

export default timelineGenerator
