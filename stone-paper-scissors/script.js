let userScore = 0;
let computerScore = 0;

const choices=document.querySelectorAll('.choice');

const generateComputerChoice = () => {
    const options = ["stone", "paper", "scissors"]; //no straightforward method to extract random strings from lots of strings
    

}
const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    // Generate computer choice -> modular programming - generate a function for eveerything
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute
       console.log("Choice clicked", userChoice);
       playGame(userChoice);
    })
});