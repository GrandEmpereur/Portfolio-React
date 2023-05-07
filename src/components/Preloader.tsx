import React, { useEffect, useState, useRef } from "react";
import PictureImg from "./PictureImg";
import "../scss/components/Preloader.scss";

interface PreloaderProps {
    style?: React.CSSProperties;
}

const Preloader: React.FC<PreloaderProps> = ({ style }) => {
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
        <div className="preloader page-width-large page-width-mobile" style={style}>
            <p className="preloader__counter h1 u-gold u-pad-t-xl keep-size">{count}</p>
            <div className="preloader__animation u-absolute u-absolute-center">
                <PictureImg
                    mainImg={{
                        url: () => "./images/preloader.png",
                        alt: "Preloader",
                    }}
                    mobileImg={{
                        url: () => "./images/preloader.png",
                        alt: "Preloader",
                    }}
                />
            </div>
        </div>
    );
};

export default Preloader;
