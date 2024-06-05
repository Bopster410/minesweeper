import { initFragmentShader } from './fragmentShader';
import { initVertexShader } from './vertexShader';

// Creates and compiles fragment shader
export function initProgram(gl: WebGL2RenderingContext) {
    const program = gl.createProgram();
    const vertexShader = initVertexShader(gl);
    const fragmentShader = initFragmentShader(gl);
    attachShaders(gl, program, [vertexShader, fragmentShader]);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        const errorMessage = gl.getProgramInfoLog(program);
        console.error(`Failed to link GPU program: ${errorMessage}`);
        return;
    }

    const vertexPositionAttributeLocation = gl.getAttribLocation(
        program,
        'vertexPosition',
    );

    const textureAttributeLocation = gl.getAttribLocation(
        program,
        'vertTextureCoords',
    );

    if (vertexPositionAttributeLocation < 0) {
        console.error(`Failed to get attribute location`);
        return;
    }

    const coordsUniform = gl.getUniformLocation(program, 'coords');
    const sizeUniform = gl.getUniformLocation(program, 'size');
    const canvasSizeUniform = gl.getUniformLocation(program, 'canvasSize');

    if (
        coordsUniform === null ||
        sizeUniform === null ||
        canvasSizeUniform === null
    ) {
        console.error(
            `Failed to get uniforms location`,
            `coords: ${coordsUniform !== null}`,
            `size: ${sizeUniform !== null}`,
            `canvasSize: ${canvasSizeUniform !== null}`,
        );
        return;
    }

    return {
        program: program,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        positionAttrLocation: vertexPositionAttributeLocation,
        textureAttrLocation: textureAttributeLocation,
        coordsUniform: coordsUniform,
        sizeUniform: sizeUniform,
        canvasSizeUniform: canvasSizeUniform,
    };
}

// Attaches shaders to the program
export function attachShaders(
    gl: WebGL2RenderingContext,
    program: WebGLProgram,
    shaders: WebGLShader[],
) {
    shaders.forEach((shader) => {
        gl.attachShader(program, shader);
    });
}
