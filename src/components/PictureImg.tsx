import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';

// Définition des types pour les images
export interface Image {
    src: string;
    alt: string;
    width: number;
    height: number;
}

// Ajoutez ceci pour définir les types de vos propriétés personnalisées
interface Styles extends React.CSSProperties {
    '--image-aspect-ratio'?: string;
    '--image-aspect-ratio-lg'?: string;
    '--image-aspect-ratio-md'?: string;
}

// Définition des props pour le composant PictureImg
export interface PictureImgProps {
    img: Image;
    imgMobile?: Image;
    alt?: string;
    picture_classes?: string;
    img_classes?: string;
    aspect_ratio?: string;
    aspect_ratio_mobile?: string;
    widths?: string;
    widths_mobile?: string;
    default_width?: string;
    breakpoint_width?: string;
    is_swiper?: boolean;
    lazy?: boolean;
}


/**
 * 
 * @name PictureImg
 * @description Composant pour afficher une image avec des sources d'images multiples
 * @param {Image} img - Image principale
 * @param {Image} imgMobile - Image pour les petits écrans
 * @param {string} alt - Texte alternatif pour l'image
 * @param {string} picture_classes - Classes CSS pour l'élément <picture>
 * @param {string} img_classes - Classes CSS pour l'élément <img>
 * @param {string} aspect_ratio - Ratio de l'image pour les grands écrans
 * @param {string} aspect_ratio_mobile - Ratio de l'image pour les petits écrans
 * @param {string} widths - Largeurs des images pour les grands écrans
 * @param {string} widths_mobile - Largeurs des images pour les petits écrans
 * @param {string} default_width - Largeur par défaut pour l'image
 * @param {string} breakpoint_width - Largeur de l'écran pour lequel le ratio de l'image change
 * @param {boolean} is_swiper - Indique si l'image est utilisée dans un Swiper
 * @param {boolean} lazy - Indique si l'image doit être chargée de façon paresseuse
 */

const PictureImg: React.FC<PictureImgProps> = ({
    img,
    imgMobile,
    alt,
    picture_classes,
    img_classes,
    aspect_ratio,
    aspect_ratio_mobile,
    widths,
    widths_mobile,
    default_width,
    breakpoint_width,
    is_swiper,
    lazy,
}) => {
    const [imgUrlSet, setImgUrlSet] = useState("");
    const [imgUrlSetMobile, setImgUrlSetMobile] = useState("");

    useEffect(() => {
        if (img && widths) {
            setImgUrlSet(generateImageURLSet(img, widths));
        }
        if (imgMobile && widths_mobile) {
            setImgUrlSetMobile(generateImageURLSet(imgMobile, widths_mobile));
        }
    }, [img, imgMobile, widths, widths_mobile]);

    const classes = `${picture_classes || ''}`;

    const style: Styles = {
        "--image-aspect-ratio": aspect_ratio,
        "--image-aspect-ratio-lg": breakpoint_width === '768' ? aspect_ratio : aspect_ratio_mobile,
        "--image-aspect-ratio-md": aspect_ratio_mobile
    };

    const PictureContent = () => (
        <picture
            className={classes}
            style={style}
        >
            <source
                srcSet={imgUrlSet}
                media={`(min-width: ${breakpoint_width || '1024'}px)`}
            />
            {imgMobile && (
                <source srcSet={imgUrlSetMobile} />
            )}
            <img
                className={img_classes || ''}
                src={img?.src}
                alt={alt || img.alt}
                loading={lazy ? 'lazy' : 'eager'}
            />
        </picture>
    );

    return (
        lazy ? <LazyLoad>{PictureContent()}</LazyLoad> : PictureContent()
    );
};

function generateImageURLSet(image: Image, widths: string): string {
    return widths
        .split(", ")
        .map(width => `${image.src}?width=${width} ${width}w`)
        .join(", ");
}

export default PictureImg;

