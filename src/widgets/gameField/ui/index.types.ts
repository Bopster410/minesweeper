import { Color } from '@/shared/canvas/lib/index.types';

export type GameCanvasProps = {
    className: string;
};

export type Position = {
    x: number;
    y: number;
    width: number;
    height: number;
};

export type ElementsPositions = {
    field: Position;
    smile: Position;
};

export type GameState = {
    status: 'menu' | 'game' | 'defeat' | 'victory';
    bombsLeft?: number;
    noBombsFieldsLeft?: number;
    bombs?: {
        column: number;
        row: number;
    }[];

    positions: {
        field: Position;
        smile: Position;
    };
};

export type Theme = {
    border: () => void;
    smile: () => void;
    tile: () => void;
    color: Color;
    text: string;
};
