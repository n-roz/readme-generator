// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Generate the README
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username',


    }





];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
