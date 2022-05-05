import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PropTypes from "prop-types";
import { TimelineCardList } from "..";

function TimelinePageTemplate({
  timelineOptions: { animate = true, className = "", lineColor = "#000000" },
  items
}) {
  return (
    <VerticalTimeline animate className="timeline" lineColor="#39c088">
      <TimelineCardList items={items} />
    </VerticalTimeline>
  );
}

TimelinePageTemplate.propTypes = {
  items: PropTypes.array.isRequired,
  timelineOptions: PropTypes.object
};

export default TimelinePageTemplate;
