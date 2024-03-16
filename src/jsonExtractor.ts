import { JsonFragment } from './jsonFragment';

export class JsonExtractor {
    private _text: string = '';
    private _fragments: Array<JsonFragment> = [];

    constructor(text: string) {
        this._text = text;
    }

    public getText(): string {
        return this._text;
    }

    public getFragments(): Array<JsonFragment> {
        return this._fragments;
    }

    public getFragment(index: number): JsonFragment {
        return this._fragments[index];
    }

    public getFragmentsLength(): number {
        return this._fragments.length;
    }

    private format(text: string): string {
        if (text === '') { 
            return '';
        }
        let str = '';
        try {
            let obj = JSON.parse(text);
            str = JSON.stringify(obj, null, 2);
        } catch (e) {
            return '';
        };
        return str;
    }
    public extract(): void {
        this._fragments = [];
        if (this._text === '') {
            return;
        }
        let start = 0;
        let end = 0;
        let open = 0;
        let close = 0;
        for (let i = 0; i < this._text.length; i++) {
            if (this._text[i] === '{') {
                open += 1;
                if (open === 1) {
                    start = i;
                }
            } else if (this._text[i] === '}') {
                close += 1;
                if (close === open) {
                    end = i;
                    this._fragments.push(new JsonFragment(start, end + 1, this.format(this._text.substring(start, end + 1))));
                    start = 0;
                    end = 0;
                    open = 0;
                    close = 0;
                }
            }
        }
    }
}
