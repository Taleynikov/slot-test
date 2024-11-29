import * as PIXI from 'pixi.js';
export class SpinBtn extends PIXI.Container {
    // ########################################

    constructor(callback: Function) {
        super();

        const text = new PIXI.Text({
            text: 'Spin',
            style: {
                fontSize: 20,
                fontWeight: 'bold',
                fill: '#fff'
            }
        });

        text.anchor.set(0.5);
        text.eventMode = 'none';

        // ########################################

        const background = new PIXI.Graphics();
        const width = text.width + 30;
        const height = text.height + 10;

        background.roundRect(0, 0, width, height);
        background.fill('green');

        background.pivot.x = background.width / 2;
        background.pivot.y = background.height / 2;

        background.eventMode = 'static';
        background.cursor = 'pointer';

        background.on('click', () => callback());

        this.addChild(background, text);

        // ########################################

        this.pivot.x = -20;
    }

    // ########################################

    public disable(): void {
        this.eventMode = 'none';
        this.alpha = 0.5;
    }

    public enable(): void {
        this.eventMode = 'auto';
        this.alpha = 1;
    }

    // ########################################
}
