export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomIndex(arr: unknown[]): number {
    return getRandomInt(0, arr.length - 1);
}
