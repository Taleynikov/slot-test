import * as PIXI from 'pixi.js';
import { TILE_SIZE } from 'src/app/slot/params';

export class Tile extends PIXI.Sprite {
    // ########################################

    constructor(alias: string) {
        super(PIXI.Texture.from(alias));

        this.width = TILE_SIZE;

        this.scale.y = this.scale.x;
    }

    // ########################################
}
