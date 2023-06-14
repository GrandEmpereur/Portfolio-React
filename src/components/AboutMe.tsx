import React from "react";
import PictureImg from "./PictureImg";
import "../scss/sections/About.scss";

const AboutMe: React.FC = () => {
    return <section className="About react-component-hero page-width-large page-width-mobile u-flex flex-column v-gap-xl">
        <div className="About__title u-center u-flex flex-column v-gap-m">
            <h2 className="h1 u-gold keep-size">À propos de moi</h2>
            <p className="h4 u-gold keep-size">Développeur web full-stack</p>
        </div>

        <div className="About__cv u-flex justify-content-around">
            <PictureImg
                img={{
                    src: "/images/cv.jpg",
                    alt: "cv",
                    width: 420,
                    height: 430,
                }}
                imgMobile={{
                    src: "/images/cv.jpg",
                    alt: "cv",
                    width: 320,
                    height: 330,
                }}
                breakpoint_width="1024"
                default_size="420/430"
                lazy={false}
                img_classes="About__cv--image u-rounded-border"
                picture_classes="About__cv--picture u-flex"
            />

            <div className="About__cv--content u-flex align-items-center">
                <div className="u-flex u-full-width flex-column">
                    <div className="u-flex justify-content-around">
                        <div className="About__cv--content--left u-flex flex-column v-gap-xl">
                            <div className="name u-flex h-gap-m">
                                <h3 className="h4 keep-size">Nom : </h3>
                                <p className="h4 keep-size">Bartosik </p>
                            </div>
                            <div className="prénom u-flex h-gap-m">
                                <h3 className="h4 keep-size">Prénom : </h3>
                                <p className="h4 keep-size">Patrick</p>
                            </div>
                            <div className="nationalité u-flex h-gap-m">
                                <h3 className="h4 keep-size">Nationalité : </h3>
                                <p className="h4 keep-size">Française</p>
                            </div>
                            <div className="experience u-flex h-gap-m">
                                <h3 className="h4 keep-size">Expérience : </h3>
                                <p className="h4 keep-size">4 ans</p>
                            </div>
                            <div className="adresse u-flex h-gap-m">
                                <h3 className="h4 keep-size">Adresse : </h3>
                                <p className="h4 keep-size">Paris / Bezier</p>
                            </div>
                            <div className="adresse u-flex h-gap-m">
                                <h3 className="h4 keep-size">Telephone : </h3>
                                <p className="h4 keep-size">+33 6 58 29 23 30</p>
                            </div>

                            <div className="About__cv--content--left--btn u-pad-t-l u-none--lg">
                                <a href="./pdf/Cv.pdf" download>
                                    <button className="button button--primary">Télécharger mon CV</button>
                                </a>
                            </div>
                        </div>

                        <div className="About__cv--content--right u-flex flex-column v-gap-xl">
                            <div className="freelance u-flex h-gap-m">
                                <h3 className="h4 keep-size">Freelance : </h3>
                                <p className="h4 keep-size">Disponible | soirée et week-end</p>
                            </div>
                            <div className="langue u-flex h-gap-m">
                                <h3 className="h4 keep-size">Langue : </h3>
                                <p className="h4 keep-size">Français | Anglais | Polonais</p>
                            </div>
                            <div className="email u-flex h-gap-m">
                                <h3 className="h4 keep-size">Email : </h3>
                                <p className="h4 keep-size">
                                    <a href="mailto: bartosikpatrickpro@gmail.com" className="u-white u-underline--hover">
                                        BartosikPatrickPro@gmail.com
                                    </a>
                                </p>
                            </div>
                            <div className="discord u-flex h-gap-m">
                                <h3 className="h4 keep-size">Discord : </h3>
                                <p className="h4 keep-size">grandempereur</p>
                            </div>
                            <div className="LinkedIn u-flex h-gap-m">
                                <h3 className="h4 keep-size">Linkedin : </h3>
                                <p className="h4 keep-size">
                                    <a href="https://www.linkedin.com/in/patrick-bartosik/" className="u-white u-underline--hover">
                                        LinkedIn
                                    </a>
                                </p>
                            </div>
                            <div className="github u-flex h-gap-m">
                                <h3 className="h4 keep-size">Github : </h3>
                                <p className="h4 keep-size">
                                    <a href="" className="u-white u-underline--hover">
                                        Github
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="About__cv--content--left--btn u-pad-t-xl u-none u-block--lg u-center">
                        <a href="./pdf/Cv.pdf" download>
                            <button className="button button--primary">Télécharger mon CV</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        <div className="react-component About__objectif u-flex justify-content-between align-items-center h-gap-3xl">
            <div className="About__content--left u-flex flex-column v-gap-xl">
                <p>Ma fascination pour la programmation et la conception remonte à mon enfance. Les jeux auxquels je jouais et les sites web que je visitais m'ont fait rêver aux possibilités illimitées et à la créativité que ces mondes peuvent offrir.</p>
                <p>À présent, en tant que développeur web passionné, je m'efforce constamment de renforcer mes compétences et de rester à jour avec les dernières tendances et technologies. C'est cette quête incessante d'excellence qui me permet de créer des expériences utilisateur inoubliables et de relever des défis techniques de plus en plus complexes pour répondre aux besoins de mes clients.</p>
            </div>
            <div className="About__content--right u-flex flex-column v-gap-xl">
                <div className="u-flex flex-column v-gap-m">
                    <h3 className="h4 keep-size">Mes objectifs</h3>
                    <p>Je suis à la recherche d'une alternance de deux ans en tant que développeur full-stack, avec une préférence pour le développement back-end. Que ce soit au sein d'une entreprise ou d'une agence web, toutes les propositions sont les bienvenues. Par ailleurs, étant également freelance à temps partiel, je suis ouvert à divers projets que vous auriez.</p>
                </div>
                <div className="u-flex flex-column v-gap-m">
                    <h3 className="h4 keep-size">Mes Études</h3>
                    <p>Je suis actuellement en troisième année de "Coding & digital innovation " à l'IIM. J'ai choisi continuer en mastère IWM (Ingénierie web et mobile ) afin d’approfondir encore plus mes competences techniques. En plus de mes compétences en programmation, j'ai également développé des talents en design graphique.</p>
                </div>
                <div className="u-flex flex-column v-gap-m">
                    <h3 className="h4 keep-size">Mes Expériences précédentes</h3>
                    <p>J'ai réalisé un stage et je suis actuellement en alternance au sein de l'agence web W3lead. Parallèlement à cela, j'ai également travaillé sur plusieurs projets personnels pour approfondir mes compétences et stimuler ma créativité.</p>
                </div>
            </div>
        </div>
    </section>;
};

export default AboutMe;
