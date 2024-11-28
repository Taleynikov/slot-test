import * as PIXI from 'pixi.js';
import { Injectable } from '@angular/core';
import { REEL_IMG_BUNDLE_NAME } from 'src/app/slot/asset-bundle';
import { Strip } from 'src/app/slot/strip';
import { Reel } from 'src/app/slot/reel';
import { SlotMachine } from 'src/app/slot/slot-machine';

@Injectable({ providedIn: 'root' })
export class PixiApp {
    // ########################################

    private src = new PIXI.Application();

    // ########################################

    public stage = this.src.stage;

    // ########################################

    public async init(parentElem: HTMLElement): Promise<PIXI.Application> {
        return PIXI.Assets.loadBundle(REEL_IMG_BUNDLE_NAME).then(async () => {
            await this.src.init({ resizeTo: parentElem, background: '#fff' });

            parentElem.append(this.src.canvas);

            // @ts-ignore
            window.__PIXI_APP__ = this.src;

            const viewPort = new SlotMachine(this.src, 5, 3);

            viewPort.pivot.set(viewPort.width / 2, viewPort.height / 2);
            viewPort.position.set(this.src.canvas.width / 2, this.src.canvas.height / 2);

            this.stage.addChild(viewPort);

            return this.src;
        });
    }

    // ########################################
}
