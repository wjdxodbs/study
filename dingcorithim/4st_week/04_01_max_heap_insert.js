class MaxHeap {
  constructor() {
    this.items = [null];
  }

  insert(value) {
    this.items.push(value);
    let n = this.items.length - 1;

    while (n > 1 && this.items[Math.floor(n / 2)] < this.items[n]) {
      [this.items[Math.floor(n / 2)], this.items[n]] = [
        this.items[n],
        this.items[Math.floor(n / 2)],
      ];

      n = Math.floor(n / 2);
    }

    return this.items;
  }
}

const max_heap = new MaxHeap();
max_heap.insert(3);
max_heap.insert(4);
max_heap.insert(2);
max_heap.insert(9);
console.log(max_heap.items); // [None, 9, 4, 2, 3] 가 출력되어야 합니다!
