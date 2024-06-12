import { Canvas } from '@/shared/canvas';
import { TileMainInfo, TileState, TileType } from '../ui/index.types';
import { Tile } from '../ui';
import { BUFFER_NAME, DEFAULT_TEXTURE, TEXTURE_FILES } from './index.constants';
import { BufferMethods } from '@/shared/canvas/ui';
import { TileMethods } from './index.types';

export function generateTileId(x: number, y: number) {
    return `tile[${x}:${y}]`;
}

function swapBufferName(currentName: string) {
    return currentName === BUFFER_NAME.FIRST
        ? BUFFER_NAME.SECOND
        : BUFFER_NAME.FIRST;
}

// eslint-disable-next-line max-lines-per-function
export async function getNewTile(
    canvas: Canvas,
    size: number,
): Promise<TileMethods> {
    const textures = await canvas.loadAllTextures(TEXTURE_FILES);
    let currentTexture = DEFAULT_TEXTURE;
    let currentBufferName = BUFFER_NAME.FIRST;

    let tileBuffer: BufferMethods = null;

    const createVao = () => {
        tileBuffer = canvas.createBuffer(
            currentBufferName,
            textures.get(currentTexture),
            'static',
            -0.1,
        );
    };

    const addNewTile = (
        type: TileType,
        x: number,
        y: number,
        size: number,
        renderRightNow: boolean,
        bombsAround?: number,
        state?: TileState,
    ) => {
        if (tileBuffer === null) {
            createVao();
        }

        return new Tile(
            tileBuffer.addObject,
            tileBuffer.updateObject,
            x,
            y,
            size,
            state ?? 'closed',
            type,
            renderRightNow,
            bombsAround,
        );
    };

    return {
        addNewEmptyTile: (x: number, y: number) => {
            return addNewTile('empty', x, y, size, true);
        },

        addNewBombTile: (x: number, y: number) => {
            return addNewTile('bomb', x, y, size, true);
        },

        addNewDigitTile: (x: number, y: number, bombsAround: number) => {
            return addNewTile('digit', x, y, size, true, bombsAround);
        },

        changeTexture(name: string) {
            if (textures.has(name)) {
                currentTexture = name;
            }
        },

        updateTexture() {
            tileBuffer?.updateTexture(textures.get(currentTexture));
        },

        clear: () => {
            tileBuffer?.clear();
        },

        createFromMainInfo: (info: TileMainInfo) => {
            return addNewTile(
                info.type,
                info.coords.x,
                info.coords.y,
                size,
                false,
                info.bombsAround,
                info.state,
            );
        },

        updateTiles: (tiles: Tile[][]) => {
            const prevName = currentBufferName;
            const prevBuffer = tileBuffer;
            currentBufferName = swapBufferName(currentBufferName);
            createVao();
            tiles.forEach((row) => {
                row.forEach((tile) => {
                    tile.addFunction = tileBuffer.addObject;
                    tile.updateFunction = tileBuffer.updateObject;
                    tile.renderOnCanvas();
                });
            });
            prevBuffer.clear();
            canvas.removeBuffer(prevName);
        },
    };
}
