// Manager Card HTML
const renderManager = function(manager) {
    return `
    <div class="card col-4 mt-4 m-3" style="width: 15rem;">
        <div class="card-header bg-primary text-white card-title">
            <h4>${manager.managerName}</h4>
            <h6><i class="bi bi-cup-fill"></i> </i>Manager</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.managerId}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.managerEmail}">${manager.managerEmail}</a></li>
            <li class="list-group-item">Office Number: ${manager.managerOffice}</li>
        </ul>
    </div>
`;
}

//Engineer Card HTML
const renderEngineer = function(engineer) {
    return `
    <div class="card col-4 mt-4 m-3" style="width: 15rem;">
        <div class="card-header bg-primary text-white card-title">
            <h4>${engineer.engineerName}</h4>
            <h6><i class="bi bi-github"></i> </i>Engineer</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.engineerId}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.engineerEmail}">${engineer.engineerEmail}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.engineerGithub}">${engineer.engineerGithub}</a></li>
        </ul>
    </div>
`;
}

// Intern card HTML
const renderIntern = function(intern) {
    return `
    <div class="card col-4 mt-4 m-3" style="width: 15rem;">
        <div class="card-header bg-primary text-white card-title">
            <h4>${intern.internName}</h4>
            <h6><i class="bi bi-envelope-fill"></i> </i>Intern</h6>
        </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.internId}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.internEmail}">${intern.internEmail}</a></li>
            <li class="list-group-item">School: ${intern.internSchool}</li>
        </ul>
    </div>
`;
}

function generateHtml(data) {
    // Array for cards
    let cardArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
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

module.exports = generateHtml;