import React, { CSSProperties } from 'react';

interface Image {
    url(options?: { width: string }): string;
    alt: string;
}

interface PictureImgProps {
    mainImg: Image;
    mobileImg?: Image;
    alt?: string;
    pictureClasses?: string;
    imageClasses?: string;
    ratio?: string;
    mobileRatio?: string;
    imgWidths?: string;
    mobileWidths?: string;
    defaultImgWidth?: string;
    breakWidth?: string;
    swiperImage?: boolean;
    loadLazy?: boolean;
}

/*
    * PictureImg component
    * @param {object} mainImg - main image object
    * @param {object} mobileImg - mobile image object
    * @param {string} alt - image alt text
    * @param {string} pictureClasses - classes for picture element
    * @param {string} imageClasses - classes for image element
    * @param {string} ratio - image ratio
    * @param {string} mobileRatio - mobile image ratio
    * @param {string} imgWidths - image widths
    * @param {string} mobileWidths - mobile image widths
    * @param {string} defaultImgWidth - default image width
    * @param {string} breakWidth - breakpoint width
    * @param {boolean} swiperImage - is image in swiper
    * @param {boolean} loadLazy - is image lazy loaded
    * @returns {JSX.Element}
*/


const PictureImg: React.FC<PictureImgProps> = ({
    mainImg,
    mobileImg,
    alt,
    pictureClasses,
    imageClasses,
    imgWidths,
    mobileWidths,
    defaultImgWidth,
    breakWidth,
    swiperImage,
    loadLazy,
}) => {
    const imgAlt = alt || mainImg.alt;
    const defaultBreakpointWidth = '1024';
    const defaultWidths = mobileImg
        ? '320, 512, 768, 1024, 1200, 1440, 1920'
        : '768, 1024, 1200, 1440, 1920';
    const defaultWidthsMobile = '160, 320, 512, 720';

    const actualBreakpointWidth = breakWidth || defaultBreakpointWidth;
    const actualWidths = imgWidths || defaultWidths;
    const actualWidthsMobile = mobileWidths || defaultWidthsMobile;

    const widthsArray = actualWidths.split(', ');
    const widthsArrayMobile = actualWidthsMobile.split(', ');

    const srcSetParameter = widthsArray
        .map((width: string) => {
            const widthForImageURL = `${width}x`;
            return `${mainImg.url({ width: widthForImageURL })} ${width}w`;
        })
        .join(', ');

    const srcSetParameterMobile = mobileImg ? widthsArrayMobile
        .map((width: string) => {
            const widthForImageURL = `${width}x`;
            return `${mobileImg.url({ width: widthForImageURL })} ${width}w`;
        })
        .join(', ') : undefined;

    return (
        <picture
            className={`${pictureClasses}${loadLazy ? ' lozad' : ''}`}
        >
            <source
                srcSet={srcSetParameter}
                media={`(min-width: ${actualBreakpointWidth}px)`}
            />
            {mobileImg && <source srcSet={srcSetParameterMobile} />}
            <img
                className={imageClasses}
                loading='lazy'
                alt={imgAlt}
                src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
            />
            <noscript>
                <img
                    src={mainImg.url({ width: actualBreakpointWidth })}
                    loading='lazy'
                    alt={imgAlt}
                />
            </noscript>
        </picture>
    );
};

export default PictureImg;

