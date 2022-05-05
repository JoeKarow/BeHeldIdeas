import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icon } from "@iconify/react";
import * as styles from "./timelineCard.module.scss";

function TimelineCard({ date, icon, heading, subheading, body }) {
  return (
    <VerticalTimelineElement
      date={date}
      className={styles.timelineCard}
      dateClassName={styles.timelineDate}
      icon={<Icon icon={icon} />}
      iconClassName={styles.timelineIcon}
    >
      <h2>{heading}</h2>
      <h3>{subheading}</h3>
      <MDXRenderer>{body}</MDXRenderer>
    </VerticalTimelineElement>
  );
}
// @refresh reset
export default TimelineCard;
