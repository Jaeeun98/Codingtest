//각 테스트 케이서에 대해서 한줄에 하나씩 차례로 승자 출력
//세준이 win = "S", 세비 win = "B", 둘다x = "C"

//전쟁 = 여러번
//살아아있는 병사 중 제일 약한 병사가 죽음
//제일 약한 병사 여러명 > 그 중 하나가 죽음
//둘 힘이 같음 > 세비의 약한 병사가 죽음
//한 명의 병사가 남아있을때까지

//첫 줄 = 테스트 케이스 개수
//테스트 케이스
//첫줄 = 세준이 병사 수 / 세비 병사 수
//둘째 줄 = 세준이 병사 힘
//셋째 줄 = 세비 병사 힘

const fs = require("fs");
const input = fs
  .readFileSync("./index.txt")
  .toString()
  .trim()
  .split("\n\n")
  .map((item) => item.split("\n"));

const T = Number(input[0][0]); //반복 횟수

const win = []; //승자, 출력

//세빈, 세준 병사 중 가장 강한 검사 체크
for (let i = 1; i <= T; i++) {
  const [_, sejunSoldier, sebiSoldier] = input[i];

  const sejunMax = Math.max(...sejunSoldier.split(" ").map(Number));
  const sebiMax = Math.max(...sebiSoldier.split(" ").map(Number));

  if (sejunMax < sebiMax) win.push("B");
  else win.push("S");
}

console.log(win.join("\n"));
