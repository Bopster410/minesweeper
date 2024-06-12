import { SquareCoords } from '@/shared/canvas/ui/index.types';
import './texturesmile.png';
import './texturesmile2.png';
import './texturesmile_mine.png';
import './texturesmile_forest.png';

export const SMILE_TEXTURE_COORDS: { [name: string]: SquareCoords } = {
    DEFAULT: {
        topLeft: {
            x: 0,
            y: 1,
        },
        bottomLeft: {
            x: 0,
            y: 0,
        },
        bottomRight: {
            x: 0.2,
            y: 0,
        },
        topRight: {
            x: 0.2,
            y: 1,
        },
    },
    PRESSED: {
        topLeft: {
            x: 0.2,
            y: 1,
        },
        bottomLeft: {
            x: 0.2,
            y: 0,
        },
        bottomRight: {
            x: 0.4,
            y: 0,
        },
        topRight: {
            x: 0.4,
            y: 1,
        },
    },
    SCARED: {
        topLeft: {
            x: 0.4,
            y: 1,
        },
        bottomLeft: {
            x: 0.4,
            y: 0,
        },
        bottomRight: {
            x: 0.6,
            y: 0,
        },
        topRight: {
            x: 0.6,
            y: 1,
        },
    },
    DEFEAT: {
        topLeft: {
            x: 0.6,
            y: 1,
        },
        bottomLeft: {
            x: 0.6,
            y: 0,
        },
        bottomRight: {
            x: 0.8,
            y: 0,
        },
        topRight: {
            x: 0.8,
            y: 1,
        },
    },
    WIN: {
        topLeft: {
            x: 0.8,
            y: 1,
        },
        bottomLeft: {
            x: 0.8,
            y: 0,
        },
        bottomRight: {
            x: 1,
            y: 0,
        },
        topRight: {
            x: 1,
            y: 1,
        },
    },
};
