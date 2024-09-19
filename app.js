const startGameBtn = document.getElementById("startGameBtn");
const gameBtns = document.querySelectorAll(".btns");
const resetBtn = document.getElementById("resetBtn");
const exitBtn = document.getElementById("exitBtn");
const replayBtn = document.getElementById("replayBtn");
const Xturn = document.getElementById("Xturn");
const Oturn = document.getElementById("Oturn");

let player1 = true;

let winCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//gameBtns Funnction

gameBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (player1) {
      btn.innerHTML = "X";
      btn.style.color = "whitesmoke";
      btn.style.backgroundColor = "blue";
      Oturn.style.backgroundColor = "green";
      Xturn.style.backgroundColor = "";
      player1 = false;
    } else {
      btn.innerHTML = "O";
      btn.style.color = "white";
      btn.style.backgroundColor = "red";

      Xturn.style.backgroundColor = "green";
      Oturn.style.backgroundColor = "";
      player1 = true;
    }
    btn.disabled = true;
    winnerCheck();
    checkDraw();
  });
});
// Show Winner / Draw
const winnerMsg = (winner) => {
  const winCon = document.getElementById("winCon").classList.remove("hide");
  const winMsg = (document.getElementById(
    "winMsg"
  ).innerHTML = `Congratulations <br> Winner is ${winner} `);
  page2.classList.add("page2");
};
const drawMsg = (draw) => {
  const winCon = document.getElementById("winCon").classList.remove("hide");
  const winMsg = (document.getElementById("winMsg").innerHTML = `Game Drawn`);
  page2.classList.add("page2");
};

//Check Winner
const winnerCheck = () => {
  for (c of winCombinations) {
    let x = gameBtns[c[0]].innerHTML;
    let y = gameBtns[c[1]].innerHTML;
    let z = gameBtns[c[2]].innerHTML;
    if (x != "" && y != "" && z != "") {
      if (x == y && y == z) {
        winnerMsg(x);
       } 
    }
  }
};

// draw Game 
// Check for a draw
const checkDraw = () => {
  let draw = true;
  for (let i = 0; i < gameBtns.length; i++) {
    if (gameBtns[i].innerHTML === "") {
      draw = false;
      break;
    }
  }
  if (draw && x!=y && y!=z) {
    drawMsg();
  }
};

// Start game function
startGameBtn.addEventListener("click", () => {
  const page1 = document.getElementById("page1").classList.remove("page1");
  startGameBtn.remove();
  const page2 = document.getElementById("page2").classList.remove("page2");
});

// Reset  Game
const resetGame = () => {
  for (btn of gameBtns) {
    btn.disabled = false;
    btn.innerHTML = "";
    btn.style = "";
    Xturn.style = "";
    Oturn.style = "";
  }
};

// Reset Btn
resetBtn.addEventListener("click", () => {
  resetGame();
});

//Exit Button
exitBtn.addEventListener("click", () => {
  window.close();
  navigator.app.exitApp();
});

// Replay Button (play Again)
replayBtn.addEventListener("click", () => {
  page2.classList.remove("page2");
  winCon.classList.add("hide");
  resetGame();
});
