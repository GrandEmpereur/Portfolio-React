import React from "react";
import "../scss/sections/About.scss";

const About: React.FC = () => {
    return <section className="About react-component page-width-large u-flex flex-column v-gap-xl">
        <span className="u-center u-gold h3 u-uppercase">À propos de moi</span>

        <div className="About__content u-flex justify-content-between align-items-center h-gap-3xl">
            <div className="About__content--left u-flex flex-column v-gap-xl u-text-m">
                <p className="">Depuis mon enfance, je suis fasciné par la programmation et la conception. Cette passion a été alimentée par les jeux auxquels je jouais et les sites web que je visitais, m'émerveillant devant les possibilités infinies et la créativité que ces univers offraient.</p>
                <p>Depuis mon enfance, je suis fasciné par la programmation et la conception. Cette passion a été alimentée par les jeux auxquels je jouais et les sites web que je visitais, m'émerveillant devant les possibilités infinies et la créativité que ces univers offraient.</p>
                <p>En tant que développeur web dévoué, je m'efforce constamment d'élargir mes compétences et de rester à jour avec les dernières tendances et technologies. Cette quête d'excellence me permet de créer des expériences utilisateur mémorables et de relever des défis complexes pour satisfaire les besoins de mes clients.</p>
            </div>
            <div className="About__content--right u-flex flex-column v-gap-xl">
                <div className="u-flex flex-column v-gap-m">
                    <span className="h4">Ce que je recherche</span>
                    <p>Emploi à temps plein en tant que développeur full-stack que cela oit dans une entreprise ou une agence web, mai également des client pour des projet freelance</p>
                </div>
                <div className="u-flex flex-column v-gap-m">
                    <span className="h4">Éducation</span>
                    <p>Je suis actuellement en troisième année de "Codage & Innovation Numérique" à l'IIM, où je me suis spécialisé dans le développement de sites web. En plus de mes compétences en programmation, je possède également des talents en design graphique.</p>
                </div>
                <div className="u-flex flex-column v-gap-m">
                    <span className="h4">expérience précédente</span>
                    <p>J'ai effectué un stage et suis actuellement en alternance au sein de l'agence web W3lead.
                        En parallèle, j'ai également réalisé quelques projets personnels pour développer davantage mes compétences et ma créativité.</p>
                </div>
            </div>
        </div>
    </section>;
};

export default About;
