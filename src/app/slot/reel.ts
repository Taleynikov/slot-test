import * as PIXI from 'pixi.js';
import { gsap } from 'gsap';
import { TILE_SIZE } from 'src/app/slot/params';

export class Reel extends PIXI.TilingSprite {
    // ########################################

    private timeLine = gsap.timeline({ defaults: { ease: 'none' } });

    private stopped = false;

    // ########################################

    public readonly data: string[];

    // ########################################

    constructor(texture: PIXI.Texture, data: string[]) {
        super({ texture, width: texture.width, height: texture.height });

        this.data = data;

        this.anchor.y = 0.5;
    }

    // ########################################

    public start(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const step = 0.05;

            this.timeLine.to(this.tilePosition, {
                y: this.tilePosition.y + this.data.length * TILE_SIZE,
                duration: step * this.data.length,
                repeat: -1,
                ease: 'none',
                onUpdate: () => {
                    if (this.stopped) {
                        this.timeLine.clear();

                        const offset = this.tilePosition.y % TILE_SIZE;
                        const targetY = this.tilePosition.y - offset;
                        const calibratedSize = (TILE_SIZE / 100) * offset;
                        const calibratedTime = calibratedSize > 0 ? step / calibratedSize : step;

                        gsap.to(this.tilePosition, {
                            y: targetY,
                            duration: calibratedTime,
                            ease: 'none'
                        });

                        gsap.to(this.tilePosition, {
                            y: targetY - TILE_SIZE,
                            duration: 0.2,
                            delay: calibratedTime,
                            ease: 'back.out(1.5)',
                            onComplete: () => {
                                this.stopped = false;
                                resolve();
                            }
                        });
                    }
                }
            });
        });
    }

    public stop(): void {
        this.stopped = true;
    }

    // ########################################
}
