//각 행에서 가장 큰 값을 삭제
//삭제된 값 중 가장 큰 값을 답에 더함

const handleDelete = (grid) => {
  const maxArr = [];
  for (let i = 0; i < grid.length; i++) {
    //각 행에서 가장 큰 값 삭제
    const maxNumber = grid[i].pop();
    maxArr.push(maxNumber);
  }

  return Math.max(...maxArr);
};

const deleteGreatestValue = function (grid) {
  let sum = 0;
  const n = grid[0].length;

  //오름차순 정렬
  grid.forEach((row) => row.sort((a, b) => a - b));

  //for문 돌면서 각 행에서 가장 큰 값 삭제
  for (let i = 0; i < n; i++) sum += handleDelete(grid);

  return sum;
};
