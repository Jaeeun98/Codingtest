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

//세빈, 세준 병사 힘 내림차순  정렬

//맨 뒤에 있는 것(가장 약한 병사)들끼리 싸움
//더 약한 병사 > pop()
//같으면 세비 병사 pop()
//둘 중 하나의 병사가 남아있을때까지 반복
for (let i = 1; i < T + 1; i++) {
  const testCase = input[i];

  const soldierPower1 = testCase[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a); // 세준

  const soldierPower2 = testCase[2]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a); // 세비

  while (soldierPower1.length > 0 && soldierPower2.length > 0) {
    const weakest1 = soldierPower1[soldierPower1.length - 1];
    const weakest2 = soldierPower2[soldierPower2.length - 1];

    if (weakest1 < weakest2) soldierPower1.pop();
    else soldierPower2.pop();
  }

  if (soldierPower1.length === 0) win.push("B");
  else if (soldierPower2.length === 0) win.push("S");
  else win.push("C");
}

console.log(win.join("\n"));
