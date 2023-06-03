import { Image } from './PictureImg.types.ts';

export interface CardProps {
    img?: Image;
    imgMobile?: Image;
    title?: string;
    urlLabel?: string;
    link?: string;
    textColor?: string;
    hn?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
    pushBackgroundColor?: string;
    default_size?: string;
}
