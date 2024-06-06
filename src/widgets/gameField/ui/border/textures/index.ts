import './textureborder.png';

export const TEXTURE_COORDS_BORDER = {
    CORNER_TOP_LEFT: [0, 1, 0, 0, 0.125, 0, 0.125, 0, 0.125, 1, 0, 1],
    CORNER_TOP_RIGHT: [0.125, 1, 0.125, 0, 0.25, 0, 0.25, 0, 0.25, 1, 0.125, 1],
    CORNER_BOTTOM_LEFT: [
        0.25, 1, 0.25, 0, 0.375, 0, 0.375, 0, 0.375, 1, 0.25, 1,
    ],
    CORNER_BOTTOM_RIGHT: [0.375, 1, 0.375, 0, 0.5, 0, 0.5, 0, 0.5, 1, 0.375, 1],
    HORIZONTAL: [0.5, 1, 0.5, 0, 0.625, 0, 0.625, 0, 0.625, 1, 0.5, 1],
    CONNECTION_LEFT: [0.625, 1, 0.625, 0, 0.75, 0, 0.75, 0, 0.75, 1, 0.625, 1],
    CONNECTION_RIGHT: [0.75, 1, 0.75, 0, 0.875, 0, 0.875, 0, 0.875, 1, 0.75, 1],
    VERTICAL: [0.875, 1, 0.875, 0, 1, 0, 1, 0, 1, 1, 0.875, 1],
};

export const VERTICAL_WIDTH = 10;
export const HORIZONTAL_HEIGHT = 10;
