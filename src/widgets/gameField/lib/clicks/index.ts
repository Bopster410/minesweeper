import { Canvas, Coords } from '@/shared/canvas';
import { Tile, Position, ElementsPositions } from '../../ui';
import { GameStateMethods } from '../../model';
import { getTile, openAdjacentFields, putFlag, removeFlag } from '../field';

export function moveVisibleArea(
    canvas: Canvas,
    visibleArea: Position,
    renderingArea: Position,
    tileSize: number,
    width: number,
    height: number,
    updateTiles: () => void,
) {
    visibleArea.x = Math.floor(Math.abs(canvas.sceneOffset.x) / tileSize);
    visibleArea.y = Math.floor(Math.abs(canvas.sceneOffset.y) / tileSize);
    const prevX = renderingArea.x;
    const prevY = renderingArea.y;
    const middleX = visibleArea.x + Math.round(visibleArea.width / 2);
    const middleY = visibleArea.y + Math.round(visibleArea.height / 2);

    if (
        visibleArea.x + visibleArea.width >=
        renderingArea.x + renderingArea.width
    ) {
        const isEdge = middleX + Math.round(renderingArea.width / 2) >= width;
        if (!isEdge) {
            renderingArea.x = middleX - Math.round(renderingArea.width / 2);
        }

        if (isEdge) {
            renderingArea.x = width - renderingArea.width;
        }
    }

    if (visibleArea.x <= renderingArea.x && renderingArea.x > 0) {
        const isEdge = middleX - Math.round(renderingArea.width / 2) <= 0;
        if (!isEdge) {
            renderingArea.x = middleX - Math.floor(renderingArea.width / 2);
        }

        if (isEdge) {
            renderingArea.x = 0;
        }
    }

    if (
        visibleArea.y + visibleArea.height >=
        renderingArea.y + renderingArea.height
    ) {
        const isEdge = middleY + Math.floor(renderingArea.height / 2) >= height;
        if (!isEdge) {
            renderingArea.y = middleY - Math.floor(renderingArea.height / 2);
        }

        if (isEdge) {
            renderingArea.y = height - renderingArea.height;
        }
    }

    if (visibleArea.y <= renderingArea.y && renderingArea.y > 0) {
        const isEdge = middleY - Math.floor(renderingArea.height / 2) <= 0;
        if (!isEdge) {
            renderingArea.y = middleY - Math.floor(renderingArea.height / 2);
        }

        if (isEdge) {
            renderingArea.y = 0;
        }
    }

    const wasChanged = renderingArea.x !== prevX || renderingArea.y !== prevY;
    if (wasChanged) {
        updateTiles();
    }
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

export function processClick(
    tiles: Tile[][],
    fieldX: number,
    fieldY: number,
    tileSize: number,
    height: number,
    e: MouseEvent,
    renderingArea: Position,
    widthTiles: number,
    heightTiles: number,
) {
    e.preventDefault();

    const { i, j } = getClickedCoords(e, fieldX, fieldY, height, tileSize);

    const tile = getTile(tiles, renderingArea, i, j);
    if (tile !== null) {
        const result = openAdjacentFields(
            tiles,
            i,
            j,
            widthTiles,
            heightTiles,
            renderingArea,
        );
        if (result?.openedType === 'bomb') {
            tile.setTypeExploded();
        }
        return { result: result, coords: { x: i, y: j } };
    }

    return null;
}

function tryFlag(
    tiles: Tile[][],
    fieldX: number,
    fieldY: number,
    tileSize: number,
    height: number,
    e: MouseEvent,
    renderingArea: Position,
) {
    e.preventDefault();

    const { i, j } = getClickedCoords(e, fieldX, fieldY, height, tileSize);

    const tile = getTile(tiles, renderingArea, i, j);
    if (tile !== null) {
        if (tile.tileState === 'opened') {
            return null;
        }

        const withFlag = tile.tileState === 'flag';
        if (withFlag) {
            removeFlag(tile, i, j);
        }

        if (!withFlag) {
            putFlag(tile, i, j);
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

export function getClickedObject(
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

export function rightClick(
    gameStateMethods: GameStateMethods,
    tiles: Tile[][],
    positions: ElementsPositions,
    canvas: Canvas,
    tileSize: number,
    flagsPositions: Set<Coords>,
    e: MouseEvent,
    renderingArea: Position,
) {
    if (gameStateMethods.getStatus() === 'game') {
        const result = tryFlag(
            tiles,
            positions.field.x + canvas.sceneOffset.x,
            positions.field.y + canvas.sceneOffset.y,
            tileSize,
            canvas.height,
            e,
            renderingArea,
        );

        if (result === null) {
            return;
        }

        // If player put flag on bomb
        if (result.state === 'closed') {
            if (result.type === 'bomb') {
                gameStateMethods.setBombs(gameStateMethods.getBombsLeft() - 1);
            }
            flagsPositions.add(result.coords);
            gameStateMethods.setFlagsPut(gameStateMethods.getFlagsPut() + 1);
        }

        // If player removed flag from bomb
        if (result.state === 'flag') {
            if (result.type === 'bomb') {
                gameStateMethods.setBombs(gameStateMethods.getBombsLeft() + 1);
            }
            flagsPositions.delete(result.coords);
            gameStateMethods.setFlagsPut(gameStateMethods.getFlagsPut() - 1);
        }

        return result.coords;
    }
}

export function pressTile(
    tiles: Tile[][],
    positions: ElementsPositions,
    renderingArea: Position,
    canvas: Canvas,
    tileSize: number,
    e: MouseEvent,
) {
    const { i, j } = getClickedCoords(
        e,
        positions.field.x + canvas.sceneOffset.x,
        positions.field.y + canvas.sceneOffset.y,
        canvas.height,
        tileSize,
    );

    const tile = getTile(tiles, renderingArea, i, j);
    if (tile !== null) {
        if (tile.tileState === 'flag') {
            return null;
        }

        tile.setPressed();

        return tile;
    }

    return null;
}
