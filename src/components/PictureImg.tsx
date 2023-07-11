// PictureImg.tsx
import React from 'react';
import LazyLoad from 'react-lazyload';
import { PictureImgProps } from '../types/PictureImg.types.ts';

const PictureImg: React.FC<PictureImgProps> = ({
    img,
    imgMobile = img,
    picture_classes,
    img_classes,
    lazy = true,
}) => {
    const pictureStyle = img.size ? { 
        width: img.size.split('/')[0]+'px', 
        height: img.size.split('/')[1]+'px' 
    } : {};

    const ImgComponent = (
        <img
            className={img_classes || ''}
            src={img.src}
            alt={img.alt || ''}
            loading={'lazy'}
        />
    );

    return (
        <picture className={picture_classes || ''} style={pictureStyle}>
            <source 
                srcSet={imgMobile.src}
                media="(max-width: 768px)"
            />
            <source
                srcSet={img.src}
                media="(min-width: 769px)"
            />
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
