//대기하는 학생 수가 최대인 순간의 학생 수와 이때 식당 입구 맨 뒤에 대기 중인 학생의 번호를 출력
//최대인 경우가 여러 번이라면 맨 뒤에 줄서 있는 학생의 번호가 가장 작은 경우 출력

/**
 * 첫 번째 = n = 반복 횟수
 * 두 번째부터 = A = 정보
 * A는 두 가지 유형이 존재
 * > 1. 학생 1명이 학교 식당에 도착해 입구 맨 뒤에 줄을 선다
 * > 2. 맨 앞 학생 1명이 식사를 한다.
 * a = 학생번호
 * 최종
 * - A[0] = 유형번호
 * - A[1] = 학생 번호
 */

const fs = require("fs");
const input = fs.readFileSync("./index.txt").toString().trim().split("\n");

const arr = input.slice(1);

let waitLen = 0;
let maxLen = 0;
let lastStudentNumber = -1;

/**
 * type = 1이면, 학생번호를 waitingLine에 추가
 * type = 2면, waitingLine 맨 앞 빼기
 * 한 줄이 끝날때마다
 */

arr.forEach((A) => {
  const [type, number] = A.split(" ");

  if (type == 1) {
    waitLen++;

    if (waitLen > maxLen) {
      maxLen = waitLen;
      lastStudentNumber = number;
    } else if (waitLen === maxLen) {
      lastStudentNumber = Math.min(lastStudentNumber, number);
    }
  } else {
    if (waitLen > 0) waitLen--;
  }
});

console.log(maxLen, lastStudentNumber);
