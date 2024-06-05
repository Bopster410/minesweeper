export type GameCanvasProps = {
    className: string;
};

export type GameState = {
    status: 'menu' | 'game' | 'defeat' | 'victory';
    bombsLeft?: number;
    noBombsFieldsLeft?: number;
    bombs?: {
        column: number;
        row: number;
    }[];
};
