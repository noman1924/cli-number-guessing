#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate random number
//2) Take User input for guessing number
//3) Compare user input with computer generated number and show result 
const ranNum = Math.floor(Math.random() * 6 + 1);
const numguess = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess any number b/w 1 ~ 6: ",
    },
]);
if (numguess.UserGuessedNumber === ranNum) {
    console.log("Congragulations!, you guessed ", numguess.UserGuessedNumber, " which is correct");
}
else {
    console.log("Sorry you guessed it wrong, my supposition: ", ranNum, ", but you guessed: ", numguess.UserGuessedNumber);
}
