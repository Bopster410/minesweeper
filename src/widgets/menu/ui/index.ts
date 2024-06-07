import './index.style.scss';
import menuTmpl from './index.template.pug';
import { Component } from '@/shared/@types/index.component';
import { MenuProps } from './index.types';
import { ChooseSizeMenu } from './chooseSize';
import { ChooseThemeMenu } from './theme';
import { insertDarkOverlay } from '@/shared/lib/darkOverlay';
import { isClickOut } from '@/shared/lib/clickOut';

export class Menu extends Component<HTMLDivElement, MenuProps> {
    protected chooseSize: ChooseSizeMenu;
    protected chooseTheme: ChooseThemeMenu;
    protected overlay: HTMLDivElement;
    protected width: string;
    opened: boolean;
    constructor(parent: Element, props: MenuProps) {
        super(parent, menuTmpl, props);
    }

    open() {
        this.overlay = insertDarkOverlay(this.parent);
        this.width = '400px';
        this.htmlElement.animate([{ width: this.width, opacity: 1 }], {
            duration: 300,
            easing: 'ease',
        }).onfinish = () => {
            this.htmlElement.style.width = this.width;
            this.htmlElement.style.opacity = '1';
            this.htmlElement.style.overflow = 'auto';
            this.opened = true;
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            this.overlay.addEventListener('click', (e) => {
                if (isClickOut(this.htmlElement, e)) {
                    this.close();
                }
            });
        };
    }

    close() {
        this.overlay.remove();
        this.htmlElement.style.overflow = '';
        this.htmlElement.animate([{ width: 0, opacity: 0 }], {
            duration: 300,
            easing: 'ease',
        }).onfinish = () => {
            document.getElementsByTagName('body')[0].style.overflow = '';
            this.htmlElement.style.width = '0';
            this.htmlElement.style.opacity = '0';
            this.opened = false;
        };
    }

    protected render() {
        this.renderTemplate();
        this.chooseSize = new ChooseSizeMenu(this.htmlElement, {
            className: 'menu__choose-size',
            presets: this.props.presets,
        });
        if (this.props.themes) {
            this.chooseTheme = new ChooseThemeMenu(this.htmlElement, {
                className: 'menu__choose-theme',
                themes: this.props.themes,
            });
        }
    }

    choosePreset(name: string) {
        return this.chooseSize.choosePreset(name);
    }

    changeTheme(name: string) {
        return this.chooseTheme.changeTheme(name);
    }

    get form() {
        return this.chooseSize.htmlElement;
    }

    get data() {
        return this.chooseSize.data;
    }

    get changeThemeElement() {
        return this.chooseTheme.htmlElement;
    }
}
