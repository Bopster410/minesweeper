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
