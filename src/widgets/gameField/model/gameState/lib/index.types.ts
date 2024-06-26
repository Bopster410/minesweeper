export type GameStatus = 'menu' | 'game' | 'defeat' | 'victory';

export type GameState = {
    status: GameStatus;
    bombsLeft?: number;
    noBombsFieldsLeft?: number;
    flagsPut?: number;
};

export type GameStateMethods = {
    loadState: (state: GameState) => void;
    getStateInfo: () => GameState;
    setInitial: () => void;
    getStatus: () => GameStatus;
    getBombsLeft: () => number;
    getNoBombsFields: () => number;
    getFlagsPut: () => number;

    addOnBombsChange: (
        name: string,
        callback: (newBombs?: number) => void,
    ) => void;
    addOnNoBombsFieldsChange: (
        name: string,
        callback: (newNoBombsFields?: number) => void,
    ) => void;
    addOnStatusChange: (
        name: string,
        callback: (newStatus?: GameStatus) => void,
    ) => void;
    addOnFlagsChange: (
        name: string,
        callback: (newFlagsPut?: number) => void,
    ) => void;

    setStatus: (newStatus: GameStatus) => void;
    setBombs: (newBombs: number) => void;
    setNoBombsFields: (newNoBombsFields: number) => void;
    setFlagsPut: (newFlags: number) => void;
};
