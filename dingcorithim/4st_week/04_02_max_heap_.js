class MaxHeap {
  constructor() {
    this.items = [null];
  }

  insert(value) {
    this.items.push(value);
    let cur_index = this.items.length - 1;

    while (cur_index > 1) {
      let parent_index = cur_index / 2;
      if (this.items[parent_index] < this.items[cur_index]) {
        [this.items[parent_index], this.items[cur_index]] = [
          this.items[cur_index],
          this.items[parent_index],
        ];
        cur_index = parent_index;
      } else {
        break;
      }
    }

    return this.items;
  }

  delete() {
    let last_idx = this.items.length - 1;

    if (last_idx === 1) {
      return this.items.pop();
    }

    [this.items[1], this.items[last_idx]] = [
      this.items[last_idx],
      this.items[1],
    ];

    const pop_item = this.items.pop();

    let root_idx = 1;
    let left_idx = root_idx * 2;
    let right_idx = root_idx * 2 + 1;

    let max_num = Math.max(
      this.items[root_idx],
      this.items[left_idx] ?? 0,
      this.items[right_idx] ?? 0
    );

    while (max_num !== this.items[root_idx]) {
      console.log(max_num);
      if (max_num === this.items[left_idx]) {
        [this.items[root_idx], this.items[left_idx]] = [
          this.items[left_idx],
          this.items[root_idx],
        ];
        root_idx = left_idx;
      } else {
        [this.items[root_idx], this.items[right_idx]] = [
          this.items[right_idx],
          this.items[root_idx],
        ];
        root_idx = right_idx;
      }
      left_idx = root_idx * 2;
      right_idx = root_idx * 2 + 1;
      max_num = Math.max(
        this.items[root_idx],
        this.items[left_idx] ?? 0,
        this.items[right_idx] ?? 0
      );
    }

    return pop_item;
  }
}

const max_heap = new MaxHeap();
max_heap.insert(8);
max_heap.insert(6);
max_heap.insert(7);
max_heap.insert(2);
max_heap.insert(5);
max_heap.insert(4);
console.log(max_heap.items); // [None, 8, 6, 7, 2, 5, 4]
console.log(max_heap.delete()); // 8 을 반환해야 합니다!
console.log(max_heap.items); // [None, 7, 6, 4, 2, 5]
