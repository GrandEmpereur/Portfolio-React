import React from "react";
import Icon from "../common/Icon.tsx";
import "../scss/sections/hero.scss";
import Card from "../components/Card";

const Hero: React.FC = () => {
    const image = {
        src: "./images/hero.png",
        alt: "Image de présentation",
        width: 420,
        height: 430,
    };

    return (
        <section className="hero page-width-large page-width-mobile react-component-hero u-flex align-items-center justify-content-around u-full-width">
            <div className="hero__content u-flex flex-column v-gap-l">
                <span className="hero__preTitle h4 u-gold">portfolio</span>

                <span className="hero__title h2">
                    Hey ! Je m'appelle Patrick, je suis Developer Full Stack
                </span>

                <p className="hero__subtitle u-gray">
                    Passionné par le monde médiéval, je crée des expériences web uniques en combinant mes compétences en développement full stack et en design. Découvrez comment je peux vous aider à transformer vos idées en réalités numériques.
                </p>

                <div className="u-flex h-gap-2xl u-pad-t-m">
                    <button className="button button--primary button-rounded">Contactez Moi</button>
                    <button className="button button--primary button-rounded">Mes projets</button>
                </div>
                <div className="u-flex h-gap-l">
                    <a href="">
                        <Icon symbolId="icon-github" className="custom-icon" />
                    </a>
                    <a href="">
                        <Icon symbolId="icon-linkedin" className="custom-icon" />
                    </a>
                    <a href="">
                        <Icon symbolId="icon-instagram" className="custom-icon" />
                    </a>
                </div>
            </div>

            <div className="hero__image">
                <Card
                    img={image}
                    imgMobile={image}
                    default_size="420/430"
                    breakpoint_width="1024"
                    is_swiper={false}
                    lazy={false}
                />
            </div>
        </section>
    );
};

export default Hero;
