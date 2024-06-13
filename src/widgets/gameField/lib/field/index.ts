import { Coords } from '@/shared/canvas';
import { genRandomInt } from '@/shared/lib/random';
import { Queue } from '@/shared/lib/queue';
import { Tile, TileMainInfo, Position } from '../../ui';
import { connection, gameState, getId, TileData } from '../../model';
import { FieldTileInfo } from './index.types';

function chooseNearestEmpty(
    field: Map<number, Map<number, FieldTileInfo>>,
    widthTiles: number,
    heightTiles: number,
    x: number,
    y: number,
    initialX: number,
    initialY: number,
) {
    let searchSize = 1;

    while (
        searchSize * 2 < widthTiles + 1 ||
        searchSize * 2 < heightTiles + 1
    ) {
        for (
            let j = x - searchSize >= 0 ? x - searchSize : 0;
            j <=
            (x + searchSize < widthTiles ? x + searchSize : widthTiles - 1);
            j++
        ) {
            for (
                let k = y - searchSize >= 0 ? y - searchSize : 0;
                k <=
                (y + searchSize < heightTiles
                    ? y + searchSize
                    : heightTiles - 1);
                k++
            ) {
                if ((j === x && k === y) || (j === initialX && k === initialY))
                    continue;

                if (!field.has(j)) {
                    return { x: j, y: k };
                }

                if (!field.get(j).has(k)) {
                    return { x: j, y: k };
                }

                if (field.get(j).get(k).type !== 'bomb') {
                    return { x: j, y: k };
                }
            }
        }

        searchSize++;
    }

    return null;
}

export function getTile(
    tiles: Tile[][],
    renderingArea: Position,
    i: number,
    j: number,
) {
    if (!coordsInPosition(i, j, renderingArea)) {
        return null;
    }
    return tiles[i - renderingArea.x][j - renderingArea.y];
}

// Generates field
// eslint-disable-next-line max-lines-per-function
export function generateField(
    widthTiles: number,
    heightTiles: number,
    bombsTotal: number,
    initialX?: number,
    initialY?: number,
) {
    const field = new Map<number, Map<number, FieldTileInfo>>();
    const bombs: Coords[] = [];
    let x = 0;
    let y = 0;
    let totalGenerated = 0;

    bombsTotal =
        bombsTotal <= widthTiles * heightTiles - 1
            ? bombsTotal
            : widthTiles * heightTiles - 1;

    // TODO if total bombs > empty space => iterate trough empty tiles

    for (let i = 0; i < bombsTotal; i++) {
        while (
            totalGenerated !== i + 1 &&
            totalGenerated !== widthTiles * heightTiles - 1
        ) {
            x = genRandomInt(0, widthTiles - 1);
            y = genRandomInt(0, heightTiles - 1);

            if (
                (initialX !== undefined &&
                    initialY !== undefined &&
                    x === initialX &&
                    y === initialY) ||
                (field.has(x) &&
                    field.get(x).has(y) &&
                    field.get(x).get(y).type === 'bomb')
            ) {
                const coords = chooseNearestEmpty(
                    field,
                    widthTiles,
                    heightTiles,
                    x,
                    y,
                    initialX,
                    initialY,
                );
                if (coords === null) {
                    // totalGenerated++;
                    continue;
                }

                x = coords.x;
                y = coords.y;
            }
            // new
            if (!field.has(x)) {
                field.set(x, new Map());
            }

            // new y
            if (!field.get(x).has(y) || field.get(x).get(y).type !== 'bomb') {
                field.get(x).set(y, { type: 'bomb' });
                bombs.push({ x: x, y: y });
                // increase bombs around
                for (
                    let j = x - 1 >= 0 ? x - 1 : 0;
                    j <= (x + 1 <= widthTiles ? x + 1 : widthTiles - 1);
                    j++
                ) {
                    for (
                        let k = y - 1 >= 0 ? y - 1 : 0;
                        k <= (j + 1 <= heightTiles ? y + 1 : heightTiles - 1);
                        k++
                    ) {
                        if (j === x && k === y) continue;

                        if (!field.has(j)) field.set(j, new Map());

                        if (!field.get(j).has(k)) {
                            field
                                .get(j)
                                .set(k, { type: 'digit', bombsAround: 0 });
                        }

                        if (field.get(j).get(k).type === 'empty') {
                            field
                                .get(j)
                                .set(k, { type: 'digit', bombsAround: 0 });
                        }

                        if (field.get(j).get(k).type === 'digit') {
                            field.get(j).get(k).bombsAround++;
                        }
                    }
                }

                totalGenerated++;
            }
        }
    }

    return { field: field, bombs: bombs, totalGenerated: totalGenerated };
}

// Opens all field tiles
export function openFullField(tiles: Tile[][]) {
    tiles.forEach((column) => {
        column.forEach((tile) => {
            tile.open();
        });
    });
}

export function coordsToString(coords: Coords) {
    return `${coords.x}:${coords.y}`;
}

// Opens current field and all empty fields near it
// eslint-disable-next-line max-lines-per-function
export function openAdjacentFields(
    tiles: Tile[][],
    column: number,
    row: number,
    widthTiles: number,
    heightTiles: number,
    renderingArea: Position,
) {
    let coords: Coords = {
        x: column,
        y: row,
    };

    const tile = getTile(tiles, renderingArea, coords.x, coords.y);

    const nextTilesStack = new Queue<Coords>();
    const nextNotRenderedTiles = new Queue<Coords>();
    const visitedTiles = new Set<string>();
    const visitedNotRenderedTiles = new Set<string>();
    let totalOpened = 0;
    const openedType = tile?.tileType;
    let transaction = connection.newReadWriteTransaction();

    transaction.oncomplete = () => {
        transaction = null;
    };

    if (tile === null) {
        nextNotRenderedTiles.enqueue(coords);
        visitedNotRenderedTiles.add(coordsToString(coords));
        totalOpened++;
    }

    if (tile !== null) {
        if (tile.tileState !== 'closed') {
            return null;
        }
        visitedTiles.add(coordsToString(coords));

        do {
            getTile(tiles, renderingArea, coords.x, coords.y).open();
            connection.openTile(coords.x, coords.y, {
                transaction: transaction,
            });
            totalOpened++;
            if (
                getTile(tiles, renderingArea, coords.x, coords.y).tileType ===
                'empty'
            ) {
                for (
                    let j = coords.x - 1 >= 0 ? coords.x - 1 : 0;
                    j <=
                    (coords.x + 1 < widthTiles ? coords.x + 1 : widthTiles - 1);
                    j++
                ) {
                    for (
                        let k = coords.y - 1 >= 0 ? coords.y - 1 : 0;
                        k <=
                        (coords.y + 1 < heightTiles
                            ? coords.y + 1
                            : heightTiles - 1);
                        k++
                    ) {
                        if (!coordsInPosition(j, k, renderingArea)) {
                            if (
                                !visitedNotRenderedTiles.has(
                                    coordsToString({ x: j, y: k }),
                                )
                            ) {
                                nextNotRenderedTiles.enqueue({
                                    x: j,
                                    y: k,
                                });
                                visitedNotRenderedTiles.add(
                                    coordsToString({ x: j, y: k }),
                                );
                            }
                            continue;
                        }

                        if (!visitedTiles.has(coordsToString({ x: j, y: k }))) {
                            if (
                                getTile(tiles, renderingArea, j, k)
                                    .tileState === 'closed'
                            ) {
                                nextTilesStack.enqueue({
                                    x: j,
                                    y: k,
                                });
                            }

                            visitedTiles.add(
                                coordsToString({
                                    x: j,
                                    y: k,
                                }),
                            );
                        }
                    }
                }
            }

            coords = nextTilesStack.dequeue();
        } while (coords !== null);
    }

    return {
        openedType: openedType,
        totalOpened: totalOpened,
        openTilesDb: openTilesDb(
            visitedTiles,
            nextNotRenderedTiles,
            widthTiles,
            heightTiles,
            transaction,
        ),
    };
}

function openTilesDb(
    visitedTiles: Set<string>,
    tiles: Queue<Coords>,
    widthTiles: number,
    heightTiles: number,
    transaction: IDBTransaction,
) {
    const openDbTile = (
        coords: Coords,
        widthTiles: number,
        heightTiles: number,
        resolve: (value: unknown) => void,
    ) => {
        visitedTiles.add(getId(coords.x, coords.y));
        connection.openEmptyTile(coords.x, coords.y, {
            transaction: transaction,
            onSuccess: (tile) => {
                if (tile.info.type === 'empty') {
                    for (
                        let j = tile.coords.x - 1 >= 0 ? tile.coords.x - 1 : 0;
                        j <=
                        (tile.coords.x + 1 < widthTiles
                            ? tile.coords.x + 1
                            : widthTiles - 1);
                        j++
                    ) {
                        for (
                            let k =
                                tile.coords.y - 1 >= 0 ? tile.coords.y - 1 : 0;
                            k <=
                            (tile.coords.y + 1 < heightTiles
                                ? tile.coords.y + 1
                                : heightTiles - 1);
                            k++
                        ) {
                            if (
                                !visitedTiles.has(
                                    coordsToString({ x: j, y: k }),
                                )
                            ) {
                                visitedTiles.add(getId(j, k));
                                const request = connection.getTile(j, k, {
                                    transaction: transaction,
                                });
                                request.onsuccess = () => {
                                    const result = request.result as TileData;
                                    if (result.info.state === 'closed') {
                                        gameState.setNoBombsFields(
                                            gameState.getNoBombsFields() - 1,
                                        );
                                        openDbTile(
                                            {
                                                x: result.coords.x,
                                                y: result.coords.y,
                                            },
                                            widthTiles,
                                            heightTiles,
                                            resolve,
                                        );
                                    }
                                };
                            }
                        }
                    }
                }
            },
        });
    };

    return new Promise((resolve) => {
        transaction.addEventListener('complete', () => resolve(1));

        let coords = tiles.dequeue();
        while (coords !== null) {
            gameState.setNoBombsFields(gameState.getNoBombsFields() - 1);
            openDbTile(coords, widthTiles, heightTiles, resolve);
            coords = tiles.dequeue();
        }
    });
}

export function openBombs(
    tiles: Tile[][],
    bombs: Coords[],
    renderingArea: Position,
) {
    bombs.forEach((bomb) => {
        getTile(tiles, renderingArea, bomb.x, bomb.y)?.open();
        connection.openTile(bomb.x, bomb.y);
    });
}

export function openFlags(
    tiles: Tile[][],
    flags: Set<Coords>,
    renderingArea: Position,
) {
    flags.forEach(({ x, y }) => {
        getTile(tiles, renderingArea, x, y)?.open();
        connection.openTile(x, y);
    });
}

function coordsInPosition(i: number, j: number, pos: Position) {
    return (
        i >= pos.x &&
        i < pos.x + pos.width &&
        j >= pos.y &&
        j < pos.y + pos.height
    );
}

export async function drawEmptyField(
    x: number,
    y: number,
    width: number,
    height: number,
    tileSize: number,
    addEmptyTile: (x: number, y: number) => Tile,
    renderingArea: Position,
) {
    const tiles: Tile[][] = [];
    for (let i = 0; i < renderingArea.width; i++) {
        for (let j = 0; j < renderingArea.height; j++) {
            if (coordsInPosition(i, j, renderingArea)) {
                if (tiles[i] === undefined) tiles.push([]);

                tiles[i].push(
                    addEmptyTile(
                        x + (i + renderingArea.x) * tileSize,
                        y + (j + renderingArea.y) * tileSize,
                    ),
                );
            }
        }
    }

    await emptyFieldToDb(x, y, width, height, tileSize);

    return tiles;
}

function emptyFieldToDb(
    x: number,
    y: number,
    width: number,
    height: number,
    tileSize: number,
) {
    return new Promise((resolve: (v: number) => void) => {
        let requestsTotal = 0;
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                requestsTotal++;
                connection.putTile(
                    {
                        type: 'empty',
                        state: 'closed',
                        coords: {
                            x: x + i * tileSize,
                            y: y + j * tileSize,
                        },
                    },
                    i,
                    j,
                ).onsuccess = () => {
                    requestsTotal--;
                    if (requestsTotal === 0) resolve(1);
                };
            }
        }
    });
}

export function updateField(
    field: Map<number, Map<number, FieldTileInfo>>,
    width: number,
    height: number,
    tiles: Tile[][],
    renderingArea: Position,
) {
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let nextTile: FieldTileInfo = { type: 'empty' };
            if (field.get(i)?.has(j)) {
                nextTile = field.get(i).get(j);
            }
            let needsUpdate = false;

            switch (nextTile.type) {
                case 'bomb':
                    if (coordsInPosition(i, j, renderingArea)) {
                        tiles[i - renderingArea.x][
                            j - renderingArea.y
                        ].setTypeBomb();
                    }
                    needsUpdate = true;

                    break;

                case 'digit':
                    if (coordsInPosition(i, j, renderingArea)) {
                        tiles[i - renderingArea.x][
                            j - renderingArea.y
                        ].setTypeDigit(nextTile.bombsAround);
                    }
                    needsUpdate = true;

                    break;
            }

            if (needsUpdate) {
                connection.changeTileType(
                    i,
                    j,
                    nextTile.type,
                    nextTile.bombsAround,
                );
            }
        }
    }
}

export function getFieldSegment(
    tiles: Tile[][],
    renderingArea: Position,
    createTile: (tile: TileMainInfo) => Tile,
) {
    return new Promise((resolve) => {
        let requestsCounter = 0;
        for (let i = 0; i < tiles.length; i++) {
            for (let j = 0; j < tiles[i].length; j++) {
                requestsCounter++;
                const request = connection.getTile(
                    i + renderingArea.x,
                    j + renderingArea.y,
                );
                request.onsuccess = () => {
                    tiles[i][j] = createTile((request.result as TileData).info);
                    requestsCounter--;
                    if (requestsCounter === 0) {
                        resolve(1);
                    }
                };
            }
        }
    });
}

export function putFlag(tile: Tile, x: number, y: number) {
    connection.putFlag(x, y, {
        onSuccess: () => {
            tile?.putFlag();
        },
    });
}

export function removeFlag(tile: Tile, x: number, y: number) {
    connection.removeFlag(x, y, {
        onSuccess: () => {
            tile.close();
        },
    });
}
