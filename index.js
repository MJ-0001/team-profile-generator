// Initialising variables for packages and imported modules
const inquirer = require('inquirer');
const employee = require('./scripts/classes.js');
const m = require('./scripts/modules.js');

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
    const manager = new employee.Manager(name, id, email, phone);
    m.htmlProfiles('Manager', manager);
    newQues();   
  });
};

// Add new position questions
const newQues = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What position would you like to add to your team? ',
      choices: ['Engineer', 'Intern', 'Exit Application'],
      name: 'newRole'
    }
  ]).then(({ newRole }) => {
    if (newRole === 'Engineer') {
      engineerQues();
    }
    else if (newRole === 'Intern') {
      internQues();
    }
    else if (newRole === 'Exit Application') {
      m.htmlEnd();
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
    const engineer = new employee.Engineer(name, id, email, git)
    m.htmlProfiles('Engineer', engineer);
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
    const intern = new employee.Intern(name, id, email, school);
    m.htmlProfiles('Intern', intern);
    newQues();
  });
}

// Initialise application
const runApp = () => {
  m.htmlBase();
  managerQues();
};
runApp();