let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["Rock","Paper","Scissors"];
    const rndInd = Math.floor(Math.random(options)*3);
    return options[rndInd];
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} defeated ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{  
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} defeated ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}

const playGame = (userChoice) => {
    // Generating Computer Choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        msg.innerText = "Game was Draw!";
        msg.style.backgroundColor = "#2f3e46";
    }
    else{
        let userWin = true;
        if (userChoice === "Rock"){
            // paper or scissors
            userWin = compChoice === "Paper" ? false : true;
        }
        else if (userChoice ==="Paper"){
            // rock or scissors
            userWin = compChoice === "Scissors" ? false : true;
        }
        else{
            // paper or rock
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}


choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})
