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

const [N, M] = input[0].split(" ");

const songs = [];
for (let i = 1; i <= N; i++) {
  const [len, title, ...notes] = input[i].split(" ");
  songs.push({
    len,
    title,
    notes: notes.slice(0, 3).join(" "),
  });
}

const attempts = [];

for (let i = 1; i <= M; i++) {
  const firstThreeNotes = input[i + Number(N)];
  const result = {
    title: "",
    cnt: 0,
  };

  songs.forEach((song) => {
    if (song.notes === firstThreeNotes) {
      result.title = song.title;
      result.cnt += 1;
    }
  });

  if (result.cnt === 0) attempts.push("!");
  else if (result.cnt === 1) attempts.push(result.title);
  else attempts.push("?");
}

console.log(attempts.join("\n"));
