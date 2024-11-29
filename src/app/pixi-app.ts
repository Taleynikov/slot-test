import * as PIXI from 'pixi.js';
import { Injectable } from '@angular/core';
import { REEL_IMG_BUNDLE_NAME } from 'src/app/slot/asset-bundle';
import { SlotMachine } from 'src/app/slot/slot-machine';
import { SpinBtn } from 'src/app/slot/spin-btn';

@Injectable({ providedIn: 'root' })
export class PixiApp {
    // ########################################

    private src = new PIXI.Application();

    // ########################################

    public stage = this.src.stage;

    // ########################################

    public async init(parentElem: HTMLElement): Promise<PIXI.Application> {
        return PIXI.Assets.loadBundle(REEL_IMG_BUNDLE_NAME).then(async () => {
            await this.src.init({ resizeTo: parentElem, background: '#fff', antialias: true });

            parentElem.append(this.src.canvas);

            // @ts-ignore
            window.__PIXI_APP__ = this.src;

            const slotMachine = new SlotMachine(this.src);

            slotMachine.pivot.x = slotMachine.width / 2;
            slotMachine.pivot.y = slotMachine.height / 2;

            slotMachine.position.x = this.src.canvas.width / 2;
            slotMachine.position.y = this.src.canvas.height / 2;

            this.stage.addChild(slotMachine);

            // ########################################

            const button = new SpinBtn(() => {
                button.disable();

                slotMachine.spin().then(() => button.enable());
            });

            button.position.x = slotMachine.x + slotMachine.width / 2 + 30;
            button.position.y = slotMachine.y;

            this.stage.addChild(button);

            return this.src;
        });
    }

    // ########################################
}
