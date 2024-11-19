//각 행에서 가장 큰 값을 삭제
//삭제된 값 중 가장 큰 값을 답에 더함

const handleDelete = (grid) => {
  const maxArr = grid.map((row) => row.pop());
  return Math.max(...maxArr);
};

const deleteGreatestValue = function (grid) {
  let sum = 0;

  grid.forEach((row) => row.sort((a, b) => a - b));

  while (grid[0].length > 0) sum += handleDelete(grid);

  return sum;
};
