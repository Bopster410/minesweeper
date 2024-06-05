import { Canvas } from '@/shared/canvas';
import { Tile, getNewTile } from './tile';
import {
    drawEmptyField,
    generateField,
    getClickedCoords,
    openAdjacentFields,
    openBombs,
    openFullField,
    updateField,
} from '../lib';
import { GameState } from './index.types';

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

function processClick(
    tiles: Tile[][],
    tileSize: number,
    height: number,
    e: MouseEvent,
) {
    e.preventDefault();

    const { i, j } = getClickedCoords(e, height, tileSize);

    if (tiles[i] === undefined) {
        return null;
    }

    const tile = tiles[i][j];
    if (tile !== undefined) {
        const result = openAdjacentFields(tiles, i, j);
        if (result?.openedType === 'bomb') {
            tile.setTypeExploded();
        }
        return result;
    }

    return null;
}

function processRightClick(
    tiles: Tile[][],
    tileSize: number,
    height: number,
    e: MouseEvent,
) {
    e.preventDefault();

    const { i, j } = getClickedCoords(e, height, tileSize);

    if (tiles[i] === undefined) {
        return null;
    }

    const tile = tiles[i][j];
    if (tile !== undefined) {
        const withFlag = tile.tileState === 'flag';
        if (withFlag) {
            tile.close();
        }

        if (!withFlag) {
            tile.putFlag();
        }

        return { type: tile.tileType, state: tile.tileState };
    }
    return null;
}

// Get canvas with game
// eslint-disable-next-line max-lines-per-function
export async function getGameFieldCanvas(parent: Element, className: string) {
    const canvas = new Canvas(parent, {
        className: className,
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
    });

    const gameState: GameState = {
        status: 'menu',
    };

    const tile = await getNewTile(canvas);

    const width = 10,
        height = 10;

    const tileSize = 30;
    const totalBombs = 10;

    const tiles: Tile[][] = drawEmptyField(
        width,
        height,
        tileSize,
        tile.addNewEmptyTile,
    );

    canvas.htmlElement.addEventListener('click', (e) => {
        if (gameState.status === 'menu') {
            const clickCoords = getClickedCoords(e, CANVAS_HEIGHT, tileSize);
            const { field, bombs } = generateField(
                width,
                height,
                10,
                clickCoords.i,
                clickCoords.j,
            );
            updateField(field, width, height, tiles);
            gameState.bombs = bombs;
            gameState.bombsLeft = totalBombs;
            gameState.noBombsFieldsLeft = width * height - totalBombs;
            gameState.status = 'game';
        }

        if (gameState.status === 'game') {
            const result = processClick(tiles, tileSize, CANVAS_HEIGHT, e);
            if (result === null) {
                return;
            }

            if (result?.openedType === 'bomb') {
                openBombs(tiles, gameState.bombs);
                gameState.status = 'defeat';
            }

            if (result?.openedType !== 'bomb') {
                gameState.noBombsFieldsLeft -= result.totalOpened;
                if (
                    gameState.bombsLeft === 0 &&
                    gameState.noBombsFieldsLeft === 0
                ) {
                    gameState.status = 'victory';
                    console.log('victory!');
                }
            }

            console.log(gameState);
        }
    });

    canvas.htmlElement.addEventListener('contextmenu', (e) => {
        if (gameState.status === 'game') {
            const result = processRightClick(tiles, tileSize, CANVAS_HEIGHT, e);
            if (result === null) {
                return;
            }

            // If player put flag on bomb
            if (result.state === 'flag' && result.type === 'bomb') {
                gameState.bombsLeft--;
                if (
                    gameState.bombsLeft === 0 &&
                    gameState.noBombsFieldsLeft === 0
                ) {
                    gameState.status = 'victory';
                    console.log('victory!');
                }
            }

            // If player removed flag from bomb
            if (result.state === 'closed' && result.type === 'bomb') {
                gameState.bombsLeft++;
            }
            console.log(gameState);
        }
    });

    const drawField = () => {
        canvas.draw();

        requestAnimationFrame(() => {
            drawField();
        });
    };

    return {
        canvas: canvas,
        drawField: () => {
            requestAnimationFrame(() => {
                drawField();
            });
        },
        openField: () => {
            openFullField(tiles);
        },
    };
}
