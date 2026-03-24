const getComputerChoice = () =>  {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
}

const getHumanChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const answer = Number(prompt('Select you move: 0 = Rock | 1 = Paper | 2 = Scissors '));

  return choices[answer] ?? 'Invalid option';
}

console.log(getHumanChoice())