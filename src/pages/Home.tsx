import React, { useEffect, useState } from "react"; // import useState et useEffect
import "../scss/templates/Home.scss";
import Icon from "../common/Icon";
import PictureImg from "../components/PictureImg";
import { Link } from "react-router-dom";
import { getImagesByName, updateAxiosInstance } from "../services/axios.ts";

const Home: React.FC = () => {

    const [image, setImage] = useState({
        src: '',
        alt: 'Image de présentation',
        width: 420,
        height: 430,
    }); // useState pour stocker les données d'image
    const [imageMobile, setImageMobile] = useState({
        src: '',
        alt: 'Image de présentation',
        width: 420,
        height: 430,
    }); // useState pour stocker les données d'image pour mobile

    useEffect(() => {
        // Mise à jour de l'instance Axios
        updateAxiosInstance();

        // Récupération de l'image pour desktop
        getImagesByName('img_banner')
            .then((res: unknown) => {
                setImage({
                    src: res as string,
                    alt: "Image de présentation",
                    width: 420,
                    height: 430,
                });
            })
            .catch((err) => console.error(err));

        // Récupération de l'image pour mobile
        getImagesByName('img_banner--mobile')
            .then((res: unknown) => {
                setImageMobile({
                    src: res as string,
                    alt: "Image de présentation",
                    width: 420,
                    height: 430,
                });
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="Home page-width-large page-width-mobile u-flex align-items-center justify-content-around u-full-width">
            <div className="Home__content u-flex flex-column v-gap-l">
                <span className="Home__preTitle h4 u-gold">Portfolio</span>

                <span className="Home__title h2">
                    Hey ! Je m'appelle Patrick, je suis Developer Full Stack orienter Javascript
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
                <PictureImg
                    img={image}
                    imgMobile={imageMobile || image}
                    img_classes="u-rounded-border"
                    lazy={false}
                />
            </div>
        </div>
    );
};

export default Home;

