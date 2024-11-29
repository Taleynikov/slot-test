import * as PIXI from 'pixi.js';

export const REEL_IMG_BUNDLE_NAME = '[Bundle] Starter';
export const REEL_FILE_LIST = [
    {
        alias: 'reels/img/stingray',
        src: 'assets/M00_000.jpg'
    },
    {
        alias: 'reels/img/crab',
        src: 'assets/M01_000.jpg'
    },
    {
        alias: 'reels/img/sea-horse',
        src: 'assets/M02_000.jpg'
    },
    {
        alias: 'reels/img/fish',
        src: 'assets/M03_000.jpg'
    },
    {
        alias: 'reels/img/fishes',
        src: 'assets/M04_000.jpg'
    },
    {
        alias: 'reels/img/symbol-a',
        src: 'assets/M05_000.jpg'
    },
    {
        alias: 'reels/img/symbol-k',
        src: 'assets/M06_000.jpg'
    },
    {
        alias: 'reels/img/symbol-q',
        src: 'assets/M07_000.jpg'
    },
    {
        alias: 'reels/img/symbol-j',
        src: 'assets/M08_000.jpg'
    },
    {
        alias: 'reels/img/number-10',
        src: 'assets/M09_000.jpg'
    },
    {
        alias: 'reels/img/number-9',
        src: 'assets/M10_000.jpg'
    },
    {
        alias: 'reels/img/shell',
        src: 'assets/M11_000.jpg'
    },
    {
        alias: 'reels/img/whale',
        src: 'assets/M12_000.jpg'
    }
];

PIXI.Assets.addBundle(REEL_IMG_BUNDLE_NAME, REEL_FILE_LIST);
