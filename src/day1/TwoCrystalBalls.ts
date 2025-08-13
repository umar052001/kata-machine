export default function two_crystal_balls(breaks: boolean[]): number {
    const amountJump = Math.floor(Math.sqrt(breaks.length))
    let i = amountJump;
    for (; i < breaks.length; i += amountJump) {
        if (breaks[i]) {
            break;
        }
    }
    for (i; i >= amountJump; i--) {
        if (breaks[i]) {
            return i
        }
    }
    return -1
}
