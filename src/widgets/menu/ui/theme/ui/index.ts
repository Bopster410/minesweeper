import { Component } from '@/shared/@types/index.component';
import tmpl from './index.template.pug';
import './index.style.scss';
import { ChooseThemeProps } from './index.types';

export class ChooseThemeMenu extends Component<
    HTMLFormElement,
    ChooseThemeProps
> {
    constructor(parent: Element, props: ChooseThemeProps) {
        super(parent, tmpl, props);
    }

    setDisabled() {
        Array.from(this.htmlElement.getElementsByTagName('input')).forEach(
            (input) => {
                input.disabled = true;
            },
        );
    }

    setEnabled() {
        Array.from(this.htmlElement.getElementsByTagName('input')).forEach(
            (input) => {
                input.disabled = false;
            },
        );
    }

    changeTheme(name: string) {
        const input = document.getElementById(name);
        if (input === undefined || input.tagName.toLowerCase() !== 'input') {
            return null;
        }

        (input as HTMLInputElement).checked = true;
        return (input as HTMLInputElement).value;
    }
}
