import canvasTmpl from './index.template.pug';
import './index.style.scss';
import { Component } from '@/shared/@types/index.component';
import { CanvasProps, Coords } from './index.types';
import {
    bufferStaticData,
    clearBuffers,
    clearColor,
    createTexture,
    fullCanvasViewport,
    initNewBuffer,
    initProgram,
    initTwoBufferVao,
    loadTextureFile,
} from '../lib';
import { Color } from '../lib/index.types';

export type { Coords } from './index.types';
export type VaoInfo = {
    vao: WebGLVertexArrayObject;
    totalVertices: number;
    textureData: Float32Array;
    textureBuffer: WebGLBuffer;
};

export class Canvas extends Component<HTMLCanvasElement, CanvasProps> {
    protected renderingContext: WebGL2RenderingContext;
    protected program: WebGLProgram;
    protected positionAttributeLocation: number;
    protected textureAttributeLocation: number;
    protected vertexShader: WebGLShader;
    protected fragmentShader: WebGLShader;
    protected coordsUniform: WebGLUniformLocation;
    protected sizeUniform: WebGLUniformLocation;
    protected canvasSizeUniform: WebGLUniformLocation;
    protected positionBuffers: Map<number, WebGLBuffer>;
    protected objects: Map<
        string,
        {
            vao: VaoInfo;
            coords: Coords;
            size: number;
            texture: WebGLTexture;
            textureCoords: number[];
        }
    >;

    constructor(parent: Element, props: CanvasProps) {
        super(parent, canvasTmpl, props);
        this.objects = new Map();
        this.positionBuffers = new Map();
        this.initWebGL();
    }

    protected initWebGL() {
        this.renderingContext = this.htmlElement.getContext('webgl2');
        const data = initProgram(this.renderingContext);
        this.program = data.program;
        this.positionAttributeLocation = data.positionAttrLocation;
        this.textureAttributeLocation = data.textureAttrLocation;
        this.vertexShader = data.vertexShader;
        this.fragmentShader = data.fragmentShader;
        this.coordsUniform = data.coordsUniform;
        this.sizeUniform = data.sizeUniform;
        this.canvasSizeUniform = data.canvasSizeUniform;

        this.renderingContext.pixelStorei(
            this.renderingContext.UNPACK_FLIP_Y_WEBGL,
            true,
        );

        // Output merger
        this.htmlElement.width = this.htmlElement.clientWidth;
        this.htmlElement.height = this.htmlElement.clientHeight;

        this.positionBuffers.set(
            3,
            initNewBuffer(
                this.renderingContext,
                new Float32Array([-0.5, -0.5, 0.0, 0.5, 0.5, -0.5]),
            ),
        );

        this.positionBuffers.set(
            6,
            initNewBuffer(
                this.renderingContext,
                new Float32Array([-1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, 1]),
            ),
        );
    }

    createNewVao(totalVertices: number): VaoInfo {
        if (!this.positionBuffers.has(totalVertices)) {
            return null;
        }

        const textureData = new Float32Array(totalVertices * 2);
        const textureBuffer = this.renderingContext.createBuffer();

        return {
            vao: initTwoBufferVao(
                this.renderingContext,
                this.positionBuffers.get(totalVertices),
                textureBuffer,
                this.positionAttributeLocation,
                this.textureAttributeLocation,
            ),
            totalVertices: totalVertices,
            textureData: textureData,
            textureBuffer: textureBuffer,
        };
    }

    createNewTexture(pixels: TexImageSource, width: number, height: number) {
        return createTexture(this.renderingContext, pixels, width, height);
    }

    async createNewTextureFromFile(fileName: string) {
        const image = await loadTextureFile(fileName);
        return createTexture(
            this.renderingContext,
            image,
            image.width,
            image.height,
        );
    }

    addObject(
        name: string,
        vao: VaoInfo,
        params: {
            size: number;
            coords: Coords;
            textureCoords: number[];
        },
        texture: WebGLTexture,
    ) {
        this.objects.set(name, {
            vao: vao,
            size: params.size,
            coords: params.coords,
            texture: texture,
            textureCoords: params.textureCoords,
        });
    }

    updateObject(
        name: string,
        params: {
            size?: number;
            coords?: Coords;
            textureCoords?: number[];
        },
    ) {
        if (!this.objects.has(name)) {
            return;
        }

        this.objects.get(name).coords =
            params.coords ?? this.objects.get(name).coords;

        this.objects.get(name).size =
            params.size ?? this.objects.get(name).size;

        this.objects.get(name).textureCoords =
            params.textureCoords ?? this.objects.get(name).textureCoords;
    }

    draw() {
        this.clearColor();
        this.clearBuffers();
        fullCanvasViewport(this.renderingContext, this.htmlElement);

        this.renderingContext.useProgram(this.program);

        this.renderingContext.uniform2f(
            this.canvasSizeUniform,
            this.htmlElement.width,
            this.htmlElement.height,
        );

        // Render all objects
        this.objects.forEach((info) => {
            this.renderingContext.uniform1f(this.sizeUniform, info.size);
            this.renderingContext.uniform2f(
                this.coordsUniform,
                info.coords.x,
                info.coords.y,
            );
            this.renderingContext.bindVertexArray(info.vao.vao);

            info.vao.textureData.set(info.textureCoords);
            bufferStaticData(
                this.renderingContext,
                info.vao.textureBuffer,
                info.vao.textureData,
            );

            this.renderingContext.bindTexture(
                this.renderingContext.TEXTURE_2D,
                info.texture,
            );

            this.renderingContext.drawArrays(
                this.renderingContext.TRIANGLES,
                0,
                info.vao.totalVertices,
            );
        });
    }

    clearColor(color?: Color) {
        if (this.props.clearColor !== color && color !== undefined) {
            this.props.clearColor = color;
        }

        clearColor(this.renderingContext, color ?? this.props.clearColor);
    }

    clearBuffers() {
        clearBuffers(this.renderingContext);
    }
}