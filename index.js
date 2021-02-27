const inquirer = require('inquirer');
const fs = require('fs');
const http = require('http');
const PORT = 8080;
const generatePage = require('./generatePage');

// Initialise aray for new team members
const myTeam = [];

// Initialise application
const myPrompts = () => {


};

// Manager questions
const managerQues = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: "Please enter the team manager's name: ",
      name: 'managerName'
    },
    {
      type: 'input',
      message: "Please enter the team manager's employee id: ",
      name: 'managerId'
    },
    {
      type: 'input',
      message: "Please enter the team manager's email address: ",
      name: 'managerEmail'
    },
    {
      type: 'input',
      message: "Please enter the team manager's office phone number: ",
      name: 'managerNum'
    }
  ])
  .then(({ managerName, managerId, managerEmail, managerNum }) => {
    const manager = new Manager(managerName, managerId, managerEmail, managerNum);
    myTeam.unshift(manager);
    myHTML(manager);
    newQues();
  });
};

// Add new position questions
const newQues = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What position would you like to add to your team?',
      name: 'newPosition',
      choices: ['Engineer', 'Intern', 'Exit Application']
    }
  ]).then(({ newPosition }) => {
    switch(newPosition) {
      case 'Engineer': engineerQues();
      break;
      case 'Intern': internQues();
      break;
    };
  });
};

// Add new engineer questions
const engineerQues = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Name of engineer: ',
      name: 'engName'
    },
    {
      type: 'input',
      message: "Engineer's ID number: ",
      name: 'engID'
    },
    {
      type: 'input',
      message: "Engineer's email address: ",
      name: 'engEmail'
    },
    {
      type: 'input',
      message: "Engineer's Github username: ",
      name: 'engGit'
    }
  ]).then(({ engName, engID, engEmail, engGit }) => {
    const engineer = new Engineer(engName, engID, engEmail, engGit)
    myTeam.unshift(engineer);
    myHTML();
    internQues();
  });
}

// Add new intern questions
const internQues = () => {
  inquirer.prompt([
    {
      type: 'input',
      messge: "Intern's name: ",
      name: 'internName'
    },
    {
      type: 'input',
      message: "Intern's ID: ",
      name: 'internID'
    },
    {
      type: 'input',
      message: "Intern's email address: ",
      name: 'internEmail'
    },
    {
      type: 'input',
      message: "Intern's school: ",
      name: 'internSchool'
    }
  ]).then(({ internName, internID, internEmail, internSchool }) => {
    const intern = new Intern(internName, internID, internEmail, internSchool);
    myTeam.unshift(intern);
    myHTML();
    newQues();
  });
}

const myHTML = () => {
  


}