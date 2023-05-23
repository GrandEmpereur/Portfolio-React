import React from 'react';
import PictureImg, { Image } from './PictureImg';

// Définition des props pour le composant Card
interface CardProps {
    img?: Image; // L'image principale
    imgMobile?: Image; // L'image pour les appareils mobiles
    title?: string; // Le titre de la carte
    urlLabel?: string; // Le label de l'URL
    link?: string; // Le lien de la carte
    textColor?: string; // La couleur du texte
    hn?: string; // Le niveau de titre HTML
    className?: string; // Les classes CSS pour l'élément <div> principal
    pushBackgroundColor?: string; // La couleur de fond de la carte
    aspectRatio?: string; // L'aspect ratio de la carte pour desktop
    aspectRatioMobile?: string; // L'aspect ratio de la carte pour mobile
    aspectRatioTablet?: string; // L'aspect ratio de la carte pour tablette
    defaultWidth?: string; // La largeur par défaut de l'image
}

/**
 * Renders a card with an image and a link
 *
 * @param {object} img - main image object
 * @param {object} imgMobile - mobile image object
 * @param {string} title - card title
 * @param {string} urlLabel - URL label
 * @param {string} link - card link
 * @param {string} textColor - text color
 * @param {string} hn - HTML heading level
 * @param {string} className - classes for the main <div> element
 * @param {string} pushBackgroundColor - card background color
 * @param {string} aspectRatio - card aspect ratio
 * @param {string} defaultWidth - default image width
 *
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
 *   aspectRatio="1 / 1"
 *   defaultWidth='720'
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
    aspectRatio,
    aspectRatioMobile,
}) => {
    // Définition du texte alternatif pour l'image
    const imgAlt = title || (img ? img.alt : link?.split('/').pop() || '');

    console.log(img);
    return (
        <div
            className={`card ${className} u-relative u-rounded-border u-overflow-hidden`}
            style={{ backgroundColor: pushBackgroundColor, aspectRatio }}
        >
            {img && (
                <div className="card__media u-full-wh">
                    <PictureImg
                        img={img}
                        imgMobile={imgMobile}
                        alt={imgAlt}
                        picture_classes="card__image u-absolute u-absolute-all u-full-wh"
                        img_classes="u-full-wh"
                        aspect_ratio={aspectRatio}
                        aspect_ratio_mobile={aspectRatioMobile}
                    />
                </div>
            )}
            {!img && <div className="u-full-wh u-bg-white"></div>}
            {(title || urlLabel || link) && (
                <div className="card-wrapper u-full-wh u-absolute u-absolute-top u-absolute-left u-flex flex-column align-items-center justify-content-center u-pad-l">
                    <div className="card__content u-full-width u-center u-flex flex-column justify-content-between">
                        {title && (
                            <div className="card-text">
                                <span
                                    className={`card-title h3 ${!textColor ? 'u-white' : ''}`}
                                    style={{ color: textColor }}
                                >
                                    {title}
                                </span>
                            </div>
                        )}
                        {urlLabel && link && (
                            <div className="card__actions u-absolute u-absolute-bottom u-absolute-left u-absolute-right u-pad-b-xl u-pad-s">
                                <span
                                    className={`card-button link h4 ${!textColor ? 'u-white' : ''}`}
                                    style={{ color: textColor }}
                                >
                                    {urlLabel}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {link && <a href={link} />}
        </div>
    );
};

export default Card;
