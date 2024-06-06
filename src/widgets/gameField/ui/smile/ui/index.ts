import { Canvas, Coords, VaoInfo } from '@/shared/canvas';
import { SmileState } from './index.types';
import { SMILE_TEXTURE_COORDS } from '../textures';

export class Smile {
    protected canvas: Canvas;
    protected vaoInfo: VaoInfo;
    protected size: number;
    protected coords: Coords;
    protected state: SmileState;
    protected texture: WebGLTexture;
    protected id: string;

    constructor(
        canvas: Canvas,
        vaoInfo: VaoInfo,
        x: number,
        y: number,
        size: number,
        texture: WebGLTexture,
    ) {
        this.canvas = canvas;
        this.vaoInfo = vaoInfo;
        this.size = size;
        this.coords = { x: x, y: y };
        this.state = 'default';
        this.texture = texture;
        this.id = 'smile';
        this.renderOnCanvas();
    }

    protected renderOnCanvas() {
        this.canvas.addObject(
            this.id,
            this.vaoInfo,
            {
                size: { width: this.size, height: this.size },
                coords: this.coords,
                textureCoords: SMILE_TEXTURE_COORDS.DEFAULT,
            },
            this.texture,
        );
    }

    protected changeState(newState: SmileState) {
        if (newState === this.state) {
            return;
        }

        let newTextureCoords: number[] = null;
        switch (newState) {
            case 'pressed':
                newTextureCoords = SMILE_TEXTURE_COORDS.DEFAULT;
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

        this.canvas.updateObject(this.id, { textureCoords: newTextureCoords });
    }

    get smileCoords() {
        return this.coords;
    }

    destroy() {
        this.canvas.removeObject(this.id);
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
}
