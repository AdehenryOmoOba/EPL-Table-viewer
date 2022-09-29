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
  const info = data.response[0].league.standings[0]
  let rows =  rowsGen();
  for (let i = 0; i < 20; i++) {
    let customObj = {
      imgAltAttr: `${info[i].team.name}-logo`,
      teamLogoSrcAttr: info[i].team.logo,
      teamPosition: info[i].rank,
      teamName: info[i].team.name,
      gamesPlayed: info[i].all.played,
      gamesWin: info[i].all.win,
      gamesDraw: info[i].all.draw,
      gamesLoss: info[i].all.lose,
      goalsScore: info[i].all.goals.for,
      goalConceed: info[i].all.goals.against,
      goalDiff: info[i].goalsDiff,
      form: info[i].form,
      points: info[i].points,
    };
    rows[
      i
    ].innerHTML = `<td><img src=${customObj.teamLogoSrcAttr} alt=${customObj.imgAltAttr}></td><td>${customObj.teamPosition}</td><td>${customObj.teamName}</td><td>${customObj.gamesPlayed}</td><td>${customObj.gamesWin}</td><td>${customObj.gamesDraw}</td><td>${customObj.gamesLoss}</td><td>${customObj.goalsScore}</td><td>${customObj.goalConceed}</td><td>${customObj.goalDiff}</td><td>${customObj.form}</td><td>${customObj.points}</td>`;
    tableBody.appendChild(rows[i]);
  }
}

premierLeague();
