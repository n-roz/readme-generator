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
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Enter your GitHub username");
            }
            return true;
        }
    },
    // github repo
    {
    type: 'input',
    name: 'repository',
    message: 'Enter the name of your GitHub repository',
    // validate
    validate: function(answer) {
        if (answer.length < 1) {
            return console.log("Enter the name of your GitHub repository");
        }
        return true;
    }
    },
    // title
    {
        type: 'input',
        name: 'description',
        message: 'Enter the title of your project',
        // validate
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Enter the title of your project");
            }
            return true;
        }
    },
    // project installation
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how user installs for Installation Section',
    },
    // usage
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your project instructions and examples for Usage Section',
    },
    



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
