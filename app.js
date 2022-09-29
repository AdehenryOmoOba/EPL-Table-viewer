import {rowsGen, footballURL,fetchOptions } from "./data.js";

let modalDiv = document.createElement("div");
let modalMsgHead = document.createElement("h3");
let modalMsg = document.createElement("p");
modalMsgHead.textContent = "Modal message!";
modalMsg.textContent = `Hello friends, this is the up-to-date English premier league table viewer. This app is built by AdehenryDev. Let's build together...`;
let modalOverlay = document.createElement("div");
const body = document.querySelector("body");
let logo = document.querySelector(".image");
let tableBody = document.querySelector("tbody");
let toggleMenu = document.querySelector(".toggle-menu");
let menuSlide = document.querySelector(".menu-slide");
let contact = document.querySelector(".contact");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  menuSlide.classList.toggle("active");
  contact.classList.toggle("active");
});
logo.addEventListener("click", (event) => {
  modalOverlay.classList.add(".modal-overlay");
  modalOverlay.append(modalMsgHead, modalMsg);
  modalDiv.append(modalOverlay);
  modalDiv.classList.add("modal");
  body.append(modalDiv);
});
document.addEventListener("click", (event) => {
  if (event.target === modalDiv) {
    modalDiv.remove();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modalDiv.remove();
  }
});

async function premierLeague() {
  const response = await fetch(footballURL,fetchOptions);
  const data = await response.json();
  let rows =  rowsGen();
  for (let i = 0; i < 20; i++) {
    let customObj = {
      imgAltAttr: `${data.response[0].league.standings[0][i].team.name}-logo`,
      teamLogoSrcAttr: data.response[0].league.standings[0][i].team.logo,
      teamPosition: data.response[0].league.standings[0][i].rank,
      teamName: data.response[0].league.standings[0][i].team.name,
      gamesPlayed: data.response[0].league.standings[0][i].all.played,
      gamesWin: data.response[0].league.standings[0][i].all.win,
      gamesDraw: data.response[0].league.standings[0][i].all.draw,
      gamesLoss: data.response[0].league.standings[0][i].all.lose,
      goalsScore: data.response[0].league.standings[0][i].all.goals.for,
      goalConceed: data.response[0].league.standings[0][i].all.goals.against,
      goalDiff: data.response[0].league.standings[0][i].goalsDiff,
      form: data.response[0].league.standings[0][i].form,
      points: data.response[0].league.standings[0][i].points,
    };
    rows[
      i
    ].innerHTML = `<td><img src=${customObj.teamLogoSrcAttr} alt=${customObj.imgAltAttr}></td><td>${customObj.teamPosition}</td><td>${customObj.teamName}</td><td>${customObj.gamesPlayed}</td><td>${customObj.gamesWin}</td><td>${customObj.gamesDraw}</td><td>${customObj.gamesLoss}</td><td>${customObj.goalsScore}</td><td>${customObj.goalConceed}</td><td>${customObj.goalDiff}</td><td>${customObj.form}</td><td>${customObj.points}</td>`;
    tableBody.appendChild(rows[i]);
  }
}

premierLeague();
