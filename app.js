const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  // Function to playGame
  const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ["rock", "paper", "scissors"];

    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const movesLeft = document.querySelector(".movesleft");
        moves++;
        movesLeft.innerText = `Moves Left: ${5 - moves}`;

        // Decide computer's choice and call winner function
        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];
        winner(this.innerText, computerChoice);

        // Call endGame when movesLeft are = zero
        if (moves == 5) {
          endGame(playerOptions, movesLeft);
        }
      });
    });
  };

  // Function to decide the winner
  const winner = (player, computer) => {
    const result = document.querySelector(".result");
    const pScoreBoard = document.querySelector(".p-count");
    const cScoreBoard = document.querySelector(".c-count");

    // Set both to lowercase for easy comparisons
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
      result.textContent = "Its a Tie!";
    } else if (player == "rock") {
      if (computer == "paper") {
        result.textContent = "Computer Wins!";
        computerScore++;
        cScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "You Win!";
        playerScore++;
        pScoreBoard.textContent = playerScore;
      }
    } else if (player == "paper") {
      if (computer == "scissors") {
        result.textContent = "Computer Wins!";
        computerScore++;
        cScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "You Win!";
        playerScore++;
        pScoreBoard.textContent = playerScore;
      }
    } else if (player == "scissors") {
      if (computer == "rock") {
        result.textContent = "Computer Wins!";
        computerScore++;
        cScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "You Win!";
        playerScore++;
        pScoreBoard.textContent = playerScore;
      }
    }

    // Update user with computer's choice this round
    const comChoice = document.querySelector(".comChoice");
    comChoice.textContent = "The computer chose " + computer + ":";
  };

  //Function to endGame
  const endGame = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector(".move");
    const result = document.querySelector(".result");

    // Make the buttons disappear
    playerOptions.forEach((option) => {
      option.style.display = "none";
    });

    // Display game over, hide movesLeft
    chooseMove.innerText = "Game Over!!";
    movesLeft.style.display = "none";

    //Code to determine winner
    if (playerScore > computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "You Won The Game";
      result.style.color = "#308D46";
    } else if (playerScore < computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "You Lost The Game";
      result.style.color = "red";
    } else {
      result.style.fontSize = "2rem";
      result.innerText = "Tie";
      result.style.color = "green";
    }
  };

  // Call playGame
  playGame();
};

// Call to start game
game();
