// project.tsx
import React from 'react';
import Slider from '../components/Slider';
import PictureImg from '../components/PictureImg';

// Ceci est un tableau d'images fictif, remplacez-le par vos vraies données d'image
const imageList = [
    {
        mainImg: {
            url: () => "./images/hero.png",
            alt: 'Image 1'
        },
        mobileImg: {
            url: () => "./images/hero.png",
            alt: 'Image 1 mobile'
        }
    },
    {
        mainImg: {
            url: () => "./images/hero.png",
            alt: 'Image 2'
        },
        mobileImg: {
            url: () => "./images/hero.png",
            alt: 'Image 2 mobile'
        }
    },
];


const Project: React.FC = () => {
    return (
        <section className="Project react-component-hero page-width-large page-width-mobile u-flex flex-column v-gap-xl">
            <h2 className="u-center u-gold h3 keep-size u-uppercase">Mes projets</h2>

            <PictureImg
                            mainImg={{ url: () => "./images/hero.png", alt: "Image 1" }}
                            mobileImg={{ url: () => "./images/hero.png", alt: "Image 1 mobile" }}
                            alt="Image 1"
                            pictureClasses="hero__image"
                            imageClasses="hero__image--img"
                            ratio="56.25%"
                            mobileRatio="56.25%"
                            imgWidths="320, 512, 768, 1024, 1200, 1440, 1920"
                            mobileWidths="320, 512, 768, 1024, 1200, 1440, 1920"
                            defaultImgWidth="100vw"
                            breakWidth="1024"
                        />

            <Slider >
                {imageList.map((image, index) => (
                    <div key={index} className="u-flex justify-content-center">
                        <PictureImg
                            mainImg={image.mainImg}
                            mobileImg={image.mobileImg}
                            alt={image.mainImg.alt}
                            pictureClasses="hero__image"
                            imageClasses="hero__image--img"
                            ratio="56.25%"
                            mobileRatio="56.25%"
                            imgWidths="320, 512, 768, 1024, 1200, 1440, 1920"
                            mobileWidths="320, 512, 768, 1024, 1200, 1440, 1920"
                            defaultImgWidth="100vw"
                            breakWidth="1024"
                            swiperImage={true}
                            loadLazy={true}
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Project;
