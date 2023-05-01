import React, { useEffect, useState, useRef } from "react";
import PictureImg from "./PictureImg";
import "../scss/components/Preloader.scss";

const Preloader: React.FC = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>();

    useEffect(() => {
        if (count < 100) {
            intervalRef.current = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 50);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [count]);

    return (
        <div className="preloader page-width-large page-width-mobile">
            <p className="preloader__counter h1 u-gold u-pad-t-xl keep-size">{count}</p>
            <div className="preloader__animation u-absolute u-absolute-center">
                <PictureImg
                    mainImg={{
                        url: () => "./images/preloader.png",
                        alt: "Preloader",
                        width: 100,
                        height: 100,
                    }}
                    mobileImg={{
                        url: () => "./images/preloader.png",
                        alt: "Preloader",
                        width: 100,
                        height: 100,
                    }}
                />
            </div>
        </div>
    );
};

export default Preloader;
