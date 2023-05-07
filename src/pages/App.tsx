import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "../components/Preloader";
import Footer from "../common/Footer";
import Home from "./Home";
import NavBar from "../common/NavBar";
import "../scss/templates/App.scss";

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const setVhProperty = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--window-inner-height", `${vh}px`);
    };

    const timer = setTimeout(() => {
      setIsLoaded(true);
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
      {!isLoaded ? (
        <Preloader />
      ) : (
        <Router>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Home />} />
              <Route path="/contact" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;
