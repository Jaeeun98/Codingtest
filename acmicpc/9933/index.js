//비밀번호의 길이와 가운데 글자를 출력하는 프로그램 작성
//단어가 한 줄에 하나씩 적혀 있음 > 이 중 하나가 비밀번호,
//비밀번호를 뒤집어 쓴 문자열도 포함되어 있음 > 반대로 했을 때 똑같은게 있어야 함
//자신을 뒤집었을 때 같거나, 뒤집은은 값이 똑같은게 있어야 함

//첫째 줄 : 단어의 수 N
//N개 줄 : 파일에 적혀있는 단어가 한 줄씩 입력
//소문자로만
//2 < ? < 14, 홀수

const fs = require("fs");
const input = fs.readFileSync("./index.txt").toString().trim().split("\n");

const N = Number(input[0]);
const strArr = input.slice(1);

function handleReverse(str) {
  return str.split("").reverse().join("") || "";
}

//자신을 뒤집었을 때,똑같은게 있는지 체크
let result = strArr.filter((str) => str === handleReverse(str))[0];

//글 목록 중에, 똑같은게 있는지 체크
strArr.forEach((str, i) => {
  for (let j = i + 1; j < N; j++) {
    if (strArr[j] === handleReverse(str)) result = str;
  }
});

//길이, 가운데 숫자 리턴
const len = result.length;
console.log(len, result[Math.floor(len / 2)]);
