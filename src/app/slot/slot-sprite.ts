import * as PIXI from 'pixi.js';

export class SlotSprite extends PIXI.Sprite {
    // ########################################

    public static readonly Size = 65;

    // ########################################

    constructor(alias: string) {
        super(PIXI.Texture.from(alias));

        this.width = SlotSprite.Size;

        this.scale.y = this.scale.x;
    }

    // ########################################
}
