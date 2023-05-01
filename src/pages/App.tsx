import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import Preloader from "../components/Preloader";
import "../scss/templates/App.scss";

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  return <div className="app">{!isLoaded ? <Preloader /> : <HomePage />}</div>;
};

export default App;
