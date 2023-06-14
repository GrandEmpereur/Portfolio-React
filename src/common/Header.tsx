import React from "react";
import { Helmet } from "react-helmet";

const Header: React.FC = () => {
	return (
		<div className="app">
			<Helmet>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Portfolio de Patrick </title>
				<meta name="description" content="Découvrez le portfolio de Patrick, un développeur full stack orientiez javascript passionné et talentueux spécialisé dans la création de sites Web." />
				<meta name="robots" content="index,follow" />
				<link rel="icon" type="image/svg+xml" href="/images/icon/favicon.svg" />

				<meta property="og:title" content="Portfolio de Patrick | Développeur Full Stack JS" />
				<meta
					property="og:description"
					content="Découvrez le portfolio de Patrick, un développeur full stack orientiez javascript passionné et talentueux spécialisé dans la création de sites Web."
				/>
				<meta property="og:image" content="URL de l'image à afficher lors du partage" />
				<meta property="og:url" content="URL de la page" />
				<meta property="og:type" content="website" />

				<link rel="canonical" href="URL de la page" />
				<link href="https://fonts.googleapis.com/css2?family=Amaranth&family=Crimson+Text:wght@400;600&display=swap"
					rel="stylesheet"></link>
			</Helmet>
		</div>
	);
};

export default Header;
