export const fragmentShaderSrc = `#version 300 es
precision mediump float;

in vec2 fragTextureCoords;

uniform sampler2D sampler;

out vec4 outputColor;

void main() {
    outputColor = texture(sampler, fragTextureCoords);
}`;

// Creates and compiles fragment shader
export function initFragmentShader(gl: WebGL2RenderingContext) {
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSrc);
    gl.compileShader(fragmentShader);

    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        const errorMessage = gl.getShaderInfoLog(fragmentShader);
        console.error(`Failed to compile fragment shader: ${errorMessage}`);
        return;
    }

    return fragmentShader;
}
