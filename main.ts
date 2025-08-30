class Node<T> {
  value: T;
  next: Node<T> | null;
  previous: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: T) {
    const newNode = new Node(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
  }

  prepend(value: T) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.append(value);
      return;
    }

    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }

  print() {
    if (this.head === null) {
      return;
    }

    let current: Node<T> | null = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  pop() {
    if (!this.tail) {
      return;
    }

    const value = this.tail.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      if (this.tail) {
        this.tail.next = null;
      }
    }

    return value;
  }

  shift() {
    if (!this.head) {
      return;
    }

    const value = this.head.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      if (this.head) {
        this.head.previous = null;
      }
    }

    return value;
  }
}

const DoubleList = new DoublyList();
DoubleList.append(15);
DoubleList.append(20);
DoubleList.append(25);
DoubleList.shift();
DoubleList.pop();
DoubleList.prepend(35);
DoubleList.prepend(45);
DoubleList.print();
