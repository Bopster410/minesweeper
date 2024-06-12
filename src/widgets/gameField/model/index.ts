import { getConnection } from './db';

const DB_NAME = 'game';

export const connection = getConnection(DB_NAME);
export { getId } from './db';
export type { TileData } from './db';
export { gameState } from './gameState';
export type { GameStateMethods } from './gameState';
