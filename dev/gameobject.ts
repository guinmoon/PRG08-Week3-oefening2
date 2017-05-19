class GameObject {

    public div: HTMLElement;
    public x: number;
    public y: number;

    constructor(str: string, parent: HTMLElement, x: number, y: number) {
        this.div = document.createElement(str);
        parent.appendChild(this.div);

        this.x = x;
        this.y = y;

    }
}