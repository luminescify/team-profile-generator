// Dependencies
const fs = require('fs');
const inquirer = require('inquirer');

// External JS Files
const employee = require('./employee');
const engineer = require('./engineer');
const intern = require('./intern');
const manager = require('./manager');

const questions = [
    {
        type: 'input',
        name: 'manager-name',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'manager-id',
        message: "Enter the manager's employee ID:"
    },
    {
        type: 'input',
        name: 'manager-email',
        message: "Enter the manager's email address:"
    },
    {
        type: 'input',
        name: 'manager-office',
        message: "Enter the manager's office number:"
    },
    {
        type: 'list',
        name: 'new-employee',
        message: "Please choose one:",
        choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
    },
    {
        type: 'input',
        name: 'engineer-name',
        message: "What is the new engineer's name?"
    },
    {
        type: 'input',
        name: 'engineer-id',
        message: "Enter the engineer's employee ID:"
    },
    {
        type: 'input',
        name: 'engineer-email',
        message: "Enter the engineer's email address:"
    }
]