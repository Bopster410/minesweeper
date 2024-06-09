import { Canvas } from '@/shared/canvas';
import { TileType } from '../ui/index.types';
import { Tile } from '../ui';
import { DEFAULT_TEXTURE, TEXTURE_FILES } from './index.constants';
import { BufferMethods } from '@/shared/canvas/ui';

export function generateTileId(x: number, y: number) {
    return `tile[${x}:${y}]`;
}

export async function getNewTile(canvas: Canvas) {
    const textures = await canvas.loadAllTextures(TEXTURE_FILES);
    let currentTexture = DEFAULT_TEXTURE;

    let tileBuffer: BufferMethods = null;

    const createVao = () => {
        tileBuffer = canvas.createBuffer('tiles', textures.get(currentTexture));
    };

    const addNewTile = (
        type: TileType,
        x: number,
        y: number,
        size: number,
        bombsAround?: number,
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
            'closed',
            type,
            bombsAround,
        );
    };

    return {
        addNewEmptyTile: (x: number, y: number, size: number) => {
            return addNewTile('empty', x, y, size);
        },

        addNewBombTile: (x: number, y: number, size: number) => {
            return addNewTile('bomb', x, y, size);
        },

        addNewDigitTile: (
            x: number,
            y: number,
            size: number,
            bombsAround: number,
        ) => {
            return addNewTile('digit', x, y, size, bombsAround);
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
    };
}
