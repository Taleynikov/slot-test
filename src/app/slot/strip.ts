import * as PIXI from 'pixi.js';
import { REEL_FILE_LIST } from 'src/app/slot/asset-bundle';
import { getRandomIndex } from 'src/app/random-int';
import { SlotSprite } from 'src/app/slot/slot-sprite';

export class Strip extends PIXI.Container {
    // ########################################

    public readonly data: string[] = [];

    // ########################################

    constructor() {
        super();

        const images = REEL_FILE_LIST.map((item) => item.alias);

        while (images.length) {
            const alias = images.splice(getRandomIndex(images), 1)[0];
            const item = new SlotSprite(alias);

            this.addChild(item);
            this.data.push(alias);

            item.position.y = (this.children!.length - 1) * item.height;
        }
    }

    // ########################################
}
