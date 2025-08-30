export default class ArrayList<T> {
    public length: number;
    private items: T[];

    constructor(capacity: number = 0) {
        this.length = 0;
        this.items = Array(capacity);
    }

    prepend(item: T): void {
        for (let i = this.length; i > 0; i--) {
            this.items[i] = this.items[i - 1];
        }
        this.items[0] = item;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new RangeError("Index out of bounds");
        }

        for (let i = this.length; i > idx; i--) {
            this.items[i] = this.items[i - 1];
        }

        this.items[idx] = item;
        this.length++;
    }

    append(item: T): void {
        this.items[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        const idx = this.items.indexOf(item);
        if (idx === -1) {
            return undefined;
        }
        return this.removeAt(idx);
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        return this.items[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        const removed = this.items[idx];

        for (let i = idx; i < this.length - 1; i++) {
            this.items[i] = this.items[i + 1];
        }

        this.length--;
        this.items.length = this.length;

        return removed;
    }
}
