class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }
  append(value) {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }
  get_linked_list_sum(linked_list_1, linked_list_2) {
    let sum1 = 0;
    let sum2 = 0;
    let current = linked_list_1.head;
    while (current) {
      sum1 = sum1 * 10 + current.value;
      current = current.next;
    }
    current = linked_list_2.head;
    while (current) {
      sum2 = sum2 * 10 + current.value;
      current = current.next;
    }
    return sum1 + sum2;
  }
}

const linked_list_1 = new LinkedList(6);
linked_list_1.append(7);
linked_list_1.append(8);

const linked_list_2 = new LinkedList(3);
linked_list_2.append(5);
linked_list_2.append(4);

console.log(linked_list_1.get_linked_list_sum(linked_list_1, linked_list_2));
