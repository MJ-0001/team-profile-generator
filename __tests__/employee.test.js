const e = require('../scripts/classes.js');

describe('Employee', () => {
  it('should create a new instance of Employee class', () => {
      const employeeTest = new e.Employee();
      expect(typeof(employeeTest)).toBe('object');
  });

  it('should construct the name property as key value pair', () => {
    const nameTest = 'Matt';
    const employeeTest = new e.Employee(nameTest);
    expect(employeeTest.name).toBe(nameTest);
  });

  it('should construct the id property as key value pair', () => {
    const idTest = 1234;
    const employeeTest = new e.Employee('test', idTest);
    expect(employeeTest.id).toBe(idTest);
  });

  it('should construct the email property as key value pair', () => {
    const emailTest = 'test@gmail.com';
    const employeeTest = new e.Employee('test', 'test', emailTest);
    expect(employeeTest.email).toBe(emailTest);
  });
});