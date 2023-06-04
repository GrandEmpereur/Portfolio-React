import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.css';
import Icon from '../common/Icon';
import { SliderProps } from '../types/Slider.types.ts';

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

/** 
 * A customizable slider component built with Swiper.
 *
 * @component
 * @example
 * <Slider
 *   data_desktop_only={true}
 *   data_resize={true}
 *   data_minimum_length_lg={2}
 *   data_autoplay={true}
 *   data_loop={true}
 *   data_fade={true}
 *   data_free_mode={true}
 *   data_disable_slider={false}
 *   data_touch_start={true}
 *   data_speed={700}
 *   data_loop_delay={3000}
 *   data_direction="horizontal"
 * >
 *   <div>Slide 1</div>
 *   <div>Slide 2</div>
 * </Slider>
 */
const Slider: React.FC<SliderProps> = ({
    children,
    // data_resize = false,
    data_minimum_length_lg = 1,
    // data_autoplay = false,
    data_loop = false,
    data_fade = false,
    // data_free_mode = false,
    // data_disable_slider = false,
    // data_touch_start = false,
    data_speed = 700,
    // data_loop_delay = 3000,
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
        
        return () => {
            swiper?.destroy(true, true);
        }
    }, [swiperRef, swiper, data_direction, data_speed, data_loop, data_fade]);

    return (


        <nav
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
        </nav>
    );
};

export default Slider;