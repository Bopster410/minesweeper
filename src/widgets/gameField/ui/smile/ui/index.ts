import { Coords } from '@/shared/canvas';
import { SmileState } from './index.types';
import { SMILE_TEXTURE_COORDS } from '../textures';
import { Size, SquareCoords } from '@/shared/canvas/ui/index.types';

export class Smile {
    protected size: number;
    protected coords: Coords;
    protected state: SmileState;
    protected id: string;
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
    ) {
        this.addToBuffer = addToBuffer;
        this.updateObject = updateObject;
        this.size = size;
        this.coords = { x: x, y: y };
        this.state = 'default';
        this.id = 'smile';
        this.renderOnCanvas();
    }

    protected renderOnCanvas() {
        this.addToBuffer(this.id, {
            size: { width: this.size, height: this.size },
            coords: this.coords,
            textureCoords: SMILE_TEXTURE_COORDS.DEFAULT,
        });
    }

    protected changeState(newState: SmileState) {
        if (newState === this.state) {
            return;
        }

        this.state = newState;

        let newTextureCoords: SquareCoords = null;
        switch (newState) {
            case 'pressed':
                newTextureCoords = SMILE_TEXTURE_COORDS.PRESSED;
                break;
            case 'scared':
                newTextureCoords = SMILE_TEXTURE_COORDS.SCARED;
                break;
            case 'defeat':
                newTextureCoords = SMILE_TEXTURE_COORDS.DEFEAT;
                break;
            case 'victory':
                newTextureCoords = SMILE_TEXTURE_COORDS.WIN;
                break;
            default:
                newTextureCoords = SMILE_TEXTURE_COORDS.DEFAULT;
                break;
        }

        this.updateObject(this.id, { textureCoords: newTextureCoords });
    }

    get smileCoords() {
        return this.coords;
    }

    setDefault() {
        this.changeState('default');
    }

    setPressed() {
        this.changeState('pressed');
    }

    setDefeat() {
        this.changeState('defeat');
    }

    setVictory() {
        this.changeState('victory');
    }

    setScared() {
        this.changeState('scared');
    }

    get smileState() {
        return this.state;
    }
}
