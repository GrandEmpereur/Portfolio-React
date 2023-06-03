import { ReactNode } from 'react';

export interface SliderProps {
    children: ReactNode[];
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
