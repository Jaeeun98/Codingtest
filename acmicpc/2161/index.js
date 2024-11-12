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

while (arr.length > 0) {
  answer.push(arr.shift());

  if (arr.length) arr.push(arr.shift());
}

console.log(answer.join(" "));
