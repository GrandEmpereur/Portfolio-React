import React from "react";
import { Link } from "react-router-dom";
import PictureImg from "../components/PictureImg.tsx";
import "../scss/sections/NavBar.scss";
import Icon from "./Icon.tsx";

const NavBar: React.FC = () => {
    return (
        <nav className="nav-bar page-width-large">
            <div className="nav-bar__logo">
                <Link to="/">
                    <PictureImg
                        mainImg={{
                            url: () => "./images/preloader.png",
                            alt: "Preloader",
                        }}
                        mobileImg={{
                            url: () => "./images/preloader.png",
                            alt: "Preloader",
                        }}
                        alt="Logo"
                        pictureClasses="nav__logo"
                    />
                </Link>
            </div>
            <div className="nav-bar__center">
                <Link to="/projects" className="nav-bar__projects u-gold u-flex flex-column align-items-center">
                    <Icon symbolId="icon-menu" className="custom-icon" />
                    <span className="u-underline--hover ">Projects</span>
                </Link>
            </div>
            <div className="nav-bar__links">
                <Link to="/about" className="u-gold u-underline--hover ">À props</Link>
                <Link to="/services" className="u-gold u-underline--hover ">Services</Link>
                <Link to="/contact" className="u-gold u-underline--hover ">Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;
