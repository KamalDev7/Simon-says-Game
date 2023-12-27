let gameSeq = [];
let userSeq = [];


let h2 = document.querySelector("h2");
let started = false;
let level = 0;
let btns = ["yellow", "red", "purple", "green"];

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started...!");
    started = true;
    levelUp();
  }
});

function levelUp() {
 
  userSeq = [];

  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randBtn);

  gameSeq.push(randColor);
  console.log(`game seq: ${gameSeq}`);
  gameFlash(randBtn);
}

function checkAns(idx) {
  // let idx = level - 1;
  if (gameSeq[idx] === userSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp(), 1000);
     
    }
  } else {
    let h3 = document.querySelector("h3");
    h3.innerHTML = `<b>Highest score is: ${level}</b>`;
    h2.innerHTML = `Game over! <b>Your score was ${level}</b><br> Press any key to start`;
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  // console.log(userSeq.length-1);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}


function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 270);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function reset() {
  let body = document.querySelector("body");
  body.classList.add("bodyRed");
  setTimeout(function () {
    body.classList.remove("bodyRed");
  }, 270);

  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
