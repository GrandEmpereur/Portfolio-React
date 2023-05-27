import React, { useEffect, useRef, useState } from 'react';
import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.css';
import Icon from '../common/Icon.tsx';

Swiper.use([Swiper,Navigation, Pagination, Autoplay, EffectFade]);


interface SliderProps {
    children: React.ReactNode[];
    data_desktop_only?: boolean;
    data_resize?: boolean;
    data_minimum_length_lg?: number;
    data_autoplay?: boolean;
    data_loop?: boolean;
    data_fade?: boolean;
    data_free_mode?: boolean;
    data_disable_slider?: boolean;
    data_touch_start?: boolean;
    data_speed?: number;
    data_loop_delay?: number;
    data_direction?: string;
}
/** 
    <Slider data_desktop_only={true} data_resize={true} data_minimum_length_lg={2} data_autoplay={true} data_loop={true} data_fade={true} data_free_mode={true} data_disable_slider={false} data_touch_start={true} data_speed={700} data_loop_delay={3000} data_direction="horizontal">

    @param {boolean} data_desktop_only - Only display the slider on desktop
    @param {boolean} data_resize - Resize the slider on window resize
    @param {number} data_minimum_length_lg - Minimum number of slides to display the slider on desktop
    @param {boolean} data_autoplay - Enable autoplay
    @param {boolean} data_loop - Enable loop
    @param {boolean} data_fade - Enable fade effect
    @param {boolean} data_free_mode - Enable free mode
    @param {boolean} data_disable_slider - Disable slider
    @param {boolean} data_touch_start - Enable touch start
    @param {number} data_speed - Slider speed
    @param {number} data_loop_delay - Slider loop delay
    @param {string} data_direction - Slider direction

    @return {React.FC} - Slider component
**/
const Slider: React.FC<SliderProps> = ({
    children,
    data_desktop_only = false,
    data_resize = false,
    data_minimum_length_lg = 1,
    data_autoplay = false,
    data_loop = false,
    data_fade = false,
    data_free_mode = false,
    data_disable_slider = false,
    data_touch_start = false,
    data_speed = 700,
    data_loop_delay = 3000,
    data_direction = 'horizontal',
}) => {
    const swiperRef = useRef(null);
    const [swiper, setSwiper] = useState<Swiper | null>(null);

    useEffect(() => {
        if (swiperRef.current && !swiper) {
            const s = new Swiper(swiperRef.current, {
                slidesPerView: 'auto',
                direction: data_direction,
                speed: data_speed,
                loop: data_loop,
                effect: data_fade ? 'fade' : 'slide',
                navigation: {
                    nextEl: '.slider-button-next',
                    prevEl: '.slider-button-prev',
                },
                on: {
                    init: function () {
                        if (!data_loop) {
                            document.querySelector('.slider-button-prev')?.classList.add('swiper-button-disabled');
                        }
                    },
                },
            });
            setSwiper(s);
        }

        // Cleanup
        return () => {
            swiper?.destroy(true, true);
        }
    }, [swiperRef, swiper, data_direction, data_speed, data_loop, data_fade]);

    return (
        <div
            className="swiper-container swiper-container--visible overflow__content u-overflow-no-scrollbar"
            ref={swiperRef}
        >
            <div className="swiper-wrapper u-flex u-pad-l-m">
                {children}
            </div>

            {children.length >= data_minimum_length_lg &&
            <>
                <button
                    type="button"
                    className="slider-button swiper-button-disabled button button--secondary button--round slider-button-prev u-back u-absolute u-absolute-h-center u-none--lg u-flex justify-content-center align-items-center"
                >
                    <Icon name="ArrowLeft" />
                </button>
                <button
                    type="button"
                    className="slider-button button button--secondary button--round slider-button-next u-back u-absolute u-absolute-h-center u-none--lg u-flex justify-content-center align-items-center"
                >
                    <Icon name="ArrowRight" />
                </button>
            </>
            }
        </div>
    );
};

export default Slider;
