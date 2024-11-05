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

const strArr = input.slice(1);
const seen = new Set(strArr);

let result = "";

function handleReverse(str) {
  return str.split("").reverse().join("");
}

// 회문 및 역순 문자열 확인
for (const str of strArr) {
  const reversedStr = handleReverse(str);

  // 회문이거나 역순 문자열이 Set에 있는지 확인
  if (str === reversedStr || seen.has(reversedStr)) {
    result = str;
    break;
  }
}

// 길이와 가운데 글자 출력
const len = result.length;
console.log(len, result[Math.floor(len / 2)]);
