let userscore = 0;
let computerscore = 0;
let drawscore = 0;
let round = 1;


let rounds = document.querySelector("#round");
let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const usergame = document.querySelector("#user-score");
const computerGame = document.querySelector("#computer-score");
const drawGame = document.querySelector("#draw-score");

const generateComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
}

const showWinner = (userWin,userChoice,computerChoice) => {
  if(userWin){
    msg.innerHTML = `You win! ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "black";
    userscore++;
    usergame.innerHTML = userscore;
  }
  else{
    msg.innerHTML = `You lose! ${computerChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "black";
    computerscore++;
    computerGame.innerHTML = computerscore;
  }
}

const drawgame = () => {
  msg.innerHTML = "It's a draw! Play again!";
  drawscore++;
  drawGame.innerHTML = drawscore;
}

const playGame = (userChoice) => {
  //Generate computer choice
  const computerChoice = generateComputerChoice();
  rounds.innerHTML = `Round ${round}`;
  round++;
  if(userChoice === computerChoice) {
    drawgame();
  }
  else{
    let userWin = true;
    if(userChoice === "rock" && computerChoice === "paper") {
      userWin = false;
    }
    else if(userChoice === "paper" && computerChoice === "scissors") {
      userWin = false;
    }
    else if(userChoice === "scissors" && computerChoice === "rock") {
      userWin = false;
    }
    showWinner(userWin,userChoice,computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});