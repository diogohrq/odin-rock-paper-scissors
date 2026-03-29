const buttons = document.querySelectorAll('.gameboard-button');
const matchScore = document.querySelector('.header-score');
const resultDisplay = document.querySelector('.gameboard-info-result');
const detailsDisplay = document.querySelector('.gameboard-info-details')

let computerScore = 0;
let humanScore = 0;

buttons.forEach(button => button.addEventListener('click', (e) => buttonCLick(e)));

const buttonCLick = (event) => {
  const humanChoice = event.currentTarget.dataset.option;
  const computerChoice = getComputerChoice();

  displayResult(playRound(humanChoice, computerChoice))
}

const getComputerChoice = () =>  {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
}

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice == computerChoice) {
    return {winner: 'tie', choices: {human: humanChoice, computer: computerChoice}};
  }
  
  if (
    (humanChoice == 'rock' && computerChoice == 'scissors') ||
    (humanChoice == 'paper' && computerChoice == 'rock') ||
    (humanChoice == 'scissors' && computerChoice == 'paper')
  ) {
    humanScore++;
    return {winner: 'human', choices: { human: humanChoice, computer: computerChoice}};
  } else {
    computerScore++;
    return {winner: 'computer', choices: { human: humanChoice, computer: computerChoice}};
  }
}

const displayResult = (result) => {
  const winner = result.winner;
  const humanChoice = result.choices.human;
  const computerChoice = result.choices.computer;
  let winnerMessage = '';
  let choicesMessage = '';

  if (winner == 'tie') {
    winnerMessage = `I'ts a tie`;
    choicesMessage = `Both chose ${humanChoice}`; 
  } else if (winner == 'human') {
    winnerMessage = `You won`;
    choicesMessage = `You chose ${humanChoice} and House chose ${computerChoice}`
  } else {
    winnerMessage = `You lost`;
    choicesMessage = `You chose ${humanChoice} and House chose ${computerChoice}`;
  }

  matchScore.textContent = '';
  matchScore.textContent = humanScore;

  resultDisplay.textContent = '';
  resultDisplay.textContent = winnerMessage;
  detailsDisplay.textContent = '';
  detailsDisplay.textContent = choicesMessage;
};