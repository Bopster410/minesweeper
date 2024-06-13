import { VARIABLES_DARK, VARIABLES_LIGHT } from './index.constants';
import './index.style.scss';
import { Variables } from './index.types';

export type { Theme } from './index.types';

function setTheme(variables: Variables) {
    document.documentElement.style.setProperty(
        '--background-color',
        variables.backgroundColor,
    );

    document.documentElement.style.setProperty(
        '--font-color',
        variables.fontColor,
    );

    document.documentElement.style.setProperty(
        '--font-color-secondary',
        variables.fontColorSecondary,
    );

    document.documentElement.style.setProperty(
        '--hover-color',
        variables.hoverColor,
    );
}

export function setDarkTheme() {
    setTheme(VARIABLES_DARK);
}

export function setLightTheme() {
    setTheme(VARIABLES_LIGHT);
}
