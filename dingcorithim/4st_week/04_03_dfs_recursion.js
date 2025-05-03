// 위의 그래프를 예시로 삼아서 인접 리스트 방식으로 표현했습니다!
const graph = {
  1: [2, 5, 9],
  2: [1, 3],
  3: [2, 4],
  4: [3],
  5: [1, 6, 8],
  6: [5, 7],
  7: [6],
  8: [5],
  9: [1, 10],
  10: [9],
};
const visited = [];

// 1. 시작 노드인 1부터 탐색한다.
// 2. 현재 방문한 노드를 visited_array에 추가한다.
// 3. 현재 방문한 노드와 인접한 노드 중 방문하지 않은 노드를 방문한다.

function dfs_recursion(adjacent_graph, cur_node, visited_array) {
  visited.push(cur_node);

  for (const element of adjacent_graph[cur_node]) {
    if (!visited.includes(element)) {
      sdfs_recursion(adjacent_graph, element, visited_array);
    }
  }
  s;
}

dfs_recursion(graph, 1, visited); // 1 이 시작노드입니다!
console.log(visited); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 이 출력되어야 합니다!
