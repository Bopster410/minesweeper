import { Canvas } from '@/shared/canvas';
import { Smile } from '../ui';
import { DEFAULT_TEXTURE, TEXTURE_FILES } from './index.constants';

export async function getSmile(canvas: Canvas) {
    const vaoInfo = canvas.createNewVao(6);
    const textures = await canvas.loadAllTextures(TEXTURE_FILES);
    let currentTexture = DEFAULT_TEXTURE;

    return {
        renderSmile(x: number, y: number, size: number) {
            return new Smile(
                canvas,
                vaoInfo,
                x,
                y,
                size,
                textures.get(currentTexture),
            );
        },

        changeTexture(name: string) {
            if (textures.has(name)) {
                currentTexture = name;
            }
        },

        updateTexture(smile: Smile) {
            smile.smileTexture = textures.get(currentTexture);
        },
    };
}
