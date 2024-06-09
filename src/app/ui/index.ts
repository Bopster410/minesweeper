import './index.style.scss';
import { getGameFieldCanvas } from '@/widgets/gameField';
import appTmpl from './index.template.pug';
import { Component } from '@/shared/@types/index.component';
import { Canvas } from '@/shared/canvas';
import { Menu } from '@/widgets/menu';

export class App extends Component<HTMLDivElement> {
    protected gameCanvas: Canvas;
    protected menu: Menu;
    protected draw: () => void;
    protected changeTheme: (name: string) => void;
    protected updateSize: (params: {
        width?: number;
        height?: number;
        bombs?: number;
    }) => void;
    protected mainElement: Element;
    protected headerElement: Element;

    constructor(parent: Element) {
        super(parent, appTmpl, { className: 'app' });
    }

    protected componentDidMount() {
        this.menu.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = this.menu.data;
            this.updateSize({
                width: data.width,
                height: data.height,
                bombs: data.bombs,
            });
            this.menu.close();
        });

        this.menu.changeThemeElement.addEventListener(
            'input',
            (e: InputEvent) => {
                const name = this.menu.changeTheme(
                    (e.target as HTMLInputElement).value,
                );

                if (name) {
                    this.changeTheme(name);
                    this.draw();
                }
            },
        );

        this.htmlElement
            .getElementsByClassName('open-menu-btn')[0]
            .addEventListener('click', () => {
                this.menu.open();
            });
    }

    protected render() {
        this.renderTemplate();
        this.mainElement =
            this.htmlElement.getElementsByClassName('app__main')[0];
        this.headerElement =
            this.htmlElement.getElementsByClassName('app__header')[0];

        getGameFieldCanvas(this.mainElement, 'app__game-canvas')
            .then((data) => {
                this.gameCanvas = data.canvas;
                this.draw = data.drawField;
                this.changeTheme = data.changeTexture;
                this.updateSize = data.update;
                this.menu = new Menu(this.headerElement, {
                    className: 'app__menu',
                    presets: [
                        {
                            width: 5,
                            height: 5,
                            bombs: 8,
                            name: 'beginner',
                            text: 'Новичок',
                        },
                        {
                            width: 10,
                            height: 10,
                            bombs: 16,
                            name: 'intermediate',
                            text: 'Продолжающий',
                        },
                        {
                            width: 16,
                            height: 16,
                            bombs: 32,
                            name: 'pro',
                            text: 'Профессионал',
                        },
                    ],
                    themes: [
                        { name: 'default', text: 'Классика' },
                        { name: 'forest', text: 'Лесная' },
                    ],
                });

                this.changeTheme('default');
                this.menu.changeTheme('default');
                const params = this.menu.choosePreset('intermediate');
                if (params !== null) {
                    this.updateSize(params);
                }

                this.componentDidMount();
            })
            .catch((e) => {
                console.log(e);
            });
    }
}
