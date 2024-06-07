export type Position = {
    x: number;
    y: number;
    width: number;
    height: number;
};

export type GameStatus = 'menu' | 'game' | 'defeat' | 'victory';

export type GameState = {
    status: GameStatus;
    bombsLeft?: number;
    noBombsFieldsLeft?: number;
    flagsPut?: number;
};
