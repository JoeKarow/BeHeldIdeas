import React from 'react'
import { TimelineCard } from '.'

const TimelineCardList = ({ items }) => {
  const list = items.map((item, index) => {
    const itemKey = (index + 1).toString().padStart(3, '0').toString()
    return (
      <TimelineCard
        key={itemKey}
        date={item.date}
        icon={item.icon}
        heading={item.heading}
        subheading={item.subheading}
        body={item.body}
      />
    )
  })
  return list
}

export default TimelineCardList
