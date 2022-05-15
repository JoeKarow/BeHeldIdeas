import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import * as styles from './timelineCard.module.scss'
import { Icon } from '@iconify/react'

const TimelineCard = ({ date, icon, heading, subheading, body }) => {
  return (
    <VerticalTimelineElement
      date={date}
      className={styles.timelineCard}
      dateClassName={styles.timelineDate}
      icon={<Icon icon={icon} className={styles.iconify} />}
      iconClassName={styles.timelineIcon}>
      <h2>{heading}</h2>
      <h3>{subheading}</h3>
      <MDXRenderer>{body}</MDXRenderer>
    </VerticalTimelineElement>
  )
}
// @refresh reset
export default TimelineCard
