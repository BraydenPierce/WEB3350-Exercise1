const playGame = () => {
  const rockBtn = document.querySelector(".rock");
  const paperBtn = document.querySelector(".paper");
  const scissorBtn = document.querySelector(".scissor");
  const playerOptions = [rockBtn, paperBtn, scissorBtn];
  const computerOptions = ["rock", "paper", "scissors"];

  playerOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const choiceNumber = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[choiceNumber];
      winner(this.innerText, computerChoice);
    });
  });
};

const winner = (player, computer) => {
  const result = document.querySelector(".result");
  player = player.toLowerCase();
  computer = computer.toLowerCase();
  if (player === computer) {
    result.textContent = "Its a Tie!";
  } else if (player == "rock") {
    if (computer == "paper") {
      result.textContent = "Computer Wins!";
    } else {
      result.textContent = "You Win!";
    }
  } else if (player == "paper") {
    if (computer == "scissors") {
      result.textContent = "Computer Wins!";
    } else {
      result.textContent = "You Win!";
    }
  } else if (player == "scissors") {
    if (computer == "rock") {
      result.textContent = "Computer Wins!";
    } else {
      result.textContent = "You Win!";
    }
  }
  const comChoice = document.querySelector(".comChoice");
  comChoice.textContent = "The computer chose " + computer + ":";
};

playGame();
