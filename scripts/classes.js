class Employee {
  constructor(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
  }
}

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }
}

Manager.prototype.role = function() {
  return 'Manager';
}
Manager.prototype.role = function() {
  return 'Manager';
}
class Engineer extends Employee {
  constructor(name, id, email, git) {
    super(name, id, email);
    this.git = git;
  }
}

// Engineer.prototype.role = function() {
//   return 'Engineer';
// }

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
}

// Intern.prototype.role = function() {
//   return 'Intern';
// }

module.exports = Manager, Engineer, Intern;