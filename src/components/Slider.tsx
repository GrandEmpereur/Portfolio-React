// slider.tsx
import React, { useEffect, useRef, useState } from 'react';
import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.css';

// Installer les modules Swiper pour pouvoir les utiliser plus tard
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

interface SliderProps {
    children: React.ReactNode;
    speed?: number;
    loop?: boolean;
    fade?: boolean;
    freeMode?: boolean;
    disableSlide?: boolean;
    autoplay?: boolean;
    direction?: 'horizontal' | 'vertical';
    loopDelay?: number;
}

const Slider: React.FC<SliderProps> = ({
    children,
    speed = 700,
    loop = false,
    fade = false,
    freeMode = false,
    disableSlide = false,
    autoplay = false,
    direction = 'horizontal',
    loopDelay = 3000
}) => {
    const swiperRef = useRef(null);
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (swiperRef.current && !swiper) {
            const s = new Swiper(swiperRef.current, {
                direction: direction,
                slidesPerView: 'auto',
                freeMode: freeMode,
                speed: speed,
                loop: loop,
                loopPreventsSlide: false,
                allowTouchMove: disableSlide ? false : true,
                autoplay: autoplay ? { delay: loopDelay } : false,
                effect: fade ? 'fade' : undefined,
                fadeEffect: fade ? { crossFade: true } : undefined,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    disabledClass: 'swiper-button-disabled'
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                },
                on: {
                    init: function() {
                        if (!loop) {
                            document.querySelector('.swiper-button-prev')?.classList.add('swiper-button-disabled');
                        }
                    },
                },
            });
            setSwiper(s);
        }
    }, [speed, loop, fade, freeMode, disableSlide, autoplay, direction, loopDelay, swiper]);

    return (
        <div ref={swiperRef} className="swiper-container">
            <div className="swiper-wrapper">
                {React.Children.map(children, (child, index) => (
                    <div className="swiper-slide" data-swiper-slide-index={index}>
                        {child}
                    </div>
                ))}
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
        </div>
    );
};

export default Slider;
