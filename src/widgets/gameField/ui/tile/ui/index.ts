import { TileState, TileType } from './index.types';
import { generateTileId } from '../lib';
import { TILE_TEXTURE_COORDS } from '../textures';
import { Coords, Size, SquareCoords } from '@/shared/canvas/ui/index.types';

export type { TileState, TileType } from './index.types';

export class Tile {
    protected state: TileState;
    protected type: TileType;
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
        this.coordsId = generateTileId(x, y);
        this.bombsAround = bombsAround;
        this.renderOnCanvas();
    }

    protected renderOnCanvas() {
        this.addToBuffer(this.coordsId, {
            size: { width: this.size, height: this.size },
            coords: this.coords,
            textureCoords: TILE_TEXTURE_COORDS.CLOSED,
        });
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
        let newTextureCoords: SquareCoords = null;
        if (this.state === 'opened') {
            switch (this.type) {
                case 'exploded':
                    newTextureCoords = TILE_TEXTURE_COORDS.BOMB_WRONG;
                    break;
                case 'bomb':
                    newTextureCoords = TILE_TEXTURE_COORDS.BOMB;
                    break;
                case 'digit':
                    switch (this.bombsAround) {
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

        if (this.state === 'closed') {
            newTextureCoords = TILE_TEXTURE_COORDS.CLOSED;
        }

        if (this.state === 'flag') {
            newTextureCoords = TILE_TEXTURE_COORDS.FLAG;
        }

        if (this.state === 'flag-wrong') {
            newTextureCoords = TILE_TEXTURE_COORDS.FLAG_WRONG;
        }

        this.updateObject(this.coordsId, {
            textureCoords: newTextureCoords,
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
        if (this.state === 'flag' && this.type === 'bomb') return;

        if (this.state === 'flag' && this.type !== 'bomb')
            this.changeState('flag-wrong');

        if (this.state !== 'flag' && this.state !== 'flag-wrong')
            this.changeState('opened');
    }

    close() {
        this.changeState('closed');
    }
}
