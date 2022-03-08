"use strict"

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

function playerSelection(){
    let pSelect;
    pSelect = prompt("Enter one of Rock Paper Scissors:");
    if (pSelect.toLowerCase() === "rock" || pSelect.toLowerCase() === "scissors" || pSelect.toLowerCase() === "paper")
    {
        return pSelect;
    }else{
         playerSelection();
    }
        
}

function playRound(computerSelection,playerSelection){
    const compSel = computerSelection().toLowerCase();
    const playerSel = playerSelection().toLowerCase();

    if (compSel === playerSel){
        console.log(`Oops! Both chose ${compSel}`)
        playRound(computerSelection,playerSelection);
    }else {
        console.log(`Computer chose ${compSel}`);
        switch (compSel){
            case "scissors":
                if ( playerSel === "rock" ){
                    console.log("You Win! Rock beats Scissors");
                    return("user");
                }else {
                    console.log("You Lose! Scissors beat Paper");
                    return("comp");
                }
                break;
            case "rock":
                if ( playerSel === "scissors" ){
                    console.log("You Lose! Rock beats Scissors");
                    return("comp");
                }else {
                    console.log("You Win! Paper beats Rock");
                    return("user");
                }
                break;
            case "paper":
                if ( playerSel === "scissors" ){
                    console.log("You Win! Scissors beat Paper");
                    return("user");
                }else {
                    console.log("You Lose! Paper beat Rock");
                    return("comp");
                }
                break;
        }

    }

}
function playGame(){
    let uScore = 0;
    let cScore = 0;
    let rwin;
    for (let i = 0; i < 5 ; i++){
        rwin = playRound(computerSelection,playerSelection);
        if (rwin === "user"){
            uScore++;
        }else if (rwin === "comp"){
            cScore++;
        }else{
            i--;
            }
    }
    if (uScore > cScore){
        console.log(`You Won the game by ${uScore} to ${cScore} `);
    }else{
        console.log(`Computer Won the game by ${cScore} to ${uScore} `);
    }
}
playGame();
