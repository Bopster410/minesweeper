import { Tile } from '../ui';
import { TileMainInfo } from '../ui/index.types';

export type TileMethods = {
    addNewEmptyTile: (x: number, y: number) => Tile;
    addNewBombTile: (x: number, y: number) => Tile;
    addNewDigitTile: (x: number, y: number, bombsAround: number) => Tile;
    changeTexture(name: string): void;
    updateTexture(): void;
    clear: () => void;
    createFromMainInfo: (info: TileMainInfo) => Tile;
    updateTiles: (tiles: Tile[][]) => void;
};
