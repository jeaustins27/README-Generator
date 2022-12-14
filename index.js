// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license does your project have?',
        choices: [
            "MIT",
            "Apache",
            "GNU GPL v3",
            "Mozilla",
            "None"
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can someone contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What needs to be done to run tests?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email in case someone needs to reach you with questions?'
    }]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.error(err);
            return ;
        }
        console.log("README.md succesfully created!");
    });
}
// TODO: Create a function to initialize app
function init() {
    questions()
    .then((data) => writeToFile("README.md", generateMarkdown(data)))

}
// Function call to initialize app
init();