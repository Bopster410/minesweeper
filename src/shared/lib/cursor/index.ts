import './resources/drag.png';

export function getCursor(htmlElement: HTMLElement) {
    return {
        setCursorPointer: () => {
            htmlElement.style.cursor = 'pointer';
        },

        setCursorDefault: () => {
            htmlElement.style.cursor = 'default';
        },

        setCursorMove: () => {
            htmlElement.style.cursor = 'url("./drag.png"), move';
        },

        setCursorLoading: () => {
            htmlElement.style.cursor = 'wait';
        },
    };
}
