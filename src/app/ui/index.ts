import { getGameFieldCanvas } from '@/widgets/gameField';
import appTmpl from './index.template.pug';
import { Component } from '@/shared/@types/index.component';
import { Canvas } from '@/shared/canvas';
import { Menu } from '@/widgets/menu';

export class App extends Component<HTMLDivElement> {
    protected gameCanvas: Canvas;
    protected menu: Menu;
    protected draw: () => void;
    protected mainElement: Element;

    constructor(parent: Element) {
        super(parent, appTmpl, { className: 'app' });
    }

    protected render() {
        this.renderTemplate();
        this.mainElement =
            this.htmlElement.getElementsByClassName('app__main')[0];

        getGameFieldCanvas(this.mainElement, 'app__game-canvas')
            .then((data) => {
                this.gameCanvas = data.canvas;
                this.draw = data.drawField;
                this.menu = new Menu(this.mainElement, {
                    className: 'app__menu',
                    openField: () => {
                        data.openField();
                    },
                });

                this.draw();
            })
            .catch(() => {});
    }
}
