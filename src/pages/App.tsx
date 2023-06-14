import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "../components/Preloader";
import Home from "./Home";
import NavBar from "../common/NavBar";
import AboutPage from "./About";
// import Project from "./Project";
import Contact from "../components/Contact.tsx";
import PageTransition from "../common/PageTransition";
import "../scss/templates/App.scss";

/**
 * MainContent is a React component that contains all the routes and the NavBar.
 */
const MainContent: React.FC = () => {

    return (
        <>
            <NavBar />
            <PageTransition>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/projects" element={<Project />} /> */}
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </PageTransition>
        </>
    );
};

/**
 * App is the main React component.
 * It sets the window height CSS variable and starts the preloader animation.
 * Once the preloader animation is complete, it renders the MainContent component.
 */
const App: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        /**
         * Sets the CSS variable for the window height to the actual window height.
         */
        const timer = setTimeout(() => {
            setTimeout(() => setIsLoaded(true), 1000);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const preloaderLogo = {
        src: "./images/preloader.png",
        alt: "Logo",
        width: 420,
        height: 430,
    };

    return (
        <div className="app">
            {isLoaded && (
                <div
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transition: "opacity 1s ease-in-out"
                    }}
                >
                    <Router>
                        <MainContent />
                    </Router>
                </div>
            )}
            {!isLoaded && <Preloader logo={preloaderLogo} />}
        </div>
    );
};

export default App;
