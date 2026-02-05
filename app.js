let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScore1=document.querySelector("#user-score");
let compScore=document.querySelector("#computer-score");


const genCompChoice = () => {
   const options = ["rock", "paper", "scissors"];
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
};

const drawGame = () => {
   msg.innerText="game was draw"
msg.style.backgroundColor=" #081b31";

   
};
const showWinner=(userWin)=>{
   if(userWin){
      userScore++;
      userScore1.innerText=userScore;
      msg.innerText="you win";
      msg.style.backgroundColor="green";
      
   }
   else{
      msg.innerText="you lose";
      comScore++;
   compScore.innerText=comScore;
      msg.style.backgroundColor="red";
     
   }
}

const playGame = (userChoice) => {
   console.log("User choice:", userChoice);

   const compChoice = genCompChoice();
   console.log("Computer choice:", compChoice);

   if (userChoice === compChoice) {
      drawGame();
   } else {
      let userWin=true;
      if(userChoice==="rock"){
         userWin=compChoice==="paper"?false:true;
      }
      else if(userChoice==="paper"){
         userWin=compChoice==="scissor"?false:true;
   }
   else{
       userWin=compChoice==="rock"?false:true;
   }
showWinner(userWin);
}
};

choices.forEach((choice) => {
   choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
   });
});

