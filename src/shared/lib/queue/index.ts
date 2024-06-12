class QueueNode<T> {
    next: QueueNode<T>;
    value: T;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export class Queue<T> {
    head: QueueNode<T>;
    tail: QueueNode<T>;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value: T) {
        const node = new QueueNode(value);

        if (this.head) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }

        this.length++;
    }

    dequeue() {
        const current = this.head;
        this.head = this.head !== null ? this.head.next : null;
        this.length--;

        return current !== null ? current.value : null;
    }

    isEmpty() {
        return this.length === 0;
    }

    getHead() {
        return this.head.value;
    }

    getLength() {
        return this.length;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
