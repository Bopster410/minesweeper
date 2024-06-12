import canvasTmpl from './index.template.pug';
import './index.style.scss';
import { Component } from '@/shared/@types/index.component';
import {
    BufferMethods,
    CanvasProps,
    Coords,
    RenderingBufferInfo,
    Size,
    SquareCoords,
} from './index.types';
import {
    bufferStaticData,
    clearBuffers,
    clearColor,
    createTexture,
    fullCanvasViewport,
    initProgram,
    loadTextureFile,
    unBindBuffer,
} from '../lib';
import { Color } from '../lib/index.types';
import { MOUSE_SENSIVITY } from './index.constants';
import {
    TOTAL_VERTICES,
    STEP,
    TOTAL_VERTEX_VALUES,
    OFFSET,
    DATA_SIZE,
} from './index.constants';

export type { Coords } from './index.types';

export type { BufferMethods };
export type VaoInfo = {
    vao: WebGLVertexArrayObject;
    totalVertices: number;
    textureData: Float32Array;
    textureBuffer: WebGLBuffer;
};

export type Position = 'fixed' | 'static';

export class Canvas extends Component<HTMLCanvasElement, CanvasProps> {
    protected gl: WebGL2RenderingContext;
    protected program: WebGLProgram;
    protected positionAttributeLocation: number;
    protected textureAttributeLocation: number;
    protected coordsAttributeLocation: number;
    protected sizeAttributeLocation: number;
    protected vertexShader: WebGLShader;
    protected fragmentShader: WebGLShader;
    protected canvasSizeUniform: WebGLUniformLocation;
    protected offsetUniform: WebGLUniformLocation;
    protected zIndexUniform: WebGLUniformLocation;
    protected renderingBuffers: Map<string, RenderingBufferInfo>;
    protected drawBuffer: WebGLBuffer;
    protected lastMouseCoords: Coords;
    protected offset: Coords;
    protected lastMouseMove: boolean;
    protected firstMouseCoords: Coords;

    constructor(parent: Element, props: CanvasProps) {
        super(parent, canvasTmpl, props);
        this.props.scenePosition = this.props.scenePosition ?? {
            coords: {
                x: 0,
                y: 0,
            },
            size: {
                width: props.width,
                height: props.height,
            },
        };
        this.props.visiblePartPosition = this.props.visiblePartPosition ?? {
            coords: {
                x: 0,
                y: 0,
            },
            size: {
                width: props.width,
                height: props.height,
            },
        };
        this.renderingBuffers = new Map();
        this.lastMouseCoords = null;
        this.firstMouseCoords = null;
        this.clearOffset();
        this.initWebGL();
        this.componentDidMount();
    }

    protected initWebGL() {
        this.gl = this.htmlElement.getContext('webgl2');
        const data = initProgram(this.gl);
        this.program = data.program;
        this.positionAttributeLocation = data.positionAttrLocation;
        this.textureAttributeLocation = data.textureAttrLocation;
        this.vertexShader = data.vertexShader;
        this.fragmentShader = data.fragmentShader;
        this.coordsAttributeLocation = data.coordsAttributeLocation;
        this.sizeAttributeLocation = data.sizeAttributeLocation;
        this.canvasSizeUniform = data.canvasSizeUniform;
        this.offsetUniform = data.offsetUniform;
        this.zIndexUniform = data.zIndexUniform;
        this.drawBuffer = this.gl.createBuffer();

        this.gl.enable(this.gl.DEPTH_TEST);

        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);

        // Output merger
        this.htmlElement.width = this.htmlElement.clientWidth;
        this.htmlElement.height = this.htmlElement.clientHeight;
    }

    protected componentDidMount() {
        this.htmlElement.addEventListener('mousedown', (e) => {
            this.firstMouseCoords = {
                x: e.offsetX,
                y: e.offsetY,
            };
            this.lastMouseCoords = {
                x: e.offsetX,
                y: e.offsetY,
            };
        });

        this.htmlElement.addEventListener('mousemove', (e) => {
            if (this.firstMouseCoords === null) {
                return;
            }

            const x = (e.offsetX - this.lastMouseCoords.x) * MOUSE_SENSIVITY.x;
            this.offset.x +=
                this.offset.x + x < 0 &&
                this.props.scenePosition.coords.x +
                    this.props.scenePosition.size.width +
                    this.offset.x +
                    x >=
                    this.props.visiblePartPosition.coords.x +
                        this.props.visiblePartPosition.size.width
                    ? x
                    : 0;

            const y = (this.lastMouseCoords.y - e.offsetY) * MOUSE_SENSIVITY.y;
            this.offset.y +=
                this.offset.y + y < 0 &&
                this.props.scenePosition.coords.y +
                    this.props.scenePosition.size.height +
                    this.offset.y +
                    y >=
                    this.props.visiblePartPosition.coords.y +
                        this.props.visiblePartPosition.size.height
                    ? y
                    : 0;

            this.lastMouseCoords = {
                x: e.offsetX,
                y: e.offsetY,
            };
        });

        this.htmlElement.addEventListener('mouseleave', () => {
            this.lastMouseCoords = null;
            this.firstMouseCoords = null;
            this.lastMouseMove = true;
        });

        this.htmlElement.addEventListener('mouseup', (e) => {
            if (this.firstMouseCoords === null) {
                this.lastMouseMove = false;
                return;
            }

            this.lastMouseMove =
                Math.abs(e.offsetX - this.firstMouseCoords.x) > 1 ||
                Math.abs(e.offsetY - this.firstMouseCoords.y) > 1;
            this.lastMouseCoords = null;
            this.firstMouseCoords = null;
        });
    }

    get mouseMoved() {
        return this.lastMouseMove;
    }

    get sceneOffset() {
        return this.offset;
    }

    clearOffset() {
        this.offset = {
            x: 0,
            y: 0,
        };
    }

    setScenePosition(coords: Coords, size: Size) {
        this.props.scenePosition.coords = coords;
        this.props.scenePosition.size = size;
    }

    setVisiblePosition(coords: Coords, size: Size) {
        this.props.visiblePartPosition.coords = coords;
        this.props.visiblePartPosition.size = size;
    }

    protected addNewBuffer(
        bufferName: string,
        texture: WebGLTexture,
        position?: Position,
        zIndex?: number,
    ) {
        if (this.renderingBuffers.has(bufferName)) return false;

        this.renderingBuffers.set(bufferName, {
            bufferValues: [],
            texture: texture,
            objects: new Map(),
            position: position ?? 'fixed',
            zIndex: zIndex ?? 0.0,
        });

        return true;
    }

    protected addObjectToBuffer(
        bufferName: string,
        name: string,
        params: {
            size: Size;
            coords: Coords;
            textureCoords: SquareCoords;
        },
        quantity?: number,
    ) {
        if (!this.renderingBuffers.has(bufferName)) return;

        if (this.renderingBuffers.get(bufferName).objects.has(name)) return;

        quantity = quantity ?? 1;

        this.renderingBuffers.get(bufferName).objects.set(name, {
            index: this.renderingBuffers.get(bufferName).objects.size,
            size: params.size,
            coords: params.coords,
            textureCoords: params.textureCoords,
        });

        for (let i = 0; i < quantity; i++) {
            this.renderingBuffers
                .get(bufferName)
                .bufferValues.push(
                    -1,
                    1,
                    params.textureCoords.topLeft.x,
                    params.textureCoords.topLeft.y,
                    params.coords.x,
                    params.coords.y,
                    params.size.width,
                    params.size.height,
                    -1,
                    -1,
                    params.textureCoords.bottomLeft.x,
                    params.textureCoords.bottomLeft.y,
                    params.coords.x,
                    params.coords.y,
                    params.size.width,
                    params.size.height,
                    1,
                    -1,
                    params.textureCoords.bottomRight.x,
                    params.textureCoords.bottomRight.y,
                    params.coords.x,
                    params.coords.y,
                    params.size.width,
                    params.size.height,
                    1,
                    -1,
                    params.textureCoords.bottomRight.x,
                    params.textureCoords.bottomRight.y,
                    params.coords.x,
                    params.coords.y,
                    params.size.width,
                    params.size.height,
                    1,
                    1,
                    params.textureCoords.topRight.x,
                    params.textureCoords.topRight.y,
                    params.coords.x,
                    params.coords.y,
                    params.size.width,
                    params.size.height,
                    -1,
                    1,
                    params.textureCoords.topLeft.x,
                    params.textureCoords.topLeft.y,
                    params.coords.x,
                    params.coords.y,
                    params.size.width,
                    params.size.height,
                );
        }
    }

    protected clearBuffer(bufferName: string) {
        if (!this.renderingBuffers.has(bufferName)) return;

        this.renderingBuffers.get(bufferName).objects.clear();
        this.renderingBuffers.get(bufferName).bufferValues = [];
    }

    protected updateCoords(bufferName: string, name: string, coords: Coords) {
        if (!this.renderingBuffers.has(bufferName)) return;

        if (!this.renderingBuffers.get(bufferName).objects.has(name)) return;

        this.renderingBuffers.get(bufferName).objects.get(name).coords = coords;
        const index = this.renderingBuffers
            .get(bufferName)
            .objects.get(name).index;

        for (let i = 0; i < TOTAL_VERTICES; i++) {
            this.renderingBuffers.get(bufferName).bufferValues[
                index * STEP + TOTAL_VERTEX_VALUES * i + OFFSET.X
            ] = coords.x;
            this.renderingBuffers.get(bufferName).bufferValues[
                index * STEP + TOTAL_VERTEX_VALUES * i + OFFSET.Y
            ] = coords.y;
        }
    }

    protected updateSize(bufferName: string, name: string, size: Size) {
        if (!this.renderingBuffers.has(bufferName)) return;

        if (!this.renderingBuffers.get(bufferName).objects.has(name)) return;

        this.renderingBuffers.get(bufferName).objects.get(name).size = size;
        const index = this.renderingBuffers
            .get(bufferName)
            .objects.get(name).index;

        for (let i = 0; i < TOTAL_VERTICES; i++) {
            this.renderingBuffers.get(bufferName).bufferValues[
                index * STEP + TOTAL_VERTEX_VALUES * i + OFFSET.WIDTH
            ] = size.width;
            this.renderingBuffers.get(bufferName).bufferValues[
                index * STEP + TOTAL_VERTEX_VALUES * i + OFFSET.HEIGHT
            ] = size.height;
        }
    }

    protected updateTextureCoords(
        bufferName: string,
        name: string,
        coords: SquareCoords,
    ) {
        if (!this.renderingBuffers.has(bufferName)) return;

        if (!this.renderingBuffers.get(bufferName).objects.has(name)) return;

        this.renderingBuffers.get(bufferName).objects.get(name).textureCoords =
            coords;
        const index = this.renderingBuffers
            .get(bufferName)
            .objects.get(name).index;

        // Top left
        this.renderingBuffers.get(bufferName).bufferValues[
            index * STEP + TOTAL_VERTEX_VALUES * 0 + OFFSET.TEXTURE_X
        ] = coords.topLeft.x;
        this.renderingBuffers.get(bufferName).bufferValues[
            index * STEP + TOTAL_VERTEX_VALUES * 0 + OFFSET.TEXTURE_Y
        ] = coords.topLeft.y;

        // Bottom left
        this.renderingBuffers.get(bufferName).bufferValues[
            index * STEP + TOTAL_VERTEX_VALUES * 1 + OFFSET.TEXTURE_X
        ] = coords.bottomLeft.x;
        this.renderingBuffers.get(bufferName).bufferValues[
            index * STEP + TOTAL_VERTEX_VALUES * 1 + OFFSET.TEXTURE_Y
        ] = coords.bottomLeft.y;

        // Bottom right
        this.renderingBuffers.get(bufferName).bufferValues[
            index * STEP + TOTAL_VERTEX_VALUES * 2 + OFFSET.TEXTURE_X
        ] = coords.bottomRight.x;
        this.renderingBuffers.get(bufferName).bufferValues[
            index * STEP + TOTAL_VERTEX_VALUES * 2 + OFFSET.TEXTURE_Y
        ] = coords.bottomRight.y;

        // Bottom right
        this.renderingBuffers.get(bufferName).bufferValues[
            index * STEP + TOTAL_VERTEX_VALUES * 3 + OFFSET.TEXTURE_X
        ] = coords.bottomRight.x;
        this.renderingBuffers.get(bufferName).bufferValues[
            index * STEP + TOTAL_VERTEX_VALUES * 3 + OFFSET.TEXTURE_Y
        ] = coords.bottomRight.y;

        // Top right
        this.renderingBuffers.get(bufferName).bufferValues[
            index * STEP + TOTAL_VERTEX_VALUES * 4 + OFFSET.TEXTURE_X
        ] = coords.topRight.x;
        this.renderingBuffers.get(bufferName).bufferValues[
            index * STEP + TOTAL_VERTEX_VALUES * 4 + OFFSET.TEXTURE_Y
        ] = coords.topRight.y;

        // Top left
        this.renderingBuffers.get(bufferName).bufferValues[
            index * STEP + TOTAL_VERTEX_VALUES * 5 + OFFSET.TEXTURE_X
        ] = coords.topLeft.x;
        this.renderingBuffers.get(bufferName).bufferValues[
            index * STEP + TOTAL_VERTEX_VALUES * 5 + OFFSET.TEXTURE_Y
        ] = coords.topLeft.y;
    }

    protected updateObject(
        bufferName: string,
        name: string,
        params: {
            size?: Size;
            coords?: Coords;
            textureCoords?: SquareCoords;
        },
    ) {
        if (!this.renderingBuffers.has(bufferName)) return;

        if (!this.renderingBuffers.get(bufferName).objects.has(name)) return;

        const object = this.renderingBuffers.get(bufferName).objects.get(name);

        if (
            params.coords &&
            params?.coords !==
                this.renderingBuffers.get(bufferName).objects.get(name).coords
        ) {
            this.updateCoords(bufferName, name, params.coords);
        }

        if (params.size && params?.size !== object.size) {
            this.updateSize(bufferName, name, params.size);
        }

        if (
            params.textureCoords &&
            params?.textureCoords !== object.textureCoords
        ) {
            this.updateTextureCoords(bufferName, name, params.textureCoords);
        }
    }

    protected updateTexture(bufferName: string, texture: WebGLTexture) {
        if (!this.renderingBuffers.has(bufferName)) return;

        this.renderingBuffers.get(bufferName).texture = texture;
    }

    createNewTexture(
        pixels: TexImageSource,
        width: number,
        height: number,
        mipmap?: boolean,
    ) {
        return createTexture(this.gl, pixels, width, height, mipmap);
    }

    set width(width: number) {
        if (width > 0) {
            this.htmlElement.width = width;
            this.props.width = width;
        }
    }

    set height(height: number) {
        if (height > 0) {
            this.htmlElement.height = height;
            this.props.height = height;
        }
    }

    get width() {
        return this.props.width;
    }

    get height() {
        return this.props.height;
    }

    get totalObjects() {
        let total = 0;
        this.renderingBuffers.forEach((buffer) => {
            total += buffer.objects.size;
        });
        return total;
    }

    async createNewTextureFromFile(fileName: string, mipmap?: boolean) {
        const image = await loadTextureFile(fileName);
        return createTexture(this.gl, image, image.width, image.height, mipmap);
    }

    async loadAllTextures(
        config: { [name: string]: string },
        mipmap?: boolean,
    ) {
        const textures = new Map<string, WebGLTexture>();
        for (const [name, src] of Object.entries(config)) {
            textures.set(
                name,
                await this.createNewTextureFromFile(src, mipmap),
            );
        }
        return textures;
    }

    // Creates new buffer and public methods to work with it
    createBuffer(
        bufferName: string,
        texture: WebGLTexture,
        position?: Position,
        zIndex?: number,
    ): BufferMethods {
        if (!this.addNewBuffer(bufferName, texture, position, zIndex))
            return null;

        return {
            addObject: (
                name: string,
                params: {
                    size: Size;
                    coords: Coords;
                    textureCoords: SquareCoords;
                },
            ) => {
                this.addObjectToBuffer(bufferName, name, params);
            },

            updateObject: (
                name: string,
                params: {
                    size?: Size;
                    coords?: Coords;
                    textureCoords?: SquareCoords;
                },
            ) => {
                this.updateObject(bufferName, name, params);
            },

            updateTexture: (texture: WebGLTexture) => {
                this.updateTexture(bufferName, texture);
            },

            clear: () => {
                this.clearBuffer(bufferName);
            },
        };
    }

    removeBuffer(bufferName: string) {
        if (this.renderingBuffers.has(bufferName)) {
            this.clearBuffer(bufferName);
            this.renderingBuffers.delete(bufferName);
        }
    }

    clear() {
        this.clearColor();
        this.clearBuffers();
    }

    draw() {
        fullCanvasViewport(this.gl, this.htmlElement);
        this.gl.useProgram(this.program);
        this.clear();

        this.gl.uniform2f(
            this.canvasSizeUniform,
            this.htmlElement.width,
            this.htmlElement.height,
        );

        this.renderingBuffers.forEach((info) => {
            this.gl.uniform2f(
                this.offsetUniform,
                info.position === 'fixed' ? 0 : this.offset.x,
                info.position === 'fixed' ? 0 : this.offset.y,
            );

            this.gl.uniform1f(this.zIndexUniform, info.zIndex);

            bufferStaticData(
                this.gl,
                this.drawBuffer,
                new Float32Array(info.bufferValues),
            );

            this.gl.bindTexture(this.gl.TEXTURE_2D, info.texture);

            this.gl.vertexAttribPointer(
                this.positionAttributeLocation,
                2,
                this.gl.FLOAT,
                false,
                DATA_SIZE * TOTAL_VERTEX_VALUES,
                0,
            );
            this.gl.vertexAttribPointer(
                this.textureAttributeLocation,
                2,
                this.gl.FLOAT,
                false,
                DATA_SIZE * TOTAL_VERTEX_VALUES,
                OFFSET.TEXTURE_X * DATA_SIZE,
            );
            this.gl.vertexAttribPointer(
                this.sizeAttributeLocation,
                2,
                this.gl.FLOAT,
                false,
                DATA_SIZE * TOTAL_VERTEX_VALUES,
                OFFSET.WIDTH * DATA_SIZE,
            );
            this.gl.vertexAttribPointer(
                this.coordsAttributeLocation,
                2,
                this.gl.FLOAT,
                false,
                DATA_SIZE * TOTAL_VERTEX_VALUES,
                OFFSET.X * DATA_SIZE,
            );

            this.gl.enableVertexAttribArray(this.positionAttributeLocation);
            this.gl.enableVertexAttribArray(this.coordsAttributeLocation);
            this.gl.enableVertexAttribArray(this.sizeAttributeLocation);
            this.gl.enableVertexAttribArray(this.textureAttributeLocation);

            this.gl.drawArrays(
                this.gl.TRIANGLES,
                0,
                info.objects.size * TOTAL_VERTICES,
            );
            unBindBuffer(this.gl);
        });
    }

    clearColor(color?: Color) {
        if (this.props.clearColor !== color && color !== undefined) {
            this.props.clearColor = color;
        }

        clearColor(this.gl, this.props.clearColor);
    }

    set color(color: Color) {
        this.props.clearColor = color;
    }

    clearBuffers() {
        clearBuffers(this.gl);
    }
}
