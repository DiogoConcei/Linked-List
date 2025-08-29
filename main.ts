class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class List<T> {
  head: Node<T> | null = null;

  constructor() {
    this.head = null;
  }

  append(value: T) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current: Node<T> = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  prepend(value: T) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  remove(value: T) {
    if (this.head === null) {
      this.isEmpty();
      return;
    }

    if (this.head.value === value) {
      {
        this.head = this.head.next;
        return;
      }
    }

    let current = this.head;

    while (current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return;
      }

      current = current.next;
    }
  }

  find(value: T): Node<T> | null {
    if (this.head === null) {
      this.isEmpty();
      return null;
    }
    let current: Node<T> | null = this.head;

    while (current !== null) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  inserAt(value: T, index: number) {
    if (this.head === null) {
      this.isEmpty();
      this.append(value);
      return;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let previous: Node<T> | null = null;
    let current: Node<T> | null = this.head.next;
    let accountIndex = 1;

    while (current !== null && accountIndex !== index) {
      previous = current;
      current = current.next;
      accountIndex++;
    }

    if (previous !== null) {
      newNode.next = current;
      previous.next = newNode;
    }
  }

  removeAt(index: number) {
    if (this.head === null) {
      this.isEmpty();
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let previous: Node<T> | null = null;
    let current: Node<T> | null = this.head;
    let accountIndex = 1;

    while (current && accountIndex !== index) {
      previous = current;
      current = current.next;
      accountIndex++;
    }

    if (previous && current) {
      previous.next = current.next;
    }
  }

  get(index: number): Node<T> | null {
    if (this.head === null) {
      this.isEmpty();
      return null;
    }

    if (index === 0) return this.head;

    let current: Node<T> | null = this.head.next;
    let accountIndex = 1;

    while (current && accountIndex !== index) {
      current = current.next;
      accountIndex++;
    }

    return current;
  }

  size() {
    if (this.head === null) return console.log("Tamanho da lista: 0");

    let count = 0;
    let current: Node<T> | null = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log("Valor armazenado: ", current.value);
      current = current.next;
    }
  }

  pop() {
    if (this.head === null) return;

    if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      return value;
    }

    let current: Node<T> = this.head;

    while (current.next && current.next.next) {
      current = current.next;
    }

    const value = current.next?.value;
    current.next = null;
    return value;
  }

  shift() {
    if (this.head === null) return;

    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.head = null;
  }

  has(value: T): boolean {
    return this.find(value) !== null;
  }
}

const lista = new List();
