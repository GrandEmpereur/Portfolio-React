import React from "react";
import "../scss/templates/Home.scss";
import Icon from "../common/Icon";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    const image = {
        src: "./images/hero.png",
        alt: "Image de présentation",
        width: 420,
        height: 430,
    };

    return <div className="Home page-width-large page-width-mobile u-flex align-items-center justify-content-around u-full-width">
        <div className="Home__content u-flex flex-column v-gap-l">
            <span className="Home__preTitle h4 u-gold">portfolio</span>

            <span className="Home__title h2">
                Hey ! Je m'appelle Patrick, je suis Developer Full Stack
            </span>

            <p className="Home__subtitle u-gray">
                Passionné par le monde médiéval, je crée des expériences web uniques en combinant mes compétences en développement full stack et en design. Découvrez comment je peux vous aider à transformer vos idées en réalités numériques.
            </p>

            <div className="Home__button u-flex h-gap-2xl u-pad-t-m">
                {/* <Link to="/services" className="button button--primary button-rounded">Mes projets</Link> */}
                <Link to="/contact" className="button button--primary button-rounded">Contactez Moi</Link>
            </div>
            <div className="Home__icons u-flex h-gap-l">
                <a href="https://github.com/GrandEmpereur" className="u-white" target="_black">
                    <Icon symbolId="icon-github" className="custom-icon" stroke="transparent" />
                </a>
                <a href="https://www.linkedin.com/in/patrick-bartosik/" className="u-white" target="_black">
                    <Icon symbolId="icon-linkedin" className="custom-icon" stroke="transparent" />
                </a>
            </div>
        </div>

        <div className="Home__image">
            <Card
                img={image}
                imgMobile={image}
                default_size="420/430"
                breakpoint_width="1024"
                is_swiper={false}
                lazy={false}
            />
        </div>
    </div>;
};

export default Home;
