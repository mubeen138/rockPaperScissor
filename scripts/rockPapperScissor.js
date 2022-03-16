"use strict"
/******* Global Variables*****/

let uScore = 0;
let cScore = 0;
let resultDiv;
let playerChoiceP;
let playerChoiceSpan;
let computerChoiceP ;
let computerChoiceSpan ;
let winnerP;
let body;
let liveResult;

function computerSelection(){
    let randNum;
    randNum = Math.random();
    if (randNum*100 > 66.0){
        return "Scissors";
    }else if (randNum*100 > 33.0){
        return "Paper";
    }else{
        return "Rock";
    }
}

function playerSelection(eventOccur){
    let pSelect;
    pSelect = eventOccur.target.id;
    if (pSelect != null || pSelect.toLowerCase() === "rock" || pSelect.toLowerCase() === "scissors" || pSelect.toLowerCase() === "paper")
    {
        return pSelect;
    }else{
         ;
    }
        
}

function playRound(theEvent){
    const compSel = computerSelection().toLowerCase();
    const playerSel = playerSelection(theEvent).toLowerCase();
    computerChoiceSpan.textContent = `${compSel}`;
    playerChoiceSpan.textContent = `${playerSel}`;

    if (compSel === playerSel){
        winnerP.textContent = `Oops! Both chose ${compSel}`;
    }else {
        
        switch (compSel){
            case "scissors":
                if ( playerSel === "rock" ){
                    //console.log("You Win! Rock beats Scissors");
                    winnerP.textContent = 'You Win! Rock beats Scissors';
                    updateGameScore("user");
                }else {
                    winnerP.textContent = "You Lose! Scissors beat Paper";
                    updateGameScore("comp");
                }
                break;
            case "rock":
                if ( playerSel === "scissors" ){
                    winnerP.textContent = "You Lose! Rock beats Scissors";
                    updateGameScore("comp");
                }else {
                    winnerP.textContent = "You Win! Paper beats Rock";
                    updateGameScore("user");
                }
                break;
            case "paper":
                if ( playerSel === "scissors" ){
                    winnerP.textContent = "You Win! Scissors beat Paper";
                    updateGameScore("user");
                }else {
                    winnerP.textContent = "You Lose! Paper beat Rock";
                    updateGameScore("comp");
                }
                break;
        }

    }
}
function createBtnText(someId){
    let output = Array.from(someId);
    output[0] = someId[0].toUpperCase();
    output = output.join('');
    return output;
}

function playGame(){
    let idArr = ['rock','paper','scissors'];
    // Create div to contain results.
     resultDiv;
    resultDiv = document.createElement('div');
    resultDiv.classList.add('results');
    //created p to display players choice
     playerChoiceP = document.createElement('p');
    playerChoiceP.classList.add('resultsP');
    playerChoiceP.id = "playerChoice";
    playerChoiceP.textContent = "You Chose: \t";
     playerChoiceSpan = document.createElement('span');
    playerChoiceSpan.classList.add('choice');
    //create p to display computers choice;
     computerChoiceP = document.createElement('p');
    playerChoiceP.id = "computerChoice";
    computerChoiceP.classList.add('resultsP');
    computerChoiceP.textContent = "Computer Chose: \t";
     computerChoiceSpan = document.createElement('span');
    computerChoiceSpan.classList.add('choice');
    //create p to display winner of the round
     winnerP = document.createElement('p');
    winnerP.classList.add('resultsP');
    //Update score
    liveResult = document.createElement('p');
    liveResult.classList.add('resultsP');
    //completed the node tree
    playerChoiceP.appendChild(playerChoiceSpan);
    computerChoiceP.appendChild(computerChoiceSpan);
    resultDiv.appendChild(playerChoiceP);
    resultDiv.appendChild(computerChoiceP);
    resultDiv.appendChild(winnerP);
    resultDiv.appendChild(liveResult);
    //appended the results
     body = document.querySelector("body");
    body.appendChild(resultDiv);
    choiceButtons.classList.add('choiceButtons');
    //create button elements for player to chose.
    let btn;
    let id;
    let btnText;
    for (id of idArr){
        btn = document.createElement('button');
        btn.id = id;
        btnText = createBtnText(id);
        btn.textContent =btnText;
        btn.addEventListener('click',playRound);
        choiceButtons.appendChild(btn);
    }
    btnWrapper.appendChild(choiceButtons);
    btnWrapper.removeChild(playButton);
}

function updateGameScore(rwin){
    let rtn;
    if (rwin === "user"){
        uScore++;
    }else if (rwin === "comp"){
        cScore++;
    }
    liveResult.textContent = `Player|| ${uScore} - ${cScore} ||Computer`;
    if (uScore >= 5 || cScore >= 5){
        rtn = announceWinner(uScore, cScore);
    }
}

function announceWinner(userScr,compScr){
    let gameWinnerP = document.createElement('p');
    gameWinnerP.classList.add('winner');
    if (userScr > compScr){
        btnWrapper.removeChild(choiceButtons);
        body.removeChild(resultDiv);
        gameWinnerP.textContent = `You have WON the game! by ${userScr}-${compScr}`;
        btnWrapper.appendChild(gameWinnerP);
    }else if (compScr > userScr){
        btnWrapper.removeChild(choiceButtons);
        body.removeChild(resultDiv);
        gameWinnerP.textContent = `Computer have WON the game! by ${compScr}-${userScr}`
        btnWrapper.appendChild(gameWinnerP);
    }
}

let btnWrapper = document.querySelector(".button-wrapper");
let choiceButtons = document.createElement('div');

let playButton = document.querySelector('#play');
playButton.addEventListener('click',playGame);





//playGame();
