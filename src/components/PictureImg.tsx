// PictureImg.tsx
import React, { useMemo } from 'react';
import LazyLoad from 'react-lazyload';
import { PictureImgProps, Image } from '../types/PictureImg.types.ts';

/**
 * 
 * @component PictureImg
 * @description A component for displaying an image with multiple image sources
 * @param {Image} img - Main image
 * @param {Image} imgMobile - Image for small screens
 * @param {string} alt - Alternative text for the image
 * @param {string} picture_classes - CSS classes for the <picture> element
 * @param {string} img_classes - CSS classes for the <img> element
 * @param {string[]} widths - Widths of images for large screens
 * @param {string[]} widths_mobile - Widths of images for small screens
 * @param {string} default_size - Default size for the image
 * @param {string} breakpoint_width - Screen width at which the image ratio changes
 * @param {boolean} is_swiper - Indicates whether the image is used in a Swiper
 * @param {boolean} lazy - Indicates whether the image should be loaded lazily
 */
const PictureImg: React.FC<PictureImgProps> = ({
    img,
    imgMobile,
    alt,
    picture_classes,
    img_classes,
    widths,
    widths_mobile,
    default_size,
    breakpoint_width,
    is_swiper,
    lazy,
}) => {
    // Generate image URL sets using useMemo for performance optimization
    const imgUrlSet = useMemo(() => generateImageURLSet(img, widths), [img, widths]);
    const imgUrlSetMobile = useMemo(() => generateImageURLSet(imgMobile, widths_mobile), [imgMobile, widths_mobile]);

    const classes = `${picture_classes || ''}`;
    const imgStyles = default_size ? { width: default_size, height: default_size } : {};

    return (
        <picture className={classes}>
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
                loading={is_swiper ? 'lazy' : (lazy ? 'lazy' : 'eager')}
                style={imgStyles}
            />
        </picture>
    );
};

/**
 * @function generateImageURLSet
 * @description Generates a set of image URLs for different widths
 * @param {Image | undefined} image - The image object containing the base src
 * @param {string[] | undefined} widths - Array of widths for which to generate the URLs
 * @returns {string} The image URLs set for the srcSet attribute
 */
function generateImageURLSet(image: Image | undefined, widths: string[] | undefined): string {
    if (!image || !widths) {
        return '';
    }

    return widths
        .map(width => `${image.src}?width=${width} ${width}w`)
        .join(", ");
}

export default PictureImg;
