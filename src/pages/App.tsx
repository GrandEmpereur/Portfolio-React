import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "../components/Preloader";
import Footer from "../common/Footer";
import Home from "./Home";
import NavBar from "../common/NavBar";
import "../scss/templates/App.scss";
import PageTransition from "../common/PageTransition";

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
                        <NavBar />
                        <main>
                            <PageTransition>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<Home />} />
                                    <Route path="/contact" element={<Home />} />
                                </Routes>
                            </PageTransition>
                        </main>
                        <Footer />
                    </Router>
                )}
            </div>
            {!isLoaded && <Preloader />}
        </div>
    );
};

export default App;
