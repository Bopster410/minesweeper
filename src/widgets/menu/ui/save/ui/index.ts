import { Component } from '@/shared/@types/index.component';
import tmpl from './index.template.pug';
import './index.style.scss';
import { SaveProps } from './index.types';
import { Button } from '@/shared/uikit/button';

export class SavesMenu extends Component<HTMLFormElement, SaveProps> {
    saveGameBtn: Button;
    loadGameBtn: Button;

    constructor(parent: Element, props: SaveProps) {
        super(parent, tmpl, props);
    }
    setDisabled() {
        this.saveGameBtn.setDisabled();
        this.loadGameBtn.setDisabled();
    }

    setEnabled() {
        this.saveGameBtn.setEnabled();
        this.loadGameBtn.setEnabled();
    }

    protected render() {
        this.renderTemplate();
        this.loadGameBtn = new Button(this.htmlElement, {
            className: 'saves__load-game-btn',
            type: 'button',
            btnText: 'Загрузить',
            btnStyle: 'darkLight',
        });
        this.saveGameBtn = new Button(this.htmlElement, {
            className: 'saves__save-game-btn',
            type: 'button',
            btnText: 'Сохранить',
            btnStyle: 'darkLight',
        });
    }
}
