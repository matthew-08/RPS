const playerRock = document.querySelectorAll(".choice");
const playerTotalDisplay = document.getElementById("yourPoints");
const computerTotalDisplay = document.getElementById("computerPoints");
const center = document.querySelector(".center")
const bottomCenterText = document.querySelector(".bottomCenterText")
let playerTotal = 0;
let computerTotal = 0;


function computerRandom() {
    const choice = ["rock", "paper", "scissors"]
    const chosen = Math.floor(Math.random() * choice.length);
    return choice[chosen];
}


for (const choice of playerRock) {
        choice.addEventListener ("click", function getPlayerChoice(event) {
        computerChoice = computerRandom();
        if (playerTotal == 3 || computerTotal == 3) {
            return;
        }

        switch (computerChoice) { // image display for computer choice
            case "rock": document.getElementById("cImage").src = "img/rock.png";
            break;
            case "paper": document.getElementById("cImage").src = "img/paper.png";
            break;
            case "scissors": document.getElementById("cImage").src = "img/scissors.png";
            break;
        }
            const choiceClicked = event.target;
                if(choiceClicked.classList.contains("rock")) {
                pChoice = "rock" }

                else if(choiceClicked.classList.contains("paper")) {
                pChoice = "paper"}

                else {
                pChoice = "scissors"; }
           
        if (pChoice == computerChoice && computerTotal !== 3 // determines who gets a points
            && playerTotal !== 3) {
            playerTotal += 1;
            computerTotal += 1;
        } else if (pChoice == "rock" && computerChoice == "paper"
            && computerTotal !== 3
            && playerTotal !== 3){
            computerTotal += 1;
        } else if (pChoice == "paper" && computerChoice == "scissors"
            && computerTotal !== 3
            && playerTotal !==3){
            computerTotal += 1;
        } else if (pChoice == "scissors" && computerChoice == "rock"
            && computerTotal !== 3
            && playerTotal !==3) {
            computerTotal += 1;
        }  else {
            playerTotal +=1;
        }


        playerTotalDisplay.innerText = playerTotal;
        computerTotalDisplay.innerText = computerTotal;

        if (computerTotal == 3 || playerTotal == 3) { // what to do when round ends (someone hits 3 points)
                
            let header = document.createElement("h1");
            const resetButton = document.createElement("button");
            resetButton.innerText = "RESET!"

            if (computerTotal == 3)
                    header.innerText = "COMPUTER WON! \n WILL YOU PLAY AGAIN?"
            else 
                    header.innerText = "YOU WON! \n WANT TO PLAY ANOTHER AROUND?" 

            resetButton.classList.add("resetButton")
            header.classList.add("resetHeader")
            bottomCenterText.appendChild(header);
            bottomCenterText.appendChild(resetButton);
            resetGame();
        }
        })
        
    }


    function resetGame() { //function to reset game, run from within the for loop
        const resetButton = document.getElementsByClassName("resetButton");
        let header = document.getElementsByClassName("resetHeader");
        resetButton[0].addEventListener("click", () => {
            header[0].remove();
            resetButton[0].remove();
            playerTotalDisplay.innerText = 0;
            computerTotalDisplay.innerText = 0;
            playerTotal = 0;
            computerTotal = 0;
            document.getElementById("cImage").src = "img/question-mark.png";
        })
    }