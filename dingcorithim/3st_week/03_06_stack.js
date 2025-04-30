class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    return;
  }

  pop() {
    let current = this.head;
    if (!current) {
      return;
    } else {
      let node = current;
      this.head = node.next;
      return node.value;
    }
  }

  peek() {
    return this.head.value;
  }

  isEmpty() {
    return this.head === null;
  }
}

let stack = new Stack();
stack.push(4);
console.log(stack.peek());
stack.push(3);
console.log(stack.peek());
stack.push(5);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
console.log(stack.isEmpty());
