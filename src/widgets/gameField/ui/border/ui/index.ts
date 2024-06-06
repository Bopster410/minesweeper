import { Canvas, VaoInfo } from '@/shared/canvas';
import {
    HORIZONTAL_HEIGHT,
    TEXTURE_COORDS_BORDER,
    VERTICAL_WIDTH,
} from '../textures';
import { FieldBorderInfo, TopSectionInfo } from './index.types';

function renderHorizontal(
    canvas: Canvas,
    vao: VaoInfo,
    width: number,
    x: number,
    y: number,
    texture: WebGLTexture,
) {
    canvas.addObject(
        `border-horizontal[${x}:${y}]`,
        vao,
        {
            size: { height: HORIZONTAL_HEIGHT, width: width },
            coords: { x: x, y: y },
            textureCoords: TEXTURE_COORDS_BORDER.HORIZONTAL,
        },
        texture,
    );

    return `border-horizontal[${x}:${y}]`;
}

function renderVertical(
    canvas: Canvas,
    vao: VaoInfo,
    height: number,
    x: number,
    y: number,
    texture: WebGLTexture,
) {
    canvas.addObject(
        `border-vertical[${x}:${y}]`,
        vao,
        {
            size: { height: height, width: VERTICAL_WIDTH },
            coords: { x: x, y: y },
            textureCoords: TEXTURE_COORDS_BORDER.VERTICAL,
        },
        texture,
    );

    return `border-vertical[${x}:${y}]`;
}

function renderBottomLeftCorner(
    canvas: Canvas,
    vao: VaoInfo,
    x: number,
    y: number,
    texture: WebGLTexture,
) {
    canvas.addObject(
        `border-bottom-left[${x}:${y}]`,
        vao,
        {
            size: { height: HORIZONTAL_HEIGHT, width: VERTICAL_WIDTH },
            coords: { x: x, y: y },
            textureCoords: TEXTURE_COORDS_BORDER.CORNER_BOTTOM_LEFT,
        },
        texture,
    );

    return `border-bottom-left[${x}:${y}]`;
}

function renderBottomRightCorner(
    canvas: Canvas,
    vao: VaoInfo,
    x: number,
    y: number,
    texture: WebGLTexture,
) {
    canvas.addObject(
        `border-bottom-right[${x}:${y}]`,
        vao,
        {
            size: { height: HORIZONTAL_HEIGHT, width: VERTICAL_WIDTH },
            coords: { x: x, y: y },
            textureCoords: TEXTURE_COORDS_BORDER.CORNER_BOTTOM_RIGHT,
        },
        texture,
    );

    return `border-bottom-right[${x}:${y}]`;
}
function renderTopLeftCorner(
    canvas: Canvas,
    vao: VaoInfo,
    x: number,
    y: number,
    texture: WebGLTexture,
) {
    canvas.addObject(
        `border-top-left[${x}:${y}]`,
        vao,
        {
            size: { height: HORIZONTAL_HEIGHT, width: VERTICAL_WIDTH },
            coords: { x: x, y: y },
            textureCoords: TEXTURE_COORDS_BORDER.CORNER_TOP_LEFT,
        },
        texture,
    );

    return `border-top-left[${x}:${y}]`;
}

function renderTopRightCorner(
    canvas: Canvas,
    vao: VaoInfo,
    x: number,
    y: number,
    texture: WebGLTexture,
) {
    canvas.addObject(
        `border-top-right[${x}:${y}]`,
        vao,
        {
            size: { height: HORIZONTAL_HEIGHT, width: VERTICAL_WIDTH },
            coords: { x: x, y: y },
            textureCoords: TEXTURE_COORDS_BORDER.CORNER_TOP_RIGHT,
        },
        texture,
    );

    return `border-top-right[${x}:${y}]`;
}

function renderLeftConnection(
    canvas: Canvas,
    vao: VaoInfo,
    x: number,
    y: number,
    texture: WebGLTexture,
) {
    canvas.addObject(
        `border-connection-left[${x}:${y}]`,
        vao,
        {
            size: { height: HORIZONTAL_HEIGHT, width: VERTICAL_WIDTH },
            coords: { x: x, y: y },
            textureCoords: TEXTURE_COORDS_BORDER.CONNECTION_LEFT,
        },
        texture,
    );

    return `border-connection-left[${x}:${y}]`;
}

function renderRightConnection(
    canvas: Canvas,
    vao: VaoInfo,
    x: number,
    y: number,
    texture: WebGLTexture,
) {
    canvas.addObject(
        `border-connection-right[${x}:${y}]`,
        vao,
        {
            size: { height: HORIZONTAL_HEIGHT, width: VERTICAL_WIDTH },
            coords: { x: x, y: y },
            textureCoords: TEXTURE_COORDS_BORDER.CONNECTION_RIGHT,
        },
        texture,
    );

    return `border-connection-right[${x}:${y}]`;
}

function renderFieldBorder(
    canvas: Canvas,
    vao: VaoInfo,
    fieldHeight: number,
    width: number,
    x: number,
    y: number,
    texture: WebGLTexture,
): FieldBorderInfo {
    return {
        blCorner: renderBottomLeftCorner(canvas, vao, x, y, texture),
        verticalLeft: renderVertical(
            canvas,
            vao,
            fieldHeight,
            x,
            y + HORIZONTAL_HEIGHT,
            texture,
        ),

        connectionLeft: renderLeftConnection(
            canvas,
            vao,
            x,
            y + fieldHeight + HORIZONTAL_HEIGHT,
            texture,
        ),

        horizontalBottom: renderHorizontal(
            canvas,
            vao,
            width,
            x + VERTICAL_WIDTH,
            y,
            texture,
        ),

        horizontalTop: renderHorizontal(
            canvas,
            vao,
            width,
            x + VERTICAL_WIDTH,
            y + fieldHeight + HORIZONTAL_HEIGHT,
            texture,
        ),

        connectionRight: renderRightConnection(
            canvas,
            vao,
            x + VERTICAL_WIDTH + width,
            y + fieldHeight + HORIZONTAL_HEIGHT,
            texture,
        ),

        verticalRight: renderVertical(
            canvas,
            vao,
            fieldHeight,
            x + VERTICAL_WIDTH + width,
            y + HORIZONTAL_HEIGHT,
            texture,
        ),

        brCornenr: renderBottomRightCorner(
            canvas,
            vao,
            x + VERTICAL_WIDTH + width,
            y,
            texture,
        ),
    };
}

function renderTopSection(
    canvas: Canvas,
    vao: VaoInfo,
    topSectionHeight: number,
    width: number,
    x: number,
    y: number,
    texture: WebGLTexture,
): TopSectionInfo {
    return {
        verticalLeft: renderVertical(
            canvas,
            vao,
            topSectionHeight,
            x,
            y,
            texture,
        ),
        tlCorner: renderTopLeftCorner(
            canvas,
            vao,
            x,
            y + topSectionHeight,
            texture,
        ),
        horizontalBottom: renderHorizontal(
            canvas,
            vao,
            width,
            x + VERTICAL_WIDTH,
            y + topSectionHeight,
            texture,
        ),
        verticalRight: renderVertical(
            canvas,
            vao,
            topSectionHeight,
            x + VERTICAL_WIDTH + width,
            y,
            texture,
        ),

        trCorner: renderTopRightCorner(
            canvas,
            vao,
            x + VERTICAL_WIDTH + width,
            y + topSectionHeight,
            texture,
        ),
    };
}

function clearFieldBorder(canvas: Canvas, info: FieldBorderInfo) {
    canvas.removeObject(info.blCorner);
    canvas.removeObject(info.brCornenr);
    canvas.removeObject(info.connectionLeft);
    canvas.removeObject(info.connectionRight);
    canvas.removeObject(info.horizontalBottom);
    canvas.removeObject(info.horizontalTop);
    canvas.removeObject(info.verticalLeft);
    canvas.removeObject(info.verticalRight);
}

function clearTopSectionBorder(canvas: Canvas, info: TopSectionInfo) {
    canvas.removeObject(info.horizontalBottom);
    canvas.removeObject(info.tlCorner);
    canvas.removeObject(info.trCorner);
    canvas.removeObject(info.verticalLeft);
    canvas.removeObject(info.verticalRight);
}

function renderBorder(
    canvas: Canvas,
    width: number,
    fieldHeight: number,
    topSectionHeight: number,
    borderVao: VaoInfo,
    texture: WebGLTexture,
) {
    return {
        fieldX: VERTICAL_WIDTH,
        fieldY: HORIZONTAL_HEIGHT,
        topSectionX: VERTICAL_WIDTH,
        topSectionY: HORIZONTAL_HEIGHT * 2 + fieldHeight,
        fieldBorderInfo: renderFieldBorder(
            canvas,
            borderVao,
            fieldHeight,
            width,
            0,
            0,
            texture,
        ),
        topSectionInfo: renderTopSection(
            canvas,
            borderVao,
            topSectionHeight,
            width,
            0,
            HORIZONTAL_HEIGHT * 2 + fieldHeight,
            texture,
        ),
    };
}

export async function getBorder(canvas: Canvas, topSectionHeight: number) {
    const texture = await canvas.createNewTextureFromFile(
        './textureborder.png',
    );
    const borderVao = canvas.createNewVao(6);

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
                clearFieldBorder(canvas, info.fieldBorderInfo);
                clearTopSectionBorder(canvas, info.topSectionInfo);
            }

            info = renderBorder(
                canvas,
                newWidth,
                newFieldHeight,
                topSectionHeight,
                borderVao,
                texture,
            );

            return {
                fieldX: info.fieldX,
                fieldY: info.fieldY,
                topSectionX: info.topSectionX,
                topSectionY: info.topSectionY,
            };
        },
    };
}
