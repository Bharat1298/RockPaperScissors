function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 10);
    if(compChoice < 4){
        return "rock";
    }else if(compChoice < 7){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Choose Rock, Paper, or Scissors");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, compChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === compChoice){
        return "Tie";
    }
    switch(compChoice){
        case "rock":
            if(humanChoice === "paper"){
                humanScore++;
                return "You win! Paper Beats Rock";
            }
            if(humanChoice === "scissors"){
                computerScore++;
                return "You lose! Rock Beats Scissors";             
            }
            break;
        case "paper":
            if(humanChoice === "rock"){
                computerScore++;
                return "You lose! Paper Beats Rock";
            }
            if(humanChoice === "scissors"){
                humanScore++;
                return "You win! Scissors Beats Paper";
            }  
            break;
        case "scissors":
            if(humanChoice === "rock"){
                humanScore++;
                return "You win! Rock Beats Scissors";
            }
            if(humanChoice === "paper"){
                computerScore++;
                return "You lose! Scissors Beats Paper";
            }
            break;
        default:
            return "Unrecognized entry";
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        playRound(humanChoice, computerChoice);
    }
    if(humanScore > computerScore){
        return "Player Wins!";
    }else if(computerScore > humanScore){
        return "Computer Wins!";
    }else{
        return "Tie!";
    }
}

console.log(playGame());
