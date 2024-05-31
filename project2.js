let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice=()=>
{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    msg.innerText="game was draw play again";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        
        msg.innerText=`you win!`;
        
        userScorepara.innerText=userScore;
    }
    else
    {
        compScore++;
        
        msg.innerText=`you lose`;
        compScorepara.innerText=compScore;
    };
};


function playGame(userChoice) {
    console.log("user choice=", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice=", compChoice);

    if (userChoice === compChoice) {
        drawGame();

    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;

        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>

{
    
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);

    });
});