import * as PIXI from 'pixi.js';
import { SlotSprite } from 'src/app/slot/slot-sprite';
import { Reel } from 'src/app/slot/reel';
import { Strip } from 'src/app/slot/strip';

const offset = 10;

export class SlotMachine extends PIXI.Container {
    // ########################################

    private reels: Reel[];

    // ########################################

    constructor(
        private app: PIXI.Application,
        col: number,
        row: number
    ) {
        super();

        this.reels = this.createReel(col);

        const box = new PIXI.Graphics();
        const width = SlotSprite.Size * col + SlotSprite.Size * col;
        const height = SlotSprite.Size * row;

        box.rect(0, 0, width, height);
        box.fill('#000');

        this.mask = box;
        this.addChild(box);

        this.reels.forEach((item, index) => {
            item.x = (item.width + offset) * index;

            this.addChild(item);
        });
    }

    // ########################################

    private createReel(count: number): Reel[] {
        const result = [];

        for (let i = 0; i < count; i++) {
            const item = new Strip();
            const texture = this.app.renderer.generateTexture(item);

            result.push(new Reel(texture, item.data));
        }

        return result;
    }

    // ########################################
}
