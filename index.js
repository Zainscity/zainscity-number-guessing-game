#! /usr/bin/env node
import inquirer from "inquirer";
const guessedNumber = Math.floor(Math.random() * 6 + 1);
const answeres = await inquirer.prompt([
    { name: "guessedNumber",
        type: "number",
        message: "Guess a number between 1 and 6" }
]);
if (answeres.guessedNumber === guessedNumber) {
    console.log("You Win");
}
else {
    console.log("You Lose");
}
