import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PictureImg from "../components/PictureImg";
import "../scss/sections/Navbar.scss";
import Icon from "./Icon";
import { updateAxiosInstance, getNavigation } from "../services/axios.ts";
import { MenuItem } from "../types/INav.types.ts";

interface LogoImg {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [logo, setLogo] = useState<LogoImg>({
        src: '',
        alt: 'Logo',
        width: 30,
        height: 30,
    });
    const [nav, setNavItems] = useState<MenuItem[] | undefined>();


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleCloseMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        updateAxiosInstance();
        const fetchNavigation = async () => {
            const nav = await getNavigation();
            if (nav?.status === "success") {
                setLogo({
                    src: nav.logo.url,
                    alt: 'Logo',
                    width: 30,
                    height: 30,
                });
                setNavItems(nav.nav);
            }
        };
        fetchNavigation()
    }, []);

    return (
        <nav className="nav-bar page-width-large page-width-mobile">
            <div className="nav-bar__logo">
                <Link to="/">
                    <PictureImg
                        img={logo}
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
                        {nav && nav.map((item: MenuItem) => (
                            <Link
                                key={item.id}
                                to={item.Slug}
                                className="u-gold u-underline--hover "
                                onClick={toggleCloseMenu}
                            >
                                {item.Label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="u-none--md u-flex align-items-center justify-content-between">
                <div className="nav-bar__links">
                    {nav && nav.map((item: MenuItem) => (
                        <Link
                            key={item.id}
                            to={item.Slug}
                            className="u-gold u-underline--hover "
                            onClick={toggleCloseMenu}
                        >
                            {item.Label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;