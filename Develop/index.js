// Packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide detailed instructions for installation.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe how to use your project.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please include any applicable tests for your project.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide information on the contributions of your project.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'git',
            message: 'What is your GitHub username?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please provide information on your license.',
            choices: ['Apache', 'Boost', 'Eclipse', 'ISC'],
        }
    ])
    .then((data) => {
        console.log(data);
        fs.writeFile('newREADME.md', generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });