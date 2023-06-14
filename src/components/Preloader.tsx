import React, { useEffect, useState, useRef } from "react";
import PictureImg from "./PictureImg";
import { Image } from '../types/PictureImg.types.ts';
import "../scss/components/preloader.scss";

interface PreloaderProps {
    style?: React.CSSProperties;
    logo: Image;
}

const Preloader: React.FC<PreloaderProps> = ({ style, logo }) => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>();

    useEffect(() => {
        if (count < 100) {
            intervalRef.current = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 20);
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
        <div className="preloader u-relative u-full-vp-wh" style={style}>
            <p className="preloader__counter h1 u-gold u-pad-t-xl keep-size">{count}</p>
            <div className="preloader__animation ">
                <PictureImg
                    img={logo}
                    imgMobile={logo}
                    alt="Logo"
                    breakpoint_width="1024"
                    lazy={false}
                />
            </div>
        </div>
    );
};

export default Preloader;
