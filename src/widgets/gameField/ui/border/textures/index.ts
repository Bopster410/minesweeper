import { SquareCoords } from '@/shared/canvas/ui/index.types';
import './textureborder.png';
import './textureborder2.png';
import './textureborder_mine.png';
import './textureborder_forest.png';

export const TEXTURE_COORDS_BORDER: { [name: string]: SquareCoords } = {
    CORNER_TOP_LEFT: {
        topLeft: {
            x: 0,
            y: 1,
        },
        bottomLeft: {
            x: 0,
            y: 0.5,
        },
        bottomRight: {
            x: 0.125,
            y: 0.5,
        },
        topRight: {
            x: 0.125,
            y: 1,
        },
    },
    CORNER_TOP_RIGHT: {
        topLeft: {
            x: 0.125,
            y: 1,
        },
        bottomLeft: {
            x: 0.125,
            y: 0.5,
        },
        bottomRight: {
            x: 0.25,
            y: 0.5,
        },
        topRight: {
            x: 0.25,
            y: 1,
        },
    },
    CORNER_BOTTOM_LEFT: {
        topLeft: {
            x: 0.25,
            y: 1,
        },
        bottomLeft: {
            x: 0.25,
            y: 0.5,
        },
        bottomRight: {
            x: 0.375,
            y: 0.5,
        },
        topRight: {
            x: 0.375,
            y: 1,
        },
    },
    CORNER_BOTTOM_RIGHT: {
        topLeft: {
            x: 0.375,
            y: 1,
        },
        bottomLeft: {
            x: 0.375,
            y: 0.5,
        },
        bottomRight: {
            x: 0.5,
            y: 0.5,
        },
        topRight: {
            x: 0.5,
            y: 1,
        },
    },
    HORIZONTAL: {
        topLeft: {
            x: 0.5,
            y: 1,
        },
        bottomLeft: {
            x: 0.5,
            y: 0.5,
        },
        bottomRight: {
            x: 0.625,
            y: 0.5,
        },
        topRight: {
            x: 0.625,
            y: 1,
        },
    },
    CONNECTION_LEFT: {
        topLeft: {
            x: 0.625,
            y: 1,
        },
        bottomLeft: {
            x: 0.625,
            y: 0.5,
        },
        bottomRight: {
            x: 0.75,
            y: 0.5,
        },
        topRight: {
            x: 0.75,
            y: 1,
        },
    },
    CONNECTION_RIGHT: {
        topLeft: {
            x: 0.75,
            y: 1,
        },
        bottomLeft: {
            x: 0.75,
            y: 0.5,
        },
        bottomRight: {
            x: 0.875,
            y: 0.5,
        },
        topRight: {
            x: 0.875,
            y: 1,
        },
    },
    VERTICAL: {
        topLeft: {
            x: 0.875,
            y: 1,
        },
        bottomLeft: {
            x: 0.875,
            y: 0.5,
        },
        bottomRight: {
            x: 1,
            y: 0.5,
        },
        topRight: {
            x: 1,
            y: 1,
        },
    },
    EMPTY: {
        topLeft: {
            x: 0,
            y: 0.5,
        },
        bottomLeft: {
            x: 0,
            y: 0,
        },
        bottomRight: {
            x: 0.125,
            y: 0,
        },
        topRight: {
            x: 0.125,
            y: 0.5,
        },
    },
};

export const VERTICAL_WIDTH = 10;
export const HORIZONTAL_HEIGHT = 10;
