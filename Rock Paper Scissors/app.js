let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice = () => {
    // rock,paper,scissors;
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3); // how to access choice array elements randomly => // using math floor to remove the decimal and using math random to generate the random no from 0 to 1 and to convert it in range of 0 to 2 we multiply it by 3
    return options[ranIdx];
};

const drawGame = () => {
    // console.log("Game Drawn");
    msg.innerText="Game Draw! Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin === true) {
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You Win!!!");
        msg.innerText=`You win! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You Lose!!!");
        msg.innerText=`You lose! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        
    }
};

const playGame = (userChoice) => {
    // console.log("User Choice =", userChoice);  // WHAT USER CHOOSED
    // WHAT computer choosed
    const compChoice = genCompChoice();
    // console.log("Computer Choice =", compChoice);

    if (userChoice === compChoice) {  
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors,paper
            userWin = compChoice === "paper" ? false : true; // for paper computer wins else loses;
        } else if (userChoice === "paper") {
            //scissors,rocks
            userWin = compChoice === "scissors" ? false : true; // for scissors computer wins else loses;
        } else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true; // for rock computer wins else loses;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was made.");
        playGame(userChoice);
    });
});