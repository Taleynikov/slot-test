import * as PIXI from 'pixi.js';
import { Reel } from 'src/app/slot/reel';
import { Strip } from 'src/app/slot/strip';
import { SLOT_COLS, SLOT_ROWS, SPIN_DURATION, TILE_SIZE } from 'src/app/slot/params';

export class SlotMachine extends PIXI.Container {
    // ########################################

    private reels: Reel[];

    // ########################################

    constructor(private app: PIXI.Application) {
        super();

        const box = new PIXI.Graphics();
        const height = TILE_SIZE * SLOT_ROWS;
        const offset = TILE_SIZE * 0.1;

        this.reels = this.createReel(SLOT_COLS);
        this.reels.forEach((item, index) => {
            item.x = (item.width + offset) * index;
            item.y = height / 2;

            this.addChild(item);
        });

        // ########################################

        box.rect(0, 0, this.width, height);
        box.fill('#000');

        this.mask = box;
        this.addChild(box);
    }

    // ########################################

    public spin(): Promise<void> {
        setTimeout(() => {
            this.reels[0].stop();
        }, SPIN_DURATION * 1000);

        return new Promise((resolve, reject) => {
            this.reels.forEach((item, index, array) => {
                item.start().then(() => {
                    this.reels[index + 1]?.stop();

                    if (index === array.length - 1) {
                        resolve();
                    }
                });
            });
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
