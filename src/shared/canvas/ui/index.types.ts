import { Color } from '../lib/index.types';

export type CanvasProps = {
    className: string;
    width: number;
    height: number;
    clearColor?: Color;
};

export type Coords = {
    x: number;
    y: number;
};

export type Size = {
    width: number;
    height: number;
};
