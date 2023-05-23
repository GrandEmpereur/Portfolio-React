import React from "react";
import "../scss/sections/About.scss";

const AboutMe: React.FC = () => {
    return <section className="About react-component-hero page-width-large page-width-mobile u-flex flex-column v-gap-xl">
        <h2 className="u-center u-gold h3 keep-size u-uppercase">Qui suis-je ?</h2>

        <div className="About__content u-flex justify-content-between align-items-center h-gap-3xl">
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
                    <h3 className="h4 keep-size">Éducation</h3>
                    <p>Je suis actuellement en troisième année de "Coding & digital innovation " à l'IIM. J'ai choisi de me spécialiser dans le développement web. En plus de mes compétences en programmation, j'ai également développé des talents en design graphique.</p>
                </div>
                <div className="u-flex flex-column v-gap-m">
                    <h3 className="h4 keep-size">Expérience précédente</h3>
                    <p>J'ai réalisé un stage et je suis actuellement en alternance au sein de l'agence web W3lead. Parallèlement à cela, j'ai également travaillé sur plusieurs projets personnels pour approfondir mes compétences et stimuler ma créativité.</p>
                </div>
            </div>
        </div>
    </section>;
};

export default AboutMe;
