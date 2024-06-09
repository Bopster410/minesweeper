import { SquareCoords } from '@/shared/canvas/ui/index.types';
import './tiletextures.png';
import './tiletextures2.png';
import './tiletextures_mine.png';

export const TILE_TEXTURE_COORDS_OLD = {
    BOMB: [0, 0.25, 0, 0, 0.25, 0, 0.25, 0, 0.25, 0.25, 0, 0.25],
    BOMB_WRONG: [0.25, 0.25, 0.25, 0, 0.5, 0, 0.5, 0, 0.5, 0.25, 0.25, 0.25],
};

export const TILE_TEXTURE_COORDS: { [name: string]: SquareCoords } = {
    EMPTY: {
        topLeft: {
            x: 0,
            y: 1,
        },
        bottomLeft: {
            x: 0,
            y: 0.75,
        },
        bottomRight: {
            x: 0.25,
            y: 0.75,
        },
        topRight: {
            x: 0.25,
            y: 1,
        },
    },
    ONE: {
        topLeft: {
            x: 0.25,
            y: 1,
        },
        bottomLeft: {
            x: 0.25,
            y: 0.75,
        },
        bottomRight: {
            x: 0.5,
            y: 0.75,
        },
        topRight: {
            x: 0.5,
            y: 1,
        },
    },
    TWO: {
        topLeft: {
            x: 0.5,
            y: 1,
        },
        bottomLeft: {
            x: 0.5,
            y: 0.75,
        },
        bottomRight: {
            x: 0.75,
            y: 0.75,
        },
        topRight: {
            x: 0.75,
            y: 1,
        },
    },
    THREE: {
        topLeft: {
            x: 0.75,
            y: 1,
        },
        bottomLeft: {
            x: 0.75,
            y: 0.75,
        },
        bottomRight: {
            x: 1,
            y: 0.75,
        },
        topRight: {
            x: 1,
            y: 1,
        },
    },
    FOUR: {
        topLeft: {
            x: 0,
            y: 0.75,
        },
        bottomLeft: {
            x: 0,
            y: 0.5,
        },
        bottomRight: {
            x: 0.25,
            y: 0.5,
        },
        topRight: {
            x: 0.25,
            y: 0.75,
        },
    },
    FIVE: {
        topLeft: {
            x: 0.25,
            y: 0.75,
        },
        bottomLeft: {
            x: 0.25,
            y: 0.5,
        },
        bottomRight: {
            x: 0.5,
            y: 0.5,
        },
        topRight: {
            x: 0.5,
            y: 0.75,
        },
    },
    SIX: {
        topLeft: {
            x: 0.5,
            y: 0.75,
        },
        bottomLeft: {
            x: 0.5,
            y: 0.5,
        },
        bottomRight: {
            x: 0.75,
            y: 0.5,
        },
        topRight: {
            x: 0.75,
            y: 0.75,
        },
    },
    SEVEN: {
        topLeft: {
            x: 0.75,
            y: 0.75,
        },
        bottomLeft: {
            x: 0.75,
            y: 0.5,
        },
        bottomRight: {
            x: 1,
            y: 0.5,
        },
        topRight: {
            x: 1,
            y: 0.75,
        },
    },
    EIGHT: {
        topLeft: {
            x: 0,
            y: 0.5,
        },
        bottomLeft: {
            x: 0,
            y: 0.25,
        },
        bottomRight: {
            x: 0.25,
            y: 0.25,
        },
        topRight: {
            x: 0.25,
            y: 0.5,
        },
    },
    CLOSED: {
        topLeft: {
            x: 0.25,
            y: 0.5,
        },
        bottomLeft: {
            x: 0.25,
            y: 0.25,
        },
        bottomRight: {
            x: 0.5,
            y: 0.25,
        },
        topRight: {
            x: 0.5,
            y: 0.5,
        },
    },
    FLAG: {
        topLeft: {
            x: 0.5,
            y: 0.5,
        },
        bottomLeft: {
            x: 0.5,
            y: 0.25,
        },
        bottomRight: {
            x: 0.75,
            y: 0.25,
        },
        topRight: {
            x: 0.75,
            y: 0.5,
        },
    },
    FLAG_WRONG: {
        topLeft: {
            x: 0.75,
            y: 0.5,
        },
        bottomLeft: {
            x: 0.75,
            y: 0.25,
        },
        bottomRight: {
            x: 1,
            y: 0.25,
        },
        topRight: {
            x: 1,
            y: 0.5,
        },
    },
    BOMB: {
        topLeft: {
            x: 0,
            y: 0.25,
        },
        bottomLeft: {
            x: 0,
            y: 0,
        },
        bottomRight: {
            x: 0.25,
            y: 0,
        },
        topRight: {
            x: 0.25,
            y: 0.25,
        },
    },
    BOMB_WRONG: {
        topLeft: {
            x: 0.25,
            y: 0.25,
        },
        bottomLeft: {
            x: 0.25,
            y: 0,
        },
        bottomRight: {
            x: 0.5,
            y: 0,
        },
        topRight: {
            x: 0.5,
            y: 0.25,
        },
    },
};
