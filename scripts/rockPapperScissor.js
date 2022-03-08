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

function playGame(computerSelection,playerSelection){
    const compSel = computerSelection().toLowerCase();
    const playerSel = playerSelection().toLowerCase();

    if (compSel === playerSel){
        console.log(`Oops! Both chose ${compSel}`)
        playGame(computerSelection,playerSelection);
    }else {
        console.log(`Computer chose ${compSel}`);
        switch (compSel){
            case "scissors":
                if ( playerSel === "rock" ){
                    console.log("You Win! Rock beats Scissors");
                }else {
                    console.log("You Lose! Scissors beat Paper");
                }
                break;
            case "rock":
                if ( playerSel === "scissors" ){
                    console.log("You Lose! Rock beats Scissors");
                }else {
                    console.log("You Win! Paper beats Rock");
                }
                break;
            case "paper":
                if ( playerSel === "scissors" ){
                    console.log("You Win! Scissors beat Paper");
                }else {
                    console.log("You Lose! Paper beat Rock");
                }
                break;
        }

    }

}
playGame(computerSelection,playerSelection);