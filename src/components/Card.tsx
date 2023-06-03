import React from 'react';
import PictureImg from './PictureImg';
import { CardProps } from '../types/Card.types.ts';


/**
 * Renders a card with an image and a link.
 *
 * @component
 * @example
 * <Card
 *   img={img}
 *   imgMobile={img_mobile}
 *   title="Card title"
 *   urlLabel="Go to link"
 *   link="/path/to/link"
 *   textColor="#FFFFFF"
 *   hn="h2"
 *   className="class class"
 *   pushBackgroundColor="#FFFFFF"
 *   default_size='200/200'
 * />
 */
const Card: React.FC<CardProps> = ({
    img,
    imgMobile,
    title,
    urlLabel,
    link,
    textColor,
    hn,
    className,
    pushBackgroundColor,
    default_size,
}) => {
    const imgAlt = title || (img ? img.alt : link?.split('/').pop() || '');
    const HeadingTag = hn || "h2";
    const cardStyle = { backgroundColor: pushBackgroundColor };
    const textColorStyle = textColor ? { color: textColor } : {};

    return (
        <div
            className={`card ${className} u-relative u-rounded-border u-overflow-hidden`}
            style={cardStyle}
        >
            {img && (
                <div className="card__media u-full-wh">
                    <PictureImg
                        img={img}
                        imgMobile={imgMobile}
                        alt={imgAlt}
                        picture_classes="card__image u-absolute u-absolute-all u-full-wh"
                        img_classes="u-full-wh"
                        default_size={default_size}
                    />
                </div>
            )}
            {!img && <div className="u-full-wh u-bg-white"></div>}
            {(title || urlLabel || link) && (
                <div className="card-wrapper u-full-wh u-absolute u-absolute-top u-absolute-left u-flex flex-column align-items-center justify-content-center u-pad-l">
                    <div className="card__content u-full-width u-center u-flex flex-column justify-content-between">
                        {title && (
                            <div className="card-text">
                                <HeadingTag
                                    className={`card-title h3 ${!textColor ? 'u-white' : ''}`}
                                    style={textColorStyle}
                                >
                                    {title}
                                </HeadingTag>
                            </div>
                        )}
                        {urlLabel && link && (
                            <div className="card__actions u-absolute u-absolute-bottom u-absolute-left u-absolute-right u-pad-b-xl u-pad-s">
                                <a 
                                    className={`card-button link h4 ${!textColor ? 'u-white' : ''}`}
                                    href={link}
                                    style={textColorStyle}
                                >
                                    {urlLabel}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
