import * as PIXI from 'pixi.js';
import { REEL_FILE_LIST } from 'src/app/slot/asset-bundle';
import { getRandomIndex } from 'src/app/random-int';
import { ReelItem } from 'src/app/slot/reel-item';

export class Reel extends PIXI.Container {
    // ########################################

    constructor() {
        super();

        const container = new PIXI.Container();

        const images = REEL_FILE_LIST.map((item) => item.alias);

        while (images.length) {
            const alias = images.splice(getRandomIndex(images), 1)[0];
            const item = new ReelItem(alias);

            container.addChild(item);

            item.position.y = (container.children!.length - 1) * item.height;
        }

        // const
    }

    // ########################################
}
