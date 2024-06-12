import { TileState, TileType } from './index.types';
import { generateTileId } from '../lib';
import { TILE_TEXTURE_COORDS } from '../textures';
import { Coords, Size, SquareCoords } from '@/shared/canvas/ui/index.types';

export type { TileState, TileType, TileMainInfo } from './index.types';

export function getOpenedInfo(state: TileState, type: TileType) {
    if (state === 'flag' && type === 'bomb') return null;

    if (state === 'flag' && type !== 'bomb') return 'flag-wrong';

    if (state !== 'flag' && state !== 'flag-wrong') return 'opened';
}

function getTextureCoords(
    state: TileState,
    type: TileType,
    pressed: boolean,
    bombsAround?: number,
) {
    let newTextureCoords: SquareCoords = null;

    if (state === 'opened') {
        switch (type) {
            case 'exploded':
                newTextureCoords = TILE_TEXTURE_COORDS.BOMB_WRONG;
                break;
            case 'bomb':
                newTextureCoords = TILE_TEXTURE_COORDS.BOMB;
                break;
            case 'digit':
                switch (bombsAround) {
                    case 1:
                        newTextureCoords = TILE_TEXTURE_COORDS.ONE;
                        break;
                    case 2:
                        newTextureCoords = TILE_TEXTURE_COORDS.TWO;
                        break;
                    case 3:
                        newTextureCoords = TILE_TEXTURE_COORDS.THREE;
                        break;
                    case 4:
                        newTextureCoords = TILE_TEXTURE_COORDS.FOUR;
                        break;
                    case 5:
                        newTextureCoords = TILE_TEXTURE_COORDS.FIVE;
                        break;
                    case 6:
                        newTextureCoords = TILE_TEXTURE_COORDS.SIX;
                        break;
                    case 7:
                        newTextureCoords = TILE_TEXTURE_COORDS.SEVEN;
                        break;
                    case 8:
                        newTextureCoords = TILE_TEXTURE_COORDS.EIGHT;
                        break;
                    default:
                        newTextureCoords = TILE_TEXTURE_COORDS.EMPTY;
                        break;
                }
                break;
            default:
                newTextureCoords = TILE_TEXTURE_COORDS.EMPTY;
        }
    }

    if (state === 'closed') {
        if (pressed) {
            newTextureCoords = TILE_TEXTURE_COORDS.EMPTY;
        }
        if (!pressed) {
            newTextureCoords = TILE_TEXTURE_COORDS.CLOSED;
        }
    }

    if (state === 'flag') {
        newTextureCoords = TILE_TEXTURE_COORDS.FLAG;
    }

    if (state === 'flag-wrong') {
        newTextureCoords = TILE_TEXTURE_COORDS.FLAG_WRONG;
    }

    return newTextureCoords;
}

export class Tile {
    protected rendering: boolean;
    protected state: TileState;
    protected type: TileType;
    protected pressed: boolean;
    protected coords: {
        x: number;
        y: number;
    };
    protected size: number;
    protected coordsId: string;
    protected bombsAround?: number;
    protected addToBuffer: (
        name: string,
        params: {
            size: Size;
            coords: Coords;
            textureCoords: SquareCoords;
        },
    ) => void;
    protected updateObject: (
        name: string,
        params: {
            size?: Size;
            coords?: Coords;
            textureCoords?: SquareCoords;
        },
    ) => void;

    constructor(
        addToBuffer: (
            name: string,
            params: {
                size: Size;
                coords: Coords;
                textureCoords: SquareCoords;
            },
        ) => void,
        updateObject: (
            name: string,
            params: {
                size?: Size;
                coords?: Coords;
                textureCoords?: SquareCoords;
            },
        ) => void,
        x: number,
        y: number,
        size: number,
        state: TileState,
        type: TileType,
        renderRightNow: boolean,
        bombsAround?: number,
    ) {
        this.state = state;
        this.addToBuffer = addToBuffer;
        this.updateObject = updateObject;
        this.type = type;
        this.coords = {
            x: x,
            y: y,
        };
        this.size = size;
        this.pressed = false;
        this.coordsId = generateTileId(x, y);
        this.bombsAround = bombsAround;
        this.rendering = false;
        if (renderRightNow) this.renderOnCanvas();
    }

    set addFunction(
        addToBuffer: (
            name: string,
            params: {
                size: Size;
                coords: Coords;
                textureCoords: SquareCoords;
            },
        ) => void,
    ) {
        this.addToBuffer = addToBuffer;
    }

    set updateFunction(
        updateObject: (
            name: string,
            params: {
                size?: Size;
                coords?: Coords;
                textureCoords?: SquareCoords;
            },
        ) => void,
    ) {
        this.updateObject = updateObject;
    }

    renderOnCanvas() {
        if (!this.rendering) {
            this.rendering = true;
            this.addToBuffer(this.coordsId, {
                size: { width: this.size, height: this.size },
                coords: this.coords,
                textureCoords: getTextureCoords(
                    this.state,
                    this.type,
                    this.pressed,
                    this.bombsAround,
                ),
            });
        }
    }

    get tileCoords() {
        return this.coords;
    }

    get id() {
        return this.coordsId;
    }

    get tileType() {
        return this.type;
    }

    get tileState() {
        return this.state;
    }

    protected updateTextureCoords() {
        this.updateObject(this.coordsId, {
            textureCoords: getTextureCoords(
                this.state,
                this.type,
                this.pressed,
                this.bombsAround,
            ),
        });
    }

    protected changeState(newState: TileState) {
        if (this.state === newState) {
            return;
        }

        this.state = newState;
        this.updateTextureCoords();
    }

    protected changeType(newType: TileType) {
        if (this.type === newType) {
            return;
        }

        this.type = newType;
        this.updateTextureCoords();
    }

    setPressed() {
        this.pressed = true;
        this.updateTextureCoords();
    }

    setNotPressed() {
        this.pressed = false;
        this.updateTextureCoords();
    }

    setTypeExploded() {
        this.changeType('exploded');
    }

    setTypeBomb() {
        this.changeType('bomb');
    }

    setTypeEmpty() {
        this.changeType('empty');
    }

    setTypeDigit(bombsAround: number) {
        if (bombsAround <= 0) {
            this.setTypeEmpty();
        }

        if (bombsAround > 0) {
            this.bombsAround = bombsAround <= 8 ? bombsAround : 8;
            this.changeType('digit');
        }
    }

    putFlag() {
        this.changeState('flag');
    }

    open() {
        const newState = getOpenedInfo(this.state, this.type);

        if (newState === null) return;

        this.changeState(newState);
    }

    close() {
        this.changeState('closed');
    }
}
