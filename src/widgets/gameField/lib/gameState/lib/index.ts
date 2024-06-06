import { GameState, GameStatus } from './index.types';

export function getNewGameState() {
    const gameState: GameState = {
        status: 'menu',
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

    const setInitial = () => {
        setStatus('menu');
        setBombs(0);
    };

    setInitial();

    return {
        setInitial: setInitial,
        getStatus: () => gameState.status,
        getBombsLeft: () => gameState.bombsLeft,
        getNoBombsFields: () => gameState.noBombsFieldsLeft,

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
    };
}
