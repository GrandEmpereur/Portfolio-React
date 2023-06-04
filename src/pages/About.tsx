import React from "react";
import "../scss/sections/hero.scss";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline.tsx";

const About: React.FC = () => {
    return <div className="About ">
        <AboutMe />
        <Timeline
            experience={[
                {
                    date: '2021 - Aujourd\'hui',
                    title: 'Freelance - Développeur Fullstack',
                    description: 'Recherche de Clients, Réalisation de poste LinkedIn, Réalisation de maquette pour les clients, Développement de site vitrine ou E-commerce pour les clients'
                },{
                    date: '2021 - 2022',
                    title: 'Interim - StaffMe',
                    description: 'En tant intérimaire j\'ai effectué plusieurs missions dans le domaine de la logistique, de la vente et de la restauration. Afin de financer mes études mais aussi pour acquérir de l\'expérience dans le monde du travail. '
                },{
                    date: '2021 - 2022',
                    title: 'Projet Ecole - BAP ( Bourse aux projets ) - Développeur Frontend',
                    description: 'Réalisation d’un Site vitrine pour Marshall Motors Avec Symfony 6 et HTML/SCSS/JS. Mise en situation réelle avec un client.'
                },{
                    date: '2021 - Aujourd\'hui',
                    title: 'Projets personnels - Développeur Fullstack',
                    description: 'Réalisation de mini projets personnels avec React, NodeJS, KOA, MongoDB, Strapi. Réalisation des maquettes avec Figma pour c\'est projets. '
                },{
                    date: '2022',
                    title: 'Stage - Développeur Fullstack - W3lead',
                    description: 'Réalisations de projets pour les clients de l\'entreprise. Développement de site E-commerce avec Shopify / Shopify Plus.'
                },{
                    date: '2022 - aujourd\'hui',
                    title: 'Alternance - Développeur Fullstack - W3lead',
                    description: 'Réalisations de projets pour les clients de l\'entreprise. Développement de site E-commerce avec Shopify / Shopify Plus.'
                },
            ]}
            formation={[
                {
                    date: '2019 - 2020',
                    title: 'Baccalauréat - STI2D',
                    description: 'Baccalauréat Sciences et Technologies de l\'Industrie et du Développement Durable. Option SIN ( Système d\'Information et Numérique ) - Lycée General et Technologique Jules Richard - Paris 19e'
                },{
                    date: '2020 - 2023',
                    title: 'Bachelor coding & digital innovation - IIM ( Institut de l\'internet et du multimédia )',
                    description: 'Bachelor Coding & Digital Innovation - IIM ( Institut de l\'internet et du multimédia ) - Paris La Défense'
                },{
                    date: '2022 - 2023',
                    title: 'Formation en ligne - Udemy',
                    description: 'Formation en ligne sur Udemy pour apprendre de nouvelles technologies et de nouveaux langages mais aussi pour apprendre de nouvelles méthodes de travail comme le clean code en Javascript ou apprendre les dernières nouveautés de différents langages.'
                },{
                    date: '2023 - 2025',
                    title: 'Mastère Ingénierie web et mobile - IIM ( Institut de l\'internet et du multimédia )',
                    description: 'Mastère Ingénierie web et mobile - IIM ( Institut de l\'internet et du multimédia ) - Nanterre Prefecture'
                }
            ]}
        />

        <Skills />
    </div>;
};

export default About;
