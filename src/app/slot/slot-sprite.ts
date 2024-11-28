import * as PIXI from 'pixi.js';

export class ReelItem extends PIXI.Sprite {
    // ########################################

    public static readonly Size = 35;
    // public static readonly Size = 65;

    // ########################################

    constructor(alias: string) {
        super(PIXI.Texture.from(alias));

        this.width = ReelItem.Size;

        this.scale.y = this.scale.x;
    }

    // ########################################
}
