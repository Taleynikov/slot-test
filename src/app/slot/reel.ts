import * as PIXI from 'pixi.js';
import { getRandomInt } from 'src/app/random-int';

export class Reel extends PIXI.TilingSprite {
    // ########################################

    public readonly data: string[];

    // ########################################

    constructor(texture: PIXI.Texture, data: string[]) {
        super({ texture, width: texture.width, height: texture.height });

        this.data = data;
    }

    // ########################################
}
