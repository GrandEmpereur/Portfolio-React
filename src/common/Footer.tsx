import React from "react";
import { Link } from "react-router-dom";
import PictureImg from "../components/PictureImg.tsx";
import "../scss/sections/Footer.scss";
import Icon from "./Icon.tsx";

const Footer: React.FC = () => {

    return (
        <footer className="footer page-width-large page-width-mobile u-flex align-items-center justify-content-between">
            <div className="footer__logo">
                <Link to="/">
                <PictureImg
                        img={{
                            src: "./images/logo.png",
                            alt: "Logo",
                            width: 30,
                            height: 30,
                        }}
                        imgMobile={{
                            src: "./images/logo.png",
                            alt: "Logo",
                            width: 30,
                            height: 30,
                        }}
                        default_size="30/30"
                        breakpoint_width="1024"
                    />
                </Link>
            </div>
            <div className="footer__center u-flex justify-content-center align-items-center h-gap-xl">
                <Link to="/projects" className="nav-bar__projects u-gray">Politique de confidentialité</Link>
                <Link to="/projects" className="nav-bar__projects u-gray">Mention Légales</Link>
                <Link to="/projects" className="nav-bar__projects u-gray">CGU</Link>
            </div>
            <div className="footer__socialMedia u-flex h-gap-l align-items-center">
                <a href="https://github.com/GrandEmpereur" target="_blank" className="u-flex align-items-center">
                    <Icon symbolId="icon-github" size={32}/>
                </a>
                <a href="" target="_blank" className="u-flex align-items-center">
                    <Icon symbolId="icon-linkedin" size={32}/>
                </a>
                <a href="" target="_blank" className="u-flex align-items-center">
                    <Icon symbolId="icon-instagram" size={32}/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
