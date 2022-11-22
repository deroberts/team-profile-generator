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
            message: 'What is your position?',
            name: 'position',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        ])
    };

async function questionPrompts() {
    await questions()
}

questionPrompts();

// mom's thanksgiving list: turkey, ham, mashed potatoes, gravy, dressing, stuffing, green bean cassarole,
// mac and cheese, cheese dip, rolls, pumpkin pie, french silk pie.
// jim is making whiskey balls.