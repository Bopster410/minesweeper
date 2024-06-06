import { Canvas, Coords } from '@/shared/canvas';
import { Tile, getNewTile } from './tile';
import {
    drawEmptyField,
    gameState,
    generateField,
    getClickedCoords,
    openAdjacentFields,
    openBombs,
    openFullField,
    updateField,
} from '../lib';
import { ElementsPositions, Position } from './index.types';
import { getBorder } from './border';
import { getSmile } from './smile';
import { Smile } from './smile/ui';

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const SMILE_SIZE = 60;
const TOP_SECTION_HEIGHT = 80;

function processClick(
    tiles: Tile[][],
    fieldX: number,
    fieldY: number,
    tileSize: number,
    height: number,
    e: MouseEvent,
) {
    e.preventDefault();

    const { i, j } = getClickedCoords(e, fieldX, fieldY, height, tileSize);

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
    fieldX: number,
    fieldY: number,
    tileSize: number,
    height: number,
    e: MouseEvent,
) {
    e.preventDefault();

    const { i, j } = getClickedCoords(e, fieldX, fieldY, height, tileSize);

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

function isObjectClicked(position: Position, e: MouseEvent) {
    const clickX = e.offsetX;
    const clickY = CANVAS_HEIGHT - e.offsetY;
    return (
        position.x <= clickX &&
        clickX <= position.x + position.width &&
        position.y <= clickY &&
        clickY <= position.y + position.height
    );
}

function getClickedObject(e: MouseEvent, positions: ElementsPositions) {
    if (isObjectClicked(positions.field, e)) {
        return 'FIELD';
    }

    if (isObjectClicked(positions.smile, e)) {
        return 'SMILE';
    }

    return null;
}

function checkVictory(
    bombsLeft: number,
    noBombsFields: number,
    setVictory: () => void,
) {
    if (bombsLeft === 0 && noBombsFields === 0) {
        setVictory();
    }
}

// Get canvas with game
// eslint-disable-next-line max-lines-per-function
export async function getGameFieldCanvas(parent: Element, className: string) {
    // Init canvas
    const canvas = new Canvas(parent, {
        className: className,
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
    });

    const width = 10,
        height = 10;

    const tileSize = 30;
    const totalBombs = 10;

    // Init ui components
    const tile = await getNewTile(canvas);
    const border = await getBorder(canvas, TOP_SECTION_HEIGHT);
    const smile = await getSmile(canvas);

    const gameStateMethods = gameState;
    let positions: ElementsPositions = null;

    let tiles: Tile[][] = [];

    let bobmsPositions: Coords[] = [];

    let smileBtn: Smile = null;

    const setMenu = () => {
        gameStateMethods.setInitial();

        // Initial game state
        const fieldCoords = border.renderBorder(
            tileSize * width,
            tileSize * height,
        );

        // Draw initial empty field
        tiles = drawEmptyField(
            fieldCoords.fieldX,
            fieldCoords.fieldY,
            width,
            height,
            tileSize,
            tile.addNewEmptyTile,
        );

        smileBtn = smile.renderSmile(
            fieldCoords.topSectionX + (width * tileSize - SMILE_SIZE) / 2,
            fieldCoords.topSectionY + (TOP_SECTION_HEIGHT - SMILE_SIZE) / 2,
            SMILE_SIZE,
        );

        positions = {
            field: {
                x: fieldCoords.fieldX,
                y: fieldCoords.fieldY,
                width: tileSize * width,
                height: tileSize * height,
            },

            smile: {
                x: smileBtn.smileCoords.x,
                y: smileBtn.smileCoords.y,
                width: SMILE_SIZE,
                height: SMILE_SIZE,
            },
        };
    };

    gameStateMethods.addOnStatusChange('status', (status) => {
        switch (status) {
            case 'menu':
                smileBtn?.setDefault();
                break;
            case 'game':
                smileBtn?.setDefault();
                break;
            case 'defeat':
                smileBtn?.setDefeat();
                console.log('loh!');
                break;
            case 'victory':
                smileBtn.setVictory();
                console.log('victory!');
        }
    });

    gameStateMethods.addOnBombsChange('victoryCheck', (bombs) => {
        checkVictory(bombs, gameStateMethods.getNoBombsFields(), () =>
            gameStateMethods.setStatus('victory'),
        );
    });

    gameStateMethods.addOnNoBombsFieldsChange('victoryCheck', (noBombsLeft) => {
        checkVictory(gameStateMethods.getBombsLeft(), noBombsLeft, () =>
            gameStateMethods.setStatus('victory'),
        );
    });

    canvas.htmlElement.addEventListener('click', (e) => {
        const clicked = getClickedObject(e, positions);
        if (gameStateMethods.getStatus() === 'menu') {
            if (clicked !== 'FIELD') {
                return;
            }

            const clickCoords = getClickedCoords(
                e,
                positions.field.x,
                positions.field.y,
                CANVAS_HEIGHT,
                tileSize,
            );

            const { field, bombs } = generateField(
                width,
                height,
                totalBombs,
                clickCoords.i,
                clickCoords.j,
            );

            updateField(field, width, height, tiles);
            bobmsPositions = bombs;
            gameStateMethods.setBombs(totalBombs);
            gameStateMethods.setNoBombsFields(width * height - totalBombs);
            gameStateMethods.setStatus('game');
        }

        if (gameStateMethods.getStatus() === 'game') {
            if (clicked === 'FIELD') {
                const result = processClick(
                    tiles,
                    positions.field.x,
                    positions.field.y,
                    tileSize,
                    CANVAS_HEIGHT,
                    e,
                );
                if (result === null) {
                    return;
                }

                if (result?.openedType === 'bomb') {
                    openBombs(tiles, bobmsPositions);
                    gameStateMethods.setStatus('defeat');
                }

                if (result?.openedType !== 'bomb') {
                    gameStateMethods.setNoBombsFields(
                        gameStateMethods.getNoBombsFields() -
                            result.totalOpened,
                    );
                }
            }
        }

        if (clicked === 'SMILE') {
            setMenu();
        }
    });

    canvas.htmlElement.addEventListener('contextmenu', (e) => {
        if (gameStateMethods.getStatus() === 'game') {
            const result = processRightClick(
                tiles,
                positions.field.x,
                positions.field.y,
                tileSize,
                CANVAS_HEIGHT,
                e,
            );
            if (result === null) {
                return;
            }

            // If player put flag on bomb
            if (result.state === 'flag' && result.type === 'bomb') {
                gameStateMethods.setBombs(gameStateMethods.getBombsLeft() - 1);
            }

            // If player removed flag from bomb
            if (result.state === 'closed' && result.type === 'bomb') {
                gameStateMethods.setBombs(gameStateMethods.getBombsLeft() + 1);
            }
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
            setMenu();
            requestAnimationFrame(() => {
                drawField();
            });
        },
        openField: () => {
            openFullField(tiles);
        },
    };
}
