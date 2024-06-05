import menuTmpl from './index.template.pug';
import { Component } from '@/shared/@types/index.component';
import { MenuProps } from './index.types';

export class Menu extends Component<HTMLDivElement, MenuProps> {
    constructor(parent: Element, props: MenuProps) {
        super(parent, menuTmpl, props);
    }

    protected componentDidMount() {
        this.htmlElement
            .getElementsByClassName('menu__open-btn')[0]
            .addEventListener('click', () => {
                this.props.openField();
            });
    }

    protected render() {
        this.renderTemplate();

        this.componentDidMount();
    }
}
