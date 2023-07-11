// project.tsx
import React from 'react';
import Slider from '../components/Slider';
import PictureImg from '../components/PictureImg';
import '../scss/sections/Project.scss';

// Ceci est un tableau d'images fictif, remplacez-le par vos vraies données d'image
const imageList = [
    {
        img: {
            src: "./images/hero.png",
            alt: 'Image 1',
            width: 420,
            height: 430
        },
        imgMobile: {
            src: "./images/hero.png",
            alt: 'Image 1 mobile',
            width: 420,
            height: 430
        }
    },
    {
        img: {
            src: "./images/skills.jpg",
            alt: 'Image 2',
            width: 420,
            height: 430
        },
        imgMobile: {
            src: "./images/skills.jpg",
            alt: 'Image 2 mobile',
            width: 420,
            height: 430
        }
    },
    {
        img: {
            src: "./images/hero.png",
            alt: 'Image 2',
            width: 420,
            height: 430
        },
        imgMobile: {
            src: "./images/hero.png",
            alt: 'Image 2 mobile',
            width: 420,
            height: 430
        }
    },
    {
        img: {
            src: "./images/skills.jpg",
            alt: 'Image 2',
            width: 420,
            height: 430
        },
        imgMobile: {
            src: "./images/skills.jpg",
            alt: 'Image 2 mobile',
            width: 420,
            height: 430
        }
    },

];


const Project: React.FC = () => {
    return (
        <section className="Project react-component-hero page-width-full-mobile">

            <div className="u-center">
                <span className="h2 u-block u-pad-t-s u-marg-b-l">Mes projets</span>
            </div>

            <div className="u-overflow--mobile u-pad-b-2xl">
                <Slider
                    data-desktop-only
                    data-speed="200"
                    data-minimum-length-lg="4"
                >
                    {imageList.map((image, index) => (
                        <div className="swiper-items u-full-width swiper-slide u-relative" key={index}>
                            <PictureImg
                                img={image.img}
                                imgMobile={image.imgMobile}
                                img_classes='Project__image u-rounded-border'
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="swiper-info">
            </div>
        </section>
    );
};

export default Project;
