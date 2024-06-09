import { Canvas } from '@/shared/canvas';
import { Smile } from '../ui';
import { DEFAULT_TEXTURE, TEXTURE_FILES } from './index.constants';

export async function getSmile(canvas: Canvas) {
    const textures = await canvas.loadAllTextures(TEXTURE_FILES);
    let currentTexture = DEFAULT_TEXTURE;

    const smileBuffer = canvas.createBuffer(
        'smile',
        textures.get(currentTexture),
    );

    return {
        renderSmile(x: number, y: number, size: number) {
            if (smileBuffer !== undefined) {
                smileBuffer.clear();
            }

            return new Smile(
                smileBuffer.addObject,
                smileBuffer.updateObject,
                x,
                y,
                size,
            );
        },

        changeTexture(name: string) {
            if (textures.has(name)) {
                currentTexture = name;
            }
        },

        updateTexture() {
            smileBuffer.updateTexture(textures.get(currentTexture));
        },
    };
}
