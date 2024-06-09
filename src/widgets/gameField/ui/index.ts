import { Canvas, Coords } from '@/shared/canvas';
import { Tile, getNewTile } from './tile';
import {
    drawEmptyField,
    gameState,
    generateField,
    getClickedCoords,
    openAdjacentFields,
    openBombs,
    openFlags,
    openFullField,
    updateField,
} from '../lib';
import { ElementsPositions, Position, Theme } from './index.types';
import { getBorder } from './border';
import { getSmile } from './smile';
import { Smile } from './smile/ui';

const SMILE_SIZE = 60;
const TOP_SECTION_HEIGHT = 80;
const MAX_WIDTH = 10000;
const MAX_HEIGHT = 10000;

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
        if (tile.tileState === 'opened') {
            return null;
        }

        const withFlag = tile.tileState === 'flag';
        if (withFlag) {
            tile.close();
        }

        if (!withFlag) {
            tile.putFlag();
        }

        return {
            type: tile.tileType,
            state: tile.tileState,
            coords: { x: i, y: j },
        };
    }
    return null;
}

function isObjectClicked(
    position: Position,
    e: MouseEvent,
    canvasHeight: number,
) {
    const clickX = e.offsetX;
    const clickY = canvasHeight - e.offsetY;
    return (
        position.x <= clickX &&
        clickX <= position.x + position.width &&
        position.y <= clickY &&
        clickY <= position.y + position.height
    );
}

function getClickedObject(
    e: MouseEvent,
    positions: ElementsPositions,
    canvasHeight: number,
) {
    if (isObjectClicked(positions.field, e, canvasHeight)) {
        return 'FIELD';
    }

    if (isObjectClicked(positions.smile, e, canvasHeight)) {
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

function setTextures(
    changeBorderTexture: (name: string) => void,
    updateBorderTexture: () => void,
    changeSmileTexture: (name: string) => void,
    updateSmileTexture: () => void,
    changeTilesTexture: (name: string) => void,
    updateTilesTexture: () => void,
) {
    const textures = new Map<string, Theme>();
    textures.set('default', {
        border: () => {
            changeBorderTexture('default');
            updateBorderTexture();
        },
        smile: () => {
            changeSmileTexture('default');
            updateSmileTexture();
        },
        tile: () => {
            changeTilesTexture('default');
            updateTilesTexture();
        },
        color: {
            red: 192,
            green: 192,
            blue: 192,
        },
        text: 'Классика',
    });

    textures.set('forest', {
        border: () => {
            changeBorderTexture('forest');
            updateBorderTexture();
        },
        smile: () => {
            changeSmileTexture('forest');
            updateSmileTexture();
        },
        tile: () => {
            changeTilesTexture('forest');
            updateTilesTexture();
        },
        color: {
            red: 157,
            green: 195,
            blue: 169,
        },
        text: 'Лесная',
    });

    textures.set('mine', {
        border: () => {
            changeBorderTexture('mine');
            updateBorderTexture();
        },
        smile: () => {
            changeSmileTexture('mine');
            updateSmileTexture();
        },
        tile: () => {
            changeTilesTexture('mine');
            updateTilesTexture();
        },
        color: {
            red: 157,
            green: 195,
            blue: 169,
        },
        text: 'Шахтерская',
    });

    return textures;
}

function getAvailableThemes(themes: Map<string, Theme>) {
    const themesInfo: { name: string; text: string }[] = [];
    themes.forEach((theme, name) => {
        themesInfo.push({ name: name, text: theme.text });
    });
    return themesInfo;
}

// Get canvas with game
// eslint-disable-next-line max-lines-per-function
export async function getGameFieldCanvas(
    parent: Element,
    className: string,
    initialTheme: 'default' | 'forest' | 'mine',
) {
    let width = 0,
        height = 0;

    const tileSize = 30;
    let totalBombs = 0;

    let currentTexture = initialTheme;

    // Init canvas
    const canvas = new Canvas(parent, {
        className: className,
        width: 0,
        height: 0,
    });

    // Init ui components
    const tile = await getNewTile(canvas);
    const border = await getBorder(canvas, TOP_SECTION_HEIGHT);
    const smile = await getSmile(canvas);

    const textures = setTextures(
        (name: string) => border.changeTexture(name),
        () => border.updateTexture(),
        (name: string) => smile.changeTexture(name),
        () => smile.updateTexture(),
        (name: string) => tile.changeTexture(name),
        () => tile.updateTexture(),
    );

    canvas.color = textures.get(initialTheme).color;

    const gameStateMethods = gameState;
    let positions: ElementsPositions = null;

    let tiles: Tile[][] = [];

    let bobmsPositions: Coords[] = [];
    const flagsPositions = new Set<Coords>();

    let smileBtn: Smile = null;

    const updateSize = (params: {
        width?: number;
        height?: number;
        bombs?: number;
    }) => {
        let wasChanged = false;
        if (params.width > 0 && params?.width <= MAX_WIDTH) {
            width = params.width;
            canvas.width = width * tileSize + border.width();
            wasChanged = true;
        }

        if (params?.height > 0 && params?.height <= MAX_HEIGHT) {
            height = params.height;
            canvas.height =
                height * tileSize + border.height() + TOP_SECTION_HEIGHT;
            wasChanged = true;
        }

        if (params?.bombs > 0 && params?.bombs <= width * height) {
            totalBombs = params.bombs;
            wasChanged = true;
        }

        return wasChanged;
    };

    const setMenu = () => {
        // Initial game state
        const fieldCoords = border.renderBorder(
            tileSize * width,
            tileSize * height,
        );

        tile.clear();

        flagsPositions.clear();

        // Draw initial empty field
        const start = Date.now();
        tiles = drawEmptyField(
            fieldCoords.fieldX,
            fieldCoords.fieldY,
            width,
            height,
            tileSize,
            tile.addNewEmptyTile,
        );
        // console.log('empty: ', Date.now() - start);

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
        gameStateMethods.setInitial();
        drawField();
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

    gameStateMethods.addOnStatusChange('draw', (status) => {
        if (status === 'victory' || status === 'defeat') {
            drawField();
        }
    });

    gameStateMethods.addOnBombsChange('victoryCheck', (bombs) => {
        if (gameState.getStatus() === 'game') {
            checkVictory(bombs, gameStateMethods.getNoBombsFields(), () =>
                gameStateMethods.setStatus('victory'),
            );
        }
    });

    gameStateMethods.addOnNoBombsFieldsChange('victoryCheck', (noBombsLeft) => {
        if (gameState.getStatus() === 'game') {
            checkVictory(gameStateMethods.getBombsLeft(), noBombsLeft, () =>
                gameStateMethods.setStatus('victory'),
            );
        }
    });

    gameStateMethods.addOnNoBombsFieldsChange('draw', () => {
        if (gameState.getStatus() === 'game') {
            drawField();
        }
    });

    gameStateMethods.addOnFlagsChange('draw', () => {
        if (gameState.getStatus() === 'game') {
            drawField();
        }
    });

    canvas.htmlElement.addEventListener('click', (e) => {
        const clicked = getClickedObject(e, positions, canvas.height);

        if (gameStateMethods.getStatus() === 'menu') {
            if (clicked !== 'FIELD') {
                return;
            }

            const clickCoords = getClickedCoords(
                e,
                positions.field.x,
                positions.field.y,
                canvas.height,
                tileSize,
            );

            // const start = Date.now();
            const { field, bombs, totalGenerated } = generateField(
                width,
                height,
                totalBombs,
                clickCoords.i,
                clickCoords.j,
            );
            // console.log('generate field: ', Date.now() - start);

            updateField(field, width, height, tiles);
            bobmsPositions = bombs;
            gameStateMethods.setBombs(totalGenerated);
            gameStateMethods.setNoBombsFields(width * height - totalGenerated);
            gameStateMethods.setStatus('game');
        }

        if (gameStateMethods.getStatus() === 'game') {
            if (clicked === 'FIELD') {
                const result = processClick(
                    tiles,
                    positions.field.x,
                    positions.field.y,
                    tileSize,
                    canvas.height,
                    e,
                );
                if (result === null) {
                    return;
                }

                if (result?.openedType === 'bomb') {
                    openBombs(tiles, bobmsPositions);
                    openFlags(tiles, flagsPositions);
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
                canvas.height,
                e,
            );
            if (result === null) {
                return;
            }

            // If player put flag on bomb
            if (result.state === 'flag') {
                if (result.type === 'bomb') {
                    gameStateMethods.setBombs(
                        gameStateMethods.getBombsLeft() - 1,
                    );
                }
                flagsPositions.add(result.coords);
                gameStateMethods.setFlagsPut(
                    gameStateMethods.getFlagsPut() + 1,
                );
            }

            // If player removed flag from bomb
            if (result.state === 'closed') {
                if (result.type === 'bomb') {
                    gameStateMethods.setBombs(
                        gameStateMethods.getBombsLeft() + 1,
                    );
                }
                flagsPositions.delete(result.coords);
                gameStateMethods.setFlagsPut(
                    gameStateMethods.getFlagsPut() - 1,
                );
            }
        }
    });

    const drawField = () => {
        canvas.draw();
    };

    return {
        canvas: canvas,
        drawField: () => {
            drawField();
        },
        update: (params: {
            width?: number;
            height?: number;
            bombs?: number;
        }) => {
            if (updateSize(params)) {
                setMenu();
            }
        },
        stopGame: () => {
            setMenu();
        },
        openField: () => {
            openFullField(tiles);
        },
        changeTexture: (name: 'default' | 'forest' | 'mine') => {
            if (textures.get(name) && name !== currentTexture) {
                currentTexture = name;
                textures.get(name).border();
                textures.get(name).tile();
                textures.get(name).smile();
                canvas.color = textures.get(name).color;
            }
        },
        availableThemes: () => {
            return getAvailableThemes(textures);
        },
    };
}
