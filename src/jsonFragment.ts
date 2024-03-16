export class JsonFragment {
    private _start: number = 0;
    private _end: number = 0;
    private _text: string = '';

    constructor(start: number, end: number, _text: string) {
        this._start = start;
        this._end = end;
        this._text = _text;
    }

    public getStart(): number {
        return this._start;
    }

    public getEnd(): number {
        return this._end;
    }

    public getText(): string {
        return this._text;
    }
}