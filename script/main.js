// Global letiable for remember wich option has selected the user</div>
let userOption = undefined;
let userScore = 0;
let computerScore = 0;

function playWith(option) {
    // first, we deselect the previous selected element (if exist)
    if (userOption != undefined) {
        userSelectionElement = document.getElementById(userOption);
        userSelectionElement.style.border = "5px #F8F8F8  solid";
    }
    userOption = option;
    userSelectionElement = document.getElementById(option);
    userSelectionElement.style.border = "5px #4aa solid";
}

function playGame() {
    let computerOption = Math.random();
    if (computerOption < 0.34) {
        computerOption = "stone";
    } else if (computerOption <= 0.67) {
        computerOption = "paper";
    } else {
        computerOption = "scissor";
    }

    resultMessage = compare(userOption, computerOption);

    document.getElementById("result").innerHTML =
        "<p>User select: " + userOption + " - Computer select:" +
        computerOption + "</p> <p>" + resultMessage + "</p>";

    document.getElementById("userScore").innerHTML = "<p> User Score : " + userScore + "</p>";

    document.getElementById("computerScore").innerHTML = "<p> Computer Score : " + computerScore + "</p>";
}

function compare(userSelection, computerSelection) {
    if (userSelection == undefined) {
        return "Please, select an option before play"
    }

    if (userSelection == computerSelection) {
        return "It is a draw!";
    }

    if (userSelection == "stone") {
        if (computerSelection == "scissor") {
            userScore++;
            return "You win.";
        } else {
            computerScore++;
            return "The computer win. Try again.";
        }

    } else if (userSelection == "paper") {

        if (computerSelection == "stone") {
            userScore++;
            return "You win.";
        } else if ("scissor") {
            computerScore++;
            return "The computer win. Try again.";
        }

    } else if (userSelection == "scissor") {

        if (computerSelection == "stone") {
            computerScore++;
            return "The computer win. Try again.";
        } else {
            userScore++;
            return "You win.";
        }
    }
}