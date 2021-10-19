// Node Module dependencies
const fs = require('fs');
const inquirer = require('inquirer');

// Profiles
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

// HTML Page Creation
const generateHtml = require('./src/generateHTML')

// Team Member Array
const team = [];

// Create a new manager and push to team member array
const createManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's employee ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email address:"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number:"
        }
    ]) .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);
        
        team.push(manager);
        console.log(team);
    })
}

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role:",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email address:"
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineer's GitHub username:",
            when: (input) => input.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school:",
            when: (input) => input.role === 'Intern'
        },
        {
            type: 'confirm',
            name: 'addAnother',
            message: "Would you like to add another team member?",
            default: false
        }
    ]) .then(employeeInfo => {
            let { name, id, email, role, github, school, addAnother } = employeeInfo;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer (name, id, email, github);
                console.log(employee);
            } else if (role === "Intern") {
                employee = new Intern (name, id, email, school);
                console.log(employee);
            }
            team.push(employee);

            if (addAnother) {
                return addEmployee(team);
            } else {
                console.log("Rendering your team page...");
                return team;
            }
    })
}

// Create index.html file with team member info populated
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHtml(data), (err) =>
    err ? console.error(err) : console.log("Your team's webpage has successfully been created!")
)}


createManager()
    .then(addEmployee)
    .then(team => {
        return generateHtml(team);
    })
    .then(pageHtml => {
        return writeToFile(pageHtml);
    })
    .catch(err => {
        console.log(err);
    }); 