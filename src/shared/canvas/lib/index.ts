import { DEFAULT_COLOR } from './index.constnats';
import { Color } from './index.types';
export { initProgram } from './shaders';

export function clearBuffers(gl: WebGL2RenderingContext) {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

export function clearColor(gl: WebGL2RenderingContext, color?: Color) {
    color = color ?? DEFAULT_COLOR;
    color.aplha = color.aplha ?? 1.0;

    gl.clearColor(color.red, color.green, color.blue, color.aplha);
}

// Create new buffer and put vertices data in it
export function initNewBuffer(gl: WebGL2RenderingContext, data: ArrayBuffer) {
    const buffer = gl.createBuffer();
    bufferStaticData(gl, buffer, data);
    return buffer;
}

// Put vertices in buffer data
export function bufferStaticData(
    gl: WebGL2RenderingContext,
    buffer: WebGLBuffer,
    data: ArrayBuffer,
) {
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
}

// Sets viewport size equal to full canvas size
export function fullCanvasViewport(
    gl: WebGL2RenderingContext,
    canvas: HTMLCanvasElement,
) {
    gl.viewport(0, 0, canvas.width, canvas.height);
}

export function createTexture(
    gl: WebGL2RenderingContext,
    pixels: TexImageSource,
    width: number,
    height: number,
) {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGB,
        width,
        height,
        0,
        gl.RGB,
        gl.UNSIGNED_BYTE,
        pixels,
    );

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.generateMipmap(gl.TEXTURE_2D);

    return texture;
}

export function loadTextureFile(src: string) {
    const image = new Image();
    return new Promise<typeof image>((resolve) => {
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = src;
    });
}

export function initTwoBufferVao(
    gl: WebGL2RenderingContext,
    positionBuffer: WebGLBuffer,
    textureCoordsBuffer: WebGLBuffer,
    positionAttr: number,
    textureCoordsAttr: number,
) {
    const vao = gl.createVertexArray();

    if (!vao) {
        console.error('Failed to create vao');
        return null;
    }

    gl.bindVertexArray(vao);

    gl.enableVertexAttribArray(positionAttr);
    gl.enableVertexAttribArray(textureCoordsAttr);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionAttr, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordsBuffer);
    gl.vertexAttribPointer(textureCoordsAttr, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    gl.bindVertexArray(null);

    return vao;
}
