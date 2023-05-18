import React, { useState } from "react";
import PictureImg from "./PictureImg.tsx";
import "../scss/sections/Skills.scss";
import Icon from "../common/Icon.tsx";

interface AccordionProps {
    title: string;
    items: Array<{skill: string, logo: string}>;
    isOpen: boolean;
    onClick: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, items, isOpen, onClick }) => {
    return (
        <details open={isOpen} onClick={onClick} className="section-skills__accordions-item accordion ">
            <summary className="section-skills__container u-flex align-items-center justify-content-between" role="button">
                <span className="section-skills__title">{title}</span>
                <span className="section-skills__icon text--regular u-pad-r-2xl">
                    <Icon name="ArrowDown" className="icon" />
                </span>
            </summary>
            <div className="u-flex flex-wrap align-items-center u-pad-t-l ">
                {items.map((item, itemIndex) => (
                    <div key={itemIndex} className="section-skills__subtitle u-flex align-items-center h-gap-m">
                        <img src={item.logo} alt={`${item.skill} logo`} className="skill-logo" />
                        {item.skill}
                    </div>
                ))}
            </div>
        </details>
    );
}

interface SkillsData {
    title: string;
    items: Array<{skill: string, logo: string}>;
}

const Skills: React.FC = () => {
    const [openIndexes, setOpenIndexes] = useState<{ [key: number]: boolean }>({});

    const skillsData: SkillsData[] = [
        {
            title: "Compétences en développement Front-End",
            items: [
                { skill: 'React JS', logo: './images/React.svg' },
                { skill: 'Nuxt JS', logo: './images/Nuxt.svg' },
                { skill: 'Vue JS', logo: './images/vue.svg' }
            ]
        },
        {
            title: "Compétences en développement back-end",
            items: [
                { skill: 'Node JS', logo: './images/vue.svg' },
                { skill: 'MongoDb', logo: './images/vue.svg' },
                { skill: 'MySql', logo: './images/vue.svg' },
                { skill: 'API Rest', logo: './images/vue.svg' }
            ]
        },
        {
            title: "Compétences en tests unitaires",
            items: [
                { skill: 'Vitest', logo: './images/vitest.svg' },
                { skill: 'Jest', logo: './images/vue.svg' }
            ]
        },
        {
            title: "Compétences en développement CMS & HeadLess CMS",
            items: [
                { skill: 'Shopify | Shopify Plus', logo: './images/vue.svg' },
                { skill: 'Wordpress', logo: './images/vue.svg' },
                { skill: 'Strapi', logo: './images/vue.svg' }
            ]
        }
    ];

    return (
        <section className="react-component section-skills page-width-desktop page-width-large">
            <div className="skills-wrapper u-flex  h-gap-4xl align-items-center">
                <div className="skills-image u-flex">
                    <PictureImg
                        mainImg={{
                            url: () => "./images/skills.jpg",
                            alt: "Image représentant diverses compétences en développement de logiciels",
                        }}
                        mobileImg={{
                            url: () => "./images/skills.jpg",
                            alt: "Image représentant diverses compétences en développement de logiciels",
                        }}
                        alt="hero"
                        pictureClasses="section-skills__image u-rounded-border"
                    />
                </div>
                <div className="skills-accordion u-full-width">
                    <span className="h3 u-block u-gold u-marg-b-xl ">Mes compétences de développement</span>
                    <p className="u-pad-b-l">
                        Découvrez ma palette de compétences en développement, englobant les technologies Front-End et Back-End les plus demandées, ainsi que ma maîtrise des tests unitaires et des CMS. J'excelle dans l'élaboration de solutions numériques performantes, offrant une expérience utilisateur sans faille sur tous les appareils.
                    </p>
                    <div className="section-skills__accordions u-flex flex-column">
                        {skillsData.map((data, index) => {
                            const isOpen = openIndexes[index] || false;

                            const toggleOpen = () => setOpenIndexes({ ...openIndexes, [index]: !isOpen });

                            return (
                                <Accordion
                                    key={index}
                                    title={data.title}
                                    items={data.items}
                                    isOpen={isOpen}
                                    onClick={toggleOpen}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;