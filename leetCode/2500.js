const handleDelete = (grid) => {
  console.log("ddd");
  const maxArr = [];

  for (let i = 0; i < grid.length; i++) {
    //가장 큰 값 삭제
    const max = Math.max(...grid[i]);
    const idx = grid[i].indexOf(max);
    console.log(idx);

    maxArr.push(max);
    grid[i].splice(idx, 1); //grid 각 행마다 가장 큰 값 삭제
  }
  //다 돌면 그 값 중 가장 큰 값 리턴
  return Math.max(...maxArr);
};

const deleteGreatestValue = function (grid) {
  let sum = 0;
  const n = grid[0].length;

  //gird가 비어있을때까지 반복
  //답에 더하기
  for (let i = 0; i < n; i++) sum += handleDelete(grid);

  return sum;
};
