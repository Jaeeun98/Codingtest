//N개의 기술을 사용할 때, 정상적으로 사용한 기술의 총 횟수 출력

//1 ~ 9 = 연계 없이 사용 할 수 있는 기술
//L은 R의 사전 기술
//S는 K의 사전 기술

//하나의 사전 기술은 하나의 본 기술과만 연계에서 사용.
//사전 기술 없이 본 기술 사용시, 이후 기술들도 사용x
//반드시 직후에 사용해야 하는 건 아님. 중간에 다른 기술 사용o

//첫 줄 = N
//두 번째 줄 = 기술 list

const fs = require("fs");
const input = fs.readFileSync("./index.txt").toString().trim().split("\n");

//숫자면 count++
//숫자가 아니라면 이 전 값 체크 > R이라면 L이 있었는지, S라면 K가 있었는지
//있었으면 count++ 아니면 return
const N = Number(input[0]);
const skills = input[1];

let count = 0;
let R_prevSkillCount = 0;
let S_prevSkillCount = 0;

for (let i = 0; i < N; i++) {
  const skill = skills[i];

  if (!isNaN(skill)) count++;
  else if (skill === "L") R_prevSkillCount++;
  else if (skill === "S") S_prevSkillCount++;
  else if (skill === "R" && R_prevSkillCount > 0) {
    count++;
    R_prevSkillCount--;
  } else if (skill === "K" && S_prevSkillCount > 0) {
    count++;
    S_prevSkillCount--;
  } else break;
}

console.log(count);
