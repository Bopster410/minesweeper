const vertexShaderSrc = `#version 300 es
precision mediump float;

in vec2 vertexPosition;
in vec2 vertTextureCoords;
in vec2 coords;
in vec2 size;

uniform vec2 canvasSize;
uniform vec2 offset;
uniform float zIndex;

out vec2 fragTextureCoords;

void main() {
    fragTextureCoords = vertTextureCoords;

    vec2 finalPosition = vertexPosition * (size / 2.0) + coords + (size / 2.0) + offset;
    vec2 clipPosition = (finalPosition / canvasSize) * 2.0 - 1.0;

    gl_Position = vec4(clipPosition, zIndex, 1.0);
}`;

// Creates and compiles vertex shader
export function initVertexShader(gl: WebGL2RenderingContext) {
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSrc);
    gl.compileShader(vertexShader);

    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        const errorMessage = gl.getShaderInfoLog(vertexShader);
        console.error(`Failed to compile vertex shader: ${errorMessage}`);
        return;
    }

    return vertexShader;
}
