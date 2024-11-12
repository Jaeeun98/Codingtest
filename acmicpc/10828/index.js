//정수를 저장하는 스택 구현
//입력으로 주어지는 명령 처리
//스택 = 후입선출

//첫 줄 = 명령 수
//n = 명령

//push : 정수 x를 스택에 넣음
//pop : 가장 위에 있는 정수를 빼고, 그 수 출력, 없으면 -1 출력
//size : 스택에 들어있는 정수의 개수 출력
//empty : 스택이 비어있으면 1, 아니면 0
//top : 가장 위에 있는 정수 출력, 없으면 -1

const fs = require("fs");
const input = fs.readFileSync("./index.txt").toString().trim().split("\n");

const push = (stack, num) => stack.push(num);
const pop = (stack) => {
  const popNum = stack.pop();
  return popNum || -1;
};
const size = (stack) => stack.length;

const empty = (stack) => (stack.length === 0 ? 1 : 0);

const top = (stack) => stack[stack.length - 1] || -1;

const moveObj = {
  push,
  pop,
  size,
  empty,
  top,
};

const stack = [];
const result = [];

input.slice(1).forEach((move) => {
  const [handleMove, moveNum] = move.split(" ");

  if (handleMove === "push") moveObj[handleMove](stack, Number(moveNum));
  else result.push(moveObj[handleMove](stack));
});

console.log(result.join);

//push > 그대로
//pop > 뒤에서 부터 빼내기
//size > length
//empty > length로 체크
//가장 뒤에 있는 정수 출력
