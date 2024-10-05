function getComputerChoice() {
    return (Math.floor(Math.random() * 3));
}

console.log(getComputerChoice());

function getUserAnswer() {
    let runLoop = true;
    let userAnswer = prompt("Rock Paper or Scissors").toLowerCase();

    while (
        userAnswer != "rock" &&
        userAnswer != "paper" &&
        userAnswer != "scissors"
    ) {
        userAnswer =
            prompt("invalid answer: please only use Rock Paper or Scissors").toLowerCase();
    }

    return userAnswer;
}

function convertUserAnswer(userAnswer) {
    switch (userAnswer) {
        case "rock":
            return 0;
            break;
        case "paper":
            return 1;
            break;
        default:
            return 2;
    }
}

function determineWinner(userChoice, computerChoice) {
    /* 
          if rock is 0 
          rock beats scissors 2
          rock loses paper 1

          3-0-2 = 1
          3-0 - 1 = 2
          if  paper is 1 
          papers beats 0 
          paper loses  2

          3-1-0 = 2 

          if scisccors is 2
          scissors beats to 1
          scissors loses to 0
      */

    let rock = ["tie", "lose", "win"];
    let paper = ["win", "tie", "lose"];
    let scissors = ["lose", "win", "tie"];

    if (userChoice == 0) {
        return rock[computerChoice];
    }

    if (userChoice == 1) {
        return paper[computerChoice];
    }

    if (userChoice == 2) {
        return scissors[computerChoice];
    }
}

let runGame = true;

while (runGame) {
    let compChoice = getComputerChoice();
    let userChoice = getUserAnswer();
    let convertedChoice = convertUserAnswer(userChoice);

    result = determineWinner(convertedChoice, compChoice);
    alert(`you ${result}`);
}