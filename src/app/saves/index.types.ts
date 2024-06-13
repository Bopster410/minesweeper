import { Coords } from '@/shared/canvas';
import { Size } from '@/shared/canvas/ui/index.types';
import { FieldTileInfo } from '@/widgets/gameField/lib/field/index.types';
import { GameStateInfo } from '@/widgets/gameField/model/gameState/lib';

export type SaveLocal = {
    moves: Coords[];
    flags: Coords[];
    bombs: Coords[];
    fields: [number, [number, FieldTileInfo][]][];
    size: Size;
    gameState: GameStateInfo;
};
