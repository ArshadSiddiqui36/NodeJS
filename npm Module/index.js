// 1. Chalk ....................................

const chalk = require('chalk');

// const log = console.log;
// console.log(chalk.red("Hello World!"));
// console.log(chalk.bold("Hello World!"));
// console.log(chalk.underline("Hello World!"));
// console.log(chalk.italic("Hello World!"));
// console.log(chalk.reset("Hello World!"));
// console.log(chalk.dim("Hello World!"));
// console.log(chalk.inverse("Hello World!"));
// console.log(chalk.hidden("Hello World!"));
// console.log(chalk.strikethrough("Hello World!"));
// console.log(chalk.visible("Hello World!"));

// console.log(chalk.blue.bold.underline("Hello World!"));

// console.log(chalk.green.inverse("True"));
// console.log(chalk.red.inverse("False"));





// 2. Validator ......................................

const validator = require('validator');

const res = validator.isEmail('arshad@gmail.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

