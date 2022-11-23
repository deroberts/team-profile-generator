// node modules to import
const inquirer = require('inquirer');
const fs = require('fs');
const generateWorkers = require('./generate-workers.js');
// require for the employee classes. Things I know I need anyways.
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

// need an array for the employee input information
const employeeInfo = [];

// now the monty python question prompts
const questions = async () => {
    //use await for async functions
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your quest?',
            name: 'quest',
        },
        {
            type: 'input',
            message: 'What is your ID number?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'list',
            message: 'What is your title?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        ])
        // now we need the questions specific to each role
        if (answers.role === 'Engineer') {
            const githubResponse = await inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is your github username?',
                    name: 'github',
        },
        ])
    // add push to the employeeInfo array
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            githubResponse.github
        );
        employeeInfo.push(newEngineer);

    } else if (answers.role === 'Intern') {
        const internResponse = await inquirer.prompt([
            {
                type: 'input',
                message: 'Which school/university did you attend?',
                name: 'school',
            },
        ])
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internResponse.school
        );

    } else if (answers.role === 'Manager') {
        const managerResponse = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'officeNumber',
            },
        ])
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerResponse.officeNumber
        );
    }
    };
    // now we need to ask if they want to add another employee
    async function questionPrompts() {
        await questions()
        
    const newMember = await inquirer.prompt([
        {
            name: 'newMember',
            type: 'list',
            message: 'Would you like to add another team member?',
        },
    ])
    
    if (newMember.newMember === 'Yes') {
        questionPrompts()
    } 
        return saveTeam();

    }

    questionPrompts();
    //need to generate the html file
    function saveTeam() {
        fs.writeFileSync('dist\index.html', createHTML(employeeInfo), 'utf-8');

        
       //need to add the html template
    }


// mom's thanksgiving list: turkey, ham, mashed potatoes, gravy, dressing, stuffing, green bean cassarole,
// mac and cheese, cheese dip, rolls, pumpkin pie, french silk pie.
// jim is making whiskey balls.
//try to get there by noon.
