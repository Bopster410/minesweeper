import './index.style.scss';
import { getGameFieldCanvas } from '@/widgets/gameField';
import appTmpl from './index.template.pug';
import { Component } from '@/shared/@types/index.component';
import { Canvas } from '@/shared/canvas';
import { Menu } from '@/widgets/menu';
import { setDarkTheme, setLightTheme } from '../styles';
import { Button } from '@/shared/uikit/button';
import { getDarkLightBtn, getSlidersBtn } from '@/shared/uikit/button/lib';

export class App extends Component<HTMLDivElement> {
    protected gameCanvas: Canvas;
    protected menu: Menu;
    protected menuBtn: Button;
    protected draw: () => void;
    protected changeTheme: (name: string) => void;
    protected updateSize: (params: {
        width?: number;
        height?: number;
        bombs?: number;
    }) => void;
    protected mainElement: Element;
    protected headerElement: Element;
    protected changeThemeBtn: Button;
    protected currentTheme: 'dark' | 'light';

    constructor(parent: Element) {
        super(parent, appTmpl, { className: 'app' });
    }

    protected componentDidMount() {
        this.menu.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.menu.close();
            const data = this.menu.data;
            this.updateSize({
                width: data.width,
                height: data.height,
                bombs: data.bombs,
            });
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

        this.menuBtn.htmlElement.addEventListener('click', () => {
            this.menu.open();
        });

        this.changeThemeBtn.htmlElement.addEventListener('click', () => {
            const isDarkTheme = this.currentTheme === 'dark';
            if (isDarkTheme) {
                setLightTheme();
                this.currentTheme = 'light';
                this.changeThemeBtn.toggle();
            }

            if (!isDarkTheme) {
                setDarkTheme();
                this.currentTheme = 'dark';
                this.changeThemeBtn.toggle();
            }
        });
    }

    protected render() {
        this.renderTemplate();
        this.mainElement =
            this.htmlElement.getElementsByClassName('app__main')[0];
        this.headerElement =
            this.htmlElement.getElementsByClassName('app__header')[0];

        this.menuBtn = getSlidersBtn(this.headerElement, {
            className: 'app__menu-btn',
            btnStyle: 'darkLight',
            type: 'button',
        });

        this.changeThemeBtn = getDarkLightBtn(this.headerElement, {
            className: 'app__theme-btn',
            btnStyle: 'darkLight',
            type: 'button',
        });

        this.currentTheme = 'light';
        setLightTheme();

        getGameFieldCanvas(this.mainElement, 'app__game-canvas', 'default')
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
                    themes: data.availableThemes(),
                });

                this.menu.changeTheme('default');
                const params = this.menu.choosePreset('intermediate');
                if (params !== null) {
                    this.updateSize(params);
                }

                data.drawField();

                this.componentDidMount();
            })
            .catch((e) => {
                console.log(e);
            });
    }
}
