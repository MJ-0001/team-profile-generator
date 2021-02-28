// Initialising variables for packages and imported modules
const inquirer = require('inquirer');
const Engineer = require('./scripts/classes.js');
const Intern = require('./scripts/classes.js');
const Manager = require('./scripts/classes.js');
const htmlBase = require('./scripts/createHTML.js');
const htmlProfiles = require('./scripts/createHTML.js');
const htmlEnd = require('./scripts/createHTML.js');

// Manager questions
const managerQues = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: "Please enter the team manager's name: ",
      name: 'name'
    },
    {
      type: 'input',
      message: "Please enter the team manager's employee id: ",
      name: 'id'
    },
    {
      type: 'input',
      message: "Please enter the team manager's email address: ",
      name: 'email'
    },
    {
      type: 'input',
      message: "Please enter the team manager's office phone number: ",
      name: 'phone'
    }
  ])
  .then(({ name, id, email, phone }) => {
    const manager = new Manager(name, id, email, phone);
    htmlBase();
    newQues();
  });
};

// Add new position questions
const newQues = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What position would you like to add to your team? ',
      name: 'newRole',
      choices: ['Engineer', 'Intern', 'Exit Application']
    }
  ]).then(({ newRole }) => {
    if (newRole === 'Engineer') {
      engineerQues();
    }
    else if (newRole === 'Intern') {
      internQues();
    }
    else if (newRole === 'Exit Application') {
      htmlEnd();
    }
  });
};

// Add new engineer questions
const engineerQues = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Name of engineer: ',
      name: 'name'
    },
    {
      type: 'input',
      message: "Engineer's ID number: ",
      name: 'id'
    },
    {
      type: 'input',
      message: "Engineer's email address: ",
      name: 'email'
    },
    {
      type: 'input',
      message: "Engineer's Github username: ",
      name: 'git'
    }
  ]).then(({ name, id, email, git }) => {
    const engineer = new Engineer(name, id, email, git)
    htmlProfiles('engineer', engineer);
    newQues();
  });
}

// Add new intern questions
const internQues = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: "Intern's name: ",
      name: 'name'
    },
    {
      type: 'input',
      message: "Intern's ID: ",
      name: 'id'
    },
    {
      type: 'input',
      message: "Intern's email address: ",
      name: 'email'
    },
    {
      type: 'input',
      message: "Intern's school: ",
      name: 'school'
    }
  ]).then(({ name, id, email, school }) => {
    const intern = new Intern(name, id, email, school);
    htmlProfiles('intern', intern);
    newQues();
  });
}

// Initialise application
const runApp = () => {
  managerQues();
};
runApp();