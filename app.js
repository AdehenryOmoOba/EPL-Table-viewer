const position = document.querySelectorAll(".teams .position");
const clubs = document.querySelectorAll(".teams .club");
const played = document.querySelectorAll(".teams .played");
const win = document.querySelectorAll(".teams .win");
const draw = document.querySelectorAll(".teams .draw");
const lose = document.querySelectorAll(".teams .lose");
const goalFor = document.querySelectorAll(".teams .goalfor");
const goalAgainst = document.querySelectorAll(".teams .goalagainst");
const goalDiff = document.querySelectorAll(".teams .goaldiff");
const points = document.querySelectorAll(".teams .points");
const form = document.querySelectorAll(".teams .form");

console.log(position);

const footballURL =
  "https://data.football-api.com/v3/standings/1204?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b";

async function premierLeague() {
  const positionArray = [];
  const clubsArray = [];
  const playedArray = [];
  const winArray = [];
  const drawArray = [];
  const loseArray = [];
  const goalForArray = [];
  const goalAgainstArray = [];
  const goalDiffArray = [];
  const formArray = [];
  const pointsArray = [];

  const response = await fetch(footballURL);
  const data = await response.json();
  console.log(data);

  data.map((item) => {
    positionArray.push(item.position);
    clubsArray.push(item.team_name);
    playedArray.push(item.overall_gp);
    winArray.push(item.overall_w);
    drawArray.push(item.overall_d);
    loseArray.push(item.overall_l);
    goalForArray.push(item.overall_gs);
    goalAgainstArray.push(item.overall_ga);
    goalDiffArray.push(item.gd);
    formArray.push(item.recent_form);
    pointsArray.push(item.points);
  });

  for (let i = 0; i < position.length; i++) {
    position[i].innerHTML = `<span>${positionArray[i]}</span>`;
  }

  for (let i = 0; i < clubs.length; i++) {
    clubs[i].innerHTML = `<span>${clubsArray[i]}</span>`;
  }
  for (let i = 0; i < played.length; i++) {
    played[i].innerHTML = `<span>${playedArray[i]}</span>`;
  }
  for (let i = 0; i < win.length; i++) {
    win[i].innerHTML = `<span>${winArray[i]}</span>`;
  }
  for (let i = 0; i < draw.length; i++) {
    draw[i].innerHTML = `<span>${drawArray[i]}</span>`;
  }
  for (let i = 0; i < lose.length; i++) {
    lose[i].innerHTML = `<span>${loseArray[i]}</span>`;
  }
  for (let i = 0; i < goalFor.length; i++) {
    goalFor[i].innerHTML = `<span>${goalForArray[i]}</span>`;
  }
  for (let i = 0; i < goalAgainst.length; i++) {
    goalAgainst[i].innerHTML = `<span>${goalAgainstArray[i]}</span>`;
  }
  for (let i = 0; i < goalDiff.length; i++) {
    goalDiff[i].innerHTML = `<span>${goalDiffArray[i]}</span>`;
  }
  for (let i = 0; i < form.length; i++) {
    form[i].innerHTML = `<span>${formArray[i]}</span>`;
  }
  for (let i = 0; i < points.length; i++) {
    points[i].innerHTML = `<span>${pointsArray[i]}</span>`;
  }
}
premierLeague();
