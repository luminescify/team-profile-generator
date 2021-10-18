// Dependencies
const fs = require('fs');
const inquirer = require('inquirer');

// Profiles
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

// HTML Page Creation
const generateHtml = require('./src/generateHTML')

// Team Member Array
const team = [];

// Create a new manager and push to team member array
function createManager() {
    inquirer.prompt( [
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Enter the manager's employee ID:"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Enter the manager's email address:"
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "Enter the manager's office number:"
        }
    ]) .then(answer => {
        const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOffice);
        team.push(manager);

        console.log(team);
        selectionScreen();
    })
}

// Select an option to create a new engineer or intern, or finish building your team
function selectionScreen() {
    inquirer.prompt( [
        {
            type: 'list',
            name: 'new-employee',
            message: "Please choose one:",
            choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
        }
    ]); if(selectionScreen.choices === choices[0]) {
        return createEngineer();
    } else if (selectionScreen.choices === choices[1]) {
        return createIntern();
    } else {
        return writeToFile();
    }
}

// Create a new Engineer and push to team member array
function createEngineer() {
    inquirer.prompt( [
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the new engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "Enter the engineer's employee ID:"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Enter the engineer's email address:"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Enter the engineer's GitHub username:"
        }
    ]).then(answer => {
        const engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub);
        team.push(engineer);

        console.log(team);
        selectionScreen();
    });
}

// Create a new intern and push to team member array
function createIntern() {
    inquirer.prompt( [
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'internId',
            message: "Enter the intern's employee ID:"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Enter the intern's email address:"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Enter the intern's school:"
        }
    ]) .then(answer => {
        const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool);
        team.push(intern);

        console.log(team);
        selectionScreen();
    })
}

// Create index.html file with team member info populated
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHtml(data), (err) =>
    err ? console.error(err) : console.log("Success! Your team's webpage has been created.")
)}

// Function to initialize app
function init() {
    inquirer.prompt()
        .then((answers) => {
            writeToFile('index.html', answers)
        })
}

// Run initial function
init();