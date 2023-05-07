import React from 'react';
import * as Icons from 'react-feather';

export interface IconProps {
    name?: keyof typeof Icons;
    symbolId?: string;
    className?: string;
    size?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    strokeLinecap?: 'butt' | 'round' | 'square';
}

const Icon: React.FC<IconProps> = ({
    name,
    symbolId,
    className,
    size = 24,
    fill = 'none',
    stroke = 'currentColor',
    strokeWidth = 1.5,
    strokeLinecap = 'round',
}) => {
    const formatName = (iconName: string): keyof typeof Icons => {
        const formattedName = iconName.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
        return formattedName as keyof typeof Icons;
    };

    if (name) {
        const formattedName = formatName(name);
        const IconComponent = Icons[formattedName];
        return <IconComponent className={className} />;
    } else if (symbolId) {
        return (
            <svg
                width={size}
                height={size}
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap={strokeLinecap}
                className={`icon icon-${symbolId} ${className}`}
            >
                <use href={`#${symbolId}`} />
            </svg>
        );
    } else {
        return null;
    }
};

export default Icon;
