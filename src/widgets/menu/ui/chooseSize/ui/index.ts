import './index.style.scss';
import tmpl from './index.template.pug';
import { Component } from '@/shared/@types/index.component';
import { ChooseSizeMenuProps } from './index.types';

export class ChooseSizeMenu extends Component<
    HTMLFormElement,
    ChooseSizeMenuProps
> {
    constructor(parent: Element, props: ChooseSizeMenuProps) {
        super(parent, tmpl, props);
    }

    protected render() {
        this.renderTemplate();
        this.componentDidMount();
    }

    protected componentDidMount() {
        this.htmlElement.addEventListener('input', (e: InputEvent) => {
            if (e.data === null) {
                return;
            }

            const target = e.target as Element;
            if (target.classList.contains('choose-size-menu__custom-input')) {
                const inputTarget = target as HTMLInputElement;
                inputTarget.value =
                    inputTarget.value.slice(0, -1) +
                    (e.data === ' ' || isNaN(Number(e.data)) ? '' : e.data);
            }
        });
    }

    protected parseCustomData(formData: FormData) {
        const width = Number(formData.get('custom-width'));
        const height = Number(formData.get('custom-height'));
        const bombs = Number(formData.get('custom-bombs'));

        if (isNaN(width) || isNaN(height) || isNaN(bombs)) {
            return null;
        }

        return { width: width, height: height, bombs: bombs };
    }

    protected parsePreset(presetValue: string) {
        const splitted = presetValue.split(':');
        const width = Number(splitted[0]);
        const height = Number(splitted[1]);
        const bombs = Number(splitted[2]);

        if (isNaN(width) || isNaN(height) || isNaN(bombs)) {
            return null;
        }

        return { width: width, height: height, bombs: bombs };
    }

    choosePreset(name: string) {
        const input = document.getElementById(name) as HTMLInputElement;
        if (input === undefined) {
            return null;
        }

        input.checked = true;
        return this.parsePreset(input.value);
    }

    get data() {
        const data = new FormData(this.htmlElement);
        const value = data.get('params');
        if (value === 'custom') {
            return this.parseCustomData(data);
        }
        if (value !== 'custom') {
            // eslint-disable-next-line @typescript-eslint/no-base-to-string
            return this.parsePreset(value.toString());
        }

        return null;
    }
}
