import React from "react";
import { Link } from "react-router-dom";
import PictureImg from "../components/PictureImg.tsx";
import "../scss/common/NavBar.scss";
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
            <div className="nav-bar__center">
                <Link to="/projects" className="nav-bar__projects u-gold">
                    <Icon symbolId="icon-menu" className="custom-icon" />
                    <span>Projects</span>
                </Link>
            </div>
            <div className="nav-bar__links">
                <Link to="/about" className="u-gold">À props</Link>
                <Link to="/services" className="u-gold">Services</Link>
                <Link to="/contact" className="u-gold">Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;
