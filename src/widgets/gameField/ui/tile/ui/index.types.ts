import { Coords } from '@/shared/canvas';

export type TileState = 'closed' | 'opened' | 'flag' | 'flag-wrong';
export type TileType = 'empty' | 'bomb' | 'digit' | 'exploded';

export type TileMainInfo = {
    state: TileState;
    type: TileType;
    coords: Coords;
    bombsAround?: number;
};
