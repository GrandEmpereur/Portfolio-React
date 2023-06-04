import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

interface PageTransitionProps {
    children: React.ReactNode;
}


const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const location = useLocation();
    const pageContainerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const pageElement = pageContainerRef.current;

        if (pageElement) {
            gsap.fromTo(
                pageElement,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1 }
            );
        }

        return () => {
            if (pageElement) {
                gsap.fromTo(
                    pageElement,
                    { opacity: 1, y: 0 },
                    { opacity: 0, y: -30, duration: 1 }
                );
            }
        };
    }, [location]);

    return <div ref={pageContainerRef}>{children}</div>;
};

export default PageTransition;
