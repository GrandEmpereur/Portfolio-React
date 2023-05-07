import React from "react";
import "../scss/sections/hero.scss";
import Hero from "../components/Hero";
import About from "../components/About";

const App: React.FC = () => {
    return <div className="Home">
        <Hero />
        <About />
    </div>;
};

export default App;
