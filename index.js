// console.log("Hello Mr Theogene");

function getComputerChoice() {
  let choice = ["Rock", "Papper", "Scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  // your code here!

  return `You Lose! ${playerSelection} beats ${computerSelection}`;
}

function game() {
  let c = 0;
  let p = 0;
  for (let index = 0; index < 5; index++) {
    let playerSelection = prompt(`Choose: Rock, Papper, Scissors`);
    let pass = ["papper-rock", "scissors-papper", "rock-scissors"];
    let fail = ["papper-scissors", "scissors-rock", "rock-papper"];
    let test = (playerSelection + "-" + computerSelection).toLowerCase();

    console.log(test);
    if (fail.includes(test)) {
      console.log(playRound(playerSelection, computerSelection));
      c++;
    } else if (pass.includes(test)) {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
      p++;
    } else {
      console.log("try different input");
    }
  }

  if (c > p) {
    console.log("computer win");
  } else if (c == p) {
    console.log(" draw");
  } else {
    console.log("prayer win");
  }
}

game();
