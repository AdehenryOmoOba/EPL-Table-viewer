import { teamLogos, rowsGen, footballURL } from "./data.js";

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
  const response = await fetch(footballURL);
  const data = await response.json();
  let rows = await rowsGen();
  for (let i = 0; i < data.length; i++) {
    let customObj = {
      teamId: `${teamLogos[data[i].team_id]}`,
      imgAltAttr: `${data[i].team_name}-logo`,
      teamPosition: data[i].position,
      teamName: data[i].team_name,
      gamesPlayed: data[i].overall_gp,
      gamesWin: data[i].overall_w,
      gamesDraw: data[i].overall_d,
      gamesLoss: data[i].overall_l,
      goalsScore: data[i].overall_gs,
      goalConceed: data[i].overall_ga,
      goalDiff: data[i].gd,
      form: data[i].recent_form,
      points: data[i].points,
    };
    rows[
      i
    ].innerHTML = `<td><img src=${customObj.teamId} alt=${customObj.imgAltAttr}></td><td>${customObj.teamPosition}</td><td>${customObj.teamName}</td><td>${customObj.gamesPlayed}</td><td>${customObj.gamesWin}</td><td>${customObj.gamesDraw}</td><td>${customObj.gamesLoss}</td><td>${customObj.goalsScore}</td><td>${customObj.goalConceed}</td><td>${customObj.goalDiff}</td><td>${customObj.form}</td><td>${customObj.points}</td>`;
    tableBody.appendChild(rows[i]);
  }
}

premierLeague();
