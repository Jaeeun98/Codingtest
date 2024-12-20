// 근무표가 공평하면 yes, 아니면 no 출력
// 공평의 기준 : 각 인원의 근무 시간이 12시간 이하로 차이나게

// 각 주는 4개의 줄로 표현.
// 각 날에는 4개의 시간대에 모두 근무자가 있거나 모두 근무자가 없다.
// 12~18에만 근무자가 있는 날은 없음 > 모두 있거나 모두 없음

// 4                         > 주의 개수 N

// 첫 주 근무표
// 1 2 3 4 5   6      7
// - - - - - pangyo puang    >  8~12시 근무자, 4
// - - - - - sally boss      >  12~18시 근무자, 6
// - - - - - leonard brown   >  18~22시 근무자, 4
// - - - - - edward edward   >  22~08시 근무자, 10

// 둘 째주 근무표
//     1    2      3     4      5     6      7
// puang pangyo choco leonard cony leonard choco      >  8~12시 근무자, 4
// cony edward cony leonard moon puang edward         >  12~18시 근무자, 6
// choco boss puang brown brown pangyo cony           >  18~22시 근무자, 4
// choco edward puang cony moon choco boss            >  22~08시 근무자, 10

// 세 번째 주
//   1     2    3    4     5      6     7
// brown moon moon sally pangyo puang choco           >  8~12시 근무자, 4
// pangyo edward boss sally moon cony pangyo          >  12~18시 근무자, 6
// brown puang james moon cony choco choco            >  18~22시 근무자, 4
// sally brown sally puang james moon sally           >  22~08시 근무자, 10

// 네 번재 주
//    1      2    3 4 5 6 7
// leonard pangyo - - - - -       >  8~12시 근무자, 4
// boss choco - - - - -           >  12~18시 근무자, 6
// moon edward - - - - -          >  18~22시 근무자, 4
// moon sally - - - - -           >  22~08시 근무자, 10

// 각 이름 별로 근무 시간 넣기 map, set
// 차이가 12시간 이상 발생하는지 체크 > 가장 적은 사람과 많은 사람부터 체크?

const fs = require("fs");
const input = fs.readFileSync("./index.txt").toString().trim().split("\n");

const N = parseInt(input[0], 10); // 주의 개수

const TIME = [4, 5, 4, 10];

let schedule = new Map();

for (let i = 1; i <= N * 4; i++) {
  const weekSchedule = input[i].split(" ");
  const addTime = TIME[(i - 1) % 4]; // 4시간대 반복 순환

  weekSchedule.forEach((name) => {
    if (name === "-") return;

    const preValue = schedule.get(name) || 0;
    schedule.set(name, preValue + addTime);
  });
}

let times = [...schedule.values()];

// 결과 계산
const result =
  times.length === 0 || Math.max(...times) - Math.min(...times) <= 12
    ? "Yes"
    : "No";
console.log(result);
