import { TileMainInfo, TileState, TileType, getOpenedInfo } from '../../ui';
import { STORE_NAME } from './index.constants';
import { TileData } from './index.types';

export type { TileData };

export function getId(i: number, j: number) {
    return `${i}:${j}`;
}

function initDb(db: IDBDatabase) {
    const store = db.createObjectStore(STORE_NAME, { keyPath: 'coordsId' });
    store.createIndex('coordsIdIndx', 'coordsId', { unique: true });
}

// i, j - field coords; x, y - canvas coords
function putTile(
    addTileTransaction: IDBTransaction,
    tileInfo: TileMainInfo,
    i: number,
    j: number,
    onSuccess?: () => void,
) {
    const request = addTileTransaction
        .objectStore(STORE_NAME)
        .put({ coordsId: getId(i, j), coords: { x: i, y: j }, info: tileInfo });

    if (onSuccess) {
        request.onsuccess = onSuccess;
    }
    request.onerror = (e) => {};

    return request;
}

function getTile(getTileTransaction: IDBTransaction, id: string) {
    return getTileTransaction.objectStore(STORE_NAME).get(id);
}

function getTiles(
    getTileTransaction: IDBTransaction,
    idlower: string,
    idUpper: string,
) {
    return getTileTransaction
        .objectStore(STORE_NAME)
        .getAll(IDBKeyRange.bound(idlower, idUpper));
}

function changeTileState(
    changeTileTransaction: IDBTransaction,
    tile: TileData,
    newState: TileState,
    onSuccess?: (tile: TileData) => void,
) {
    tile.info.state = newState;
    putTile(changeTileTransaction, tile.info, tile.coords.x, tile.coords.y);

    if (onSuccess) {
        onSuccess(tile);
    }
}

function openTile(
    changeTileTransaction: IDBTransaction,
    i: number,
    j: number,
    emptyOnly: boolean,
    onSuccess?: (tile: TileData) => void,
) {
    const request = getTile(changeTileTransaction, getId(i, j));
    request.addEventListener('success', () => {
        const tile = request.result as TileData;
        if (
            (emptyOnly &&
                tile.info.type !== 'bomb' &&
                tile.info.state === 'closed') ||
            !emptyOnly
        ) {
            const newState = getOpenedInfo(tile.info.state, tile.info.type);

            if (newState !== null) {
                changeTileState(
                    changeTileTransaction,
                    tile,
                    newState,
                    onSuccess,
                );
            }
        }
    });

    request.onerror = () => {};

    return request;
}

function putFlag(
    changeTileTransaction: IDBTransaction,
    i: number,
    j: number,
    onSuccess?: (tile: TileData) => void,
) {
    const request = getTile(changeTileTransaction, getId(i, j));
    request.addEventListener('success', () => {
        const tile = request.result as TileData;
        changeTileState(changeTileTransaction, tile, 'flag', onSuccess);
    });

    request.onerror = () => {};

    return request;
}

function removeFlag(
    changeTileTransaction: IDBTransaction,
    i: number,
    j: number,
    onSuccess?: (tile: TileData) => void,
) {
    const request = getTile(changeTileTransaction, getId(i, j));
    request.addEventListener('success', () => {
        const tile = request.result as TileData;
        changeTileState(changeTileTransaction, tile, 'closed', onSuccess);
    });

    request.onerror = () => {};

    return request;
}

function changeTileType(
    changeTileTransaction: IDBTransaction,
    i: number,
    j: number,
    newType: TileType,
    bombsAround?: number,
) {
    const request = getTile(changeTileTransaction, getId(i, j));
    request.onsuccess = () => {
        const tile = request.result as TileData;

        if (tile.info.type !== newType) {
            tile.info.type = newType;
            if (bombsAround) tile.info.bombsAround = bombsAround;
            putTile(changeTileTransaction, tile.info, i, j);
        }
        request.onerror = () => {};
    };

    return request;
}

// eslint-disable-next-line max-lines-per-function
export function getConnection(name: string, version?: number) {
    let db: IDBDatabase = null;

    let changeTileTransaction: IDBTransaction = null;

    const createChangeTileTransaction = () => {
        changeTileTransaction = db.transaction(STORE_NAME, 'readwrite');
        changeTileTransaction.addEventListener('complete', () => {
            changeTileTransaction = null;
        });
    };

    let getTileTransaction: IDBTransaction = null;

    const createGetTileTransaction = () => {
        getTileTransaction = db.transaction(STORE_NAME, 'readonly');
        getTileTransaction.addEventListener('complete', () => {
            getTileTransaction = null;
        });

        getTileTransaction.onabort = () => {
            getTileTransaction = null;
        };
    };

    return {
        createConnection: () => {
            return new Promise((resolve, reject) => {
                if (db !== null) {
                    resolve(1);
                    return;
                }

                const openRequest = indexedDB.open(name, version);

                openRequest.addEventListener('upgradeneeded', (e) => {
                    db = openRequest.result;
                    switch (e.oldVersion) {
                        case 0:
                            initDb(db);
                            break;
                        default:
                            break;
                    }
                });

                openRequest.addEventListener('error', () => {
                    console.error('error while opening db ', name);
                    reject();
                    return null;
                });

                openRequest.addEventListener('success', () => {
                    db = openRequest.result;
                    resolve(1);

                    db.addEventListener('versionchange', () => {
                        console.error('database is old, reload page');
                        db.close();
                    });
                });
            });
        },

        putTile: (
            tileInfo: TileMainInfo,
            i: number,
            j: number,
            params?: {
                onSuccess?: () => void;
                transaction?: IDBTransaction;
            },
        ) => {
            if (db === null) {
                return null;
            }

            if (params?.transaction) {
                return putTile(
                    params.transaction,
                    tileInfo,
                    i,
                    j,
                    params?.onSuccess,
                );
            }

            if (changeTileTransaction === null) createChangeTileTransaction();
            return putTile(
                changeTileTransaction,
                tileInfo,
                i,
                j,
                params?.onSuccess,
            );
        },

        getTiles(
            i: number,
            j: number,
            width: number,
            height: number,
            params?: {
                transaction?: IDBTransaction;
            },
        ) {
            if (db === null) {
                return null;
            }
            const lower = getId(i, j);
            const upper = getId(i + width, j + height);
            if (params?.transaction) {
                return getTiles(params.transaction, lower, upper);
            }

            if (changeTileTransaction !== null) {
                return getTiles(changeTileTransaction, lower, upper);
            }

            if (getTileTransaction === null) {
                createGetTileTransaction();
            }
            return getTiles(getTileTransaction, lower, upper);
        },

        getTile: (
            i: number,
            j: number,
            params?: {
                transaction?: IDBTransaction;
            },
        ) => {
            if (db === null) {
                return null;
            }
            if (params?.transaction) {
                return getTile(params.transaction, getId(i, j));
            }

            if (changeTileTransaction !== null) {
                return getTile(changeTileTransaction, getId(i, j));
            }

            if (getTileTransaction === null) {
                createGetTileTransaction();
            }
            return getTile(getTileTransaction, getId(i, j));
        },

        putFlag: (
            i: number,
            j: number,
            params?: {
                transaction?: IDBTransaction;
                onSuccess?: (tile: TileData) => void;
            },
        ) => {
            if (db === null) {
                return null;
            }
            if (params?.transaction) {
                return putFlag(params.transaction, i, j, params?.onSuccess);
            }

            if (changeTileTransaction === null) createChangeTileTransaction();
            return putFlag(changeTileTransaction, i, j, params?.onSuccess);
        },

        removeFlag: (
            i: number,
            j: number,
            params?: {
                transaction?: IDBTransaction;
                onSuccess?: (tile: TileData) => void;
            },
        ) => {
            if (db === null) {
                return null;
            }
            if (params?.transaction) {
                return removeFlag(params.transaction, i, j, params?.onSuccess);
            }

            if (changeTileTransaction === null) createChangeTileTransaction();
            return removeFlag(changeTileTransaction, i, j, params?.onSuccess);
        },

        openTile: (
            i: number,
            j: number,
            params?: {
                transaction?: IDBTransaction;
                onSuccess?: (tile: TileData) => void;
            },
        ) => {
            if (db === null) {
                return null;
            }
            if (params?.transaction) {
                return openTile(
                    params.transaction,
                    i,
                    j,
                    false,
                    params?.onSuccess,
                );
            }

            if (changeTileTransaction === null) createChangeTileTransaction();
            return openTile(
                changeTileTransaction,
                i,
                j,
                false,
                params?.onSuccess,
            );
        },

        openEmptyTile: (
            i: number,
            j: number,
            params?: {
                onSuccess?: (tile: TileData) => void;
                transaction?: IDBTransaction;
            },
        ) => {
            if (db === null) {
                return null;
            }
            if (params?.transaction) {
                return openTile(
                    params.transaction,
                    i,
                    j,
                    true,
                    params?.onSuccess,
                );
            }

            if (changeTileTransaction === null) createChangeTileTransaction();
            return openTile(
                changeTileTransaction,
                i,
                j,
                true,
                params?.onSuccess,
            );
        },

        changeTileType: (
            i: number,
            j: number,
            newType: TileType,
            bombsAround?: number,
            params?: {
                transaction?: IDBTransaction;
                onSuccess: (tile: TileData) => void;
            },
        ) => {
            if (db === null) {
                return null;
            }
            if (params?.transaction) {
                return changeTileType(
                    params.transaction,
                    i,
                    j,
                    newType,
                    bombsAround,
                );
            }

            if (changeTileTransaction === null) createChangeTileTransaction();
            return changeTileType(
                changeTileTransaction,
                i,
                j,
                newType,
                bombsAround,
            );
        },

        newReadOnlyTransaction: () => {
            if (db === null) {
                return null;
            }
            const transaction = db.transaction(STORE_NAME, 'readonly');

            transaction.addEventListener('complete', () => {});
            return transaction;
        },

        newReadWriteTransaction: () => {
            if (db === null) {
                return null;
            }
            const transaction = db.transaction(STORE_NAME, 'readwrite');
            transaction.addEventListener('complete', () => {});
            return transaction;
        },
    };
}
