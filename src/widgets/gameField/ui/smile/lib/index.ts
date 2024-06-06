import { Canvas } from '@/shared/canvas';
import { Smile } from '../ui';

export async function getSmile(canvas: Canvas) {
    const vaoInfo = canvas.createNewVao(6);

    const texture = await canvas.createNewTextureFromFile('./texturesmile.png');

    return {
        renderSmile(x: number, y: number, size: number) {
            return new Smile(canvas, vaoInfo, x, y, size, texture);
        },
    };
}
