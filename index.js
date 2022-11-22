// node modules to import
const inquirer = require('inquirer');
const fs = require('fs');
// require for the employee classes. Things I know I need anyways.
const Employee = require('./lib/employee.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');

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
    
    } else if (answers.role === 'Intern') {
        const internResponse = await inquirer.prompt([
            {
                type: 'input',
                message: 'Which school/university did you attend?',
                name: 'school',
            },
        ])
    } else if (answers.role === 'Manager') {
        const managerResponse = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'officeNumber',
            },
        ])
    }
    };

async function questionPrompts() {
    await questions()
}

questionPrompts();

// mom's thanksgiving list: turkey, ham, mashed potatoes, gravy, dressing, stuffing, green bean cassarole,
// mac and cheese, cheese dip, rolls, pumpkin pie, french silk pie.
// jim is making whiskey balls.
//try to get there by noon.
