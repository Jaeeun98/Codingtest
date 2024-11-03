//첫 세음만으로 음을 아는 노래 맞히는 프로그램 개발
//대소문자 구별
//첫 줄에 노래 개수 N, 맞히기를 시도할 노래 개수 M이 공백으로 주어짐
//두 번째 줄에 노래 제목의 길이 T, 노래 제목 S, 처음 등장하는 일곱 개의 음이름이 공백으로 주어짐
//N + 2번째 줄부터 M개의 줄에 걸쳐 맞히기를 시도할 노래 첫 세음의 음이름이 공백으로 주어짐

//노래가 여러 개라 무슨 노래인지 알 수 없는 경우 : ?
//저장된 노래가 없는 경우 : !
//동일한 노래가 하나라면 : 해당 노래 제목

const fs = require("fs");
const input = fs.readFileSync("./index.txt").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

// 노래 정보를 추출하여 첫 세 음을 기준으로 객체로 저장
const songs = input.slice(1, N + 1).map((line) => {
  const [_, title, ...notes] = line.split(" ");
  return { title, firstThreeNotes: notes.slice(0, 3).join(" ") };
});

// 특정 음에 대한 노래 제목을 찾는 함수
function findSongTitle(firstThreeNotes) {
  const matches = songs.filter(
    (song) => song.firstThreeNotes === firstThreeNotes
  );
  if (matches.length === 0) return "!";
  if (matches.length === 1) return matches[0].title;
  return "?";
}

// 맞히기를 시도하는 각 노래의 첫 세 음에 대한 결과를 생성
const attempts = input.slice(N + 1, N + 1 + M).map(findSongTitle);

// 결과 출력
console.log(attempts.join("\n"));
