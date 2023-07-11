// PictureImg.types.ts

export interface Image {
    src: string;
    alt?: string;
    size?: string;
}

export interface PictureImgProps {
    img: Image;
    imgMobile?: Image;
    picture_classes?: string;
    img_classes?: string;
    lazy?: boolean;
}
