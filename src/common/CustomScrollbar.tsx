import { useState, useEffect } from "react";
import "../scss/common/CustomScrollbar.scss";

const CustomScrollbar = () => {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const docHeight = document.documentElement.scrollHeight;
            const scrollPosition = scrollTop + windowHeight;

            let scrollHeight;
            if (scrollPosition >= docHeight) {
                scrollHeight = windowHeight;
            } else {
                scrollHeight = 25 + scrollTop * 0.5;
            }
            setScrollHeight(scrollHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <div className="custom-scrollbar" style={{ height: scrollHeight }} />;
};

export default CustomScrollbar;
