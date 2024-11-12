//버린 카드를 순서대로 + 마지막에 남게 되는 카드 출력

//카드가 한장 남을때까지 반복
//제일 위에 있는 카드를 바닥에 버림
//제일 위에 있는 카드를 제일 밑으로 옮김

//1 2 3 4

//1, 234 > 342
//3, 42 > 24
//2, 4

//1
const fs = require("fs");
const input = fs.readFileSync("./index.txt").toString().trim();

const N = Number(input);
const answer = [];
const arr = Array.from({ length: N }, (_, i) => i + 1);

const handleShuffle = (arr) => {
  if (arr.length === 1) {
    answer.push(arr[0]);
    return;
  }

  //0번째 값을 answer에 넣기
  answer.push(arr[0]);

  //값을 바꿔서 다시 호출
  const nextArr = arr.slice(2); //카드 버리기
  nextArr.push(arr[1]); //앞에 있는 카드를 뒤로 옮기기
  handleShuffle(nextArr);
};

handleShuffle(arr);

console.log(answer.join(" "));
