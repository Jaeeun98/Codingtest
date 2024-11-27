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

const numberToEnglish = (num) =>
  num
    .toString()
    .split("")
    .map((digit) => en[digit])
    .join("");

const numToEnMap = new Map();
for (let i = M; i <= N; i++) numToEnMap.set(numberToEnglish(i), i);

//정렬
const sortedNumbers = [...numToEnMap.keys()]
  .sort()
  .map((en) => numToEnMap.get(en));

//출력
for (let i = 0; i < sortedNumbers.length; i += 10) {
  console.log(sortedNumbers.slice(i, i + 10).join(" "));
}
