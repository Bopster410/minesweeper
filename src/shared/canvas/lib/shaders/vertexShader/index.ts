const vertexShaderSrc = `#version 300 es
precision mediump float;

in vec2 vertexPosition;
in vec2 vertTextureCoords;

uniform vec2 canvasSize;
uniform vec2 coords;
uniform vec2 size;

out vec2 fragTextureCoords;

void main() {
    fragTextureCoords = vertTextureCoords;

    vec2 finalPosition = vec2(
        vertexPosition.x * (size.x / 2.0) + coords.x + (size.x / 2.0),
        vertexPosition.y * (size.y / 2.0) + coords.y + (size.y / 2.0));
    vec2 clipPosition = (finalPosition / canvasSize) * 2.0 - 1.0;

    gl_Position = vec4(clipPosition, 0.0, 1.0);
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
