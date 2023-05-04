import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import Preloader from "../components/Preloader";
import "../scss/templates/App.scss";

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const setVhProperty = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--window-inner-height', `${vh}px`);
    };

    window.onload = () => {
      setIsLoaded(true);
    };

    setVhProperty();

    window.addEventListener('resize', setVhProperty);

    return () => {
      window.removeEventListener('resize', setVhProperty);
    };
  }, []);

  return <div className="app">{!isLoaded ? <Preloader /> : <HomePage />}</div>;
};

export default App;
