import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PictureImg from "../components/PictureImg.tsx";
import "../scss/sections/Footer.scss";
import Icon from "./Icon.tsx";

const Footer: React.FC = () => {

    return (
        <nav className="footer page-width-large">
            <div className="footer__logo">
                <Link to="/">
                    <PictureImg
                        mainImg={{
                            url: () => "./images/preloader.png",
                            alt: "Preloader",
                            width: 32,
                            height: 32,
                        }}
                        mobileImg={{
                            url: () => "./images/preloader.png",
                            alt: "Preloader",
                            width: 32,
                            height: 32,
                        }}
                        alt="Logo"
                        pictureClasses="nav__logo"
                    />
                </Link>
            </div>
            <div className="footer__center u-flex justify-content-center align-items-center h-gap-xl">
                <Link to="/projects" className="nav-bar__projects u-gray">Politique de confidentialité</Link>
                <Link to="/projects" className="nav-bar__projects u-gray">Mention Légales</Link>
                <Link to="/projects" className="nav-bar__projects u-gray">CGU</Link>
            </div>
            <div className="footer__socialMedia u-flex h-gap-l">
                <a href="">
                    <Icon name="GitHub" className="custom-icon u-gold" />
                </a>
                <a href="">
                    <Icon name="Linkedin" className="custom-icon u-gold" />
                </a>
                <a href="">
                    <Icon name="Twitter" className="custom-icon u-gold" />
                </a>
            </div>
        </nav>
    );
};

export default Footer;
