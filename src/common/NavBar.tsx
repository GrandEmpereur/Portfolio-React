import React from "react";
import { Link } from "react-router-dom";
import PictureImg from "../components/PictureImg.tsx";
import "../scss/sections/NavBar.scss";
import Icon from "./Icon.tsx";

const NavBar: React.FC = () => {
    return (
        <nav className="nav-bar page-width-large page-width-mobile">
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
                        widths="420, 768, 1024"
                        widths_mobile="320, 480, 640"
                        default_width="420"
                        breakpoint_width="768"
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
