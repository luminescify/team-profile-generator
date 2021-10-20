// Node Module dependencies
const fs = require('fs');
const inquirer = require('inquirer');

// Profiles
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

// Team Member Array
const team = [];

// Selection screen function
function selectionScreen() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'selection',
                message: "Please select one:",
                choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team']
            }
        ]) .then((response) => {
            switch(response.selection) {
                case "Add an Engineer":
                    createEngineer();
                    return;
                case "Add an Intern":
                    createIntern();
                    return;
                case "Finish building my team":
                    writeToFile();
            }
        })
}

// Create a new manager and push to team member array
function createManager() {
     inquirer
        .prompt ([
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
            name: 'officeNumber',
            message: "Enter the manager's office number:"
        }
    ]) .then((response) => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber);
            team.push(manager);
            selectionScreen();
    })
}

// Create new engineer
function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?"
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "Enter the engineer's ID:"
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "Enter the engineer's email address:"
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter the engineer's GitHub username:"
            }
        ]) .then((response) => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.github);
            team.push(engineer);
            selectionScreen();
    })
}

// Create new intern
function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?"
            },
            {
                type: 'input',
                name: 'internId',
                message: "Enter the intern's ID:"
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "Enter the intern's email address:"
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter the intern's school:"
            }
        ]) .then((response) => {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.school);
            team.push(intern);
            selectionScreen();
    })
}


// Manager Card HTML
const renderManager = function(data) {
    return `
    <div class="card col-4 mt-4 m-3" style="width: 15rem;">
        <div class="card-header bg-primary text-white card-title">
            <h4>${data.name}</h4>
            <h6><i class="bi bi-cup-fill"></i> </i>Manager</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
            <li class="list-group-item">Office Number: ${data.officeNumber}</li>
        </ul>
    </div>
`;
}

//Engineer Card HTML
const renderEngineer = function(data) {
    return `
    <div class="card col-4 mt-4 m-3" style="width: 15rem;">
        <div class="card-header bg-primary text-white card-title">
            <h4>${data.name}</h4>
            <h6><i class="bi bi-github"></i> </i>Engineer</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}">${data.github}</a></li>
        </ul>
    </div>
`;
}

// Intern card HTML
const renderIntern = function(data) {
    return `
    <div class="card col-4 mt-4 m-3" style="width: 15rem;">
        <div class="card-header bg-primary text-white card-title">
            <h4>${data.name}</h4>
            <h6><i class="bi bi-envelope-fill"></i> </i>Intern</h6>
        </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
            <li class="list-group-item">School: ${data.school}</li>
        </ul>
    </div>
`;
}

// Generates employee cards based on role + pushes to array
function generateHtml() {
    console.log(team);
    // Array for cards
    let cardArray = [];

    for (let i = 0; i < team.length; i++) {
        const employee = team[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = renderManager(employee);

            cardArray.push(managerCard);
        }
        
        if (role === 'Engineer') {
            const engineerCard = renderEngineer(employee);

            cardArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = renderIntern(employee);

            cardArray.push(internCard);
        }
    }

    const employeeCards = cardArray.join('');

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

// Generates HTML page and appends employee cards
const generateTeamPage = function(employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <nav class="bg-danger p-5">
                <h3 class="text-center text-white">My Team</h3>
            </nav>
        </header>
        <div class="container">
            <div class="row g-0 justify-content-center">
                ${employeeCards}
            </div>
        </div>
    
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    </body>
    </html>
`;
}

// Create index.html file with team member info populated
function writeToFile() {
    fs.writeFile('index.html', generateHtml(), (err) =>
    err ? console.error(err) : console.log("Your team's webpage has successfully been created!")
)}

// Run initial function to begin application
createManager();