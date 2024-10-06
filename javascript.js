function getComputerChoice() {
    return (Math.floor(Math.random() * 3));
}

console.log(getComputerChoice());

function convertChoice(choice) {
    switch (choice) {
        case 0: return "rock";
        case 1: return "paper";
        default: return "scissors";
    }
}

let mainContainer = null;
let footer = null;
let score = 0;
let round = 0;
let roundsToPlay = 0;

function updateUi(userChoice, compChoice) {
    let gameResult = determineWinner(userChoice, compChoice);
    mainContainer.querySelector("#user-result").innerHTML = convertChoice(userChoice);
    mainContainer.querySelector("#comp-result").innerHTML = convertChoice(compChoice);
    mainContainer.querySelector("#game-result").innerHTML = gameResult;

    let roundDisplay = document.querySelector("#round-display");
    let scoreDisplay = document.querySelector("#score-display");

    if(gameResult == "win") {
        score++;
        scoreDisplay.innerHTML = score;
    }

    round++;
    roundDisplay.innerHTML = round;

    if(round == roundsToPlay) {
        footer.querySelector("#rock-btn").disabled = true;
        footer.querySelector("#paper-btn").disabled = true;
        footer.querySelector("#scissors-btn").disabled = true;
        document.querySelector("#rounds-input").disabled = false;
        mainContainer.querySelector("#user-result").innerHTML = "";
        mainContainer.querySelector("#comp-result").innerHTML = "";
        mainContainer.querySelector("#game-result").innerHTML = "reset and start game over";
    }
}


let userChoice = "";
// set up all button events 
function intializeGame() {

    footer = document.querySelector("#footer-container");
    mainContainer =document.querySelector("#main-container");
    footer.querySelector("#start-btn").addEventListener("click", () => {
        let roundDisplay = document.querySelector("#round-display");
        let scoreDisplay = document.querySelector("#score-display");
        let roundInput = document.querySelector("#rounds-input");

        roundInput.disabled = true;
        footer.querySelector("#rock-btn").disabled = false;
        footer.querySelector("#paper-btn").disabled = false;
        footer.querySelector("#scissors-btn").disabled = false;

        mainContainer.querySelector("#user-result").innerHTML = "";
        mainContainer.querySelector("#comp-result").innerHTML = "";
        mainContainer.querySelector("#game-result").innerHTML = "";

        roundsToPlay = roundInput.value;
        round = 0;
        score = 0;
        roundDisplay.innerHTML = round;
        scoreDisplay.innerHTML = score;
    });

    footer.querySelector("#rock-btn").addEventListener("click", () => {
        userChoice = 0;
        compChoice = getComputerChoice();
        updateUi(userChoice, compChoice);

    });

    footer.querySelector("#paper-btn").addEventListener("click", () => {
        userChoice = 1;
        compChoice = getComputerChoice();
        updateUi(userChoice, compChoice);
    });

    footer.querySelector("#scissors-btn").addEventListener("click", () => {
        userChoice = 2;
        compChoice = getComputerChoice();
        console.log(compChoice);
        updateUi(userChoice, compChoice);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    intializeGame();
})

function startGame() {
    let rounds = document.querySelector("#round-input input").value;
    document.querySelector("#round-label").value = rounds;
}

let rock = ["tie", "lose", "win"];
let paper = ["win", "tie", "lose"];
let scissors = ["lose", "win", "tie"];

function determineWinner(userChoice, computerChoice) {

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
