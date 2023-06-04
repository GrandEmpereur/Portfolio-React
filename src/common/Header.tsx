import React from "react";
import { Helmet } from "react-helmet";

const Header: React.FC = () => {
  return (
    <div className="app">
      <Helmet>
        <title>Portfolio de Patrick | Développeur / Designer</title>
        <meta
          name="description"
          content="Découvrez le portfolio de Patrick, un développeur/designer passionné et talentueux spécialisé dans la création de sites Web et d'applications mobiles."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Portfolio de Patrick | Développeur / Designer" />
        <meta
          property="og:description"
          content="Découvrez le portfolio de Patrick, un développeur/designer passionné et talentueux spécialisé dans la création de sites Web et d'applications mobiles."
        />
        <meta property="og:image" content="URL de l'image à afficher lors du partage" />
        <meta property="og:url" content="URL de la page" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio de Patrick | Développeur / Designer" />
        <meta
          name="twitter:description"
          content="Découvrez le portfolio de Patrick, un développeur/designer passionné et talentueux spécialisé dans la création de sites Web et d'applications mobiles."
        />
        <meta name="twitter:image" content="URL de l'image à afficher lors du partage" />
      </Helmet>
    </div>
  );
};

export default Header;
