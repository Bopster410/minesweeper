import { Position } from '.';
import { Color } from '../lib/index.types';

export type CanvasProps = {
    className: string;
    width: number;
    height: number;
    clearColor?: Color;
    scenePosition?: {
        coords: Coords;
        size: Size;
    };
    visiblePartPosition?: {
        coords: Coords;
        size: Size;
    };
};

export type Coords = {
    x: number;
    y: number;
};

export type Size = {
    width: number;
    height: number;
};

export type SquareCoords = {
    topLeft: Coords;
    bottomLeft: Coords;
    bottomRight: Coords;
    topRight: Coords;
};

export type ObjectInfo = {
    index: number;
    coords: Coords;
    size: Size;
    textureCoords: SquareCoords;
};

export type RenderingBufferInfo = {
    bufferValues: number[];
    texture: WebGLTexture;
    objects: Map<string, ObjectInfo>;
    position: Position;
    zIndex: number;
};

export type BufferMethods = {
    addObject: (
        name: string,
        params: {
            size: Size;
            coords: Coords;
            textureCoords: SquareCoords;
        },
    ) => void;
    updateObject: (
        name: string,
        params: {
            size?: Size;
            coords?: Coords;
            textureCoords?: SquareCoords;
        },
    ) => void;
    updateTexture: (texture: WebGLTexture) => void;
    clear: () => void;
};
