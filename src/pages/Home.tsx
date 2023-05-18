import React from "react";
import Hero from "../components/Hero";
import "../scss/sections/hero.scss";
import "../scss/templates/Home.scss";

const Home: React.FC = () => {
    return <div className="Home">
        <Hero />
    </div>;
};

export default Home;
