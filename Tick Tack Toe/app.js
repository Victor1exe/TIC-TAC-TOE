let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;    //if true Player X turn , if false Player O turn

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]];

const resetGame = () => {      // To reset the Game
    turn0 = true;
    enableBoxes();
    countClicks = 0;
    msgContainer.classList.add("hide");
}

let countClicks = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked.");
        countClicks++;
        console.log(countClicks);
        if (turn0) { // turn of player O
            box.innerText = "X";
            box.classList.add("X");
            box.classList.remove("O");
            turn0 = false;   // turn changes
        } else {
            box.innerText = "O";
            box.classList.add("O");
            box.classList.remove("X");
            turn0 = true;
        }
        box.disabled = true;

        let isWinner = checkWinner();

        if (countClicks === 9 && !isWinner) {
            showDraw();      //BUG BUG BUG      // A win condition is shown as draw in this logic at the ninth click there is a win condition for the X but it don't checks for the win condtion and prints draw
        }
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}


const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congatulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const showDraw = () => {
    msg.innerText = `This round has resulted in a draw!!! Please start a new game`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;    // Storing respective values to check the win condition
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {          // rules of winning 
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner " + pos1Val);               // returning the winner in the output
                showWinner(pos1Val);
            }
        }

    }
}

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);