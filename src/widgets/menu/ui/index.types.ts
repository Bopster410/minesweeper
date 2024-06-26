export type MenuProps = {
    className: string;
    presets?: {
        width: number;
        height: number;
        bombs: number;
        name: string;
        text: string;
    }[];
    themes?: {
        name: string;
        text: string;
    }[];
};
