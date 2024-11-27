//M이상 N이하의 정수를 영어로 숫자 하나씩 읽었을 때 기준으로, 사전순으로 정렬하여 출력
//정수로 한 줄에 10개씩 출력

//우선 영어로 치환한 후 obj or set에 넣기
//영어 순서대로 정렬
//정렬한거 10단위로 잘라서 정수로 치환한 후 출력

const en = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const fs = require("fs");
const input = fs.readFileSync("./index.txt").toString().trim().split(" ");

const [M, N] = input.map((num) => Number(num));

const strMap = new Map();

for (let i = M; i <= N; i++) {
  //i를 나누기 > 두 자리수면 하나하나 넣어야 함
  const numArr = i.toString().split("");

  //영어로 치환
  const str = numArr.map((num) => en[num]).join("");
  strMap.set(str, i);
}

//정렬
const sortArr = [...strMap.keys()].sort();

//다시 숫자로 치환
const result = sortArr.map((en) => strMap.get(en));

for (let i = 0; i < result.length; i += 10) {
  console.log(result.slice(i, i + 10).join(" "));
}
// console.log(sortArr);
// console.log(strMap);
// console.log(result);
