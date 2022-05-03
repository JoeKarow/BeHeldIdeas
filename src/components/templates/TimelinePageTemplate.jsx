import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import timelineGenerator from '../../../workers/timelineGenerator'
import PropTypes from 'prop-types'

// @refresh reset
const TimelinePageTemplate = ({
  timelineOptions: { animate = true, className = '', lineColor = '#000000' },
  items
}) => {
  const timelineCards = timelineGenerator(items)
  return <VerticalTimeline animate={true}>{timelineCards}</VerticalTimeline>
}

TimelinePageTemplate.propTypes = {
  items: PropTypes.array.isRequired,
  timelineOptions: PropTypes.object
}

export default TimelinePageTemplate
