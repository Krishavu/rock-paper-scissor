let userScore=0;
let compScore=0;
const userScorepara=document.querySelector("#userScore");
const compScorepara=document.querySelector("#compScore");
const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const generatecompchoices=()=>{
    const option=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
};

const drawGame=()=>{
    console.log("Game was Draw.");
    msg.innerText="Game was Draw.Play again.";
    msg.style.backgroundColor="black";
}

const showWinner=(userwin,userChoice,compChoice)=>{
    if (userwin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("You Win!!");
        msg.innerText=`You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("You Loose");
        msg.innerText=`You Loose. ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("userchoice= ",userChoice);
    //Generate computer choice

    const compChoice= generatecompchoices();
    console.log("compchoice= ", compChoice);

    if(userChoice===compChoice){
        drawGame();
    } else {
        let userwin = true;
        if(userChoice ===  "rock"){
            // scissor,paper
            userwin=compChoice==="paper"? false:true; 
        }else if(userChoice==="paper"){
            // rock, scissor
            userwin=compChoice==="scissor"? false:true;
        }else {
            // rock,paper
            userwin=compChoice==="rock"? false:true;
        }
        showWinner(userwin,userChoice,compChoice);
    }

};



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });
});