import { Canvas } from '@/shared/canvas';
import {
    HORIZONTAL_HEIGHT,
    TEXTURE_COORDS_BORDER,
    VERTICAL_WIDTH,
} from '../textures';
import { FieldBorderInfo, TopSectionInfo } from './index.types';
import { DEFAULT_TEXTURE, TEXTURE_FILES } from './index.constants';
import { BufferMethods } from '@/shared/canvas/ui';

function renderHorizontal(
    borderBuffer: BufferMethods,
    width: number,
    x: number,
    y: number,
) {
    borderBuffer.addObject(`border-horizontal[${x}:${y}]`, {
        size: { height: HORIZONTAL_HEIGHT, width: width },
        coords: { x: x, y: y },
        textureCoords: TEXTURE_COORDS_BORDER.HORIZONTAL,
    });

    return `border-horizontal[${x}:${y}]`;
}

function renderVertical(
    borderBuffer: BufferMethods,
    height: number,
    x: number,
    y: number,
    width?: number,
) {
    borderBuffer.addObject(`border-vertical[${x}:${y}]`, {
        size: { height: height, width: width ?? VERTICAL_WIDTH },
        coords: { x: x, y: y },
        textureCoords: TEXTURE_COORDS_BORDER.VERTICAL,
    });

    return `border-vertical[${x}:${y}]`;
}

function renderEmpty(
    borderBuffer: BufferMethods,
    height: number,
    width: number,
    x: number,
    y: number,
) {
    borderBuffer.addObject(`border-empty[${x}:${y}]`, {
        size: { height: height, width: width },
        coords: { x: x, y: y },
        textureCoords: TEXTURE_COORDS_BORDER.EMPTY,
    });

    return `border-vertical[${x}:${y}]`;
}

function renderBottomLeftCorner(
    borderBuffer: BufferMethods,
    x: number,
    y: number,
) {
    borderBuffer.addObject(`border-bottom-left[${x}:${y}]`, {
        size: { height: HORIZONTAL_HEIGHT, width: VERTICAL_WIDTH },
        coords: { x: x, y: y },
        textureCoords: TEXTURE_COORDS_BORDER.CORNER_BOTTOM_LEFT,
    });

    return `border-bottom-left[${x}:${y}]`;
}

function renderBottomRightCorner(
    borderBuffer: BufferMethods,
    x: number,
    y: number,
) {
    borderBuffer.addObject(`border-bottom-right[${x}:${y}]`, {
        size: { height: HORIZONTAL_HEIGHT, width: VERTICAL_WIDTH },
        coords: { x: x, y: y },
        textureCoords: TEXTURE_COORDS_BORDER.CORNER_BOTTOM_RIGHT,
    });

    return `border-bottom-right[${x}:${y}]`;
}
function renderTopLeftCorner(
    borderBuffer: BufferMethods,
    x: number,
    y: number,
) {
    borderBuffer.addObject(`border-top-left[${x}:${y}]`, {
        size: { height: HORIZONTAL_HEIGHT, width: VERTICAL_WIDTH },
        coords: { x: x, y: y },
        textureCoords: TEXTURE_COORDS_BORDER.CORNER_TOP_LEFT,
    });

    return `border-top-left[${x}:${y}]`;
}

function renderTopRightCorner(
    borderBuffer: BufferMethods,
    x: number,
    y: number,
) {
    borderBuffer.addObject(`border-top-right[${x}:${y}]`, {
        size: { height: HORIZONTAL_HEIGHT, width: VERTICAL_WIDTH },
        coords: { x: x, y: y },
        textureCoords: TEXTURE_COORDS_BORDER.CORNER_TOP_RIGHT,
    });

    return `border-top-right[${x}:${y}]`;
}

function renderLeftConnection(
    borderBuffer: BufferMethods,
    x: number,
    y: number,
) {
    borderBuffer.addObject(`border-connection-left[${x}:${y}]`, {
        size: { height: HORIZONTAL_HEIGHT, width: VERTICAL_WIDTH },
        coords: { x: x, y: y },
        textureCoords: TEXTURE_COORDS_BORDER.CONNECTION_LEFT,
    });

    return `border-connection-left[${x}:${y}]`;
}

function renderRightConnection(
    borderBuffer: BufferMethods,
    x: number,
    y: number,
) {
    borderBuffer.addObject(`border-connection-right[${x}:${y}]`, {
        size: { height: HORIZONTAL_HEIGHT, width: VERTICAL_WIDTH },
        coords: { x: x, y: y },
        textureCoords: TEXTURE_COORDS_BORDER.CONNECTION_RIGHT,
    });

    return `border-connection-right[${x}:${y}]`;
}

function renderFieldBorder(
    borderBuffer: BufferMethods,
    fieldHeight: number,
    width: number,
    x: number,
    y: number,
): FieldBorderInfo {
    return {
        blCorner: renderBottomLeftCorner(borderBuffer, x, y),
        verticalLeft: renderVertical(
            borderBuffer,
            fieldHeight,
            x,
            y + HORIZONTAL_HEIGHT,
        ),

        connectionLeft: renderLeftConnection(
            borderBuffer,
            x,
            y + fieldHeight + HORIZONTAL_HEIGHT,
        ),

        horizontalBottom: renderHorizontal(
            borderBuffer,
            width,
            x + VERTICAL_WIDTH,
            y,
        ),

        horizontalTop: renderHorizontal(
            borderBuffer,
            width,
            x + VERTICAL_WIDTH,
            y + fieldHeight + HORIZONTAL_HEIGHT,
        ),

        connectionRight: renderRightConnection(
            borderBuffer,
            x + VERTICAL_WIDTH + width,
            y + fieldHeight + HORIZONTAL_HEIGHT,
        ),

        verticalRight: renderVertical(
            borderBuffer,
            fieldHeight,
            x + VERTICAL_WIDTH + width,
            y + HORIZONTAL_HEIGHT,
        ),

        brCornenr: renderBottomRightCorner(
            borderBuffer,
            x + VERTICAL_WIDTH + width,
            y,
        ),
    };
}

function renderTopSection(
    borderBuffer: BufferMethods,
    topSectionHeight: number,
    width: number,
    x: number,
    y: number,
): TopSectionInfo {
    return {
        verticalLeft: renderVertical(borderBuffer, topSectionHeight, x, y),
        tlCorner: renderTopLeftCorner(borderBuffer, x, y + topSectionHeight),
        horizontalBottom: renderHorizontal(
            borderBuffer,
            width,
            x + VERTICAL_WIDTH,
            y + topSectionHeight,
        ),
        verticalRight: renderVertical(
            borderBuffer,
            topSectionHeight,
            x + VERTICAL_WIDTH + width,
            y,
        ),

        trCorner: renderTopRightCorner(
            borderBuffer,
            x + VERTICAL_WIDTH + width,
            y + topSectionHeight,
        ),

        background: renderEmpty(
            borderBuffer,
            topSectionHeight,
            width,
            x + VERTICAL_WIDTH,
            y,
        ),
    };
}

function renderBorder(
    width: number,
    fieldHeight: number,
    topSectionHeight: number,
    borderBuffer: BufferMethods,
) {
    return {
        fieldX: VERTICAL_WIDTH,
        fieldY: HORIZONTAL_HEIGHT,
        topSectionX: VERTICAL_WIDTH,
        topSectionY: HORIZONTAL_HEIGHT * 2 + fieldHeight,
        fieldBorderInfo: renderFieldBorder(
            borderBuffer,
            fieldHeight,
            width,
            0,
            0,
        ),
        topSectionInfo: renderTopSection(
            borderBuffer,
            topSectionHeight,
            width,
            0,
            HORIZONTAL_HEIGHT * 2 + fieldHeight,
        ),
    };
}

export async function getBorder(canvas: Canvas, topSectionHeight: number) {
    const textures = await canvas.loadAllTextures(TEXTURE_FILES);
    let currentTexture = DEFAULT_TEXTURE;

    const borderBuffer = canvas.createBuffer(
        'border',
        textures.get(currentTexture),
        'fixed',
        -0.5,
    );

    let info: {
        fieldX: number;
        fieldY: number;
        fieldBorderInfo: FieldBorderInfo;
        topSectionInfo: TopSectionInfo;
        topSectionX: number;
        topSectionY: number;
    };

    return {
        renderBorder: (newWidth: number, newFieldHeight: number) => {
            if (info !== undefined) {
                borderBuffer.clear();
            }

            info = renderBorder(
                newWidth,
                newFieldHeight,
                topSectionHeight,
                borderBuffer,
            );

            return {
                fieldX: info.fieldX,
                fieldY: info.fieldY,
                topSectionX: info.topSectionX,
                topSectionY: info.topSectionY,
            };
        },

        changeTexture(name: string) {
            if (textures.has(name)) {
                currentTexture = name;
            }
        },

        updateTexture() {
            borderBuffer.updateTexture(textures.get(currentTexture));
        },

        width: () => 2 * VERTICAL_WIDTH,
        height: () => 3 * HORIZONTAL_HEIGHT,
    };
}
