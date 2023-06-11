import React, { useState } from "react";
import { Link } from "react-router-dom";
import PictureImg from "../components/PictureImg";
import "../scss/sections/Navbar.scss";
import Icon from "./Icon";

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log("toggleMenu");
        setIsOpen(!isOpen);
    };

    const toggleCloseMenu = () => {
        console.log("toggleCloseMenu");
        setIsOpen(false);
    };

    return (
        <nav className="nav-bar page-width-large page-width-mobile u-relative">
            <div className="nav-bar__logo">
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

            <div className="burger u-none u-block--md">
                {isOpen ? (
                    <Icon name="X" className="icon-close u-gold" onClick={toggleCloseMenu} />
                ) : (
                    <Icon name="Menu" className="icon-open u-gold" onClick={toggleMenu} />
                )}

                <div className={`burger__menu ${isOpen ? "open" : ""}`}>
                    <div className="burger__menu__links u-none">
                        <Link
                            to="/about"
                            className="u-gold u-underline--hover "
                            onClick={toggleCloseMenu}
                        >
                            À props
                        </Link>
                        <Link
                            to="/projects"
                            className="u-gold"
                            onClick={toggleCloseMenu}
                        >
                            Projects
                        </Link>
                        <Link
                            to="/services"
                            className="u-gold"
                            onClick={toggleCloseMenu}
                        >
                            Services
                        </Link>
                        <Link
                            to="/contact"
                            className="u-gold"
                            onClick={toggleCloseMenu}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>

            <div className="u-none--md u-flex align-items-center justify-content-between">
                <div className="nav-bar__center u-absolute">
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
            </div>
        </nav>
    );
};

export default NavBar;
