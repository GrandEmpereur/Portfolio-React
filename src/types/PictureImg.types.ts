// PictureImg.types.ts

/**
 * @description Type for an image object
 * @param {string} src - Source URL of the image
 * @param {string} alt - Alternative text for the image
 * @param {number} width - Width of the image
 * @param {number} height - Height of the image
 */
export interface Image {
    src: string;
    alt: string;
    width: number;
    height: number;
}

/**
 * @description Props type for the PictureImg component
 * @param {Image} img - Main image object
 * @param {Image | undefined} imgMobile - Image object for smaller screens, optional
 * @param {string | undefined} alt - Alternative text for the image, optional
 * @param {string | undefined} picture_classes - CSS classes for the <picture> element, optional
 * @param {string | undefined} img_classes - CSS classes for the <img> element, optional
 * @param {string[] | undefined} widths - Array of image widths for larger screens, optional
 * @param {string[] | undefined} widths_mobile - Array of image widths for smaller screens, optional
 * @param {string | undefined } default_size - Default size for the image
 * @param {string | undefined} breakpoint_width - Screen width at which the image aspect ratio changes, optional
 * @param {boolean | undefined} is_swiper - Indicates if the image is used within a Swiper, optional
 * @param {boolean | undefined} lazy - Indicates if the image should be lazy loaded, optional
 */
export interface PictureImgProps {
    img: Image;
    imgMobile?: Image;
    alt?: string;
    picture_classes?: string;
    img_classes?: string;
    widths?: string[];
    widths_mobile?: string[];
    default_size?: string;
    breakpoint_width?: string;
    is_swiper?: boolean;
    lazy?: boolean;
}
