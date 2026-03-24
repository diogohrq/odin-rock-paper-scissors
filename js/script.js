let computerScore = 0;
let humanScore = 0;

const getComputerChoice = () =>  {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
}

const getHumanChoice = () => {
  const answer = prompt('Write your choice (ROCK, PAPER or SCISSORS): ').toLowerCase();

  return answer;
}

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice == computerChoice) {
    return`Both chose ${humanChoice}: it's a tie!`;
  }
  
  if (
    (humanChoice == 'rock' && computerChoice == 'scissors') ||
    (humanChoice == 'paper' && computerChoice == 'rock') ||
    (humanChoice == 'scissors' && computerChoice == 'paper')
  ) {
    humanScore++;
    return `${humanChoice} x ${computerChoice}: You won!`;
  } else {
    computerScore++;
    return`${humanChoice} x ${computerChoice}: Computer won!`;
  }
}

const playGame = (totalRounds) => {
  for (let i = 0; i < totalRounds; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice(); 

    console.log(playRound(humanChoice, computerChoice));
  }
}

playGame(3);