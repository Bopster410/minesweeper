import { GameSave } from '@/widgets/gameField/ui/index.types';
import {
    SAVE_NAME,
    TEXTURES_LOCAL_NAME,
    THEME_LOCAL_NAME,
} from '../saves/index.constants';
import { SaveLocal } from './index.types';
import { FieldTileInfo } from '@/widgets/gameField/lib/field/index.types';

export function saveLocally(save: GameSave) {
    const field: Array<Array<unknown>> = [];
    [...save.field.entries()].forEach((row) => {
        field.push([row[0], [...row[1].entries()]]);
    });

    localStorage.setItem(
        SAVE_NAME,
        JSON.stringify({
            moves: save.moves,
            flags: [...save.flags.values()],
            bombs: save.bombs,
            fields: field,
            size: save.size,
            gameState: save.gameState,
        }),
    );
}

export function loadLocally(): GameSave {
    const loaded = JSON.parse(localStorage.getItem(SAVE_NAME)) as SaveLocal;
    if (!loaded) {
        return undefined;
    }

    const rows: [number, Map<number, FieldTileInfo>][] = [];
    loaded.fields.forEach((row) => {
        rows.push([row[0], new Map(row[1])]);
    });

    return {
        moves: loaded.moves,
        flags: new Set(loaded.flags),
        bombs: loaded.bombs,
        field: new Map(rows),
        size: loaded.size,
        gameState: loaded.gameState,
    };
}

export function saveTheme(theme: string) {
    localStorage.setItem(THEME_LOCAL_NAME, theme);
}

export function loadTheme() {
    return localStorage.getItem(THEME_LOCAL_NAME);
}

export function saveTextures(theme: string) {
    localStorage.setItem(TEXTURES_LOCAL_NAME, theme);
}

export function loadTextures() {
    return localStorage.getItem(TEXTURES_LOCAL_NAME);
}
