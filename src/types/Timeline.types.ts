/**
 * @file Represents the types used in the Timeline component.
 */

/**
 * @typedef TimelineItemProps
 * @type {object}
 * @property {string} [icon] - The name of the icon to use.
 * @property {string} date - The date to display.
 * @property {string} title - The title to display.
 * @property {string} description - The description to display.
 */

export interface TimelineItemProps {
    icon?: string;
    date: string;
    title: string;
    description: string;
}

/**
 * @typedef TimelineProps
 * @type {object}
 * @property {TimelineItemProps[]} experience - Array of experience items to display in the timeline.
 * @property {TimelineItemProps[]} formation - Array of education items to display in the timeline.
 */

export interface TimelineProps {
    experience: TimelineItemProps[];
    formation: TimelineItemProps[];
}
