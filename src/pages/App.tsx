import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Preloader from "../components/Preloader";
import Footer from "../common/Footer";
import Home from "./Home";
import NavBar from "../common/NavBar";
import "../scss/templates/App.scss";
import PageTransition from "../common/PageTransition";
import AboutPage from "./About";
import Project from "./Project";

const MainContent: React.FC = () => {
    const location = useLocation();

    return (
        <>
            <NavBar />
            <main>
                <PageTransition>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Project />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<Home />} />
                    </Routes>
                </PageTransition>
            </main>
            {location.pathname !== "/" && <Footer />}
        </>
    );
};

const App: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const setVhProperty = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--window-inner-height", `${vh}px`);
        };

        const timer = setTimeout(() => {
            setIsFading(true);
            setTimeout(() => setIsLoaded(true), 1000);
        }, 5000);

        setVhProperty();
        window.addEventListener("resize", setVhProperty);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", setVhProperty);
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
            <div
                style={{
                    opacity: isLoaded ? 1 : 0,
                    transition: "opacity 1s ease-in-out"
                }}
            >
                {isLoaded && (
                    <Router>
                        <MainContent />
                    </Router>
                )}
            </div>
            {!isLoaded && <Preloader logo={preloaderLogo} />}
        </div>
    );
};

export default App;
