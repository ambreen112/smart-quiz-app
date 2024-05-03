#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let score = 0;
let answer1 = await inquirer.prompt([{
        name: "quiz1",
        type: "list",
        message: (chalk.bold.yellow("Which extension is use for making typescript file?")),
        choices: ['d.t', 't.s', 'html'],
        correctAnswerIndex: 1
    }]);
if (answer1.quiz1 === 't.s') {
    console.log(chalk.bold.green(" your answer is correct answer!"));
    score++;
}
else {
    console.log(chalk.bold.red("your answer is incorrect!"));
}
;
let answer2 = await inquirer.prompt([{
        name: "quiz2",
        type: "list",
        message: (chalk.bold.yellow("Which script has Typescript as a superset?")),
        choices: ['Javascript', 'python', 'sql'],
        correctAnswerIndex: 0
    }]);
if (answer2.quiz2 === 'Javascript') {
    console.log(chalk.bold.green(" your answer is correct answer!"));
    score++;
}
else {
    console.log(chalk.bold.red("your answer is incorrect!"));
}
;
let answer3 = await inquirer.prompt([{
        name: "quiz3",
        type: "list",
        message: (chalk.bold.yellow("what command is used to compile typescript file into javascript?")),
        choices: ['tsc filename.html', 'tsc filename.js', 'tsc filename.ts'],
        correctAnswerIndex: 2
    }]);
if (answer3.quiz3 === 'tsc filename.ts') {
    console.log(chalk.bold.green(" your answer is correct answer!"));
    score++;
}
else {
    console.log(chalk.bold.red("your answer is incorrect!"));
}
;
let answer4 = await inquirer.prompt([{
        name: "quiz4",
        type: "list",
        message: (chalk.bold.yellow("What is the use of an array?")),
        choices: ['stre only boolean', 'store more than one value', 'store different types of data'],
        correctAnswerIndex: 1
    }]);
if (answer4.quiz4 === 'store more than one value') {
    console.log(chalk.bold.green(" your answer is correct answer!"));
    score++;
}
else {
    console.log(chalk.bold.red("your answer is incorrect!"));
}
;
let answer5 = await inquirer.prompt([{
        name: "quiz5",
        type: "list",
        message: (chalk.bold.yellow("What operator is used for increment?")),
        choices: ['==', '++', '--'],
        correctAnswerIndex: 1
    }]);
if (answer4.quiz5 === '++') {
    console.log(chalk.bold.green(" your answer is correct answer!"));
    score++;
}
else {
    console.log(chalk.bold.red("your answer is incorrect!"));
}
;
console.log(chalk.italic.bold.yellow("Your Result Is!"));
console.log(chalk.bold.red(`total score: ${score++}/${score}`));
