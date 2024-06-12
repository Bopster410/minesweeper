export {
    generateField,
    openAdjacentFields,
    openBombs,
    openFlags,
    openFullField,
    drawEmptyField,
    updateField,
    getFieldSegment,
} from './field';
export {
    getClickedCoords,
    processClick,
    getClickedObject,
    rightClick,
    moveVisibleArea,
    pressTile,
} from './clicks';

export function checkVictory(
    bombsLeft: number,
    noBombsFields: number,
    setVictory: () => void,
) {
    if (bombsLeft === 0 && noBombsFields === 0) {
        setVictory();
    }
}
