import { Coords } from '@/shared/canvas';
import { TileMainInfo } from '../../ui';

export type TileData = {
    coordsId: string;
    coords: Coords;
    info: TileMainInfo;
};
