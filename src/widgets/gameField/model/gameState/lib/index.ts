import { GameState, GameStateMethods, GameStatus } from './index.types';

export type { GameStateMethods, GameState as GameStateInfo };

// eslint-disable-next-line max-lines-per-function
export function getNewGameState(): GameStateMethods {
    const gameState: GameState = {
        status: null,
    };

    const statusSubscriptions = new Map<
        string,
        (newStatus?: GameStatus) => void
    >();
    const bombsSubscriptions = new Map<string, (newBombs?: number) => void>();

    const noBombsFieldsSubscriptions = new Map<
        string,
        (newNoBombsFields?: number) => void
    >();

    const flagsSubscriptions = new Map<
        string,
        (newFlagsPut?: number) => void
    >();

    const setStatus = (newStatus: GameStatus) => {
        if (newStatus === gameState.status) {
            return;
        }

        gameState.status = newStatus;
        statusSubscriptions.forEach((callback) => {
            callback(newStatus);
        });
    };

    const setBombs = (newBombs: number) => {
        if (newBombs === gameState.bombsLeft) {
            return;
        }

        gameState.bombsLeft = newBombs;
        bombsSubscriptions.forEach((callback) => {
            callback(newBombs);
        });
    };

    const setFLags = (newFlags: number) => {
        if (newFlags === gameState.bombsLeft) {
            return;
        }

        gameState.flagsPut = newFlags;
        flagsSubscriptions.forEach((callback) => {
            callback(newFlags);
        });
    };

    const setInitial = () => {
        setStatus('menu');
        setBombs(0);
    };

    return {
        loadState: (newState: GameState) => {
            gameState.status = newState.status;
            gameState.bombsLeft = newState.bombsLeft;
            gameState.noBombsFieldsLeft = newState.noBombsFieldsLeft;
            gameState.flagsPut = newState.flagsPut;
        },
        getStateInfo: () => {
            return {
                status: gameState.status,
                bombsLeft: gameState.bombsLeft,
                noBombsFieldsLeft: gameState.noBombsFieldsLeft,
                flagsPut: gameState.flagsPut,
            };
        },
        setInitial: setInitial,
        getStatus: () => gameState.status,
        getBombsLeft: () => gameState.bombsLeft,
        getNoBombsFields: () => gameState.noBombsFieldsLeft,
        getFlagsPut: () => gameState.flagsPut,

        addOnBombsChange: (
            name: string,
            callback: (newBombs?: number) => void,
        ) => {
            bombsSubscriptions.set(name, callback);
        },
        addOnNoBombsFieldsChange: (
            name: string,
            callback: (newNoBombsFields?: number) => void,
        ) => {
            noBombsFieldsSubscriptions.set(name, callback);
        },
        addOnStatusChange: (
            name: string,
            callback: (newStatus?: GameStatus) => void,
        ) => {
            statusSubscriptions.set(name, callback);
        },
        addOnFlagsChange: (
            name: string,
            callback: (newFlagsPut?: number) => void,
        ) => {
            flagsSubscriptions.set(name, callback);
        },

        setStatus: (newStatus: GameStatus) => setStatus(newStatus),
        setBombs: (newBombs: number) => setBombs(newBombs),
        setNoBombsFields: (newNoBombsFields: number) => {
            if (newNoBombsFields === gameState.noBombsFieldsLeft) {
                return;
            }

            gameState.noBombsFieldsLeft = newNoBombsFields;
            noBombsFieldsSubscriptions.forEach((callback) => {
                callback(newNoBombsFields);
            });
        },
        setFlagsPut: (newFlags: number) => setFLags(newFlags),
    };
}
