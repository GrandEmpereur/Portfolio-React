// PictureImg.tsx
import React from 'react';
import LazyLoad from 'react-lazyload';
import { PictureImgProps } from '../types/PictureImg.types.ts';

/**
 * 
 * @component PictureImg
 * @description A component for displaying an image with multiple image sources
 * @param {Image} img - Main image
 * @param {Image} imgMobile - Image for small screens
 * @param {string} alt - Alternative text for the image
 * @param {string} picture_classes - CSS classes for the <picture> element
 * @param {string} img_classes - CSS classes for the <img> element
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
    default_size,
    breakpoint_width,
    is_swiper,
    lazy,
}) => {
    const classes = `${picture_classes || ''}`;
    const pictureStyle = default_size ? { width: default_size.split('/')[0]+'px', height: default_size.split('/')[1]+'px' } : {};

    const ImgComponent = (
        <img
            className={img_classes || ''}
            src={img?.src}
            alt={alt || img.alt}
            loading={is_swiper ? 'lazy' : 'eager'}
        />
    );

    return (
        <picture className={classes} style={pictureStyle}>
            {/* If imgMobile is provided, use it for screens smaller than breakpoint_width */}
            {imgMobile && (
                <source 
                    src={imgMobile?.src}
                    media={`(max-width: ${breakpoint_width || '1024'}px)`}
                />
            )}
            {/* Use img for screens larger than breakpoint_width */}
            <source
                src={img?.src}
                media={`(min-width: ${breakpoint_width || '1024'}px)`}
            />
            {/* Use react-lazyload if lazy is set to true, otherwise use the native HTML lazy loading */}
            {lazy ? (
                <LazyLoad>
                    {ImgComponent}
                </LazyLoad>
            ) : (
                ImgComponent
            )}
        </picture>
    );
};

export default PictureImg;
