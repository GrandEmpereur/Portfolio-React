import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

interface PageTransitionProps {
    children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const location = useLocation();
    const pageContainerRef = React.useRef<HTMLDivElement>(null);

    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const pageElement = pageContainerRef.current;

        if (pageElement) {
            document.body.style.overflow = 'hidden';
            gsap.fromTo(
                pageElement,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    onComplete: () => { document.body.style.overflow = 'auto'; }
                }
            );
        }

        return () => {
            if (pageElement) {
                document.body.style.overflow = 'hidden';
                gsap.fromTo(
                    pageElement,
                    { opacity: 1, y: 0 },
                    {
                        opacity: 0,
                        y: -30,
                        duration: 1,
                        onComplete: () => { document.body.style.overflow = 'auto'; }
                    }
                );
            }
        };
    }, [location]);

    return <div style={{ overflow: isAnimating ? 'hidden' : 'visible' }} ref={pageContainerRef}>{children}</div>;
};

export default PageTransition;
