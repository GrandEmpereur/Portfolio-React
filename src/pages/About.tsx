import React from "react";
import "../scss/sections/hero.scss";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

const About: React.FC = () => {
    return <div className="About ">
        <AboutMe />
        <Skills />
    </div>;
};

export default About;
