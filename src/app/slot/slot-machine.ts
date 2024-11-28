import * as PIXI from 'pixi.js';
import { SlotSprite } from 'src/app/slot/slot-sprite';
import { Reel } from 'src/app/slot/reel';

const offset = 10;

export class Viewport extends PIXI.Container {
    // ########################################

    constructor(
        public readonly reels: Reel[],
        row: number
    ) {
        super();

        const box = new PIXI.Graphics();
        const width = SlotSprite.Size * reels.length + SlotSprite.Size * (reels.length - 1);
        const height = SlotSprite.Size * row;

        box.rect(0, 0, width, height);
        box.fill('#000');

        this.mask = box;
        this.addChild(box);

        reels.forEach((item, index) => {
            item.x = (item.width + offset) * index;

            this.addChild(item);
        });
    }

    // ########################################
}
