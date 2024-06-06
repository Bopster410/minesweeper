import { Canvas, VaoInfo } from '@/shared/canvas';
import { TileType } from '../ui/index.types';
import { Tile } from '../ui';

export function generateTileId(x: number, y: number) {
    return `tile[${x}:${y}]`;
}

export async function getNewTile(canvas: Canvas) {
    let vaoInfo: VaoInfo = null;

    const texture = await canvas.createNewTextureFromFile('./tiletextures.png');

    const createVao = () => {
        vaoInfo = canvas.createNewVao(6);
    };

    const addNewTile = (
        type: TileType,
        x: number,
        y: number,
        size: number,
        bombsAround?: number,
    ) => {
        if (vaoInfo === null) {
            createVao();
        }

        return new Tile(
            canvas,
            vaoInfo,
            x,
            y,
            size,
            'closed',
            type,
            texture,
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
    };
}
