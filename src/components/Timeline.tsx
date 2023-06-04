/**
 * @file Represents the Timeline component, which is used to display experience and education in a timeline format.
 */

import React from "react";
import Icon from "../common/Icon";
import '../scss/sections/Timeline.scss';
import { TimelineItemProps, TimelineProps } from "../types/Timeline.types.ts";

/**
 * @function TimelineItem
 * @param {TimelineItemProps} props - Properties passed to component.
 * @returns {JSX.Element} The rendered TimelineItem component.
 */
const TimelineItem: React.FC<TimelineItemProps> = ({
    date,
    title,
    description,
}) => {
    // Render a timeline item, which includes a date, title, and description.
    return (
        <div className="timeline-item u-flex flex-column v-gap-l ">
            <div className="timeline-item__date u-flex align-items-center h-gap-m">
                <div className="line"></div> 
                <Icon name="Calendar" size={24} />
                <span className="h4 keep-size">{date}</span>
            </div>
            <div className="timeline-item__info u-flex flex-column v-gap-l">
                <span className="h4 keep-size">{title}</span>
                <p className="u-gray">{description}</p>
            </div>
        </div>
    );
};

/**
 * @function Timeline
 * @param {TimelineProps} props - Properties passed to component.
 * @returns {JSX.Element} The rendered Timeline component.
 */
const Timeline: React.FC<TimelineProps> = ({ experience, formation }) => {
    // Render a timeline, which includes sections for both experience and education.
    return (
        <section className="react-component section-timeline page-width-large page-width-mobile">
            <div className="timeline u-flex justify-content-between">
                <div className="u-flex flex-column v-gap-xl">
                    <span className="h3 keep-size">Experience</span>
                    <div className="timeline-section u-flex flex-column v-gap-xl">
                        <div className="line"></div>
                        {experience.map((item, index) => (
                            <TimelineItem key={index} {...item} />
                        ))}
                    </div>
                </div>
                <div className="u-flex flex-column v-gap-xl">
                    <span className="h3 keep-size">Formation</span>
                    <div className="timeline-section u-flex flex-column v-gap-xl">
                        <div className="line"></div>
                        {formation.map((item, index) => (
                            <TimelineItem key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
