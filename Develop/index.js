// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Generate the README
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input attempt #1
// const questions = [
//     {
//         type: 'input',
//         name: 'username',
//         message: 'Enter your GitHub username',
//         validate: function (answer) {
//             if (answer.length < 1) {
//                 return console.log("Enter your GitHub username");
//             }
//             return true;
//         }
//     },
//     // github repo
//     {
//     type: 'input',
//     name: 'repository',
//     message: 'Enter the name of your GitHub repository',
//     // validate
//     validate: function(answer) {
//         if (answer.length < 1) {
//             return console.log("Enter the name of your GitHub repository");
//         }
//         return true;
//     }
//     },


// TODO: Create an array of questions for user input attempt #2
// const promptinfo = () => {
//     return inquirer.prompt([
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
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        },
        {
            type: 'input',
            name: 'title',
            message: 'Enter the project title'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'List your collaborators, if any, with links to their GitHub profiles.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).',
            choices: ['Apache', 'GNU GPL', 'MIT', 'none']
        }
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log('README.md Has Been Created')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers)
            writeToFile('./dist/README.md', generateMarkdown(answers))
        });
}

// Function call to initialize app
init();

// writeToFile = (data) => {
//     fs.writeFile()
// }