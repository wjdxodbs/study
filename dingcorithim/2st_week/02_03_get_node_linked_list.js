class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  get_node(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  add_node(index, value) {
    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      return;
    }

    let node = this.get_node(index - 1);
    newNode.next = node.next;
    node.next = newNode;
  }
  delete_node(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let node = this.get_node(index - 1);
    node.next = node.next.next;
  }
}

const linkedList = new LinkedList();

console.log(linkedList.get_node(1));
