import './index.style.scss';
import appTmpl from './index.template.pug';
import { Component } from '@/shared/@types/index.component';
import { Canvas } from '@/shared/canvas';
import { setDarkTheme, setLightTheme, Theme } from '../styles';
import { Button, getDarkLightBtn, getSlidersBtn } from '@/shared/uikit/button';
import { toast } from '@/shared/uikit/toast';
import { Menu } from '@/widgets/menu';
import { getGameFieldCanvas, GameSave } from '@/widgets/gameField';
import {
    loadLocally,
    loadTextures,
    loadTheme,
    saveLocally,
    saveTextures,
    saveTheme,
} from '../saves';
import {
    MAX_RENDERING_WIDTH,
    MAX_VISIBLE_HEIGHT,
} from '@/widgets/gameField/ui/index.constants';

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
    protected footerElement: Element;
    protected changeThemeBtn: Button;
    protected currentTheme: Theme;
    protected save: GameSave;
    protected getSave: () => GameSave;
    protected loadSave: (save: GameSave) => Promise<boolean>;
    protected successMsg: (header: string, text?: string) => void;
    protected errorMsg: (header: string, text?: string) => void;

    constructor(parent: Element) {
        super(parent, appTmpl, { className: 'app' });
    }

    protected updateCanvasSize(params: {
        width?: number;
        height?: number;
        bombs?: number;
    }) {
        const hugeSize =
            params.height > MAX_VISIBLE_HEIGHT ||
            params.width > MAX_RENDERING_WIDTH;
        if (hugeSize) {
            (this.footerElement as HTMLDivElement).style.opacity = '1';
        }
        if (!hugeSize) {
            (this.footerElement as HTMLDivElement).style.opacity = '0';
        }

        this.updateSize({
            width: params.width,
            height: params.height,
            bombs: params.bombs,
        });
    }

    // eslint-disable-next-line max-lines-per-function
    protected componentDidMount() {
        this.menu.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.menu.close();
            const data = this.menu.data;
            this.updateCanvasSize(data);
        });

        this.menu.changeThemeElement.addEventListener(
            'input',
            (e: InputEvent) => {
                const name = this.menu.changeTheme(
                    (e.target as HTMLInputElement).value,
                );

                if (name) {
                    this.changeTheme(name);
                    saveTextures(name);
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

            saveTheme(this.currentTheme);
        });

        this.menu.saveBtn.htmlElement.addEventListener('click', () => {
            const save = this.getSave();
            if (save !== null) {
                saveLocally(save);
                this.successMsg('Игра сохранена!');
            }
            if (save === null) {
                this.errorMsg('Не удалось сохранить игру');
            }
        });

        this.menu.loadBtn.htmlElement.addEventListener('click', () => {
            const save = loadLocally();
            if (save === undefined) {
                return;
            }

            this.menu.setDisabled();
            this.menu.loadBtn.startLoading();

            this.loadSave(save)
                .then((ok) => {
                    if (ok) this.successMsg('Сохранения загружены!');
                    if (!ok) this.errorMsg('Не удалось загрузить сохранения');
                })
                .catch((e) => {
                    this.errorMsg('Не удалось загрузить сохранение');
                })
                .finally(() => {
                    this.menu.setEnabled();
                    this.menu.loadBtn.stopLoading();
                });
        });
    }

    protected render() {
        this.renderTemplate();

        this.mainElement =
            this.htmlElement.getElementsByClassName('app__main')[0];
        this.headerElement =
            this.htmlElement.getElementsByClassName('app__header')[0];
        this.footerElement =
            this.htmlElement.getElementsByClassName('app__footer')[0];

        this.mainElement.classList.add('app__main--loading');

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

        this.currentTheme = (loadTheme() as Theme) ?? 'dark';
        if (this.currentTheme === 'dark') setDarkTheme();
        if (this.currentTheme === 'light') setLightTheme();

        const newToast = toast();
        this.successMsg = newToast.addSuccess;
        this.errorMsg = newToast.addError;

        const textures =
            (loadTextures() as 'default' | 'forest' | 'mine' | 'forest2') ??
            'default';

        getGameFieldCanvas(this.mainElement, 'app__game-canvas', textures)
            .then((data) => {
                this.gameCanvas = data.canvas;
                this.draw = data.drawField;
                this.changeTheme = data.changeTexture;
                this.updateSize = data.update;
                this.loadSave = data.loadSave;
                this.getSave = data.getSaveInfo;

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
                            bombs: 5,
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

                this.menu.changeTheme(textures);
                const params = this.menu.choosePreset('intermediate');
                if (params !== null) {
                    this.updateCanvasSize(params);
                }

                data.drawField();

                this.mainElement.classList.remove('app__main--loading');

                this.componentDidMount();
            })
            .catch((e) => {});
    }
}
