import { genRandomInt } from '@/shared/lib/random';
import { Tile, TileType } from '../ui/tile';
import { Coords } from '@/shared/canvas';

export { gameState } from './gameState';

export type FieldTileInfo = {
    type: TileType;
    bombsAround?: number;
};

// Generates field
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

    // TODO if total bombs >= max size => fill with bombs

    // TODO if total bombs > empty space => iterate trough empty tiles

    for (let i = 0; i < bombsTotal; i++) {
        while (
            totalGenerated !== i + 1 &&
            totalGenerated !== widthTiles * heightTiles
        ) {
            x = genRandomInt(widthTiles);
            y = genRandomInt(heightTiles);

            if (
                initialX !== undefined &&
                initialY !== undefined &&
                x === initialX &&
                y === initialY
            ) {
                continue;
            }
            // new
            if (!field.has(x)) {
                field.set(x, new Map());
            }

            // new y
            if (!field.get(x).has(y)) {
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

    return { field: field, bombs: bombs };
}

export function getClickedCoords(
    e: MouseEvent,
    fieldX: number,
    fieldY: number,
    height: number,
    tileSize: number,
) {
    return {
        i: Math.floor((e.offsetX - fieldX) / tileSize),
        j: Math.floor((height - e.offsetY - fieldY) / tileSize),
    };
}

// Opens all field tiles
export function openFullField(tiles: Tile[][]) {
    tiles.forEach((column) => {
        column.forEach((tile) => {
            tile.open();
        });
    });
}

// Opens current field and all empty fields near it
export function openAdjacentFields(
    tiles: Tile[][],
    column: number,
    row: number,
) {
    let currentTileInfo = {
        tile: tiles[column][row],
        column: column,
        row: row,
    };

    if (currentTileInfo.tile.tileState !== 'closed') {
        return null;
    }

    const openedType = currentTileInfo.tile.tileType;

    // TODO stack to queue
    const nextTilesStack: { tile: Tile; column: number; row: number }[] = [];
    const widthTiles = tiles.length;
    const heightTiles = tiles[0].length;
    const visitedTiles = new Set<string>();
    let totalOpened = 0;

    do {
        if (!visitedTiles.has(currentTileInfo.tile.id)) {
            visitedTiles.add(currentTileInfo.tile.id);
            currentTileInfo.tile.open();
            totalOpened++;
            if (currentTileInfo.tile.tileType === 'empty') {
                for (
                    let j =
                        currentTileInfo.column - 1 >= 0
                            ? currentTileInfo.column - 1
                            : 0;
                    j <=
                    (currentTileInfo.column + 1 < widthTiles
                        ? currentTileInfo.column + 1
                        : widthTiles - 1);
                    j++
                ) {
                    for (
                        let k =
                            currentTileInfo.row - 1 >= 0
                                ? currentTileInfo.row - 1
                                : 0;
                        k <=
                        (currentTileInfo.row + 1 < heightTiles
                            ? currentTileInfo.row + 1
                            : heightTiles - 1);
                        k++
                    ) {
                        const tile = tiles[j][k];
                        if (
                            !visitedTiles.has(tile.id) &&
                            tile.tileState === 'closed'
                        ) {
                            nextTilesStack.push({
                                tile: tile,
                                column: j,
                                row: k,
                            });
                        }
                    }
                }
            }
        }
        currentTileInfo = nextTilesStack.pop();
    } while (currentTileInfo !== undefined);

    return { openedType: openedType, totalOpened: totalOpened };
}

export function openBombs(tiles: Tile[][], bombs: Coords[]) {
    bombs.forEach((bomb) => {
        tiles[bomb.x][bomb.y].open();
    });
}

export function drawEmptyField(
    x: number,
    y: number,
    width: number,
    height: number,
    tileSize: number,
    addEmptyTile: (x: number, y: number, size: number) => Tile,
) {
    const tiles: Tile[][] = [];
    for (let i = 0; i < width; i++) {
        tiles.push([]);
        for (let j = 0; j < height; j++) {
            tiles[i].push(
                addEmptyTile(x + i * tileSize, y + j * tileSize, tileSize),
            );
        }
    }
    return tiles;
}

export function updateField(
    field: Map<number, Map<number, FieldTileInfo>>,
    width: number,
    height: number,
    tiles: Tile[][],
) {
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let nextTile: FieldTileInfo = { type: 'empty' };
            if (field.get(i)?.has(j)) {
                nextTile = field.get(i).get(j);
            }

            switch (nextTile.type) {
                case 'bomb':
                    tiles[i][j].setTypeBomb();
                    break;
                case 'digit':
                    tiles[i][j].setTypeDigit(nextTile.bombsAround);
                    break;
            }
        }
    }
}
