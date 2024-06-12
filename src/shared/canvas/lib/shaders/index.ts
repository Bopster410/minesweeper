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

    const coordsAttributeLocation = gl.getAttribLocation(program, 'coords');

    const sizeAttributeLocation = gl.getAttribLocation(program, 'size');

    if (vertexPositionAttributeLocation < 0) {
        console.error(`Failed to get attribute location`);
        return;
    }
    if (textureAttributeLocation < 0) {
        console.error(`Failed to get texture attribute location`);
        return;
    }
    if (coordsAttributeLocation < 0) {
        console.error(`Failed to get coords attribute location`);
        return;
    }
    if (sizeAttributeLocation < 0) {
        console.error(`Failed to get size attribute location`);
        return;
    }

    const canvasSizeUniform = gl.getUniformLocation(program, 'canvasSize');

    if (canvasSizeUniform === null) {
        console.error(`Failed to get canvas uniform location`);
        return;
    }

    const offsetUniform = gl.getUniformLocation(program, 'offset');

    if (offsetUniform === null) {
        console.error(`Failed to get offset uniforms location`);
        return;
    }
    const zIndexUniform = gl.getUniformLocation(program, 'zIndex');

    if (zIndexUniform === null) {
        console.error(`Failed to get zIndex uniforms location`);
        return;
    }

    return {
        program: program,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        positionAttrLocation: vertexPositionAttributeLocation,
        textureAttrLocation: textureAttributeLocation,
        coordsAttributeLocation: coordsAttributeLocation,
        sizeAttributeLocation: sizeAttributeLocation,
        canvasSizeUniform: canvasSizeUniform,
        offsetUniform: offsetUniform,
        zIndexUniform: zIndexUniform,
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
