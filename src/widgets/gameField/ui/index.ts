import { Canvas, Coords } from '@/shared/canvas';
import { getCursor } from '@/shared/lib/cursor';
import {
    checkVictory,
    drawEmptyField,
    generateField,
    getClickedCoords,
    getClickedObject,
    openBombs,
    openFlags,
    openFullField,
    processClick,
    rightClick,
    updateField,
    getFieldSegment,
    moveVisibleArea,
    pressTile,
    openAdjacentFields,
} from '../lib';
import { connection, gameState } from '../model';
import { ElementsPositions, GameSave, Position, Theme } from './index.types';
import { getBorder } from './border';
import { getSmile, Smile } from './smile';
import { Tile, getNewTile } from './tile';
import {
    TOP_SECTION_HEIGHT,
    MAX_WIDTH,
    MAX_VISIBLE_WIDTH,
    MAX_HEIGHT,
    MAX_VISIBLE_HEIGHT,
    SMILE_SIZE,
    MAX_RENDERING_WIDTH,
    MAX_RENDERING_HEIGHT,
} from './index.constants';
import { putFlag } from '../lib/field';
import { FieldTileInfo } from '../lib/field/index.types';

export type { Position, ElementsPositions, GameSave };
export type { Tile, TileMainInfo, TileType, TileState } from './tile';
export { getOpenedInfo } from './tile';

// eslint-disable-next-line max-lines-per-function
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
        text: 'Копатель онлайн',
    });

    textures.set('forest2', {
        border: () => {
            changeBorderTexture('forest2');
            updateBorderTexture();
        },
        smile: () => {
            changeSmileTexture('forest2');
            updateSmileTexture();
        },
        tile: () => {
            changeTilesTexture('forest2');
            updateTilesTexture();
        },
        color: {
            red: 167,
            green: 211,
            blue: 158,
        },
        text: 'Лесная 2',
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
    initialTheme: 'default' | 'forest' | 'mine' | 'forest2',
) {
    let width = 0,
        height = 0;
    let visibleWidth = 0,
        visibleHeight = 0;

    const tileSize = 30;
    let totalBombs = 0;

    let currentTexture = '';

    let scrollAvailable = false;

    let visibleArea: Position = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    };

    let renderingArea: Position = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    };

    const canvas = new Canvas(parent, {
        className: className,
        width: 0,
        height: 0,
    });

    let moves: Coords[];
    let fieldInfo: Map<number, Map<number, FieldTileInfo>> = null;

    const cursor = getCursor(canvas.htmlElement);

    // Init ui components
    const tile = await getNewTile(canvas, tileSize);
    const border = await getBorder(canvas, TOP_SECTION_HEIGHT);
    const smile = await getSmile(canvas);
    await connection.createConnection();

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

    let pressedTile: Tile = null;
    let isPressedAndHold = false;
    let isScrolling = false;
    let isLoading = false;

    let bobmsPositions: Coords[] = [];
    let flagsPositions = new Set<Coords>();

    let smileBtn: Smile = null;

    const updateSize = (params: {
        width?: number;
        height?: number;
        bombs?: number;
    }) => {
        let wasChanged = false;
        if (params.width > 0 && params?.width <= MAX_WIDTH) {
            width = params.width;
            visibleWidth = Math.min(width, MAX_VISIBLE_WIDTH);
            canvas.width = visibleWidth * tileSize + border.width();
            wasChanged = true;
        }

        if (params?.height > 0 && params?.height <= MAX_HEIGHT) {
            height = params.height;
            visibleHeight = Math.min(MAX_VISIBLE_HEIGHT, height);
            canvas.height =
                visibleHeight * tileSize + border.height() + TOP_SECTION_HEIGHT;
            wasChanged = true;
        }

        if (params?.bombs > 0 && params?.bombs <= width * height) {
            totalBombs = params.bombs;
            wasChanged = true;
        }

        return wasChanged;
    };

    const setMenu = async () => {
        // Initial game state
        const fieldCoords = border.renderBorder(
            tileSize * visibleWidth,
            tileSize * visibleHeight,
        );

        tile.clear();

        flagsPositions.clear();

        visibleArea = {
            x: 0,
            y: 0,
            width: visibleWidth,
            height: visibleHeight,
        };

        renderingArea = {
            x: 0,
            y: 0,
            width: Math.min(MAX_RENDERING_WIDTH, width),
            height: Math.min(MAX_RENDERING_HEIGHT, height),
        };

        scrollAvailable =
            visibleArea.width < renderingArea.width ||
            visibleArea.height < renderingArea.height;

        // Draw initial empty field
        tiles = await drawEmptyField(
            fieldCoords.fieldX,
            fieldCoords.fieldY,
            width,
            height,
            tileSize,
            tile.addNewEmptyTile,
            renderingArea,
        );

        smileBtn = smile.renderSmile(
            fieldCoords.topSectionX +
                (visibleWidth * tileSize - SMILE_SIZE) / 2,
            fieldCoords.topSectionY + (TOP_SECTION_HEIGHT - SMILE_SIZE) / 2,
            SMILE_SIZE,
        );

        positions = {
            field: {
                x: fieldCoords.fieldX,
                y: fieldCoords.fieldY,
                width: tileSize * visibleWidth,
                height: tileSize * visibleHeight,
            },

            smile: {
                x: smileBtn.smileCoords.x,
                y: smileBtn.smileCoords.y,
                width: SMILE_SIZE,
                height: SMILE_SIZE,
            },
        };

        canvas.setScenePosition(
            { x: positions.field.x, y: positions.field.y },
            { width: tileSize * width, height: tileSize * height },
        );

        canvas.setVisiblePosition(
            { x: positions.field.x, y: positions.field.y },
            { width: positions.field.width, height: positions.field.height },
        );

        canvas.clearOffset();

        moves = [];
        gameStateMethods.setInitial();
    };

    const changeTheme = (name: 'default' | 'forest' | 'mine' | 'forest2') => {
        if (textures.get(name) && name !== currentTexture) {
            currentTexture = name;
            textures.get(name).border();
            textures.get(name).tile();
            textures.get(name).smile();
            canvas.color = textures.get(name).color;
        }
    };

    changeTheme(initialTheme);

    const getSave = (): GameSave => {
        return {
            moves: [...moves],
            flags: new Set(flagsPositions),
            bombs: [...bobmsPositions],
            field: new Map(fieldInfo),
            size: {
                width: width,
                height: height,
            },
            gameState: gameStateMethods.getStateInfo(),
        };
    };

    const loadSave = async (save: GameSave) => {
        updateSize({
            width: save.size.width,
            height: save.size.height,
            bombs: save.bombs.length,
        });
        await setMenu();
        fieldInfo = new Map(save.field);
        updateField(fieldInfo, width, height, tiles, renderingArea);
        bobmsPositions = [...save.bombs];
        flagsPositions = new Set(save.flags);
        moves = [...save.moves];
        for (const move of moves) {
            await openAdjacentFields(
                tiles,
                move.x,
                move.y,
                width,
                height,
                renderingArea,
            ).openTilesDb;
        }
        save.flags.forEach((flag) => {
            putFlag(
                tiles[flag?.x] !== undefined
                    ? tiles[flag.x][flag?.y]
                    : undefined,
                flag.x,
                flag.y,
            );
        });
        gameStateMethods.loadState(save.gameState);
        return true;
    };

    // Store subscribers
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
        if (gameState.getStatus() === 'game') {
            checkVictory(bombs, gameStateMethods.getNoBombsFields(), () => {
                gameStateMethods.setStatus('victory');
            });
        }
    });

    gameStateMethods.addOnNoBombsFieldsChange('victoryCheck', (noBombsLeft) => {
        if (gameState.getStatus() === 'game') {
            checkVictory(gameStateMethods.getBombsLeft(), noBombsLeft, () => {
                gameStateMethods.setStatus('victory');
            });
        }
    });

    canvas.htmlElement.addEventListener('mousedown', (e) => {
        if (('button' in e && e.button === 2) || isPressedAndHold) {
            return;
        }

        const clicked = getClickedObject(e, positions, canvas.height);
        if (clicked !== null) {
            isPressedAndHold = true;
            if (
                clicked === 'FIELD' &&
                (gameState.getStatus() === 'menu' ||
                    gameState.getStatus() === 'game') &&
                !isLoading
            ) {
                pressedTile = pressTile(
                    tiles,
                    positions,
                    renderingArea,
                    canvas,
                    tileSize,
                    e,
                );
                if (pressedTile?.tileState === 'closed') {
                    cursor.setCursorPointer();
                    smileBtn.setScared();
                }
            }

            if (clicked === 'SMILE') {
                smileBtn.setPressed();
                cursor.setCursorPointer();
            }
        }
    });

    canvas.htmlElement.addEventListener('mouseleave', () => {
        isPressedAndHold = false;
        isScrolling = false;
        cursor.setCursorDefault();
        if (
            smileBtn.smileState === 'pressed' ||
            smileBtn.smileState === 'scared'
        ) {
            smileBtn.setDefault();
        }

        if (isPressedAndHold && !isLoading) {
            moveVisibleArea(
                canvas,
                visibleArea,
                renderingArea,
                tileSize,
                width,
                height,
                () => {
                    getFieldSegment(
                        tiles,
                        renderingArea,
                        tile.createFromMainInfo,
                    )
                        .then(() => {
                            tile.updateTiles(tiles);
                        })
                        .catch(() => {});
                },
            );

            return;
        }
    });

    canvas.htmlElement.addEventListener('mousemove', () => {
        if (
            smileBtn?.smileState === 'pressed' ||
            smileBtn?.smileState === 'scared'
        ) {
            smileBtn.setDefault();
        }

        if (isPressedAndHold) {
            isScrolling = scrollAvailable;
            isPressedAndHold = false;
        }

        if (isScrolling) {
            cursor.setCursorMove();
        }

        if (!isScrolling) {
            if (isLoading) {
                cursor.setCursorLoading();
            }
            if (!isLoading) {
                cursor.setCursorDefault();
            }
        }

        if (pressedTile) {
            pressedTile.setNotPressed();
            pressedTile = null;
        }
    });

    // eslint-disable-next-line max-lines-per-function
    canvas.htmlElement.addEventListener('mouseup', (e) => {
        if (
            smileBtn?.smileState === 'pressed' ||
            smileBtn?.smileState === 'scared'
        ) {
            smileBtn.setDefault();
        }
        isPressedAndHold = false;
        isScrolling = false;

        setTimeout(() => {
            if (!isScrolling && !isPressedAndHold) {
                cursor.setCursorDefault();
            }
        }, 150);

        if (pressedTile) {
            pressedTile.setNotPressed();
            pressedTile = null;
        }

        if (isLoading) {
            cursor.setCursorLoading();
            return;
        }

        cursor.setCursorDefault();

        if (canvas.mouseMoved) {
            moveVisibleArea(
                canvas,
                visibleArea,
                renderingArea,
                tileSize,
                width,
                height,
                () => {
                    getFieldSegment(
                        tiles,
                        renderingArea,
                        tile.createFromMainInfo,
                    )
                        .then(() => {
                            tile.updateTiles(tiles);
                        })
                        .catch(() => {});
                },
            );

            return;
        }

        if ('button' in e && e.button === 2) {
            return;
        }

        const clicked = getClickedObject(e, positions, canvas.height);

        if (gameStateMethods.getStatus() === 'menu') {
            if (clicked !== 'FIELD') {
                return;
            }

            const clickCoords = getClickedCoords(
                e,
                positions.field.x + canvas.sceneOffset.x,
                positions.field.y + canvas.sceneOffset.y,
                canvas.height,
                tileSize,
            );

            const { field, bombs, totalGenerated } = generateField(
                width,
                height,
                totalBombs,
                clickCoords.i,
                clickCoords.j,
            );
            fieldInfo?.clear();
            fieldInfo = field;

            updateField(field, width, height, tiles, renderingArea);
            bobmsPositions = bombs;
            gameStateMethods.setBombs(totalGenerated);
            gameStateMethods.setNoBombsFields(width * height - totalGenerated);
            gameStateMethods.setStatus('game');
        }

        if (gameStateMethods.getStatus() === 'game') {
            if (clicked === 'FIELD') {
                const result = processClick(
                    tiles,
                    positions.field.x + canvas.sceneOffset.x,
                    positions.field.y + canvas.sceneOffset.y,
                    tileSize,
                    canvas.height,
                    e,
                    renderingArea,
                    width,
                    height,
                );

                if (result && result.result) {
                    moves.push(result.coords);

                    isLoading = true;

                    setTimeout(() => {
                        if (isLoading) {
                            cursor.setCursorLoading();
                        }
                    }, 200);

                    result.result.openTilesDb
                        .then(() => {
                            isLoading = false;
                            cursor.setCursorDefault();
                        })
                        .catch(() => {});

                    if (result === null) {
                        return;
                    }

                    if (result.result.openedType === 'bomb') {
                        openBombs(tiles, bobmsPositions, renderingArea);
                        openFlags(tiles, flagsPositions, renderingArea);
                        gameStateMethods.setStatus('defeat');
                    }

                    if (result.result.openedType !== 'bomb') {
                        gameStateMethods.setNoBombsFields(
                            gameStateMethods.getNoBombsFields() -
                                result.result.totalOpened,
                        );
                    }
                }
            }
        }

        if (clicked === 'SMILE') {
            setMenu()
                .then(() => console.log('ready'))
                .catch((e) => console.log('error ', e));
        }
    });

    canvas.htmlElement.addEventListener('contextmenu', (e) => {
        rightClick(
            gameState,
            tiles,
            positions,
            canvas,
            tileSize,
            flagsPositions,
            e,
            renderingArea,
        );
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
        update: (params: {
            width?: number;
            height?: number;
            bombs?: number;
        }) => {
            if (updateSize(params)) {
                setMenu()
                    .then(() => console.log('ready'))
                    .catch((e) => console.log('error ', e));
            }
        },
        stopGame: () => {
            setMenu()
                .then(() => console.log('ready'))
                .catch((e) => console.log('error ,', e));
        },
        openField: () => {
            openFullField(tiles);
        },
        changeTexture: changeTheme,
        availableThemes: () => {
            return getAvailableThemes(textures);
        },
        getSaveInfo: getSave,
        loadSave: loadSave,
    };
}
